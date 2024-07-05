import React, { forwardRef } from "react";
import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $variant?: "primary" | "secondary" | "accent";
  $error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <S.Input ref={ref} {...props} />;
});

Input.displayName = "Input";

export default Input;
