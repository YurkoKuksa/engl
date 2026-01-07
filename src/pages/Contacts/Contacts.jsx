import { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";

import LinksSet from "../../data/IconLinks/IconLinks";

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 80px 20px;
  /* background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%); */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const HeaderSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainTitle = styled.h1`
  font-size: 42px;
  /* color: #2c3e50; */
  margin: 0;
  font-weight: 700;
  /* ${({ $theme }) =>
    $theme === "dark"
      ? css`
          color: rgb(199, 198, 198);
        `
      : css`
          color: rgba(113, 107, 107, 1);
        `} */

  ${(
    { theme } // 👈 Тепер theme з контексту
  ) =>
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

const Subtitle = styled.p`
  font-size: 20px;
  /* color: #5a6b70; */
  /* ${({ $theme }) =>
    $theme === "dark"
      ? css`
          color: #ced6deff;
        `
      : css`
          color: #5a6b70;
        `} */

  ${(
    { theme } // 👈 theme з контексту
  ) =>
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

// const IntroText = styled.p`
//   font-size: 16px;
//   color: #7f8c8d;
//   line-height: 1.8;
//   max-width: 650px;
//   margin: 0 auto;

//   @media screen and (max-width: 768px) {
//     font-size: 15px;
//   }
// `;

const ContactForm = styled.form`
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

const FormTitle = styled.h2`
  font-size: 28px;
  color: #2c3e50;
  margin: 0 0 10px 0;
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #34495e;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Required = styled.span`
  color: #e74c3c;
`;

const Input = styled.input`
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

const Textarea = styled.textarea`
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

const ErrorText = styled.span`
  color: #e74c3c;
  font-size: 13px;
  margin-top: -5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SubmitButton = styled.button`
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

const SuccessMessage = styled.div`
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

const ContactIconsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
`;

const IconsTitle = styled.h3`
  font-size: 24px;
  /* color: #2c3e50; */
  /* ${({ $theme }) =>
    $theme === "dark"
      ? css`
          color: rgb(199, 198, 198);
        `
      : css`
          color: rgba(113, 107, 107, 1);
        `} */
  ${(
    { theme } // 👈 theme з контексту
  ) =>
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

const ContactIcons = styled.ul`
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

const Contacts = ({ theme }) => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const hasAt = email.includes("@");
    const hasDot = email.includes(".");
    const dotAfterAt = email.indexOf(".") > email.indexOf("@");
    return hasAt && hasDot && dotAfterAt;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email (must contain @ and a dot)");
      return;
    }

    setEmailError("");
    setLoading(true);

    const FORM_ID = "1FAIpQLSc81dEfGhKr6j63x3k4JWIfM01aJaOahWpQygyXepK9cr3aaQ";
    const ENTRY_EMAIL = "entry.1977140610";
    const ENTRY_MESSAGE = "entry.1827328685";

    const formData = new URLSearchParams();
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_MESSAGE, message);

    try {
      await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setMessage("");
        setEmail("");
      }, 4000);
    } catch (error) {
      console.error("Send error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <PageContainer>
        <ContentWrapper>
          <HeaderSection>
            <MainTitle>Let's Connect!</MainTitle>
            <Subtitle>
              Ready to explore opportunities for collaboration? I'd be glad to
              hear from you!
              <span style={{ display: "block" }}></span>
            </Subtitle>

            {/* <IntroText>
              If you represent a company, school, or are looking for a dedicated
              professional—whether for a job, a project, or a partnership in
              language education—feel free to reach out below.
          
            </IntroText> */}
          </HeaderSection>

          {submitted ? (
            <SuccessMessage>
              ✨ Thank you for reaching out! I'll get back to you soon.
            </SuccessMessage>
          ) : (
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send Me a Message</FormTitle>

              <InputGroup>
                <Label>
                  Your Email <Required>*</Required>
                </Label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  $error={emailError}
                />
                {emailError && <ErrorText>⚠ {emailError}</ErrorText>}
              </InputGroup>

              <InputGroup>
                <Label>
                  Your Message <Required>*</Required>
                </Label>
                <Textarea
                  placeholder="Tell me about your English learning goals, questions, or how I can help you..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </InputGroup>

              <SubmitButton type="submit" disabled={loading || !message.trim()}>
                {loading ? "Sending..." : "Send Message"}
              </SubmitButton>
            </ContactForm>
          )}

          <ContactIconsSection>
            <IconsTitle>Or Reach Out Through</IconsTitle>
            <ContactIcons>
              {LinksSet.map(({ href, alt, img }) => (
                <li key={alt}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={alt} />
                  </a>
                </li>
              ))}
            </ContactIcons>
          </ContactIconsSection>
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
};

export default Contacts;
