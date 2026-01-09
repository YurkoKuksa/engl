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

import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { Modal } from "../../Modal/Modal";

import { DataSet } from "../../../data/DataSet/DataSet";

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
