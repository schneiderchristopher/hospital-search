import styled, { css } from "styled-components";

interface InputProps {
  $variant?: "primary" | "secondary" | "accent";
  $error?: boolean;
}

const primary = css`
  border-color: var(--primary-color);
`;
const secondary = css`
  border-color: var(--secondary-color);
`;
const accent = css`
  border-color: var(--accent-color);
`;

const Input = styled.input<InputProps>`
  padding: 0.5em;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  font-size: 1em;
  color: var(--text-color);
  background-color: var(--input-background);
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: border-color 0.3s ease;
  width: 100%;

  &::placeholder {
    color: var(--input-placeholder);
  }

  &:focus {
    ${(props) => {
      if (props.$error) return accent;
      return css`
        border-color: var(--input-focus-border);
      `;
    }}
    outline: none;
  }

  ${(props) => {
    if (props.$variant === "secondary") return secondary;
    if (props.$variant === "accent" || props.$error) return accent;
    return primary;
  }}
`;

export default Input;
