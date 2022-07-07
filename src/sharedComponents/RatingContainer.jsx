import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 12px;
  font-size: 13px;
`;

export const RatingContainer = ({ rating = 9.5, size = "22px" }) => {
  return <MainContainer size={size}>{rating}</MainContainer>;
};
