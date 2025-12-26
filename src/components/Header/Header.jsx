import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent page scroll when menu is open (only on mobile/tablet)
  useEffect(() => {
    if (isMobile()) {
      if (isMenuOpen) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      } else {
        // Restore scroll when menu closes on mobile
        document.body.style.overflow = "";
      }
    }
    // On desktop, don't prevent scrolling
  }, [isMenuOpen]);

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
            <Navigator onNavigate={() => setIsMenuOpen(false)} />
          </NavigationContent>
        </NavigationWrapper>
      </HoverArea>
    </HeaderContainer>
  );
};

export default Header;
