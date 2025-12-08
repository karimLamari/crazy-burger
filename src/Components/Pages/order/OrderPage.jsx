import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function OrderPage() {
  const { username } = useParams();

  return (
    <>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
}

export default OrderPage;
