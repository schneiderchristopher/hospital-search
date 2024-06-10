import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
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
    if (props.variant === "secondary") return secondary;
    if (props.variant === "accent") return accent;
    return primary;
  }}
  &.primary {
    background-color: var(--button-primary-bg);
    color: var(--button-primary-text);
  }

  &.secondary {
    background-color: var(--button-secondary-bg);
    color: var(--button-secondary-text);
  }

  &.accent {
    background-color: var(--button-accent-bg);
    color: var(--button-accent-text);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
