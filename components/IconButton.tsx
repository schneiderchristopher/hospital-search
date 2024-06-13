import styled, { css } from "styled-components";

interface IButtonProps {
  $variant?: "primary" | "secondary" | "accent" | "text";
}

const primary = css`
  color: var(--primary-color);
`;
const secondary = css`
  color: var(--secondary-color);
`;
const accent = css`
  color: var(--accent-color);
`;
const text = css`
  color: var(--text-color);
`;

const Button = styled.button<IButtonProps>`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) => {
    if (props.$variant === "secondary") return secondary;
    if (props.$variant === "accent") return accent;
    if (props.$variant === "text") return text;
    return primary;
  }}
`;

interface IIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "text";
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

const IconButton: React.FC<IIconProps> = ({
  children,
  variant,
  onClick,
  style,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <Button $variant={variant} onClick={handleClick} style={style}>
      {children}
    </Button>
  );
};

export default IconButton;
