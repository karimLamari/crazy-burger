import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"} />

      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  position: relative; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: 
      linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("/images/burger-and-fries-background.jpg");
    background-size: cover;
    background-position: center;

    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .logo-login-page {
    transform: scale(2.5);
  }
`;
