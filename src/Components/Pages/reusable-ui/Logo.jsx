import React from 'react'
import styled from 'styled-components';
import logo from '/home/quxly/Bureau/crazy-burger/public/images/logo.png'
const Logo = () => {
  return (
    <LogoStyled>
      CRAZEE
      <img src={logo} alt="Logo Crazy Burger" width={28} />
      BURGER
      </LogoStyled>
  )
}

export default Logo;

const LogoStyled= styled.div`
  `;