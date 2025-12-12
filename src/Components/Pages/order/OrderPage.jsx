import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../order/NavBar.jsx";
import Main from "./Main.jsx";
function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar username={username} />
      <Main />
      </div>
    </OrderPageStyled>
  );
}

export default OrderPage;

const OrderPageStyled=styled.div`
  background-color:orange;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items;center;
  
  

  .container{
    background:red;
    height:95vh;
    max-width:1400px;
    display:flex;
    flex-direction:column;
    
    }
`