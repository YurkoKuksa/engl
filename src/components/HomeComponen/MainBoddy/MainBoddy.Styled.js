import styled from "styled-components";

export const MainBox = styled.div`
  padding: 20px 20px 150px;
`;

export const ListItem = styled.li`
  margin-bottom: 50px;
`;

export const PictureOne = styled.img`
  margin-left: auto;
  margin-right: auto;

  width: 92%;
  max-width: 632px;
  height: auto;

  margin-bottom: 20px;
`;

export const DescrText = styled.p`
  text-align: center;
  max-width: 632px;
  width: 92%;

  /* outline: 1px dotted red; */
  margin-left: auto;
  margin-right: auto;

  font-style: italic;
  /* font-family: "Vollkorn", serif; */
  /* font-family: "Autour One", serif; */
  /* font-family: "DM Serif Text", serif; */
  font-family: "Merriweather", serif;
  /* font-family: "STIX Two Text", serif; */
  /* font-family: "Spectral", serif; */
  /* font-family: "Radley", serif; */
  /* font-family: "Vollkorn", serif; */

  @media screen and (min-width: 768px) {
    font-size: 20px;
    max-width: 632px;
    width: 100%;
  }
`;

export const TextBox = styled.div`
  max-width: 632px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    max-width: 632px;
    width: 100%;
  }
`;

export const LinkS = styled.a`
  color: #000099;
  text-decoration: underline;
`;
