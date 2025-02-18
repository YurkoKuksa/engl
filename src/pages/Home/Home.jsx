import AOS from "aos";
import "aos/dist/aos.css";

import Avatar from "../../assets/img/engl-tch-3 - Copy.png";
import resume_pdf from "../../assets/pdf/ESL-teacher-2025.pdf";
import download from "../../assets/svg/download.svg";
import {
  DownloadContainer,
  DownloadFile,
  DownLoading,
  Title,
} from "./Home.Styled";

AOS.init();
const Home = () => {
  return (
    <div>
      <Title>Yurii Kuksa</Title>
      <img data-aos="zoom-in" src={Avatar} alt="avatar" />
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
