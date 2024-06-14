import React, { Dispatch, SetStateAction, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import TagItem from "./Tag/Tag";
import IconButton from "../../IconButton";
import FlexContainer from "../../ContainerFlex";
import DeleteModal from "./DeleteModal/DeleteModal";
import { IPlan } from "@/models/plan";
import { IHospital } from "@/models/hospital";
import { removeHospital } from "@/utils/seeder";

import {
  CardContainer,
  Name,
  Location,
  TagsContainer,
} from "./HospitalCard.styled";

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
    <CardContainer>
      <FlexContainer $justify="space-between" $align="flex-start" $width="100%">
        <FlexContainer $direction="column" $align="flex-start">
          <Name>{name}</Name>
          <Location>{location}</Location>
        </FlexContainer>
        <IconButton variant="accent" onClick={handleClick}>
          <FaTrash size={18} />
        </IconButton>
      </FlexContainer>
      <TagsContainer>
        {plans.map((plans) => (
          <TagItem key={plans.id} name={plans.name} />
        ))}
      </TagsContainer>
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </CardContainer>
  );
};

export default HospitalCard;
