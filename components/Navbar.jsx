import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none"
};

export default Navbar;