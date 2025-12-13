import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../theme";

function TextInput({ value, onChange, Icon, ...props }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...props} />
    </InputStyled>
  );
}

export default TextInput;

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius : ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  width: 100%;
  box-sizing: border-box;

  input{
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.greySemiDark};
    width: 100%;
    display: flex;
    align-items: center;
    &::placeholder{
      background-color: ${theme.colors.white};
      color: ${theme.colors.greySemiDark};
      font-size: ${theme.fonts.P0};
    }
  }

`;
