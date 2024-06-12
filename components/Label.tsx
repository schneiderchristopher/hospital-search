import styled from "styled-components";

interface ILabelProps {
  htmlFor: string;
  children: React.ReactNode;
  errorMesssage?: string;
  required?: boolean;
}

const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  span {
    font-size: 0.8em;
    color: red;
    margin-left: 5px;
  }
`;

const Label: React.FC<ILabelProps> = ({
  htmlFor,
  children,
  errorMesssage,
  required,
}) => {
  return (
    <LabelStyle htmlFor={htmlFor}>
      {children}
      {required && <span>*</span>}
      {errorMesssage && <span>{errorMesssage}</span>}
    </LabelStyle>
  );
};

export default Label;
