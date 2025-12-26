import { useState, useEffect, useRef } from "react";
import {
  HeaderContainer,
  BurgerMenuWrapper,
  NavigationWrapper,
  NavigationContent,
  HoverArea,
} from "./Header.Styled";
import { ReactComponent as BurgerMenuIcon } from "../../assets/svg/burgermenue.svg";
import Navigator from "./Navigator/Navigator";

const Header = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isMobile = () => {
    return (
      window.matchMedia("(max-width: 767px)").matches ||
      "ontouchstart" in window
    );
  };

  const handleMouseEnter = () => {
    // Only use hover on desktop
    if (!isMobile()) {
      setIsMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    // Only use hover on desktop
    if (!isMobile()) {
      setIsMenuOpen(false);
    }
  };

  const handleBurgerClick = (e) => {
    // On mobile, toggle menu on click
    if (isMobile()) {
      e.stopPropagation();
      setIsMenuOpen((prev) => !prev);
    }
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile() && isMenuOpen && menuRef.current) {
        if (!menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    if (isMenuOpen && isMobile()) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <HoverArea
        ref={menuRef}
        $isOpen={isMenuOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <BurgerMenuWrapper $theme={theme} onClick={handleBurgerClick}>
          <BurgerMenuIcon />
        </BurgerMenuWrapper>
        <NavigationWrapper $isOpen={isMenuOpen}>
          <NavigationContent $isOpen={isMenuOpen}>
            <Navigator />
          </NavigationContent>
        </NavigationWrapper>
      </HoverArea>
    </HeaderContainer>
  );
};

export default Header;
