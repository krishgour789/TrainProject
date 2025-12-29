import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Loginpage";
import LoginPage from "./Register";
import Layout from "./Layout";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route index  element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
