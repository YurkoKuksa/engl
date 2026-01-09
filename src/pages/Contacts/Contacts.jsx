import { useState } from "react";
import { ThemeProvider } from "styled-components";

import LinksSet from "../../data/IconLinks/IconLinks";
import { useOutletContext } from "react-router-dom";
import {
  ContactForm,
  ContactIcons,
  ContactIconsSection,
  ContentWrapper,
  ErrorText,
  FormTitle,
  HeaderSection,
  IconsTitle,
  Input,
  InputGroup,
  Label,
  MainTitle,
  PageContainer,
  Required,
  SubmitButton,
  Subtitle,
  SuccessMessage,
  Textarea,
} from "./Contacts.Styled";

const Contacts = () => {
  const { theme } = useOutletContext();

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
                  placeholder="Tell me about a role, collaboration, or any questions you have..."
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
