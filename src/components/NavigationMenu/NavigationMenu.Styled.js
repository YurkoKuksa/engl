import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationMenuContainer = styled.nav`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  width: 100%;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  /* color: #ced6de; */
  color: #574129;
  font-size: 20px;
  font-weight: 500;
  padding: 12px 16px;
  border-radius: 4px;
  display: block;
  width: 100%;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateX(-5px);
    text-decoration: underline;
    /* color: #ffffff; */
    color: #231a10;
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 700;
      text-decoration: underline;
      /* color: #ffffff; */
      color: #231a10;
      background-color: rgba(255, 255, 255, 0.15);

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    `}

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
