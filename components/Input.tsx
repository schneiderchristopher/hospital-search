import styled from "styled-components";

interface InputProps {
  variant?: "primary" | "secondary" | "accent";
}

const Input = styled.input<InputProps>`
  padding: 0.5em;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  font-size: 1em;
  color: var(--text-color);
  background-color: var(--input-background);
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: border-color 0.3s ease;

  &::placeholder {
    color: var(--input-placeholder);
  }

  &:focus {
    border-color: var(--input-focus-border);
    outline: none;
  }

  ${(props) =>
    props.variant === "primary" &&
    `
      border-color: var(--primary-color);
    `}

  ${(props) =>
    props.variant === "secondary" &&
    `
      border-color: var(--secondary-color);
    `}

  ${(props) =>
    props.variant === "accent" &&
    `
      border-color: var(--accent-color);
    `}
`;

export default Input;
