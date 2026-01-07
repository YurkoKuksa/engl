import kahoot from "../../assets/svg/kahoot.svg";
import youtube from "../../assets/svg/youtube1.svg";
import telegram from "../../assets/svg/telegram.svg";
import linkedIn from "../../assets/svg/linkedin.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import mail from "../../assets/svg/gmail.svg";
import phone1 from "../../assets/svg/phone1.svg";

import {
  KahootBox,
  KahootSvg,
  LongSvg,
  SvgItm,
} from "../../components/HomeComponen/Hero/Home.Styled";

const IconLinksSet = [
  {
    href: "https://create.kahoot.it/profiles/3b1e808e-d78f-4971-9343-18e15b21ac9b",
    alt: "kahoot",
    img: kahoot,
    Component: KahootBox,
    ImgComponent: KahootSvg,
  },
  {
    href: "https://www.youtube.com/channel/UC84CYmL9e0_F5zyDFxJhTqw",
    alt: "youtube",
    img: youtube,
    ImgComponent: LongSvg,
  },
  {
    href: "https://www.linkedin.com/in/yurii-kuksa/",
    alt: "linkedIn",
    img: linkedIn,
    ImgComponent: SvgItm,
  },
  {
    href: "https://wa.me/380939395112",
    alt: "whatsapp",
    img: whatsapp,
    ImgComponent: SvgItm,
  },
  {
    href: "https://t.me/esl_tutoring",
    alt: "telegram",
    img: telegram,
    ImgComponent: SvgItm,
  },
  {
    href: "mailto:iurikuksa@gmail.com",
    alt: "mail",
    img: mail,
    ImgComponent: LongSvg,
  },
  {
    href: "tel:+31616319115",
    alt: "phone1",
    img: phone1,
    ImgComponent: SvgItm,
  },
];

export default IconLinksSet;

// {/* <SvgItm src={discord} alt="discord" /> */}
// {/* <SvgItm src={quizlet} alt="quizlet" />
// <LongSvg src={Moodle} alt="Moodle" />
// <SvgItm src={instagram} alt="instagram" />
// <SvgItm src={padlet} alt="padlet" />
// <SvgItm src={monday} alt="monday" />
// <LongSvg src={wakelet} alt="wakelet" /> */}
// {/* <LongSvg src={email} alt="email" /> */}
// {/* <LongSvg src={phone} alt="phone" /> */}
