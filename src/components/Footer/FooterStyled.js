import styled from "styled-components";

export const MainFooterBox = styled.div`
  padding: 100px 15px;
  background-color: #5a6b70;
  color: rgb(244, 238, 238);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 100px 50px;
    font-size: 20px;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 20px;
  flex-direction: column;
`;

export const Contact = styled.h4`
  text-transform: uppercase;
  font-size: 26px;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
  color: #c4c4c4;
  transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1),
    color 450ms cubic-bezier(0.4, 0, 0.2, 1),
    text-decoration 550ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    color: rgb(25, 65, 77);
    text-decoration: underline;
  }
`;
