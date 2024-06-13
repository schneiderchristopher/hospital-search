import { MouseEventHandler } from "react";
import styled from "styled-components";

interface IPaginationButton {
  number: number;
  active: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const PaginationButtonStyle = styled.button`
  background-color: var(--button-primary-bg);
  border: 1px solid var(--button-border-color);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: var(--background-color);
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  margin-right: 5px;
  padding: 0 15px;
  transition: background-color 0.3s, color 0.3s;
  user-select: none;

  &:hover {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  &.active {
    background-color: var(--background-color);
    border: 1px solid var(--button-border-color);
    box-shadow: 0 2px 4px rgba(0, 0, 255, 0.4);
    color: var(--text-color);

    &:hover {
      background-color: var(--background-color);
      color: var(--text-color);
      border: 1px solid var(--button-border-color);
    }
  }
`;

const PaginationButton: React.FC<IPaginationButton> = ({
  number,
  active,
  onClick,
}) => {
  return (
    <PaginationButtonStyle
      onClick={onClick}
      className={`pagination-button ${active ? "active" : ""}`}
    >
      {number}
    </PaginationButtonStyle>
  );
};

export default PaginationButton;
