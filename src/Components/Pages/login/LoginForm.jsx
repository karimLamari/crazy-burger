import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../index.js";
import { BsPersonCircle } from "react-icons/bs";

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
      <h2> Bienvenue chez nous !</h2>
      <hr />
      <p> Connectez-vous</p>
      <div className="input-container">
        <BsPersonCircle
        color={theme.colors.greyDark}
        size={24}
        className="icon"

        />    
         <input
        type="text"
        placeholder="Entrez votre prénom"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      </div>

      <button type="submit">Accéder a votre espace</button>
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
      font-size:${theme.fonts.P5};
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
      padding:${theme.spacing.xs};
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
        
    `;
