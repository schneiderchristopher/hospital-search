import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1em;
  background-color: var(--surface-color);
  box-shadow: 0 2px 4px var(--shadow-color);
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  margin: 1em 0;
`;

export const Name = styled.h3`
  margin: 0 0 0.25em 0;
  color: var(--heading-color);
`;

export const Location = styled.p`
  margin: 0;
  color: var(--paragraph-color);
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 0.5em;
`;
