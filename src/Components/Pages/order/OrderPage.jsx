import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>

      </div>
    </OrderPageStyled>
  );
}

export default OrderPage;

const OrderPageStyled=styled.div`
  background-color:orange;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items;center;

  .container{
  background:red;
  height:95vh}
  max-width:1400px;
  }
`