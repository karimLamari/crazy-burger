import styled from "styled-components";
import { theme } from "../../../index.js";
export default function PrimaryButton({ label , Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled> 
  );
}

const PrimaryButtonStyled = styled.button`
    padding:${theme.spacing.xs};

      background-color:${theme.colors.primary};
      width:100%;
      color:${theme.colors.white};
      font-size:${theme.fonts.P1};
      border-radius:${theme.borderRadius.round};
      display:flex;
      justify-content:center;
      align-items:center;

      &:hover{
        cursor:pointer;
        background-color:${theme.colors.background_white} ;
        color:${theme.colors.primary} ;
      }

      }
`;