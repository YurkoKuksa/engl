import styled, { css } from "styled-components";

export const MainBox = styled.div`
  padding: 20px 20px 150px;
`;

export const ListItem = styled.li`
  margin-bottom: 50px;
`;

export const Shad = styled.div`
  display: inline-block;
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.08)"};

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
      : "0 4px 20px rgba(0, 0, 0, 0.08)"};

  transition:
    transform 300ms ease,
    box-shadow 300ms ease,
    border-color 300ms ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${({ theme }) =>
      theme.mode === "dark"
        ? "0 12px 40px rgba(0, 198, 255, 0.3)"
        : "0 12px 40px rgba(52, 152, 219, 0.25)"};
    border-color: ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(0, 198, 255, 0.5)"
        : "rgba(52, 152, 219, 0.4)"};
  }

  &:active {
    transform: translateY(-4px) scale(1.01);
  }
`;

export const PictureOne = styled.img`
  /* display: block; */
  will-change: transform;
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

  ${({ theme }) =>
    theme?.mode === "dark" &&
    css`
      color: #ced6deff;
    `}

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

export const linkTheme = {
  light: css`
    color: #000099;

    &:hover {
      color: rgb(0, 0, 103);
    }
  `,

  dark: css`
    color: #647789ff;

    &:hover {
      color: #a3b3c2;
    }
  `,
};

export const LinkS = styled.a`
  display: inline-block;

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    text-decoration 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    text-decoration: underline;
  }

  ${({ theme }) => linkTheme[theme?.mode || "light"]}
`;
