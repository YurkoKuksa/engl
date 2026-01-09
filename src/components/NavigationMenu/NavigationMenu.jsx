import { useLocation } from "react-router-dom";
import {
  NavigationMenuContainer,
  NavLink,
  NavList,
} from "./NavigationMenu.Styled";

const NavigationMenu = ({ onNavigate }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Main" },
    { path: "/c", label: "Articles" },
    // { path: "/sources", label: "Sources" },
    // { path: "/c3", label: "Certification" },
    { path: "/contacts", label: "Contacts" },
    // youtube videos
    // resume
    //supporting documents with password
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleNavigate = () => {
    scrollToTop();
    if (onNavigate) {
      onNavigate();
    }
  };

  // Normalize pathname for comparison (remove trailing slashes, handle root path)
  const normalizePath = (path) => {
    if (path === "/" || path === "") return "/";
    return path.replace(/\/$/, "");
  };

  const isActive = (itemPath) => {
    const normalizedPathname = normalizePath(location.pathname);
    const normalizedItemPath = normalizePath(itemPath);

    // For root path, match exactly
    if (normalizedItemPath === "/") {
      return normalizedPathname === "/";
    }

    // For other paths, exact match
    return normalizedPathname === normalizedItemPath;
  };

  return (
    <NavigationMenuContainer>
      <NavList>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              $isActive={isActive(item.path)}
              onClick={handleNavigate}
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
