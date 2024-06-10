import styled from "styled-components";

interface TypographyProps {
  color?: string;
}

export const H1 = styled.h1<TypographyProps>`
  font-size: var(--font-size-h1);
  color: ${(props) => props.color || "var(--heading-color)"};
  margin: 0.67em 0;
`;

export const H2 = styled.h2<TypographyProps>`
  font-size: var(--font-size-h2);
  color: ${(props) => props.color || "var(--heading-color)"};
  margin: 0.83em 0;
`;

export const H3 = styled.h3<TypographyProps>`
  font-size: var(--font-size-h3);
  color: ${(props) => props.color || "var(--heading-color)"};
  margin: 1em 0;
`;

export const H4 = styled.h4<TypographyProps>`
  font-size: var(--font-size-h4);
  color: ${(props) => props.color || "var(--heading-color)"};
  margin: 1.33em 0;
`;

export const H5 = styled.h5<TypographyProps>`
  font-size: var(--font-size-h5);
  color: ${(props) => props.color || "var(--heading-color)"};
  margin: 1.67em 0;
`;

export const H6 = styled.h6<TypographyProps>`
  font-size: var(--font-size-h6);
  color: ${(props) => props.color || "var(--heading-color)"};
  margin: 2.33em 0;
`;

export const Paragraph = styled.p<TypographyProps>`
  font-size: var(--font-size-body);
  color: ${(props) => props.color || "var(--paragraph-color)"};
  margin: 1em 0;
  line-height: 1.5;
`;

export const Small = styled.small<TypographyProps>`
  font-size: 0.875em;
  color: ${(props) => props.color || "var(--paragraph-color)"};
`;

export const Text = styled.span<TypographyProps>`
  color: ${(props) => props.color || "var(--text-color)"};
`;
