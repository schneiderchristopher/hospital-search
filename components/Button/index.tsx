import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};
export default Button;
