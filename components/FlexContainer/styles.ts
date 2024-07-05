import styled from "styled-components";
import { IFlexContainerProps } from ".";

interface IFlexContainerStyleProps extends IFlexContainerProps {}

export const FlexContainer = styled.div<IFlexContainerStyleProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  align-items: ${(props) => props.$align || "stretch"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  flex-wrap: ${(props) => props.$wrap || "nowrap"};
  gap: ${(props) => props.$gap || "0"};
  padding: ${(props) => props.$padding || "0"};
  margin: ${(props) => props.$margin || "0"};
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  background-color: ${(props) => props.$bgcolor || "transparent"};
  position: ${(props) => props.$position || "static"};
  top: ${(props) => props.$top || "auto"};
  right: ${(props) => props.$right || "auto"};
  bottom: ${(props) => props.$bottom || "auto"};
  left: ${(props) => props.$left || "auto"};
`;
