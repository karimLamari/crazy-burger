import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const { activeTab } = useContext(OrderContext);

  return (
    <AdminPanelStyled className="panel-admin">
      {activeTab === "edit" && "Modifier un produit"}
      {activeTab === "add" && "Ajouter un produit"}
    </AdminPanelStyled>
  );
}
const AdminPanelStyled = styled.div`
  height: 250px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
