import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar({ username }) {
  return (
        <NavBarStyled>
        <h1>Bonjour {username}</h1>
          navbar
        <Link to="/">
          <button>Déconnexion</button>
        </Link>

        </NavBarStyled>
  )
}

const NavBarStyled=styled.div`
    height:10vh;
    background:blue;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;