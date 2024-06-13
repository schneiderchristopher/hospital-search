import styled, { css } from "styled-components";

interface ButtonProps {
  $variant?: "primary" | "secondary" | "accent";
}

const primary = css`
  background-color: var(--primary-color);
  color: #ffffff;
`;
const secondary = css`
  background-color: var(--secondary-color);
  color: #ffffff;
`;
const accent = css`
  background-color: var(--accent-color);
  color: #ffffff;
`;

const Button = styled.button<ButtonProps>`
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: background-color 0.3s ease;

  ${(props) => {
    if (props.$variant === "secondary") return secondary;
    if (props.$variant === "accent") return accent;
    return primary;
  }}

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
