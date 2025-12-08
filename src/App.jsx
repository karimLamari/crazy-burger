import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./Components/Pages/login/LoginPage";
import OrderPage from "./Components/Pages/order/OrderPage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/order" element={<OrderPage/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
