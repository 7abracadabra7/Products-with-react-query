import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import ProductsList from "./pages/ProductsList";
import RegistrationForm from "./pages/RegistrationForm";
import NotFound from "./pages/404";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <TanstackQueryProvider>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <ProductsList />
            </AuthProvider>
          }
        />
        <Route path="/products" element={<Navigate to="/" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </TanstackQueryProvider>
  );
}

export default App;
