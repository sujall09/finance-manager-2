import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import { Dashboard, Income, Expense } from "./pages";
import Layout from "./layouts/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="expense" element={<Expense />} />
        </Route>
        {/* You can add dashboard route later */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
