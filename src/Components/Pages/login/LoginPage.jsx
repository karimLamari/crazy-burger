import LoginForm from "./LoginForm";
import Logo from "../reusable-ui/Logo";
import styled from "styled-components";
function Login() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}
export default Login;

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background:
        rgba(0, 0, 0, 0.5);
    background-image:
        url('/images/background-image.jpg') ;
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

`;
