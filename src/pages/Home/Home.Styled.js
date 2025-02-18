import styled from "styled-components";

export const Title = styled.h1`
  color: #6b6363;
  font-size: 53px;
  margin-left: 50px;
`;

export const DownloadContainer = styled.div`
  display: flex;
  /* justify-content: start; */
  align-items: center;
  gap: 15px;
  margin-left: 100px;
`;

export const DownLoading = styled.a``;

export const DownloadFile = styled.img`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
