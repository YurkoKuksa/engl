import styled from "styled-components";

export const MainBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  position: relative;
  height: 100vh;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: rgb(199, 198, 198);
  font-size: 63px;
  text-align: center;
  font-weight: 700;
  font-family: "Vollkorn", serif;

  margin-bottom: auto;

  @media screen and (min-width: 768px) {
    font-size: 103px;
    line-height: 1;
    margin-bottom: 0;
  }
`;

export const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;

  /* outline: 1px dotted red; */

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const DownLoading = styled.a``;

export const DownlResume = styled.h4`
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const DownloadFile = styled.img`
  width: 16px;
  height: 16px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
    filter: invert(7%) sepia(100%) saturate(4527%) hue-rotate(244deg)
      brightness(131%) contrast(152%);
  }

  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const AvatarDeskTop = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 30px;
    margin-bottom: auto;
    max-width: 635px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AvatarMobile = styled.img`
  width: 92%;
  max-width: 768px;
  height: auto;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  /* outline: 1px dotted red;  */

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const EnglTeachImg = styled.img`
  width: 85%;
  max-width: 768px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const AbsoluteBox = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const KahootSvg = styled.img`
  width: 17px;
  height: 17px;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const KahootBox = styled.div`
  background-color: rgb(84, 42, 146);
  width: 28px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const SvgItm = styled.img`
  width: auto;
  height: 28px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    height: 45px;
  }
`;

export const LongSvg = styled.img`
  width: auto;
  height: 28px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    height: 45px;
  }
`;

export const ContactIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 25px;
  margin-bottom: 28px;

  /* outline: 1px dotted red; */
  @media screen and (min-width: 768px) {
    gap: 35px;
  }
`;

export const Stad = styled.p`
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ScrollSpot = styled.div`
  position: absolute;
  top: 50px;
  right: 50%;

  transform: translateX(50%);

  @media screen and (min-width: 768px) {
    top: 105px;
  }

  @media screen and (min-width: 1200px) {
    top: 100px;
  }
`;

export const LinkSittard = styled.a`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: blue;
    font-weight: 500;
  }
`;
