import { useLocation } from "react-router-dom";
import {
  NavigationMenuContainer,
  NavLink,
  NavList,
} from "./NavigationMenu.Styled";

const NavigationMenu = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Main" },
    { path: "/underсonstruction", label: "Articles" },
    { path: "/underсonstruction", label: "Certification" },
    { path: "/underсonstruction", label: "Sources" },
    { path: "/underсonstruction", label: "FeedBack" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <NavigationMenuContainer>
      <NavList>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              $isActive={location.pathname === item.path}
              onClick={scrollToTop}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </NavList>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
