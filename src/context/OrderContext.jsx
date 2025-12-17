import { createContext } from "react";

const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddSelected: true,
  setIsAddSelected: () => {},
  
  isEditSelected: false,
  setIsEditSelected: () => {}
  
});

export default OrderContext;
