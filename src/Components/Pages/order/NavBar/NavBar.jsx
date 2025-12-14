import styled from "styled-components";
import Logo from "../../reusable-ui/Logo.jsx";
import Profile from "./Profile.jsx";
import ToggleButton from "./ToggleButton.jsx";
import { theme } from "../../../../theme/index.js";
import { toast } from "react-toastify";
import { useState } from "react";

export default function NavBar({ username }) {

  const [isAdminMode, setIsAdminMode] = useState(false);
  
const handleToggleAdminMode = () => {
  if (!isAdminMode) {
    setIsAdminMode(true);
    toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
  } else {
    setIsAdminMode(false);
  }
};
  return (
    <NavBarStyled>
      <div className="left-side">
        <Logo className="logo-order-page"onClick={() => {window.location.reload();}} />
      </div>
      <div className="right-side">
        <ToggleButton 
        labelIfChecked="Désactiver le mode admin" 
        labelIfUnchecked="Activer le mode admin"
        isChecked={isAdminMode}
        onToggle={handleToggleAdminMode}
        
        />
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
  }
  .right-side { 
    height: 100%;
    display: flex;
    flex-direction: row;
    gap:50px;
    align-items: center;
    padding-right: ${theme.spacing.xl};
}

    
`;
