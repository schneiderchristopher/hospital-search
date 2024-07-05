import { MouseEventHandler } from "react";
import * as S from "./styles";

interface IPaginationButton {
  number: number;
  active: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const PaginationButton: React.FC<IPaginationButton> = ({
  number,
  active,
  onClick,
}) => {
  return (
    <S.PaginationButton
      onClick={onClick}
      className={`pagination-button ${active ? "active" : ""}`}
    >
      {number}
    </S.PaginationButton>
  );
};

export default PaginationButton;
