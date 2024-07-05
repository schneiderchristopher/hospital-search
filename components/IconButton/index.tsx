import React from "react";
import * as S from "./styles";

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
    <S.Button $variant={variant} onClick={handleClick} style={style}>
      {children}
    </S.Button>
  );
};

export default IconButton;
