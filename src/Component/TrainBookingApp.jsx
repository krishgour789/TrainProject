import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Loginpage";
import LoginPage from "./Register";
import Layout from "./Layout";
import Home from "./Home";
import MyTicket from "./Myticket";
import Book from "./Book";
import UpcomingTrains from "./Routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/book" element={<Book />} />
          <Route path="/routes" element={<UpcomingTrains />} />
          <Route index  element={<Home />} />
          <Route path="/routes" element={<UpcomingTrains />} />
          <Route path="/myticket" element={<MyTicket />} />

{/* <Route path="/book" element={<ProtectedRoute><Book /></ProtectedRoute>} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
