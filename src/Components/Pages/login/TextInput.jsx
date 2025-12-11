import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../index.js";
import styled from "styled-components";

function TextInput({ value, onChange, Icon, ...props }) {
  console.log(Icon);
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...props} />
    </InputStyled>
  );
}

export default TextInput;

const InputStyled = styled.div`
      background-color:${theme.colors.background_white};
      display:flex;
      align-items:center;
      gap:${theme.spacing.xs};
      border-radius:${theme.borderRadius.round};
      padding:${theme.spacing.xs} ${theme.spacing.sm};
        
      .icon{
        color:${theme.colors.greyDark};
}
    
}

`;
