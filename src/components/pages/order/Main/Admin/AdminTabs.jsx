import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

   const selectAddTab = () => {
    setIsCollapsed(false);
    setIsAddSelected(true);
    setIsEditSelected(false);
  };
  
  const selectEditTab = () => {
    setIsCollapsed(false);
    setIsAddSelected(false);
    setIsEditSelected(true);
  };

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
        onClick={selectAddTab}
        className={isAddSelected ? "isActive" : ""}
        label="Ajouter un produit"
      />
      <Tab
        Icon={<MdModeEditOutline />}
        onClick={selectEditTab}
        className={isEditSelected ? "isActive" : ""}
        label="Modifier un produit"
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
  .isActive {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
  button {
    margin-left: 1px;
  }
`;
