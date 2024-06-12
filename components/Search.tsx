import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
  max-width: 400px;
  background-color: var(--input-background);
  box-shadow: 0 2px 4px var(--shadow-color);
  user-select: none;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 0.5em;
  font-size: 1em;
  background-color: var(--input-background);
  color: var(--text-color);
  &::placeholder {
    color: var(--input-placeholder);
  }
`;

const SearchIcon = styled(FaSearch)`
  color: var(--input-placeholder);
  margin-right: 0.5em;
  user-select: none;
`;

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
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default Search;
