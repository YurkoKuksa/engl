import AOS from "aos";
import "aos/dist/aos.css";

import Avatar from "../../../assets/img/engl-tch-3 - Copy.png";
import AvatarMobil from "../../../assets/img/forMobil.png";
import EnglTeach from "../../../assets/img/englTeach.png";
import kahoot from "../../../assets/svg/kahoot.svg";
import youtube from "../../../assets/svg/youtube1.svg";
import telegram from "../../../assets/svg/telegram.svg";
import linkedIn from "../../../assets/svg/linkedin.svg";
import whatsapp from "../../../assets/svg/whatsapp.svg";
import mail from "../../../assets/svg/gmail.svg";
import phone1 from "../../../assets/svg/phone1.svg";
import resume_pdf from "../../../assets/pdf/ESL-teacher-2025.pdf";
import download from "../../../assets/svg/download.svg";

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
} from "./Home.Styled";

AOS.init();
const Hero = () => {
  return (
    <MainBox>
      <ScrollSpot id="scroll-section"> </ScrollSpot>

      <Title>Yurii Kuksa</Title>
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
          src={EnglTeach}
          alt="avatar for mobile"
        />
      </AbsoluteBox>

      <DownloadContainer>
        <DownlResume>Download Resume</DownlResume>
        <DownLoading
          href={resume_pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadFile src={download} alt="завантажити" />
        </DownLoading>
      </DownloadContainer>

      {/* <SvgItm src={discord} alt="discord" /> */}
      {/* <SvgItm src={quizlet} alt="quizlet" />
      <LongSvg src={Moodle} alt="Moodle" />
      <SvgItm src={instagram} alt="instagram" />
      <SvgItm src={padlet} alt="padlet" />
      <SvgItm src={monday} alt="monday" />
      <LongSvg src={wakelet} alt="wakelet" /> */}
      {/* <LongSvg src={email} alt="email" /> */}
      {/* <LongSvg src={phone} alt="phone" /> */}

      <ContactIcons>
        <li>
          <a
            href="https://create.kahoot.it/profiles/3b1e808e-d78f-4971-9343-18e15b21ac9b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <KahootBox>
              <KahootSvg src={kahoot} alt="kahoot" />
            </KahootBox>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC84CYmL9e0_F5zyDFxJhTqw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LongSvg src={youtube} alt="youtube" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/yurii-kuksa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgItm src={linkedIn} alt="linkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/380939395112"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgItm src={whatsapp} alt="whatsapp" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/esl_tutoring"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgItm src={telegram} alt="telegram" />
          </a>
        </li>
        <li>
          <a
            href="mailto:iurikuksa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LongSvg src={mail} alt="mail" />
          </a>
        </li>
        <li>
          <a href="tel:+31616319115" target="_blank" rel="noopener noreferrer">
            <SvgItm src={phone1} alt="phone1" />
          </a>
        </li>
      </ContactIcons>
      <Stad>
        {" "}
        <LinkSittard
          href="https://maps.app.goo.gl/h4mE4AAsnyuUmMsn7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sittard &nbsp; &nbsp; | &nbsp; &nbsp; Netherlands
        </LinkSittard>
      </Stad>
    </MainBox>
  );
};

export default Hero;
