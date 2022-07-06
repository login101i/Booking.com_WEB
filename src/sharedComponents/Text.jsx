import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size]
      : props.title
      ? props.theme.fontSizes.title
      : "14px"};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "")};
  color: ${(props) =>
    props.white ? props.theme.colors.text.primary : props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  margin-bottom: ${(props) =>
    props.marginBtm ? props.theme.space[props.marginBtm] : ""};
  white-space: pre-wrap;
  white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  padding:5px
`;

export const Text = ({
  title,
  size,
  uppercase,
  marginBtm,
  wrap,
  color,
  white,
  children
}) => {
  return (
    <MainContainer
      size={size}
      title={title}
      marginBtm={marginBtm}
      uppercase={uppercase}
      wrap={wrap}
      color={color}
      white={white}
    >
      {children}
    </MainContainer>
  );
};
