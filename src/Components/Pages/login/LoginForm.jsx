import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../index.js";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "./TextInput.jsx";
import { BsPersonCircle } from "react-icons/bs";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const [inputValue, setInputValue] = useState("");

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h2> Bienvenue chez nous !</h2>
      <hr />
      <p> Connectez-vous</p>
      <TextInput Icon={<BsPersonCircle className="icon"/>} required value={inputValue} onChange={handleChange} placeholder="Entrez votre prénom" />
      <button className="button-icon" type="submit">
        <span>Accéder a votre espace</span>
        <IoChevronForward />
      </button>
    </LoginFormStyled>
  );
}
export default LoginForm;

const LoginFormStyled = styled.form`
  color:${theme.colors.white};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:${theme.spacing.sm};

    h2{
      font-size:${theme.fonts.P4};
      margin-bottom:${theme.spacing.md};
      text-transform:uppercase;
      font-family:'amatic sc', cursive;
      margin:0;
    }

    p{
      font-size:${theme.fonts.P2};
    }
      
    hr{
      width:100%;
      color:${theme.colors.primary};
}
   
      .button-icon{
      padding:${theme.spacing.md} ${theme.spacing.xl};
      background-color:${theme.colors.primary};
      width:100%;
      color:${theme.colors.white};
      border-radius:${theme.borderRadius.round};
      display:flex;
      justify-content:center;
      align-items:center;

      &:hover{
        cursor:pointer;
        background-color:${theme.colors.background_white} ;
        color:${theme.colors.primary} ;
      }
    `;
