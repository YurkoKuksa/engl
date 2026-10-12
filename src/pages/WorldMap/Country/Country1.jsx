import { useParams, Link } from "react-router-dom";
import countriesData from "../../../data/WorldMap/CountriesData/CountryData.json";

const Country = () => {
  const { slug } = useParams();

  // 1. Нормалізуємо масив (якщо JSON загорнутий у .default або є об'єктом)
  const countriesArray = Array.isArray(countriesData)
    ? countriesData
    : countriesData?.default || [];

  // 2. Виконуємо пошук
  const country = countriesArray.find(
    (item) => item.slug?.trim().toLowerCase() === slug?.trim().toLowerCase(),
  );

  // Якщо країну не знайдено — показуємо діагностику прямо на екрані
  if (!country) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "#333" }}>
        <h2>Country Not Found</h2>
        <p>
          No data available for slug: <strong>"{slug}"</strong>
        </p>

        {/* Блок діагностики для швидкого вирішення */}
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            background: "rgba(255,255,255,0.8)",
            borderRadius: "8px",
            textAlign: "left",
            display: "inline-block",
            maxWidth: "600px",
          }}
        >
          <h4>Debug Info:</h4>
          <p>
            <strong>Is array loaded?</strong>{" "}
            {Array.isArray(countriesArray) ? "Yes" : "No"}
          </p>
          <p>
            <strong>Total countries in JSON:</strong> {countriesArray.length}
          </p>
          <p>
            <strong>Loaded Slugs:</strong>{" "}
            {countriesArray.map((c) => c.slug).join(", ") ||
              "NONE (JSON is empty or malformed)"}
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link to="/map">← Back to World Map</Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="country-page"
      style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}
    >
      <Link
        to="/map"
        style={{
          textDecoration: "none",
          marginBottom: "20px",
          display: "inline-block",
        }}
      >
        ← Back to Map
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + country.flag_image}
          alt={`${country.country_name} flag`}
          style={{
            width: "80px",
            height: "auto",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <div>
          <h1 style={{ margin: 0 }}>{country.country_name}</h1>
          <p style={{ margin: "5px 0 0", color: "#666" }}>
            Capital: <strong>{country.capital}</strong>
          </p>
        </div>
      </div>

      <section style={{ marginBottom: "20px" }}>
        <h3>English Status</h3>
        <p>{country.english_status}</p>
        <p>
          <strong>Native Speakers:</strong>{" "}
          {country.native_english_speaker_percentage}%
        </p>
        {country.fluent_speakers_percentage && (
          <p>
            <strong>Proficient / Fluent Speakers:</strong>{" "}
            {country.fluent_speakers_percentage}
          </p>
        )}
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3>Dialect Features</h3>
        <p>{country.dialect_description}</p>
      </section>

      {country.unique_vocabulary && country.unique_vocabulary.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h3>Unique Vocabulary</h3>
          <ul>
            {country.unique_vocabulary.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </section>
      )}

      {country.phonetic_features && country.phonetic_features.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h3>Phonetic Features</h3>
          {country.phonetic_features.map((feature, index) => (
            <div key={index} style={{ marginBottom: "12px" }}>
              <strong style={{ fontSize: "1.1em" }}>
                {feature.feature || feature.name}
              </strong>
              <p style={{ margin: "2px 0" }}>{feature.description}</p>
              <em style={{ color: "#555" }}>Examples: {feature.examples}</em>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Country;
