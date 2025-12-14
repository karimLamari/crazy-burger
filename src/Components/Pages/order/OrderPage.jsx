import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar.jsx";
import Main from "./Main/Main.jsx";
import { theme } from "../../../theme/index.js";

function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

export default OrderPage;

const OrderPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .container {
    height: 95vh;
    display: flex;
    flex-direction: column;
    border-top-left-radius: ${theme.borderRadius.round};
    border-top-right-radius: ${theme.borderRadius.round};
  }
`;
