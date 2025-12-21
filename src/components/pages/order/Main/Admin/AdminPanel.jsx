import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsCOnfig";

export default function AdminPanel() {
  const { activeTab } = useContext(OrderContext);

  const tabs = getTabsConfig({ activeTab });
  const activeTabConfig = tabs.find((tab) => tab.id === activeTab);

  return (
    <AdminPanelStyled className="panel-admin">
      {activeTabConfig && <div>{activeTabConfig.label}</div>}
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
