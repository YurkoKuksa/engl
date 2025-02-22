import AOS from "aos";
import "aos/dist/aos.css";

import {
  DescrText,
  ListItem,
  MainBox,
  PictureOne,
  TextBox,
} from "./MainBoddy.Styled";

import journaal from "../../../assets/img/journaal.jpg";
import picA from "../../../assets/img/4.jpg";
import picB from "../../../assets/img/2.png";

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
          <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
            <DescrText>
              " Successfully supported Ukrainian children in their initial
              adaptation to a foreign-language environment, fostering a
              comfortable and inclusive learning atmosphere."
            </DescrText>
          </TextBox>
        </ListItem>
        {/* picture 2 */}
        <ListItem>
          <PictureOne
            src={picA}
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            alt="journaal"
          />
          <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
            <DescrText>
              " Passionate ESL teacher at Private Language School "Mova" in
              Berdychiv, Ukraine, dedicated to helping students develop their
              English skills through interactive and engaging lessons."
            </DescrText>
          </TextBox>
        </ListItem>
        {/* picture 3  */}
        <ListItem>
          <PictureOne
            src={picB}
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            alt="journaal"
          />
          <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
            <DescrText>
              " Teaching English to Chinese students at Better English School in
              Beijing, China. Creating a fully immersive English-speaking
              environment to enhance language acquisition and communication
              skills."
            </DescrText>
          </TextBox>
        </ListItem>
      </ul>
    </MainBox>
  );
};

export default MainBoddy;
