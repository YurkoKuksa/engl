import { useOutletContext } from "react-router-dom";
import { AnimatedBackground, Particle } from "./useAnimatedBackground.Styled";

const useAnimatedBackground = () => {
  const { theme } = useOutletContext();
  return (
    <div>
      <AnimatedBackground theme={{ mode: theme }}>
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            style={{
              "--delay": `${Math.random() * 5}s`,
              "--duration": `${10 + Math.random() * 20}s`,
              "--x": `${Math.random() * 100}%`,
              "--y": `${Math.random() * 100}%`,
            }}
          />
        ))}
      </AnimatedBackground>
    </div>
  );
};

export default useAnimatedBackground;
