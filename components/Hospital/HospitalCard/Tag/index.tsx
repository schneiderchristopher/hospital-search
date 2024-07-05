import * as S from "./styles";

interface ITag {
  name: string;
}

const Tag: React.FC<ITag> = ({ name }) => {
  return <S.Tag>{name}</S.Tag>;
};

export default Tag;
