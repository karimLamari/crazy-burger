import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IoChevronForward } from "react-icons/io5";
import TextInput from "../reusable-ui/TextInput.jsx";
import { BsPersonCircle } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import PrimaryButton from "../reusable-ui/PrimaryButton.jsx";
import { theme } from "../../../theme/index.js";

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
      <TextInput
        Icon={<BsPersonCircle className="icon" />}
        required
        value={inputValue}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
      />
      <PrimaryButton
        label="Accéder à votre espace"
        Icon={<IoChevronForward />}
      />
    </LoginFormStyled>
  );
}
export default LoginForm;

const LoginFormStyled = styled.form`
  color: ${theme.colors.white};
  max-width: 500px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.lg};
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-family: "amatic sc", cursive;

  h2 {
    font-size: ${theme.fonts.P5};
    margin-bottom: ${theme.spacing.md};
    text-transform: uppercase;
    font-family: "amatic sc", cursive;
    margin: 0;
  }

  p {
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    margin: ${theme.spacing.sm} 0;
  }

  hr {
    width: 100%;
    color: ${theme.colors.loginLine};
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.P3};
    color: ${theme.colors.greyDark};
    padding-right: ${theme.spacing.sm};
  }
`;
