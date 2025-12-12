import styled from "styled-components";
import { theme } from "../../../theme";
import { useState } from "react";
import Menu from "./Menu";
import {fakeMenu1,fakeMenu2} from "../../../data/fakeMenu";

export default function Main() {
const [menus, setMenus] = useState([...fakeMenu1, ...fakeMenu2]);

  return (
    <MainStyled>
      <Menu menus={menus} />

    </MainStyled>
  )
}

const MainStyled=styled.div`
      width:100%;
      background:${theme.colors.background_white};
      box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
        flex:1;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};

        

`;