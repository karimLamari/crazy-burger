import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const getTabsConfig = ({
  activeTab,
  setActiveTab,
  isCollapsed,
  setIsCollapsed,
}) => [
  {
    id: "collapse",
    label: "",
    Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    onClick: () => setIsCollapsed(!isCollapsed),
    className: isCollapsed ? "is-active" : "",
  },
  {
    id: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    onClick: () => {
      setActiveTab("add");
      setIsCollapsed(false);
    },
    className: activeTab === "add" ? "is-active" : "",
  },
  {
    id: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    onClick: () => {
      setActiveTab("edit");
      setIsCollapsed(false);
    },
    className: activeTab === "edit" ? "is-active" : "",
  },
];
