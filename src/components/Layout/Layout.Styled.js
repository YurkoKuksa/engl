import styled from "styled-components";

import back from "../../assets/img/back.webp";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  flex: 1;

  background-color: #f4f4fd;

  background-image: linear-gradient(
      rgba(193, 194, 206, 0.7),
      rgba(193, 194, 206, 0.7)
    ),
    url(${back});
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
`;
