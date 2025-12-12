import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
        <h1>Bonjour {username}</h1>
          navbar
        <Link to="/">
          <button>Déconnexion</button>
        </Link>

        </div>
        <div className="main">
          main
        </div>
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


    .navbar{
      height:10vh;
      width:100%;
      background:blue;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    .main{
      width:100%;
      background:green;
      flex:1;
    
    }
    
    
    }
`