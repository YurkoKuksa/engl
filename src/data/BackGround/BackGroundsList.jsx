import BlueSnow from "../../components/BackG/SnowingV2";
import EnglCoffee from "../../components/BackG/EnglCoff";
import ValentDay from "../../components/BackG/ValentinesDay";
import Spring from "../../components/BackG/Spring";
import Autumn from "../../components/BackG/Autumn";
import Summer from "../../components/BackG/Summer";
import Kupala from "../../components/BackG/Kupala.jsx";
import Christmas from "../../components/BackG/Christmas.jsx";
import ChristmasUkr from "../../components/BackG/ChristmasUkr.jsx";
import Carnaval from "../../components/BackG/Carnaval.jsx";
import Birthday from "../../components/BackG/Birthday.jsx";

const backgrounds = {
  blueSnow: {
    Component: BlueSnow,
    theme: "dark",
  },
  englCoffee: {
    Component: EnglCoffee,
    theme: "light",
  },
  love: {
    Component: ValentDay,
    theme: "light",
  },
  spring: {
    Component: Spring,
    theme: "light",
  },
  autumn: {
    Component: Autumn,
    theme: "light",
  },
  summer: {
    Component: Summer,
    theme: "light",
  },
  kupala: {
    Component: Kupala,
    theme: "dark",
  },
  christmas: {
    Component: Christmas,
    theme: "dark",
  },
  christukr: {
    Component: ChristmasUkr,
    theme: "dark",
  },
  carnav: {
    Component: Carnaval,
    theme: "light",
  },
  bday: {
    Component: Birthday,
    theme: "light",
  },
};

export default backgrounds;
