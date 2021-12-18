import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./components/register/Register"
import {
  BrowserRouter,
  Routes,
  Route,

  Navigate
} from "react-router-dom";

import Login from "./components/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>



    </BrowserRouter>

  );
}

export default App;
