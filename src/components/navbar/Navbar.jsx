import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">PN Hotel-Booking</span>
        </Link>
        <Link to={{ pathname: "https://62b0cdccb37d4a0a2e99cb80--pn-booking-hotel.netlify.app" }} target="_blank" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Admin DashBoard</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
