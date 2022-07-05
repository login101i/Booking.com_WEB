import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => (props.space ? "space-between" : "")};
  align-items: ${(props) => (props.space ? "center" : "")};
  width: ${(props) => (props.width ? props.width : "")};
  background-color: ${(props) =>
    props.backGr ? props.theme.colors[props.backGr] : props.theme.colors.white};
  margin: ${(props) => (props.margin ? props.margin : "")};
  height: ${(props) => (props.height ? props.height : "")};
`;

export const Flex = ({
  column,
  space,
  width,

  height,
  backGr,
  margin,
  center,
  children
}) => {
  return (
    <Container
      column={column}
      space={space}
      width={width}
      backGr={backGr}
      height={height}
      margin={margin}
      center={center}
    >
      {children}
    </Container>
  );
};
