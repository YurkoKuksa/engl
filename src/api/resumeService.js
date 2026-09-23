// src/api/resumeService.js

// Вставте сюди ID вашої опублікованої Google Таблиці
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";
const BASE_URL = `https://opensheet.elk.sh/${SHEET_ID}`;

export const fetchWorkExperience = async () => {
  try {
    const response = await fetch(`${BASE_URL}/WorkExperience`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rows = await response.json();
    if (!Array.isArray(rows) || rows.length === 0) return null;

    // Згруповуємо деталі роботи за id
    const groupedWork = Object.values(
      rows.reduce((acc, row) => {
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

    return groupedWork;
  } catch (error) {
    console.warn("Failed to fetch Google Sheets data, using fallback:", error);
    return null;
  }
};
