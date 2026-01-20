import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 50px 20px;
  /* background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%); */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const HeaderSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MainTitle = styled.h1`
  font-size: 42px;
  /* color: #2c3e50; */
  margin: 0;
  font-weight: 700;
  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          color: rgb(199, 198, 198);
        `
      : css`
          color: rgba(113, 107, 107, 1);
        `}

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;

  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          color: #ced6deff;
        `
      : css`
          color: #5a6b70;
        `}
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

// export const IntroText = styled.p`
//   font-size: 16px;
//   color: #7f8c8d;
//   line-height: 1.8;
//   max-width: 650px;
//   margin: 0 auto;

//   @media screen and (max-width: 768px) {
//     font-size: 15px;
//   }
// `;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 28px;
  color: #2c3e50;
  margin: 0 0 10px 0;
  text-align: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #34495e;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Required = styled.span`
  color: #e74c3c;
`;

export const Input = styled.input`
  padding: 14px 18px;
  border: 2px solid ${(props) => (props.$error ? "#e74c3c" : "#dfe6e9")};
  border-radius: 10px;
  background: #f8f9fa;
  color: #2c3e50;
  font-size: 16px;
  transition: all 0.3s;
  font-family: inherit;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    background: white;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

export const Textarea = styled.textarea`
  padding: 14px 18px;
  border: 2px solid #dfe6e9;
  border-radius: 10px;
  background: #f8f9fa;
  color: #2c3e50;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    background: white;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

export const ErrorText = styled.span`
  color: #e74c3c;
  font-size: 13px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SubmitButton = styled.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  animation: slideIn 0.4s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ContactIconsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
`;

export const IconsTitle = styled.h3`
  font-size: 24px;
  /* color: #2c3e50; */
  ${({ theme }) =>
    theme.mode === "dark"
      ? css`
          color: rgb(199, 198, 198);
        `
      : css`
          color: rgba(113, 107, 107, 1);
        `}

  margin: 0;
  text-align: center;
`;

export const ContactIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;

  li {
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-8px);
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    transition: all 0.3s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 8px 20px rgba(52, 152, 219, 0.3);
    }
  }
`;
