import styled from "styled-components";

import { tokens } from "../../pages/Resume/Resume.Styled";

export const BackButton = styled.button`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border: 1px solid ${tokens.text};
  border-radius: 8px;
  background: ${tokens.panel};
  color: ${tokens.paper};
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;

  &:hover {
    border-color: ${tokens.ink};
    background: ${tokens.btnHover};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.accent};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 640px) {
    span {
      display: none;
    }
    padding: 8px;
  }
`;
