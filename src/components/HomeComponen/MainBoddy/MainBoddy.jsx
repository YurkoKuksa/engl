import AOS from "aos";
import "aos/dist/aos.css";

import { DescrText, ListItem, MainBox, PictureOne } from "./MainBoddy.Styled";

import journaal from "../../../assets/img/journaal.jpg";

AOS.init();
const MainBoddy = () => {
  return (
    <MainBox>
      <ul>
        <ListItem>
          <PictureOne
            src={journaal}
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            alt="journaal"
          />
          <DescrText data-aos="zoom-out-down" data-aos-duration="3000">
            " Successfully supported Ukrainian children in their initial
            adaptation to a foreign-language environment, fostering a
            comfortable and inclusive learning atmosphere."
          </DescrText>
        </ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </MainBox>
  );
};

export default MainBoddy;
