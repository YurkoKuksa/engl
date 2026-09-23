import { useState, useEffect } from "react";
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
  AgreementGroup,
  AgreementCheckbox,
  AgreementLabel,
  AgreementLink,
  WarningMessage,
} from "./Contacts.Styled";

const Contacts = () => {
  const { theme } = useOutletContext();

  const LAST_SUBMIT_KEY = "contactForm_lastSubmit";

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [agreedError, setAgreedError] = useState("");
  const [alreadySentToday, setAlreadySentToday] = useState(false);

  const getTodayKey = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  };

  const checkAlreadySentToday = () => {
    const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
    return lastSubmit === getTodayKey();
  };

  // useEffect(() => {
  //   setAlreadySentToday(checkAlreadySentToday());
  // }, []);

  // useEffect(() => {
  //   const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
  //   setAlreadySentToday(lastSubmit === getTodayKey());
  // }, []);

  useEffect(() => {
    const now = new Date();
    const todayKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
    setAlreadySentToday(lastSubmit === todayKey);
  }, []);

  // =====  РЕШТА КОДУ  ========

  const validateEmail = (email) => {
    const hasAt = email.includes("@");
    const hasDot = email.includes(".");
    const dotAfterAt = email.indexOf(".") > email.indexOf("@");
    return hasAt && hasDot && dotAfterAt;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkAlreadySentToday()) {
      setAlreadySentToday(true);
      return;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email (must contain @ and a dot)");
      return;
    }

    if (!agreed) {
      setAgreedError("You must agree to the terms before sending");
      return;
    }

    setEmailError("");
    setAgreedError("");
    setLoading(true);

    // ПРАПОРЕЦЬ
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email (must contain @ and a dot)");
      return;
    }

    if (!agreed) {
      setAgreedError("You must agree to the terms before sending");
      return;
    }

    setEmailError("");
    setAgreedError("");

    // КІНЕЦЬ ПЕРЕВІРКИ

    setLoading(true);

    const FORM_ID = "1FAIpQLSc81dEfGhKr6j63x3k4JWIfM01aJaOahWpQygyXepK9cr3aaQ";
    const ENTRY_EMAIL = "entry.1977140610";
    const ENTRY_MESSAGE = "entry.1827328685";
    const ENTRY_AGREEMENT = "entry.694234832"; // встав знайдений ID

    const formData = new URLSearchParams();
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_MESSAGE, message);
    formData.append(ENTRY_AGREEMENT, "Yes"); // значення опції чекбокса

    try {
      await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      localStorage.setItem(LAST_SUBMIT_KEY, getTodayKey());
      setAlreadySentToday(true);
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

          {/* ================================================== */}

          {/* ================================================= */}
          {submitted ? (
            <SuccessMessage>
              ✨ Thank you for reaching out! I'll get back to you soon.
            </SuccessMessage>
          ) : alreadySentToday ? (
            <WarningMessage>
              ⏳ You've already sent a message today. Please wait until tomorrow
              to send another one — this helps me keep replies manageable.
            </WarningMessage>
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

              {/* ПРАПОРЕЦЬ */}

              <AgreementGroup>
                <AgreementCheckbox
                  id="agreement"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (e.target.checked) setAgreedError("");
                  }}
                />
                <AgreementLabel htmlFor="agreement">
                  I agree to the
                  <AgreementLink
                    to="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Use and Privacy Policy
                  </AgreementLink>
                  <Required>*</Required>
                </AgreementLabel>
              </AgreementGroup>
              {agreedError && <ErrorText>⚠ {agreedError}</ErrorText>}

              <SubmitButton
                type="submit"
                disabled={loading || !message.trim() || !agreed}
              >
                {loading ? "Sending..." : "Send Message"}
              </SubmitButton>
              {/* КІНЕЦЬ ПРАПОРЦЯ */}

              {/* <SubmitButton type="submit" disabled={loading || !message.trim()}>
                {loading ? "Sending..." : "Send Message"}
              </SubmitButton> */}
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
