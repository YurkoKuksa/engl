import { useOutletContext } from "react-router-dom";
import Hero from "../../components/HomeComponen/Hero/Hero";
import MainBoddy from "../../components/HomeComponen/MainBoddy/MainBoddy";
// import HeroAnimation from "../../components/HeroAnimation/HeroAnimation";

const Home = () => {
  const { theme } = useOutletContext();
  return (
    <div style={{ position: "relative" }}>
      {/* <HeroAnimation /> */}
      <Hero />
      <MainBoddy theme={theme} />
    </div>
  );
};

export default Home;
