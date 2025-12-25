import Hero from "../../components/HomeComponen/Hero/Hero";
import MainBoddy from "../../components/HomeComponen/MainBoddy/MainBoddy";
import { useOutletContext } from "react-router-dom";
// import HeroAnimation from "../../components/HeroAnimation/HeroAnimation";

const Home = () => {
  const { theme } = useOutletContext();
  return (
    <div style={{ position: "relative" }}>
      {/* <HeroAnimation /> */}
      <Hero theme={theme} />
      <MainBoddy theme={theme} />
    </div>
  );
};

export default Home;
