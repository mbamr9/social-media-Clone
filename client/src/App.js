import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./components/register/Register"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./components/login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>



    </BrowserRouter>

  );
}

export default App;
