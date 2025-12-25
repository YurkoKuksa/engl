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
    { path: "/articles", label: "Articles" },
    { path: "/certification", label: "Certification" },
  ];

  return (
    <NavigationMenuContainer>
      <NavList>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} $isActive={location.pathname === item.path}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </NavList>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
