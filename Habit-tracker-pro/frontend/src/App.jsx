import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Routine from "./pages/Routine";
import CalendarPage from "./pages/Calendar";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}