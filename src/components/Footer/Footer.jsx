import { useState } from "react";
import styled from "styled-components";

import kahoot from "../../assets/svg/kahoot.svg";
import youtube from "../../assets/svg/youtube1.svg";
import telegram from "../../assets/svg/telegram.svg";
import linkedIn from "../../assets/svg/linkedin.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import mail from "../../assets/svg/gmail.svg";
import phone1 from "../../assets/svg/phone1.svg";

const MainFooterBox = styled.div`
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

const FooterContent = styled.div`
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

const FeedbackSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OutsideContainer = styled.div`
  @media screen and (min-width: 1440px) {
    margin-right: 0;
    padding-left: 100px;
  }
`;

const ContactSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  /* outline: 1px dotted red; */
`;

const SectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: 26px;
  margin-bottom: 10px;
  color: #fff;
`;

// const FeedbackForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   background-color: rgba(0, 0, 0, 0.25);
//   padding: 30px;
//   border-radius: 12px;
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.1);
// `;
const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Star = styled.button`
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

const Input = styled.input`
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

const Textarea = styled.textarea`
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

const SubmitButton = styled.button`
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

const ErrorText = styled.span`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: -10px;
`;

const SuccessMessage = styled.div`
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

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
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

const ContactIcons = styled.ul`
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

const LocationLink = styled.a`
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

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const IconLinksSet = [
    {
      href: "https://create.kahoot.it/profiles/3b1e808e-d78f-4971-9343-18e15b21ac9b",
      alt: "kahoot",
      img: kahoot,
    },
    {
      href: "https://www.youtube.com/channel/UC84CYmL9e0_F5zyDFxJhTqw",
      alt: "youtube",
      img: youtube,
    },
    {
      href: "https://www.linkedin.com/in/yurii-kuksa/",
      alt: "linkedIn",
      img: linkedIn,
    },
    { href: "https://wa.me/380939395112", alt: "whatsapp", img: whatsapp },
    { href: "https://t.me/esl_tutoring", alt: "telegram", img: telegram },
    { href: "mailto:iurikuksa@gmail.com", alt: "mail", img: mail },
    { href: "tel:+31616319115", alt: "phone", img: phone1 },
  ];

  const validateEmail = (email) => {
    const hasAt = email.includes("@");
    const hasDot = email.includes(".");
    const dotAfterAt = email.indexOf(".") > email.indexOf("@");
    return hasAt && hasDot && dotAfterAt;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError("Email обов'язковий");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Введіть коректний email (повинен містити @ та крапку)");
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
      console.error("Помилка відправки:", error);
      alert("Щось пішло не так. Спробуйте ще раз.");
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
                  Rate your experience*
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
                {IconLinksSet.map(({ href, alt, img }) => (
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
