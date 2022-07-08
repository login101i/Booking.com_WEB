import React from "react";
import styled from "styled-components";

import { Badge } from "@material-ui/core";

const Icon = styled.div`
  color: grey;
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.colors.allegroColor,
    border: `2px solid ${(props) => props.theme.colors.allegroColor}`,
    padding: "0 4px",
    right: -2,
    top: 30,
    color: "white"
  }
}));

export const CustomIcon = ({
  badgeContent,
  size = 30,
  icon,
  color,
  onClick
}) => {
  const IconName = icon;

  return (
    <Icon onClick={onClick}>
      {badgeContent ? (
        <StyledBadge badgeContent={badgeContent}>
          <IconName style={{ fontSize: `${size}px` }} />
        </StyledBadge>
      ) : (
        <IconName
          style={{
            fontSize: `${size}px`,
            color: `${color}`,
            textAlign: "center"
          }}
        />
      )}
    </Icon>
  );
};
