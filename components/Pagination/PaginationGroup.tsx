import PaginationButton from "./PaginationButton";
import FlexContainer from "../ContainerFlex";

interface IPaginationGroup {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const PaginationGroup: React.FC<IPaginationGroup> = ({
  currentPage,
  totalPages,
  onChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <FlexContainer $justify="center" $align="center" $margin="20px 0">
      {pages.map((page) => (
        <PaginationButton
          key={page}
          number={page}
          active={page === currentPage}
          onClick={() => onChange(page)}
        />
      ))}
    </FlexContainer>
  );
};

export default PaginationGroup;
