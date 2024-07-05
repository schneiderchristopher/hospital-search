import * as S from "./styles";

export interface IFlexContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  $direction?: "row" | "column";
  $align?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  $justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
  $gap?: string;
  $padding?: string;
  $margin?: string;
  $width?: string;
  $height?: string;
  $bgcolor?: string;
  $position?: "relative" | "absolute" | "fixed" | "sticky";
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
}

const FlexContainer: React.FC<IFlexContainerProps> = (props) => {
  return <S.FlexContainer {...props} />;
};

export default FlexContainer;
