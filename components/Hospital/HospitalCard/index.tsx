import React, { Dispatch, SetStateAction, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import Tag from "./Tag";
import IconButton from "../../IconButton";
import FlexContainer from "../../FlexContainer";
import DeleteModal from "./DeleteModal";
import { IPlan } from "@/models/plan";
import { IHospital } from "@/models/hospital";
import { removeHospital } from "@/utils/seeder";

import * as S from "./styles";

interface CardProps {
  id: number;
  name: string;
  location: string;
  plans: IPlan[];
  hospitals: IHospital[];
  setHospitals: Dispatch<SetStateAction<IHospital[]>>;
}

const HospitalCard: React.FC<CardProps> = ({
  id,
  name,
  location,
  plans,
  hospitals,
  setHospitals,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleDelete = () => {
    setHospitals(
      removeHospital({
        hospital: { id, name, location, plans },
        hospitalsRef: hospitals,
      })
    );
    setIsOpen(false);
  };

  return (
    <S.CardContainer>
      <FlexContainer $justify="space-between" $align="flex-start" $width="100%">
        <FlexContainer $direction="column" $align="flex-start">
          <S.Name>{name}</S.Name>
          <S.Location>{location}</S.Location>
        </FlexContainer>
        <IconButton variant="accent" onClick={handleClick}>
          <FaTrash size={18} />
        </IconButton>
      </FlexContainer>
      <S.TagsContainer>
        {plans.map((plans) => (
          <Tag key={plans.id} name={plans.name} />
        ))}
      </S.TagsContainer>
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </S.CardContainer>
  );
};

export default HospitalCard;
