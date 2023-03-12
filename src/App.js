import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import SpotifyArtists from "./SpotifyArtists";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <SpotifyArtists />
    </>
  );
};

export default AppRoutes;
