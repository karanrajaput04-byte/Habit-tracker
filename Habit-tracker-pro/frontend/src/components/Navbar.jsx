import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive ? "sidebar-link bg-primary text-white" : "sidebar-link";

  return (
    <div className="navbar-pro px-4 py-3 d-flex justify-content-between align-items-center flex-wrap">
      <h3 className="mb-0">🔥 Habit Tracker Pro</h3>

      <div className="d-flex gap-2 flex-wrap mt-2 mt-md-0">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/routine" className={linkStyle}>Routine</NavLink>
        <NavLink to="/calendar" className={linkStyle}>Calendar</NavLink>
        <NavLink to="/stats" className={linkStyle}>Stats</NavLink>
        <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
      </div>
    </div>
  );
}