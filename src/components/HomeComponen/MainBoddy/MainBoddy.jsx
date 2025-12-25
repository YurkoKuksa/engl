import AOS from "aos";
import "aos/dist/aos.css";

import {
  DescrText,
  LinkS,
  ListItem,
  MainBox,
  PictureOne,
  TextBox,
} from "./MainBoddy.Styled";

import journaal from "../../../assets/img/journaal.jpg";
import sintJan from "../../../assets/img/sintJan1.jpg";
import sintJan2 from "../../../assets/img/sinJan2.jpg";

import groenwald from "../../../assets/img/groenwald.jpg";
import dacapo from "../../../assets/img/dacapo1.jpg";
import picA from "../../../assets/img/4.jpg";
import picAA from "../../../assets/img/say1.jpg";
import picB from "../../../assets/img/2.png";
import picC from "../../../assets/img/1.jpg";
import china from "../../../assets/img/china.jpg";

import { ThemeProvider } from "styled-components";

AOS.init();
const MainBoddy = ({ theme }) => {
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <MainBox>
        <ul>
          {/* picture 1  */}

          <ListItem>
            <PictureOne
              src={journaal}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="journaal  sint Jan"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                English as a Second Language (ESL) Teacher at{" "}
                <LinkS
                  href="https://www.sintjan-lvo.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sint-Jan College
                </LinkS>
                , Hoensbroek.
              </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 2  */}

          <ListItem>
            <PictureOne
              src={sintJan}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="journaal  sint Jan with students"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                Successfully supported Ukrainian children in their initial
                adaptation to a foreign-language environment, fostering a
                comfortable and inclusive learning atmosphere.
              </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 2  */}

          <ListItem>
            <PictureOne
              src={sintJan2}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="journaal  sint Jan with students"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                Brief article for{" "}
                <LinkS
                  href="https://www.journaalvanbeekdaelen.nl/reader/21040#p=6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Journaal van Beekdaelen
                </LinkS>
                &nbsp; about my work as an ESL teacher at Sint-Jan College,
                Hoensbroek.
              </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 3  */}

          <ListItem>
            <PictureOne
              src={groenwald}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="journaal  sint Jan with students"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                Culinary activity with students at{" "}
                <LinkS
                  href="https://www.groenewald.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Groenewald School
                </LinkS>
                &nbsp; – learning through cooking!
              </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 4  */}

          <ListItem>
            <PictureOne
              src={dacapo}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="journaal  sint Jan with students"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                My Experience as an ESL Teacher at{" "}
                <LinkS
                  href="https://www.dacapokijktnaarmij.nl/praktijkonderwijs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dacapo College (EOA)
                </LinkS>
                &nbsp;– Supporting Students from Diverse International
                Backgrounds.
              </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 5 */}

          <ListItem>
            <PictureOne
              src={picA}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="Berdychiv school"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                Passionate ESL teacher at Private Language School{" "}
                <LinkS
                  href="https://www.instagram.com/mova_berdychiv/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Mova"
                </LinkS>
                &nbsp; in Berdychiv, Ukraine, dedicated to helping students
                develop their English skills through interactive and engaging
                lessons.
              </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 5 */}

          <ListItem>
            <PictureOne
              src={picAA}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="Berdychiv school"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                Passionate ESL instructor at &nbsp;
                <LinkS
                  href="https://www.instagram.com/karina_shyshmintseva?igsh=bDJhNGE5b2h4bWNt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Say Private School
                </LinkS>
                &nbsp; in Berdychiv, Ukraine, helping students build confidence
                and fluency in English.
              </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 6  */}

          <ListItem>
            <PictureOne
              src={picB}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="China school"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                Teaching English to Chinese students at Better English School in
                Beijing, China. Creating a fully immersive English-speaking
                environment to enhance language acquisition and communication
                skills.
              </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 7  */}

          <ListItem>
            <PictureOne
              src={picC}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="China school"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>Better English School in Beijing, China </DescrText>
            </TextBox>
          </ListItem>

          {/* picture 7  */}

          <ListItem>
            <PictureOne
              src={china}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              alt="China school"
            />
            <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
              <DescrText>
                Completed an advanced ESL teacher training course with Better
                Education in China!
              </DescrText>
            </TextBox>
          </ListItem>
        </ul>
      </MainBox>
    </ThemeProvider>
  );
};

export default MainBoddy;
