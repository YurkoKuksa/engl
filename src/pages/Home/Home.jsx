import AOS from "aos";
import "aos/dist/aos.css";

import Avatar from "../../assets/img/engl-tch-3 - Copy.png";
import AvatarMobil from "../../assets/img/forMobil.png";
import EnglTeach from "../../assets/img/englTeach.png";
import kahoot from "../../assets/svg/kahoot.svg";
import youtube from "../../assets/svg/youtube1.svg";
import telegram from "../../assets/svg/telegram.svg";
import discord from "../../assets/svg/discord.svg";
// import linkedIn from "../../assets/svg/linkedin.svg";
// import quizlet from "../../assets/svg/quizlet2.svg";
// import Moodle from "../../assets/svg/Moodle-logo.svg";
// import instagram from "../../assets/svg/Instagram.svg";
// import padlet from "../../assets/svg/Padlet.svg";
// import monday from "../../assets/svg/monday.svg";
// import wakelet from "../../assets/svg/wakelet.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import mail from "../../assets/svg/email.svg";
// import email from "../../assets/svg/email.svg";
// import phone from "../../assets/svg/phone.svg";
import phone1 from "../../assets/svg/phone1.svg";

import resume_pdf from "../../assets/pdf/ESL-teacher-2025.pdf";

import download from "../../assets/svg/download.svg";
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
} from "./Home.Styled";

AOS.init();
const Home = () => {
  return (
    <MainBox>
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
        <h4>Download Resume</h4>
        <DownLoading
          href={resume_pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadFile src={download} alt="завантажити" />
        </DownLoading>
      </DownloadContainer>

      {/* <SvgItm src={linkedIn} alt="linked In" /> */}
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
            href="https://t.me/esl_tutoring"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgItm src={telegram} alt="telegram" />
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/53yD4zUf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgItm src={discord} alt="discord" />
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
    </MainBox>
  );
};

export default Home;
