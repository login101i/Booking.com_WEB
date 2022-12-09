import React, { useState } from "react";
import styled from "styled-components";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Text } from "./Text";

const DirectionButton = styled.button`
  height: 42px;
  width: 42px;
  padding: 4px;
  background-color: white;
  opacity: 0.8;
  border-radius: 2px;
  border: 2px solid darkGrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 45%;
  transform: translate(0%, -65%);

  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "40px"};
  z-index: 2;
  color: darkGrey;
  display: none;
  background: white;
  transition: 0.3s;
  padding-top: 12px;

  &:hover {
    border: 2px solid darkGrey;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(${(props) => props.slideIndex * -1082}px);
  transition: all 0.5s ease-in-out;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  // padding: 10px 15px;
  overflow: hidden;
  position: relative;
  opacity: 1;
  flex: 1;
  overflow-x: ${(props) => (props.isMobile ? " scroll" : "none")};
  transition: 0.3s;
  height: ${(props) => (props.isMobile ? "100px" : "300px")};
  color: black;

  &: hover ${DirectionButton} {
    display: block;
  }
`;

export const DirectionArrows = ({ children, style }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } else {
      setSlideIndex(slideIndex >= 0 ? slideIndex + 1 : 0);
      if (slideIndex === 1) setSlideIndex(0);
    }
  };

  return (
    <Container style={style}>
      {slideIndex > 0 && (
        <DirectionButton direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosNewIcon />
        </DirectionButton>
      )}
      <Wrapper slideIndex={slideIndex}>{children}</Wrapper>

      <DirectionButton direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </DirectionButton>
    </Container>
  );
};
