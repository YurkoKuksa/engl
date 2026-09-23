import {
  TermsPageWrapper,
  TermsCard,
  TermsTitle,
  TermsUpdated,
  Section,
  SectionTitle,
  Paragraph,
  List,
  ListItem,
  BackLink,
} from "./Terms.Styled";

const Terms = () => {
  return (
    <TermsPageWrapper>
      <TermsCard>
        <TermsTitle>Terms of Use & Privacy Policy</TermsTitle>
        <TermsUpdated>Last updated: September 23, 2026</TermsUpdated>

        <Section>
          <SectionTitle>1. Purpose of the Contact Form</SectionTitle>
          <Paragraph>
            This contact form is intended for genuine, relevant communication
            with me (Yuri Kuksa), the author of this site. By submitting a
            message, you confirm that it relates to one of the purposes below.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. What Is Welcome</SectionTitle>
          <List>
            <ListItem>Collaboration proposals and project ideas.</ListItem>
            <ListItem>
              Job offers, freelance or teaching opportunities.
            </ListItem>
            <ListItem>
              Questions about my work, publications, or teaching/pedagogical
              activities.
            </ListItem>
            <ListItem>General feedback about this website.</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. What Is Not Allowed</SectionTitle>
          <List>
            <ListItem>
              Spam, mass mailings, or unsolicited advertising unrelated to
              educational/pedagogical activity.
            </ListItem>
            <ListItem>
              Offensive, abusive, discriminatory, or otherwise inappropriate
              language.
            </ListItem>
            <ListItem>
              Attempts to send malicious links, code, or content intended to
              harm this site or its visitors.
            </ListItem>
            <ListItem>
              Sending an excessive number of messages within the same day
              (please allow time for a possible reply before sending
              follow-ups).
            </ListItem>
            <ListItem>
              Submitting false, misleading, or impersonated contact information.
            </ListItem>
          </List>
          <Paragraph>
            Messages that violate these rules may be ignored, deleted, or
            blocked without notice.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>4. How Your Data Is Used</SectionTitle>
          <List>
            <ListItem>
              Submitted messages and contact details (email or any other contact
              information you provide in the message) are used solely to respond
              to your inquiry.
            </ListItem>
            <ListItem>
              Your data is{" "}
              <strong>not sold, shared, or disclosed to any third party</strong>
              . It is accessible only to me, Yuri Kuksa, as the site owner.
            </ListItem>
            <ListItem>
              Submissions are stored via Google Forms/Google Sheets, used here
              purely as a private data-collection backend, not as a third-party
              recipient of your data.
            </ListItem>
            <ListItem>
              I do not use this data for marketing, profiling, or any purpose
              beyond replying to you.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. No Obligation to Respond</SectionTitle>
          <Paragraph>
            I do not guarantee a reply to every message. I may respond if the
            inquiry is relevant and I have the time and interest to do so. Lack
            of response should not be interpreted as agreement, rejection, or
            any commitment.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. External Links</SectionTitle>
          <Paragraph>
            The contact icons on this page (WhatsApp, Telegram, LinkedIn, email,
            etc.) link to third-party services with their own, separate terms
            and privacy policies, which I do not control.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Consent</SectionTitle>
          <Paragraph>
            By checking the agreement box and submitting the contact form, you
            confirm that you have read and agree to this Terms of Use & Privacy
            Policy.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Contact</SectionTitle>
          <Paragraph>
            If you have any questions about this policy or how your data is
            handled, feel free to reach out using the contact form or any of the
            contact icons listed on the Contacts page.
          </Paragraph>
        </Section>

        <BackLink to="/contacts">← Back to Contacts</BackLink>
      </TermsCard>
    </TermsPageWrapper>
  );
};

export default Terms;
