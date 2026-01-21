import styled from "styled-components";

export const ArticleContainer = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(206, 214, 222, 1)" : "rgba(44, 62, 80, 1)"};

  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const ArticleTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 40px 0 20px 0;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(199, 198, 198)" : "rgba(113, 107, 107, 1)"};

  &:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

export const ArticleSubtitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0 15px 0;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(206, 214, 222, 0.95)"
      : "rgba(113, 107, 107, 0.9)"};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  margin: 0 0 20px 0;
  text-align: justify;
  text-indent: 30px;

  &:first-child {
    text-indent: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    text-indent: 20px;
  }
`;

export const Strong = styled.strong`
  font-weight: 600;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(0, 198, 255, 1)" : "rgba(52, 152, 219, 1)"};
`;

export const Em = styled.em`
  font-style: italic;
  color: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(206, 214, 222, 0.9)"
      : "rgba(90, 107, 112, 1)"};
`;

export const Quote = styled.blockquote`
  margin: 30px 0;
  padding: 20px 30px;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(255, 255, 255, 0.03)"
      : "rgba(52, 152, 219, 0.05)"};
  border-left: 4px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(0, 198, 255, 0.8)"
        : "rgba(52, 152, 219, 0.8)"};
  border-radius: 4px;
  font-style: italic;

  p {
    margin: 0;
  }
`;

export const List = styled.ul`
  margin: 20px 0;
  padding-left: 30px;

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const OrderedList = styled.ol`
  margin: 20px 0;
  padding-left: 30px;

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Divider = styled.hr`
  margin: 40px 0;
  border: none;
  border-top: 1px solid
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
`;
