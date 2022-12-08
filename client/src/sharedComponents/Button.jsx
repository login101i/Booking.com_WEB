import React from "react";
import styled from "styled-components";
import { Flex } from "./Flex";

const ButtonContainer = styled.button`
  width: auto;
  height: 40px;
  border: 2px solid white;
  color: ${(props) =>
    props.backGrWhite ? props.theme.colors.primary : props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.backGrWhite
      ? "white"
      : props.backGr
      ? props.theme.colors[props.backGr]
      : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "2px 10px")};
  padding: 5px 20px;
  border: ${(props) => props.backGrWhite && props.theme.colors.primary};
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : "black")};
  border-radius: ${(props) => (props.radius ? props.radius : "")};
  font-size: 20px;
`;
export const Button = ({
  backGrWhite,
  backGr,
  color,
  style,
  radius,
  title,
  rightIcon,
  margin,
  children,
  onClick
}) => {
  return (
    <ButtonContainer
      backGrWhite={backGrWhite}
      color={color}
      backGr={backGr}
      radius={radius}
      style={style}
      rightIcon={rightIcon}
      margin={margin}
      onClick={onClick}
    >
      <Flex center backGr="inherit">
        {" "}
        {title}
        {children}
        {rightIcon}
      </Flex>
    </ButtonContainer>
  );
};
