import { useState, useRef, useCallback, memo } from "react";
import countries from "../../data/WorldMap/countries.json"; // [{ n: name, d: svgPath, t: 0|1|2, s: hoverScale }]
import "./EnglishWorldMap.css";

import { BackBtn } from "../../components/BackBtn/BackBtn.jsx";

// t: 2 = English is the primary language, 1 = official / widely used, 0 = other
const TIER = {
  2: { cls: "p", label: "Primary language" },
  1: { cls: "o", label: "Official / widely used" },
};

const Countries = memo(function Countries({ onEnter, onLeave }) {
  return (
    <g>
      {countries.map((c, i) =>
        c.t === 0 ? (
          <path key={i} className="ewm-c" d={c.d} />
        ) : (
          <path
            key={i}
            className={`ewm-c t${c.t}`}
            d={c.d}
            tabIndex={0}
            aria-label={c.n}
            onPointerEnter={(e) => onEnter(c, e.clientX, e.clientY)}
            onPointerLeave={onLeave}
            onFocus={(e) => {
              const r = e.target.getBoundingClientRect();
              onEnter(c, r.left + r.width / 2, r.top + r.height / 2);
            }}
            onBlur={() => onLeave()}
          />
        ),
      )}
    </g>
  );
});

export default function EnglishWorldMap({ onBack }) {
  const [hover, setHover] = useState(null);
  const tip = useRef(null);

  const move = useCallback((x, y) => {
    const el = tip.current;
    if (!el) return;
    const w = el.offsetWidth;
    const hh = el.offsetHeight;
    const nx = x + 18 + w > window.innerWidth - 8 ? x - w - 18 : x + 18;
    const ny = y + 18 + hh > window.innerHeight - 8 ? y - hh - 14 : y + 18;
    el.style.transform = `translate(${Math.max(8, nx)}px, ${Math.max(8, ny)}px)`;
  }, []);

  const onEnter = useCallback(
    (c, x, y) => {
      setHover(c);
      // tooltip is positioned right after it becomes visible (works for mouse, touch and keyboard)
      requestAnimationFrame(() => move(x, y));
    },
    [move],
  );

  // On touch screens the country stays highlighted until the next tap elsewhere
  const onLeave = useCallback((e) => {
    if (e && e.pointerType === "touch") return;
    setHover(null);
  }, []);

  const onBoxPointerDown = (e) => {
    if (!e.target.classList.contains("t1") && !e.target.classList.contains("t2")) {
      setHover(null);
    }
  };

  const tier = hover && TIER[hover.t];

  return (
    <div className="ewm">
      <div className="ewm-back">
        <BackBtn onClick={onBack} />
      </div>

      <header className="ewm-head">
        <h2 className="ewm-title">English Speaking World</h2>
        <div className="ewm-legend">
          <div>
            <span className="ewm-sw p" />
            <span>
              <b>Primary language</b> — native to most of the population
            </span>
          </div>
          <div>
            <span className="ewm-sw o" />
            <span>
              <b>Official</b> — state or widely used in daily life and education
            </span>
          </div>
        </div>
      </header>

      <div
        className="ewm-box"
        onPointerMove={(e) => move(e.clientX, e.clientY)}
        onPointerDown={onBoxPointerDown}
      >
        <svg
          viewBox="0 0 1000 500"
          role="img"
          aria-label="World map highlighting countries where English is an official or primary language"
        >
          <Countries onEnter={onEnter} onLeave={onLeave} />
          {hover && (
            <g className="ewm-lift" key={hover.n} style={{ "--s": hover.s }}>
              <path className={`t${hover.t}`} d={hover.d} />
            </g>
          )}
        </svg>
      </div>

      <div
        ref={tip}
        className={`ewm-tip${hover ? " on" : ""}`}
        aria-hidden="true"
      >
        <strong>{hover ? hover.n : ""}</strong>
        {tier && (
          <span>
            <i className={tier.cls} />
            {tier.label}
          </span>
        )}
      </div>

      <p className="ewm-note">
        Hover over (or tap) a highlighted country to see its name. The data is
        simplified: in many countries English shares official status with other
        languages.
      </p>
    </div>
  );
}
