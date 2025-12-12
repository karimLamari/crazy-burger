import styled from "styled-components";

import { useState } from "react";
import Menu from "./Menu";
import {fakeMenu1,fakeMenu2} from "../../../../data/fakeMenu";
import { theme } from "../../../../theme";

export default function Main() {
const [menus, setMenus] = useState([...fakeMenu1, ...fakeMenu2]);

  return (
    <MainStyled>
      {/* <div className="basket"></div> */}
      <Menu menus={menus} />

    </MainStyled>
  )
}

const MainStyled=styled.div`
      display:grid;
      width:100%;
      background:${theme.colors.background_white};
      box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
        flex:1;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};

      .basket{
      }

`;