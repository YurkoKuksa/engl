import styled, { createGlobalStyle } from "styled-components";

/**
 * ─────────────────────────────────────────────────────────
 *  DESIGN TOKENS
 *  Palette built around "language teacher": a deep ink-navy
 *  (like a notebook cover) + a warm amber accent (a teacher's
 *  marker pen).
 * ─────────────────────────────────────────────────────────
 */
export const tokens = {
  ink: "#13293D", // primary dark color (sidebar, headings)
  inkSoft: "#1E3A52", // secondary dark shade
  accent: "#D98E3F", // amber accent (buttons, underlines)
  accentSoft: "#F3D9B1",
  paper: "#FFFFFF",
  paperAlt: "#F5F7F8",
  text: "#202B36",
  muted: "#5B6B7A",
  border: "#E2E6EA",
  // border: "#4a5b60",
  onDark: "#EAF0F4",
  onDarkMuted: "#9FB3C4",

  panel: "linear-gradient(135deg, #4a5b60 0%, #5a6b70 50%, #4a5b60 100%)",
  btnHover: "#4a5b60 ",
};

// id used to isolate the printable area from everything else on the
// page (top bar, footer, any sibling sections) — see GlobalStyle below.
export const PRINT_ROOT_ID = "resume-print-root";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

  :root {
    --ink: ${tokens.ink};
    --accent: ${tokens.accent};
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${tokens.paperAlt};
    font-family: "Inter", system-ui, sans-serif;
    color: ${tokens.text};
    -webkit-font-smoothing: antialiased;
  }

  /* ───────────── PRINT / SAVE AS PDF ─────────────
     Background colors must survive printing (Chrome/Safari strip
     them by default) — handled with *-color-adjust: exact.

     Isolating the resume from the rest of the page (top bar, footer,
     any other section) is handled in JS, not here — see the
     beforeprint/afterprint listener in Resume.jsx. CSS-only isolation
     (visibility: hidden on everything else) still reserves layout
     space for the hidden elements, which produces extra blank pages;
     actually removing siblings from the flow (display: none) avoids
     that entirely.
  */
  @media print {
    /* stylelint-disable property-no-unknown -- "color-adjust" is the
       old (pre-rename) name for "print-color-adjust", kept only as a
       fallback for older Firefox builds. Editors that don't know this
       legacy name flag it, but it's valid CSS and safe to ship. */
    html, body {
      background: ${tokens.paper} !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }

    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    /* stylelint-enable property-no-unknown */

    .no-print {
      display: none !important;
    }

    @page {
      size: A4;
      margin: 10mm 12mm;
    }

    a, a:visited {
      color: inherit !important;
      text-decoration: underline !important; /* Вкрай важливо для парсера PDF */
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    /* 2. Запобігаємо згортанню контейнерів, у яких лежать посилання */
    li a {
      display: inline !important;
      position: relative !important;
      z-index: 10 !important;
    }
  }
`;

/* ───────────────────── TOP BAR ───────────────────── */

export const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0; /* Прикріплюємо до лівого краю */
  right: 0; /* Прикріплюємо до правого краю, щоб растягнути на всю ширину */
  width: 100%; /* Гарантує повну ширину */
  z-index: 20; /* Піднімаємо z-index, щоб панель була поверх усіх елементів */

  /* z-index: 20; */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  background: ${tokens.panel};
  border-bottom: 1px solid #34454a;
  box-shadow: 0 2px 10px rgba(19, 41, 61, 0.05);

  @media (max-width: 640px) {
    /* grid-template-columns: auto 1fr;
    padding: 12px 16px; */

    grid-template-columns: auto 1fr auto;
    padding: 10px 60px 10px 12px; /* Додаємо 60px відступу справа (padding-right), щоб не налізати на бургер-меню */
    gap: 8px;

    > *:last-child {
      display: none;
    }
  }
`;

export const BackButton = styled.button`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border: 1px solid ${tokens.text};
  border-radius: 8px;
  background: ${tokens.panel};
  color: ${tokens.paper};
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    border-color: ${tokens.ink};
    background: ${tokens.btnHover};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.accent};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 640px) {
    span {
      display: none;
    }
    padding: 8px;
  }
`;

export const PrintButton = styled.button`
  justify-self: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  background: ${tokens.ink};
  color: ${tokens.onDark};
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.1s ease;

  &:hover {
    background: ${tokens.inkSoft};
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid ${tokens.accent};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${tokens.accent};
  }

  @media (max-width: 640px) {
    justify-self: center;
    padding: 8px 12px;
    font-size: 13px;

    /* Якщо хочете залишити ТІЛЬКИ іконку принтера на мобільних: */
    /* span { display: none; } */
    /* padding: 8px; */
  }
`;

/* ───────────────────── PAGE LAYOUT ───────────────────── */

export const PageWrapper = styled.main`
  max-width: 1040px;
  margin: 90px auto 64px;
  background: ${tokens.paper};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(19, 41, 61, 0.08);
  display: grid;
  grid-template-columns: 300px 1fr;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    margin: 55px 0 0;
    border-radius: 0;
    box-shadow: none;
  }

  /* Compact print sizing so the whole resume fits a single A4 page. */
  @media print {
    margin: 0;
    box-shadow: none;
    border-radius: 0;
    grid-template-columns: 240px 1fr;
    max-width: 100%;
    /* Force the two panels to stretch full page height so the
       sidebar background paints the whole left column edge to edge. */
    align-items: stretch;
  }
`;

/* ───────────────────── SIDEBAR ───────────────────── */

export const Sidebar = styled.aside`
  background: ${tokens.ink};
  color: ${tokens.onDark};
  padding: 40px 28px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media print {
    padding: 20px 18px;
    gap: 18px;
  }
`;

export const AvatarFrame = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${tokens.accent};
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media print {
    width: 150px;
    height: 150px;
    border-width: 2px;
  }
`;

export const SidebarSection = styled.section`
  h3 {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: ${tokens.accent};
    margin: 0 0 14px;
  }

  @media print {
    h3 {
      font-size: 10.5px;
      margin: 0 0 8px;
    }
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13.5px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${tokens.onDark};
  }

  a {
    color: ${tokens.onDark};
    text-decoration: none;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom-color: ${tokens.accent};
  }

  svg {
    flex: none;
    width: 15px;
    height: 15px;
    color: ${tokens.accent};
  }

  @media print {
    gap: 7px;
    font-size: 10.5px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const TagList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    font-size: 12.5px;
    padding: 6px 11px;
    border-radius: 999px;
    background: rgba(234, 240, 244, 0.08);
    border: 1px solid rgba(234, 240, 244, 0.16);
    color: ${tokens.onDark};
  }

  @media print {
    gap: 6px;

    li {
      font-size: 9.5px;
      padding: 4px 9px;
    }
  }
`;

export const LanguageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media print {
    gap: 9px;
  }
`;

export const LanguageRow = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 13px;

  .label {
    display: flex;
    justify-content: space-between;
    color: ${tokens.onDark};
  }

  .level {
    color: ${tokens.onDarkMuted};
    font-size: 11.5px;
  }

  .track {
    height: 5px;
    border-radius: 999px;
    background: rgba(234, 240, 244, 0.14);
    overflow: hidden;
  }

  .fill {
    height: 100%;
    border-radius: 999px;
    background: ${tokens.accent};
  }

  @media print {
    gap: 3px;
    font-size: 10.5px;

    .level {
      font-size: 9.5px;
    }

    .track {
      height: 4px;
    }
  }
`;

/* ───────────────────── MAIN CONTENT ───────────────────── */

export const MainContent = styled.section`
  padding: 44px 48px;

  @media (max-width: 640px) {
    padding: 32px 22px;
  }

  @media print {
    padding: 20px 26px;
  }
`;

export const NameBlock = styled.div`
  margin-bottom: 20px;

  h1 {
    font-family: "Fraunces", serif;
    font-weight: 600;
    font-size: clamp(30px, 4vw, 42px);
    color: ${tokens.ink};
    margin: 0 0 4px;
    line-height: 1.05;
  }

  p {
    font-family: "Fraunces", serif;
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    color: ${tokens.accent};
    margin: 0;
  }

  @media print {
    margin-bottom: 10px;

    h1 {
      font-size: 29px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Summary = styled.p`
  font-size: 14.5px;
  line-height: 1.7;
  color: ${tokens.muted};
  max-width: 60ch;
  margin: 0 0 36px;
  padding-bottom: 28px;
  border-bottom: 1px solid ${tokens.border};

  @media print {
    font-size: 11px;
    line-height: 1.55;
    margin: 0 0 16px;
    padding-bottom: 14px;
  }
`;

export const Section = styled.section`
  margin-bottom: 34px;

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    margin-bottom: 16px;
    break-inside: avoid;
  }
`;

export const SectionHeading = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${tokens.ink};
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${tokens.border};
  }

  @media print {
    font-size: 12px;
    margin: 0 0 12px;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-left: 2px solid ${tokens.border};
  padding-left: 22px;
  margin-left: 4px;

  @media print {
    gap: 14px;
    padding-left: 18px;
  }
`;

export const TimelineItem = styled.article`
  position: relative;
  break-inside: avoid;

  &::before {
    content: "";
    position: absolute;
    left: -28px;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${tokens.accent};
    border: 2px solid ${tokens.paper};
    box-shadow: 0 0 0 2px ${tokens.accent};
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 4px;
  }

  h3 {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${tokens.ink};
    margin: 0;
  }

  .period {
    font-size: 12.5px;
    font-weight: 600;
    color: ${tokens.accent};
  }

  .company {
    font-size: 13.5px;
    color: ${tokens.muted};
    margin: 0 0 8px;
    font-style: italic;
  }

  ul {
    margin: 0 0 10px;
    padding-left: 18px;
    font-size: 13.5px;
    color: ${tokens.text};
    line-height: 1.6;
  }

  .achievement {
    font-size: 13.5px;
    line-height: 1.6;
    color: ${tokens.muted};
    background: ${tokens.paperAlt};
    border-left: 2px solid ${tokens.accent};
    padding: 10px 14px;
    border-radius: 0 6px 6px 0;
  }

  @media print {
    &::before {
      left: -22px;
      width: 8px;
      height: 8px;
    }

    .meta {
      gap: 7px;
      margin-bottom: 2px;
    }

    h3 {
      font-size: 13px;
    }

    .period {
      font-size: 10.5px;
    }

    .company {
      font-size: 11px;
      margin: 0 0 5px;
    }

    ul {
      margin: 0 0 6px;
      padding-left: 15px;
      font-size: 11px;
      line-height: 1.45;
    }

    .achievement {
      font-size: 11px;
      line-height: 1.45;
      padding: 7px 11px;
    }
  }
`;

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  @media print {
    gap: 10px;
  }
`;

export const EducationCard = styled.div`
  padding: 16px 18px;
  border: 1px solid ${tokens.border};
  border-radius: 10px;
  background: ${tokens.paperAlt};
  break-inside: avoid;

  .period {
    font-size: 11.5px;
    font-weight: 700;
    color: ${tokens.accent};
    letter-spacing: 0.02em;
  }

  h4 {
    font-family: "Inter", sans-serif;
    font-size: 14.5px;
    font-weight: 700;
    color: ${tokens.ink};
    margin: 4px 0 2px;
  }

  p {
    font-size: 13px;
    color: ${tokens.muted};
    margin: 0;
  }

  @media print {
    padding: 10px 12px;
    border-radius: 8px;

    .period {
      font-size: 10px;
    }

    h4 {
      font-size: 12px;
      margin: 3px 0 1px;
    }

    p {
      font-size: 10.5px;
    }
  }
`;
