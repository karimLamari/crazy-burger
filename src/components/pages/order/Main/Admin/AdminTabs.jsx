import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsCOnfig.jsx";
import Tab from "../../../../reusable-ui/Tab";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, activeTab, setActiveTab } =
    useContext(OrderContext);
  const selectTab = (activeTab) => {
    setActiveTab(activeTab);
    setIsCollapsed(false);
  };
  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map(({ id, label, Icon, className }) => (
        <Tab
          key={id}
          label={label}
          Icon={Icon}
          onClick={() => selectTab(id)}
          className={activeTab === id ? "is-active" : ""}
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
