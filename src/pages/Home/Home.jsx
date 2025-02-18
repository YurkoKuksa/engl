import AOS from "aos";
import "aos/dist/aos.css";

import Avatar from "../../assets/img/engl-tch-3 - Copy.png";
import AvatarMobil from "../../assets/img/forMobil.png";
import EnglTeach from "../../assets/img/englTeach.png";

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
} from "./Home.Styled";

AOS.init();
const Home = () => {
  return (
    <div>
      <Title>Yurii Kuksa</Title>
      <AvatarDeskTop data-aos="zoom-in" src={Avatar} alt="avatar" />
      <AvatarMobile
        data-aos="zoom-in"
        src={AvatarMobil}
        alt="avatar for mobile"
      />
      <EnglTeachImg
        data-aos="zoom-in"
        src={EnglTeach}
        alt="avatar for mobile"
      />

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
    </div>
  );
};

export default Home;
