import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../index.js";
function Input({value, onChange, ...props}) {
  return (
    
          <div className="input-container">
            <BsPersonCircle
              color={theme.colors.greyDark}
              size={24}
              className="icon"
            />
            <input
              value={value}
              onChange={onChange}
                type="text"
              {...props}
            />
          </div>
  )
}

export default Input