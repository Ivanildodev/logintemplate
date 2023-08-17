import { Login } from "./components/Login";
import { ProtectedLayout } from "./components/ProtectedLayout/intex";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedLayout>
                <div>Olá Ivanildo, Seja bem vindo!</div>
              </ProtectedLayout>
            }
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
