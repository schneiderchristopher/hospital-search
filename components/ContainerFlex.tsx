import styled from "styled-components";

interface FlexContainerProps {
  direction?: "row" | "column";
  align?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  bgColor?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.bgColor || "transparent"};
`;

export default FlexContainer;
