import AOS from "aos";
import "aos/dist/aos.css";

import Avatar from "../../../assets/img/engl-tch-3 - Copy.png";
import AvatarMobil from "../../../assets/img/forMobil.png";
import EnglTeach from "../../../assets/img/englTeach.png";
import EnglTeachDarkMode from "../../../assets/img/englTeachDarkMode.png";

import kahoot from "../../../assets/svg/kahoot.svg";
import youtube from "../../../assets/svg/youtube1.svg";
import telegram from "../../../assets/svg/telegram.svg";
import linkedIn from "../../../assets/svg/linkedin.svg";
import whatsapp from "../../../assets/svg/whatsapp.svg";
import mail from "../../../assets/svg/gmail.svg";
import phone1 from "../../../assets/svg/phone1.svg";
import resume_pdf from "../../../assets/pdf/ESL-teacher-2025.pdf";
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
  KahootSvg,
  KahootBox,
  SvgItm,
  LongSvg,
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

AOS.init();
const Hero = ({ theme }) => {
  const IconLinksSet = [
    {
      href: "https://create.kahoot.it/profiles/3b1e808e-d78f-4971-9343-18e15b21ac9b",
      alt: "kahoot",
      img: kahoot,
      Component: KahootBox,
      ImgComponent: KahootSvg,
    },
    {
      href: "https://www.youtube.com/channel/UC84CYmL9e0_F5zyDFxJhTqw",
      alt: "youtube",
      img: youtube,
      ImgComponent: LongSvg,
    },
    {
      href: "https://www.linkedin.com/in/yurii-kuksa/",
      alt: "linkedIn",
      img: linkedIn,
      ImgComponent: SvgItm,
    },
    {
      href: "https://wa.me/380939395112",
      alt: "whatsapp",
      img: whatsapp,
      ImgComponent: SvgItm,
    },
    {
      href: "https://t.me/esl_tutoring",
      alt: "telegram",
      img: telegram,
      ImgComponent: SvgItm,
    },
    {
      href: "mailto:iurikuksa@gmail.com",
      alt: "mail",
      img: mail,
      ImgComponent: LongSvg,
    },
    {
      href: "tel:+31616319115",
      alt: "phone1",
      img: phone1,
      ImgComponent: SvgItm,
    },
  ];

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
        {IconLinksSet.map(({ href, alt, img, Component, ImgComponent }) => (
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

// {/* <SvgItm src={discord} alt="discord" /> */}
// {/* <SvgItm src={quizlet} alt="quizlet" />
// <LongSvg src={Moodle} alt="Moodle" />
// <SvgItm src={instagram} alt="instagram" />
// <SvgItm src={padlet} alt="padlet" />
// <SvgItm src={monday} alt="monday" />
// <LongSvg src={wakelet} alt="wakelet" /> */}
// {/* <LongSvg src={email} alt="email" /> */}
// {/* <LongSvg src={phone} alt="phone" /> */}
