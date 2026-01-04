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
import { useEffect, useState } from "react";
import { Modal } from "../../Modal/Modal";

const MainBoddy = ({ theme }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage({ src: "", alt: "" });
  };
  const DataSet = [
    {
      src: journaal,
      alt: "journaal sint Jan",
      text: "English as a Second Language (ESL) Teacher at ",
      linkText: "Sint-Jan College",
      textSecond: ", Hoensbroek.",
      link: "https://www.sintjan-lvo.nl/",
    },
    {
      src: sintJan,
      alt: "journaal sint Jan with students",
      text: "Successfully supported Ukrainian children in their initial adaptation to a foreign-language environment, fostering a comfortable and inclusive learning atmosphere.",
    },
    {
      src: sintJan2,
      alt: "journaal sint Jan with students",
      text: "Brief article for ",
      linkText: "Journaal van Beekdaelen",
      textSecond:
        " about my work as an ESL teacher at Sint-Jan College, Hoensbroek.",
      link: "https://www.journaalvanbeekdaelen.nl/reader/21040#p=6",
    },
    {
      src: groenwald,
      alt: "journaal sint Jan with students",
      text: "Culinary activity with students at ",
      linkText: "Groenewald School",
      textSecond: " – learning through cooking!",
      link: "https://www.groenewald.nl/",
    },
    {
      src: dacapo,
      alt: "journaal sint Jan with students",
      text: "My Experience as an ESL Teacher at ",
      linkText: "Dacapo College (EOA)",
      textSecond:
        " – Supporting Students from Diverse International Backgrounds.",
      link: "https://www.dacapokijktnaarmij.nl/praktijkonderwijs/",
    },
    {
      src: picA,
      alt: "Berdychiv school",
      text: "Passionate ESL teacher at Private Language School ",
      linkText: '"Mova"',
      textSecond:
        " in Berdychiv, Ukraine, dedicated to helping students develop their English skills through interactive and engaging lessons.",
      link: "https://www.instagram.com/mova_berdychiv/?hl=en",
    },
    {
      src: picAA,
      alt: "Berdychiv school",
      text: "Passionate ESL instructor at ",
      linkText: "Say Private School",
      textSecond:
        " in Berdychiv, Ukraine, helping students build confidence and fluency in English.",
      link: "https://www.instagram.com/karina_shyshmintseva?igsh=bDJhNGE5b2h4bWNt",
    },
    {
      src: picB,
      alt: "China school",
      text: "Teaching English to Chinese students at Better English School in Beijing, China. Creating a fully immersive English-speaking environment to enhance language acquisition and communication skills.",
    },
    {
      src: picC,
      alt: "China school",
      text: "Better English School in Beijing, China",
    },
    {
      src: china,
      alt: "China school",
      text: "Completed an advanced ESL teacher training course with Better Education in China!",
    },
  ];

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <MainBox>
        <ul>
          {DataSet.map((item, index) => (
            <ListItem key={index}>
              <PictureOne
                src={item.src}
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                alt={item.alt}
                onClick={() => openModal(item.src, item.alt)}
                style={{ cursor: "pointer" }}
              />
              <TextBox data-aos="zoom-out-down" data-aos-duration="3000">
                <DescrText>
                  {item.text}
                  {item.link && (
                    <LinkS
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkText}
                    </LinkS>
                  )}
                  {item.textSecond}
                </DescrText>
              </TextBox>
            </ListItem>
          ))}
        </ul>
      </MainBox>

      {isModalOpen && (
        <Modal
          toggleModal={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </ThemeProvider>
  );
};

export default MainBoddy;
