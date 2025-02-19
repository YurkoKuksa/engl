import styled from "styled-components";

export const MainBox = styled.div`
  max-width: 635px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
`;

export const Title = styled.h1`
  /* color: #6b6363; */
  color: rgb(199, 198, 198);
  font-size: 63px;
  text-align: center;
  /* font-family: "DM Serif Text", serif; */
  font-weight: 700;
  /* font-family: "Merriweather", serif; */
  /* font-family: "Radley", serif; */
  /* font-family: "Sarala", serif; */
  font-family: "Vollkorn", serif;
  font-optical-sizing: auto;
  @media screen and (min-width: 768px) {
    font-size: 103px;
    /* font-size: 80px; */
    line-height: 1;
  }
`;

export const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const DownLoading = styled.a``;

export const DownloadFile = styled.img`
  width: 16px;
  height: 16px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const AvatarDeskTop = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 30px;
  }
`;

export const AvatarMobile = styled.img`
  width: 100%;
  max-width: 768px;
  height: auto;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const EnglTeachImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const KahootSvg = styled.img`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const KahootBox = styled.div`
  background-color: rgb(84, 42, 146);
  width: 22px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 27px;
  }
`;

export const SvgItm = styled.img`
  width: 22px;
  height: 22px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 27px;
  }
`;

export const LongSvg = styled.img`
  width: auto;
  height: 22px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: auto;
    height: 27px;
  }
`;

export const ContactIcons = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 35px;
  }
`;
