import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationMenuContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 700;
      text-decoration: underline;
    `}

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
