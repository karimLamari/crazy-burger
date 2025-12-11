import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../index.js";
import { IoChevronForward } from "react-icons/io5";
import Input from "./Input.jsx";
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
      <Input required value={inputValue} onChange={handleChange} placeholder="Entrez votre prénom" />
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
    .input-container{
      background-color:${theme.colors.background_white};
      display:flex;
      align-items:center;
      gap:${theme.spacing.xs};
      border-radius:${theme.borderRadius.round};
      width:100%;
      .icon{
        margin-left:${theme.spacing.xs};
        }
}
      input{
        border:none;
        font-size:${theme.fonts.P1};
        padding:${theme.spacing.xs};

}
      .button-icon{
      padding:${theme.spacing.sm} ${theme.spacing.lg};
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
