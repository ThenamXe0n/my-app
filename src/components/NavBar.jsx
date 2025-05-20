import logoImg from "../assets/logo.png";
import { Link } from "react-router";

const NavBar = ({
  children,
  link,
  logo = logoImg,
  nav1 = "home",
  nav2 = "about",
  nav3 = "react",
  nav4 = "getting started",
}) => {
  return (
    <>
      {" "}
      <header className="header">
        <img id="logo" src={logo} alt="logo" />
        <nav className="navContainer">
          <Link to="/"><h4>{nav1}</h4></Link>
          <h4>{nav2}</h4>
          <Link to="/contact"><h4>{nav3}</h4></Link>
          <h4>{nav4}</h4>
        </nav>
      </header>
      <a href={link}><main>{children}</main></a>
    </>
  );
};

export default NavBar;
