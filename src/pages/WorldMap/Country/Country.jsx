import { useEffect } from "react";
import { useParams } from "react-router-dom";
import countriesData from "../../../data/WorldMap/CountriesData/CountryData.json";
import { BackBtn } from "../../../components/BackBtn/BackBtn.jsx";
import "./Country.css";

/* ───────────── helpers ───────────── */

const list = Array.isArray(countriesData)
  ? countriesData
  : (countriesData?.countries ?? []);

// Прапори лежать у public/, тож шлях треба збирати від PUBLIC_URL
// (важливо для GitHub Pages, де сайт живе не в корені домену).
const publicUrl = (path = "") =>
  `${process.env.PUBLIC_URL ?? ""}${path.startsWith("/") ? "" : "/"}${path}`;

const cap = (s = "") => s.charAt(0).toUpperCase() + s.slice(1);
const humanize = (s = "") => cap(String(s).replace(/_/g, " ").trim());

// "Official language (constitutionally prescribed …)" → { title, detail }
function splitParen(text) {
  const str = String(text ?? "").trim();
  const m = str.match(/^([^(]+?)\s*\((.*)\)\s*$/s);
  return m ? { title: m[1].trim(), detail: m[2].trim() } : { title: str, detail: "" };
}

// "approx. 70-80% (widely used …)" → { lo, hi, approx, detail }
function parseFluent(value) {
  if (typeof value === "number") return { lo: value, hi: value, approx: false, detail: "" };
  const str = String(value ?? "");
  const m = str.match(/(\d+(?:\.\d+)?)(?:\s*[-–—]\s*(\d+(?:\.\d+)?))?\s*%/);
  if (!m) return { raw: str };
  const lo = parseFloat(m[1]);
  const hi = m[2] ? parseFloat(m[2]) : lo;
  const paren = str.match(/\((.*)\)/s);
  return {
    lo,
    hi,
    approx: /approx|about|~|around/i.test(str.slice(0, m.index + 1)),
    detail: paren ? paren[1].trim() : "",
  };
}

const fmt = (n) => Number(n).toLocaleString("en-US", { maximumFractionDigits: 2 });

// "creole (primary lingua franca …)" → { term, meaning }
function parseVocab(item) {
  const m = String(item).match(/^([^(]+?)\s*\((.*)\)\s*$/s);
  return m ? { term: m[1].trim(), meaning: cap(m[2].trim()) } : { term: String(item).trim(), meaning: "" };
}

// "car [kɑː], winter [wɪntə]" → ["car [kɑː]", "winter [wɪntə]"]
const splitExamples = (text = "") =>
  String(text).split(/,\s*(?![^[]*\])/).map((s) => s.trim()).filter(Boolean);

function Example({ text }) {
  const m = text.match(/^(.*?)\s*(\[[^\]]+\])\s*(.*)$/);
  if (!m) return <li className="cty-pill">{text}</li>;
  return (
    <li className="cty-pill">
      {m[1] && <span>{m[1]}</span>}
      <span className="cty-ipa">{m[2]}</span>
      {m[3] && <span>{m[3]}</span>}
    </li>
  );
}

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

/* ───────────── page ───────────── */

export default function Country() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const country = list.find(
    (c) => String(c.slug).toLowerCase() === String(slug ?? "").toLowerCase(),
  );

  /* заглушка: даних по країні немає */
  if (!country) {
    return (
      <main className="cty">
        <section className="cty-panel cty-empty">
          <div className="cty-empty-icon" aria-hidden="true">🧭</div>
          <h1 className="cty-empty-title">No data for this country yet</h1>
          <p className="cty-empty-text">
            We couldn’t find any language information for
            {slug ? <> “<b>{slug}</b>”</> : " this country"}. It may not have been added yet.
          </p>
          <BackBtn />
        </section>
      </main>
    );
  }

  const status = splitParen(country.english_status);
  const fluent = parseFluent(country.fluent_speakers_percentage);
  const native = Number(country.native_english_speaker_percentage);
  const nativeOk = Number.isFinite(native);
  const vocab = (country.unique_vocabulary ?? []).map(parseVocab);
  const phonetics = country.phonetic_features ?? [];

  return (
    <main className="cty">
      <article className="cty-panel">
        <div className="cty-back">
          <BackBtn />
        </div>

        {/* ── Hero ── */}
        <header className="cty-hero">
          <div className="cty-flag">
            {country.flag_image && (
              <img
                src={publicUrl(country.flag_image)}
                alt={`Flag of ${country.country_name}`}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            )}
          </div>

          <div className="cty-hero-text">
            <span className="cty-eyebrow">Country profile</span>
            <h1 className="cty-title">{country.country_name}</h1>
            {country.capital && (
              <p className="cty-capital">
                <PinIcon />
                <span>Capital</span>
                <b>{country.capital}</b>
              </p>
            )}
            {status.title && (
              <div className="cty-status">
                <span className="cty-status-badge">{status.title}</span>
                {status.detail && <p>{cap(status.detail)}</p>}
              </div>
            )}
          </div>
        </header>

        {/* ── Stats ── */}
        <section className="cty-stats" aria-label="English speakers">
          <div className="cty-stat">
            <span className="cty-label">Native English speakers</span>
            {nativeOk ? (
              <>
                <strong className="cty-num">{fmt(native)}<small>%</small></strong>
                <div className="cty-bar" role="img" aria-label={`${fmt(native)} percent`}>
                  <i className="cty-bar-hi" style={{ "--w": `${Math.max(Math.min(native, 100), 1.2)}%` }} />
                </div>
              </>
            ) : (
              <strong className="cty-num cty-num--text">{String(country.native_english_speaker_percentage ?? "—")}</strong>
            )}
          </div>

          <div className="cty-stat">
            <span className="cty-label">Fluent English speakers</span>
            {fluent.raw === undefined ? (
              <>
                <strong className="cty-num">
                  {fluent.approx && <em>approx.</em>}
                  {fmt(fluent.lo)}{fluent.hi !== fluent.lo && <>–{fmt(fluent.hi)}</>}
                  <small>%</small>
                </strong>
                <div className="cty-bar" role="img" aria-label={`${fmt(fluent.lo)} to ${fmt(fluent.hi)} percent`}>
                  <i className="cty-bar-range" style={{ "--w": `${Math.min(fluent.hi, 100)}%` }} />
                  <i className="cty-bar-solid" style={{ "--w": `${Math.min(fluent.lo, 100)}%` }} />
                </div>
                {fluent.detail && <p className="cty-stat-note">{cap(fluent.detail)}</p>}
              </>
            ) : (
              <p className="cty-stat-note cty-stat-note--lg">{fluent.raw}</p>
            )}
          </div>
        </section>

        {/* ── Dialect ── */}
        {country.dialect_description && (
          <section className="cty-section">
            <h2 className="cty-h2">Dialect</h2>
            <p className="cty-quote">{country.dialect_description}</p>
          </section>
        )}

        {/* ── Vocabulary ── */}
        {vocab.length > 0 && (
          <section className="cty-section">
            <h2 className="cty-h2">Unique vocabulary</h2>
            <ul className="cty-vocab">
              {vocab.map((v) => (
                <li key={v.term} className="cty-word">
                  <b>{v.term}</b>
                  {v.meaning && <span>{v.meaning}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Phonetics ── */}
        {phonetics.length > 0 && (
          <section className="cty-section">
            <h2 className="cty-h2">Phonetic features</h2>
            <ol className="cty-phon">
              {phonetics.map((p, i) => (
                <li key={p.feature ?? i} className="cty-feat">
                  <span className="cty-feat-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{humanize(p.feature)}</h3>
                    {p.description && <p>{p.description}</p>}
                    {p.examples && (
                      <ul className="cty-pills" aria-label="Examples">
                        {splitExamples(p.examples).map((ex) => (
                          <Example key={ex} text={ex} />
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}
      </article>
    </main>
  );
}
