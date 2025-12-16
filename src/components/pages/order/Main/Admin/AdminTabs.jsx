import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {

  return (
    <AdminTabsStyled>
      <Tab

        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "isActive" : ""}
        label=""
      />
        <Tab

        Icon={<AiOutlinePlus />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "isActive" : ""}
        label="Ajouter un produit"
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
  .isActive{
    background:${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
  button{
    margin-left:1px;
  }
  
`;
