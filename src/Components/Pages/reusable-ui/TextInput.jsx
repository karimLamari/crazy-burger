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
    color: #17161A;
    width: 100%;
    display: flex;
    align-items: center;
    &::placeholder{
      border:none;
      background-color: ${theme.colors.white};
      color:#D3D3D3;
      font-size: ${theme.fonts.P0};
    }
  }

`;
