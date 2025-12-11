import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../../index.js";


function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  return (
      <LoginFormStyled onSubmit={handleSubmit}>
        <h1> Bienvenue chez nous !</h1>
        <br/>
        <p> Connectez-vous</p>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Accéder a votre espace</button>
      </LoginFormStyled>
  );
}
export default LoginForm;

const LoginFormStyled= styled.form`
  color:${theme.colors.white};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `;
