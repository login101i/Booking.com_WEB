import React from "react";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Flex } from "../sharedComponents";
import { UseComponentVisible } from "../utils/UseComponentVisible";
const MainContainer = styled.div`
  position: relative;
  border: 3px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
  background-color: ${(props) =>
    props.backGr ? props.theme.colors[props.backGr] : "white"};
`;

const Container = styled.input`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + "px" : "none"};
  height: ${(props) => (props.height ? props.height : "")};

  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => (props.color ? props.color : "grey")};
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: pre-wrap;
  white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  background-color: inherit;

  outline: none;
  border: none;

  ::placeholder {
    color: ${(props) => props.color};
    text-align: ${(props) => (props.center ? "center" : "")};
  }
`;

const LeftContainer = styled.div``;
const RightContainer = styled.div``;

const ComponentContainer = styled.div`
  position: absolute;
  top: 66px;
  left: -2px;
`;

export const CustomInput = ({
  borderRadius = "8px",
  width,
  leftIcon,
  rightIcon,
  height = "50px",
  backGr,
  color,
  wrap,
  placeholder,
  center,
  component,
  children
}) => {

  return (
    <MainContainer backGr={backGr}>
      <LeftContainer>{leftIcon}</LeftContainer>
      <Container
        borderRadius={borderRadius}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        height={height}
        color={color}
        wrap={wrap}
        placeholder={placeholder}
        center={center}
      />
        <ComponentContainer>
          {  component}
        </ComponentContainer>
     

      {rightIcon && <RightContainer>{rightIcon}</RightContainer>}
    </MainContainer>
  );
};
