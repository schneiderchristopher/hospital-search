import * as S from "./styles";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  $errorMesssage?: string;
  $required?: boolean;
}
const Label: React.FC<ILabelProps> = ({
  htmlFor,
  children: children,
  $errorMesssage: errorMesssage,
  $required: required,
  ...props
}) => {
  return (
    <S.Label {...props}>
      {children}
      {required && <span>*</span>}
      {errorMesssage && <span>{errorMesssage}</span>}
    </S.Label>
  );
};

export default Label;
