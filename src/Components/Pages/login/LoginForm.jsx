import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../index.js";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../reusable-ui/TextInput.jsx";
import { BsPersonCircle } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import PrimaryButton from "../reusable-ui/PrimaryButton.jsx";

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
  const handleMotDePasseChange = (e) => {
    setMotDePasse(e.target.value);
  };
  const [inputValue, setInputValue] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h2> Bienvenue chez nous !</h2>
      <hr />
      <p> Connectez-vous</p>
      <TextInput Icon={<BsPersonCircle className="icon"/>} required value={inputValue} onChange={handleChange} placeholder="Entrez votre prénom" />
      <TextInput Icon={<IoLockClosed className="icon"/>} required value={motDePasse} onChange={handleMotDePasseChange} type="password" placeholder="Entrez votre mot de passe" />
      <PrimaryButton label="Accéder à votre espace" Icon={<IoChevronForward />} />

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
   

    `;
