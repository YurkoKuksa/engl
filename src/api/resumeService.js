const SHEET_ID = "1JhCG-9ttVE5WURoLuH4ksrM1QD_VkQOH8gB2I1an4oU";
const BASE_URL = `https://opensheet.elk.sh/${SHEET_ID}`;

export const fetchAllResumeData = async () => {
  try {
    const [personalRows, workRows, eduRows, skillRows, langRows, resourceRows] =
      await Promise.all([
        fetch(`${BASE_URL}/PersonalInfo`).then((r) => r.json()),
        fetch(`${BASE_URL}/WorkExperience`).then((r) => r.json()),
        fetch(`${BASE_URL}/Education`).then((r) => r.json()),
        fetch(`${BASE_URL}/Skills`).then((r) => r.json()),
        fetch(`${BASE_URL}/Languages`).then((r) => r.json()),
        fetch(`${BASE_URL}/Resources`).then((r) => r.json()),
      ]);

    // 1. Формуємо personalInfo
    const personalInfo = personalRows.reduce((acc, row) => {
      if (["phone", "email", "whatsapp", "linkedin"].includes(row.key)) {
        acc.contacts = acc.contacts || {};
        acc.contacts[row.key] = row.value;
      } else {
        acc[row.key] = row.value;
      }
      return acc;
    }, {});

    // 2. Згруповуємо Work Experience
    const workExperience = Object.values(
      workRows.reduce((acc, row) => {
        if (!acc[row.id]) {
          acc[row.id] = {
            id: Number(row.id),
            role: row.role,
            period: row.period,
            company: row.company,
            details: [],
            achievements: row.achievement ? [row.achievement] : [],
          };
        }
        if (row.detail_text) {
          acc[row.id].details.push({
            text: row.detail_text,
            school: row.detail_school,
          });
        }
        return acc;
      }, {}),
    );

    // 3. Згруповуємо Скіли за категоріями
    const areasOfExpertise = skillRows
      .filter((s) => s.category === "expertise")
      .map((s) => s.name);
    const hardSkills = skillRows
      .filter((s) => s.category === "hard")
      .map((s) => s.name);
    const softSkills = skillRows
      .filter((s) => s.category === "soft")
      .map((s) => s.name);

    return {
      personalInfo,
      workExperience,
      education: eduRows.map((e) => ({ ...e, id: Number(e.id) })),
      areasOfExpertise,
      hardSkills,
      softSkills,
      languages: langRows,
      resources: resourceRows,
    };
  } catch (error) {
    console.warn(
      "Failed to fetch from Google Sheets, using local fallback:",
      error,
    );
    return null;
  }
};
