import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import ProductsList from "./pages/ProductsList";
import RegistrationForm from "./pages/RegistrationForm";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/products" element={<Navigate to="/" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
