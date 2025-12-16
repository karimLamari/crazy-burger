import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
export default function Tab({ label,Icon, onClick, className = "className" }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon}</div>
      <span className="label">{label}</span>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 5%;
  top: 1px;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  border-width: 1px 1px 2px 2px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0 0;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }
  .icon {
    display: flex;
  }
  
`;
