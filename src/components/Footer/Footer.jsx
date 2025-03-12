import { Contact, ContactBox, ListItem, MainFooterBox } from "./FooterStyled";

const Footer = () => {
  return (
    <MainFooterBox>
      <ContactBox>
        <Contact>Contact</Contact>
        <address>
          <ul>
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
          </ul>
        </address>
      </ContactBox>
    </MainFooterBox>
  );
};

export default Footer;
