import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./Components/Pages/login/LoginPage";
import OrderPage from "./Components/Pages/order/OrderPage";
import ErrorPage from "./Components/Pages/error/ErrorPage";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/order/:username" element={<OrderPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
