import { useState } from "react";

import {
  ContactBox,
  ContactIcons,
  ContactList,
  ContactSection,
  ErrorText,
  FeedbackForm,
  FeedbackSection,
  FooterContent,
  Input,
  ListItem,
  LocationLink,
  MainFooterBox,
  OutsideContainer,
  SectionTitle,
  Star,
  StarsContainer,
  SubmitButton,
  SuccessMessage,
  Textarea,
} from "./FooterStyled";

import LinksSet from "../../data/IconLinks/IconLinks";

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
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
      setEmailError(" Email is required");
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
    const ENTRY_FEEDBACK = "entry.1827328685";
    const ENTRY_RATING = "entry.1681371417";

    const formData = new URLSearchParams();
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_FEEDBACK, feedback);
    formData.append(ENTRY_RATING, rating.toString());

    try {
      await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setFeedback("");
        setEmail("");
      }, 3000);
    } catch (error) {
      console.error("Send error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainFooterBox>
      <FooterContent>
        <FeedbackSection>
          <SectionTitle>Your Feedback</SectionTitle>
          {submitted ? (
            <SuccessMessage>Thank you for your feedback! ✨</SuccessMessage>
          ) : (
            <FeedbackForm onSubmit={handleSubmit}>
              <div>
                <label
                  style={{
                    marginBottom: "10px",
                    display: "block",
                    fontSize: "14px",
                  }}
                >
                  Rate your experience *
                </label>
                <StarsContainer>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      type="button"
                      $filled={star <= (hoveredRating || rating)}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                    >
                      ★
                    </Star>
                  ))}
                </StarsContainer>
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  $error={emailError}
                />
                {emailError && <ErrorText>{emailError}</ErrorText>}
              </div>

              <Textarea
                placeholder="Share your thoughts... (optional)"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              <SubmitButton type="submit" disabled={loading || rating === 0}>
                {loading ? "Sending..." : "Send Feedback"}
              </SubmitButton>
            </FeedbackForm>
          )}
        </FeedbackSection>

        <OutsideContainer>
          <ContactSection>
            <ContactBox>
              <SectionTitle>Contact</SectionTitle>
              <address style={{ fontStyle: "normal" }}>
                <ContactList>
                  <ListItem>
                    <a
                      href="mailto:iurikuksa@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iurikuksa@gmail.com
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      href="tel:+31616319115"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +31616319115
                    </a>
                  </ListItem>
                </ContactList>
              </address>
            </ContactBox>

            <div>
              <SectionTitle style={{ fontSize: "20px" }}>Connect</SectionTitle>
              <ContactIcons>
                {LinksSet.map(({ href, alt, img }) => (
                  <li key={alt}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <img src={img} alt={alt} />
                    </a>
                  </li>
                ))}
              </ContactIcons>
            </div>

            <div>
              <LocationLink
                href="https://maps.app.goo.gl/h4mE4AAsnyuUmMsn7"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Sittard | Netherlands
              </LocationLink>
            </div>
          </ContactSection>
        </OutsideContainer>
      </FooterContent>
    </MainFooterBox>
  );
};

export default Footer;

// 1FAIpQLScWa0-t9k9R2_ILYA48ytgnBBIEMlKZOYP450DURhuofW9wOQ
// entry.378524996
