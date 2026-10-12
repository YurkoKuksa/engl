const fs = require("fs");
const path = require("path");

// ==========================================
// НАЛАШТУВАННЯ: Вкажіть назву поля тут один раз
// ==========================================
const FIELD_NAME = "fluent_speakers_percentage";

// Шлях до файлу даних
const filePath = path.join(__dirname, "CountryData.json");

// Дані для оновлення (ключ — slug країни, значення — новий контент)
const updatesData = {
  "united-states":
    "approx. 90-95% (dominant national language across all states)",
  canada:
    "approx. 85% (including native speakers and bilingual French-English speakers)",
  "united-kingdom": "approx. 98% (primary native and proficient language)",
  mauritius:
    "approx. 70-80% (widely used in business, administration, higher education, and media alongside Mauritian Creole and French)",
  pakistan:
    "approx. 15-20% (used in higher education, law, high-level governance, and business)",
  botswana:
    "approx. 40-50% (used in business, government, and higher education alongside Setswana)",
  // Додавайте інші країни за потреби...
};

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Помилка читання файлу:", err);
    return;
  }

  try {
    let countries = JSON.parse(data);

    countries = countries.map((country) => {
      const slug = country.slug;
      if (updatesData[slug]) {
        country[FIELD_NAME] = updatesData[slug];
      } else if (!country[FIELD_NAME]) {
        // Якщо значення для країни немає в списку, ставимо дефолтне (або залишаємо старе)
        country[FIELD_NAME] = "Data under review / standard estimate";
      }
      return country;
    });

    fs.writeFile(
      filePath,
      JSON.stringify(countries, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Помилка запису файлу:", err);
          return;
        }
        console.log(
          `Успіх! Поле "${FIELD_NAME}" успішно додано/оновлено для всіх об'єктів у CountryData.json.`,
        );
      },
    );
  } catch (parseErr) {
    console.error("Помилка парсингу JSON:", parseErr);
  }
});
