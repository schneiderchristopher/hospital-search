import React, { useState } from "react";
import * as S from "./styles";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <S.SearchContainer>
      <S.SearchIcon />
      <S.SearchInput
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
    </S.SearchContainer>
  );
};

export default Search;
