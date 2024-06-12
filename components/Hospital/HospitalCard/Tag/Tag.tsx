import styled from "styled-components";

interface Tag {
  name: string;
}

const Tag = styled.div`
  padding: 0.3em 0.6em;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 4px;
  font-size: 0.875em;
`;

const TagItem: React.FC<Tag> = ({ name }) => {
  return <Tag>{name}</Tag>;
};

export default TagItem;
