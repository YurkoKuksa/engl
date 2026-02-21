import AOS from "aos";
import "aos/dist/aos.css";

import Avatar from "../../../assets/img/engl-tch-3 - Copy.png";
import AvatarMobil from "../../../assets/img/forMobil.png";
import EnglTeach from "../../../assets/img/englTeach.png";
import EnglTeachDarkMode from "../../../assets/img/englTeachDarkMode.png";

import resume_pdf from "../../../assets/pdf/ESL-teacher-2026.pdf";
import download from "../../../assets/svg/download.svg";
// import HeroAnimation from "../../../components/HeroAnimation/TeacherHeroAnimation";

import {
  AvatarDeskTop,
  AvatarMobile,
  DownloadContainer,
  DownloadFile,
  DownLoading,
  Title,
  EnglTeachImg,
  MainBox,
  ContactIcons,
  AbsoluteBox,
  DownlResume,
  Stad,
  ScrollSpot,
  LinkSittard,
  Cursor,
  Typing,
} from "./Home.Styled";
import { useTypewriterEffect } from "../../../hooks/useTypewriterEffect";

import LinksSet from "../../../data/IconLinks/IconLinks";

AOS.init();
const Hero = ({ theme }) => {
  const displayText = useTypewriterEffect();
  return (
    <MainBox style={{ position: "relative" }}>
      <ScrollSpot id="scroll-section"> </ScrollSpot>
      {/* <HeroAnimation /> */}

      <Title $theme={theme}>Yuri Kuksa</Title>
      <AvatarDeskTop
        data-aos="zoom-out"
        data-aos-duration="1500"
        src={Avatar}
        alt="avatar"
      />

      <AbsoluteBox>
        <AvatarMobile
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          src={AvatarMobil}
          alt="avatar for mobile"
        />

        <EnglTeachImg
          data-aos="zoom-out-down"
          data-aos-duration="3000"
          src={theme === "dark" ? EnglTeachDarkMode : EnglTeach}
          alt="English teacher logo"
        />
      </AbsoluteBox>
      <Typing>
        {displayText}
        <Cursor>|</Cursor>
      </Typing>

      <DownloadContainer>
        <DownlResume>Download Resume</DownlResume>
        <DownLoading
          href={resume_pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadFile src={download} alt="завантажити" $theme={theme} />
        </DownLoading>
      </DownloadContainer>

      <ContactIcons>
        {LinksSet.map(({ href, alt, img, Component, ImgComponent }) => (
          <li key={alt}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {Component ? (
                <Component>
                  <ImgComponent src={img} alt={alt} />
                </Component>
              ) : (
                <ImgComponent src={img} alt={alt} />
              )}
            </a>
          </li>
        ))}
      </ContactIcons>

      <Stad>
        <LinkSittard
          href="https://maps.app.goo.gl/h4mE4AAsnyuUmMsn7"
          target="_blank"
          rel="noopener noreferrer"
          $theme={theme}
        >
          📍 Sittard &nbsp; &nbsp; | &nbsp; &nbsp; Netherlands
        </LinkSittard>
      </Stad>
    </MainBox>
  );
};

export default Hero;
