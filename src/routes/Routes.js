import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import Spotifyartists from "../Spotifyartists";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Spotifyartists />
    </div>
  );
};

export default AppRoutes;
