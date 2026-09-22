import { useEffect } from "react";
import { resumeData } from "../../data/Resume/resumeData";
import avatar from "../../assets/img/forMobil.png";
import {
  GlobalStyle,
  PRINT_ROOT_ID,
  TopBar,
  BackButton,
  PrintButton,
  PageWrapper,
  Sidebar,
  AvatarFrame,
  SidebarSection,
  ContactList,
  TagList,
  LanguageList,
  LanguageRow,
  MainContent,
  NameBlock,
  Summary,
  Section,
  SectionHeading,
  Timeline,
  TimelineItem,
  EducationGrid,
  EducationCard,
} from "./Resume.Styled";

// Рівень мови -> ширина смужки прогресу (для наочності в сайдбарі)
const LEVEL_TO_PERCENT = {
  Native: 100,
  "Upper-Intermediate": 80,
  Intermediate: 60,
  "Pre-Intermediate": 40,
  Elementary: 20,
};

const Resume = ({ onBack }) => {
  const {
    personalInfo,
    areasOfExpertise,
    hardSkills,
    softSkills,
    languages,
    workExperience,
    education,
  } = resumeData;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (window.history.length > 1) {
      window.history.back();
    }
  };

  const handleSaveAsPdf = () => {
    window.print();
  };

  // Print isolation: CSS alone can't guarantee a single, correctly
  // sized page — or a plain white background — when the resume sits
  // inside a larger app (a top bar, a footer, other page sections, a
  // wrapper div with its own background/gradient). Right before
  // printing we walk from the resume up to <body> and, at every
  // level: (1) set display:none on every sibling, so the document's
  // printed height becomes exactly the resume's height, and (2) force
  // that ancestor's own background to white, so a gradient or tint
  // set on a wrapper (e.g. #root, .app-shell) can't bleed through.
  // Everything is restored once printing is done.
  useEffect(() => {
    let hiddenElements = [];
    let paintedBackgrounds = [];

    // Extracted so the callback closes over `element` (a fixed
    // parameter) instead of the outer `node` variable, which changes
    // on every iteration of the while loop below — avoids the
    // "function declared in a loop" lint warning entirely.
    const hideSiblingsOf = (element) => {
      const parent = element.parentElement;
      if (!parent) return;

      Array.from(parent.children).forEach((sibling) => {
        if (sibling !== element) {
          hiddenElements.push([sibling, sibling.style.display]);
          sibling.style.display = "none";
        }
      });
    };

    // "background" shorthand (not just background-color) so any
    // gradient/image is cleared too. setProperty(..., "important")
    // beats a stylesheet rule even if that rule itself uses
    // !important, which a plain inline style assignment can't do.
    const whitenBackground = (element) => {
      paintedBackgrounds.push([element, element.style.cssText]);
      element.style.setProperty("background", "#ffffff", "important");
    };

    const isolateForPrint = () => {
      const root = document.getElementById(PRINT_ROOT_ID);
      if (!root) return;

      hiddenElements = [];
      paintedBackgrounds = [];
      whitenBackground(document.documentElement);
      whitenBackground(document.body);

      let node = root;
      while (node && node !== document.body) {
        hideSiblingsOf(node);
        node = node.parentElement;
        if (node && node !== document.body) {
          whitenBackground(node);
        }
      }
    };

    const restoreAfterPrint = () => {
      hiddenElements.forEach(([el, display]) => {
        el.style.display = display;
      });
      hiddenElements = [];

      paintedBackgrounds.forEach(([el, cssText]) => {
        el.style.cssText = cssText;
      });
      paintedBackgrounds = [];
    };

    window.addEventListener("beforeprint", isolateForPrint);
    window.addEventListener("afterprint", restoreAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", isolateForPrint);
      window.removeEventListener("afterprint", restoreAfterPrint);
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("print") === "true") {
      // Невелика затримка, щоб DOM і стилі встигли завантажитися
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <GlobalStyle />

      <TopBar className="no-print">
        <BackButton type="button" onClick={handleBack}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Main
        </BackButton>

        <PrintButton type="button" onClick={handleSaveAsPdf}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Save as PDF
        </PrintButton>

        <span aria-hidden="true" />
      </TopBar>

      <PageWrapper id={PRINT_ROOT_ID}>
        <Sidebar>
          <AvatarFrame>
            <img src={avatar} alt={personalInfo.name} />
          </AvatarFrame>

          <SidebarSection>
            <h3>Contact</h3>
            <ContactList>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {personalInfo.contacts.phone}
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16v16H4V4z" opacity="0" />
                  <path
                    d="M22 6l-10 7L2 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <a href={`mailto:${personalInfo.contacts.email}`}>
                  {personalInfo.contacts.email}
                </a>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <a
                  href={personalInfo.contacts.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <a
                  href={personalInfo.contacts.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {personalInfo.location}
              </li>
            </ContactList>
          </SidebarSection>

          <SidebarSection>
            <h3>Skills</h3>
            <TagList>
              {hardSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </TagList>
          </SidebarSection>

          <SidebarSection>
            <h3>Soft skills</h3>
            <TagList>
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </TagList>
          </SidebarSection>

          <SidebarSection>
            <h3>Languages</h3>
            <LanguageList>
              {languages.map((lang) => (
                <LanguageRow key={lang.name}>
                  <div className="label">
                    <span>{lang.name}</span>
                    <span className="level">{lang.level}</span>
                  </div>
                  <div className="track">
                    <div
                      className="fill"
                      style={{
                        width: `${LEVEL_TO_PERCENT[lang.level] ?? 50}%`,
                      }}
                    />
                  </div>
                </LanguageRow>
              ))}
            </LanguageList>
          </SidebarSection>
        </Sidebar>

        <MainContent>
          <NameBlock>
            <h1>{personalInfo.name}</h1>
            <p>{personalInfo.title}</p>
          </NameBlock>

          <Summary>{personalInfo.summary}</Summary>

          <Section>
            <SectionHeading>Areas of Expertise</SectionHeading>
            <TagList as="ul" style={{ marginBottom: 0 }}>
              {areasOfExpertise.map((area) => (
                <li
                  key={area}
                  style={{
                    background: "#F5F7F8",
                    color: "#13293D",
                    border: "1px solid #E2E6EA",
                  }}
                >
                  {area}
                </li>
              ))}
            </TagList>
          </Section>

          <Section>
            <SectionHeading>Work Experience</SectionHeading>
            <Timeline>
              {workExperience.map((job) => (
                <TimelineItem key={job.id}>
                  <div className="meta">
                    <h3>{job.role}</h3>
                    <span className="period">{job.period}</span>
                  </div>
                  <p className="company">{job.company}</p>
                  <ul>
                    {job.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  {job.achievements.map((achievement) => (
                    <p className="achievement" key={achievement}>
                      {achievement}
                    </p>
                  ))}
                </TimelineItem>
              ))}
            </Timeline>
          </Section>

          <Section>
            <SectionHeading>Education</SectionHeading>
            <EducationGrid>
              {education.map((item) => (
                <EducationCard key={item.id}>
                  <span className="period">{item.period}</span>
                  <h4>{item.institution}</h4>
                  <p>{item.degree}</p>
                </EducationCard>
              ))}
            </EducationGrid>
          </Section>
        </MainContent>
      </PageWrapper>
    </>
  );
};

export default Resume;
