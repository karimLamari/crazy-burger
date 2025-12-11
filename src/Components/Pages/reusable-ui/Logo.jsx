import React from 'react'
import styled from 'styled-components';
import {theme} from "../../../index.js";

const Logo = () => {
  return (
    <LogoStyled>
      <h1>CRAZEE 
        <img src="/images/logo.png" alt="Logo Crazee Burger"  />
        BURGER</h1>
      </LogoStyled>
  )
}

export default Logo;

const LogoStyled= styled.div`
color: white;
display:flex;
justify-content:center;
align-items:center;

h1{
display:inline;
color:${theme.colors.primary};
font-size:${theme.fonts.P6};
font-weight:${theme.weights.bold};
text-transform:uppercase;
letter-spacing:1.5px;
font-family:'amatic sc', cursive;
margin-bottom:${theme.spacing.md};

img{
object-fit:cover;
object-position:center;
margin:0 ${theme.spacing.xs};
height:60px;
width:80px;
}
}
`;