import styled from "styled-components";
import { Link } from "react-router-dom";

export const TermsPageWrapper = styled.div`
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TermsCard = styled.div`
  max-width: 800px;
  width: 100%;
  background: white;
  color: #2c3e50;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const TermsTitle = styled.h1`
  font-size: 32px;
  margin: 0 0 5px 0;
  color: #2c3e50;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

export const TermsUpdated = styled.p`
  font-size: 13px;
  color: #95a5a6;
  margin: 0 0 30px 0;
`;

export const Section = styled.section`
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: #2c3e50;
  margin: 0 0 10px 0;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #4a5a60;
  margin: 0 0 10px 0;
`;

export const List = styled.ul`
  margin: 0 0 10px 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ListItem = styled.li`
  font-size: 15px;
  line-height: 1.6;
  color: #4a5a60;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  color: #3498db;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
