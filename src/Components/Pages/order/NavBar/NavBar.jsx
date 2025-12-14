import styled from "styled-components";
import Logo from "../../reusable-ui/Logo.jsx";
import Profile from "./Profile.jsx";
import ToggleButton from "./ToggleButton.jsx";
import { theme } from "../../../../theme/index.js";

export default function NavBar({ username }) {
  return (
    <NavBarStyled>
      <div className="left-side">
        <Logo className="logo-order-page"onClick={() => {window.location.reload();}} />
      </div>
      <div className="right-side">
        <ToggleButton />
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
    .logo-order-page{
      cursor:pointer;
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
