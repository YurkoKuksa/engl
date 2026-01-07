import styled from "styled-components";

export const MainFooterBox = styled.div`
  padding: 80px 15px;
  background: linear-gradient(135deg, #4a5b60 0%, #5a6b70 50%, #4a5b60 100%);
  color: rgb(244, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 100px 50px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 100px;
  }
`;

export const FeedbackSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OutsideContainer = styled.div`
  @media screen and (min-width: 1440px) {
    margin-right: 0;
    padding-left: 100px;
  }
`;

export const ContactSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: 26px;
  margin-bottom: 10px;
  color: #fff;
`;

export const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.05);
  //   background: rgba(0, 0, 0, 0.25);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  //   border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Star = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  transition: transform 0.2s;
  color: ${(props) => (props.$filled ? "#ffd700" : "#999")};

  &:hover {
    transform: scale(1.2);
  }
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid
    ${(props) => (props.$error ? "#ff4444" : "rgba(255, 255, 255, 0.2)")};
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 16px;
  transition: all 0.3s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #4a9eff;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #4a9eff;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 28px;
  background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74, 158, 255, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: -10px;
`;

export const SuccessMessage = styled.div`
  padding: 16px;
  background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;

  a {
    color: #c4c4c4;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-block;

    &:hover {
      color: #fff;
      transform: scale(1.02);
    }
  }
`;

export const ContactIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
    }
  }
`;

export const LocationLink = styled.a`
  color: #c4c4c4;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.3s;
  display: inline-block;

  &:hover {
    color: #fff;
    transform: scale(1.02);
  }
`;
