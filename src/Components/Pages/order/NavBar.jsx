import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../reusable-ui/Logo.jsx";
import { theme } from "../../../theme/index.js";
import Profile from "./Profile.jsx";

export default function NavBar({ username }) {
  return (
    <NavBarStyled>
      <div className="left-side">
        <Logo />
      </div>
      <div className="right-side">
        {/* <div className="admin-button">adminButton</div> */}
      <Profile username={username} />
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 10vh;
  background: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};


  .left-side {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacing.md};
  }
  .right-side {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing.lg};
    padding-right: ${theme.spacing.xl};
}

    }
`;
