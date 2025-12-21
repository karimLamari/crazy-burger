import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsCOnfig.jsx";
import Tab from "../../../../reusable-ui/Tab";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, activeTab, setActiveTab } =
    useContext(OrderContext);

  const tabs = getTabsConfig({
    activeTab,
    setActiveTab,
    isCollapsed,
    setIsCollapsed,
  });

  return (
    <AdminTabsStyled>
      {tabs.map(({ id, label, Icon, onClick, className }) => (
        <Tab
          key={id}
          label={label}
          Icon={Icon}
          onClick={onClick}
          className={className}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
