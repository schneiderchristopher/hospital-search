import React, { useState } from "react";
import TagItem from "./Tag/Tag";
import { IPlan } from "@/models/plan";
import IconButton from "../../IconButton";
import { FaTrash } from "react-icons/fa6";
import FlexContainer from "../../ContainerFlex";
import DeleteModal from "./DeleteModal/DeleteModal";

import {
  CardContainer,
  Name,
  Location,
  TagsContainer,
} from "./HospitalCard.styled";

interface CardProps {
  name: string;
  location: string;
  tags: IPlan[];
}

const HospitalCard: React.FC<CardProps> = ({ name, location, tags }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleDelete = () => {
    console.log("Delete Hospital");
  };

  return (
    <CardContainer>
      <FlexContainer justify="space-between" align="flex-start" width="100%">
        <FlexContainer direction="column" align="flex-start">
          <Name>{name}</Name>
          <Location>{location}</Location>
        </FlexContainer>
        <IconButton variant="accent" onClick={handleClick}>
          <FaTrash size={18} />
        </IconButton>
      </FlexContainer>
      <TagsContainer>
        {tags.map((tag) => (
          <TagItem key={tag.id} name={tag.name} />
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
