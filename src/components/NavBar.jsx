import "./navbar.css";
import Logo from "./../images/alienware.svg";
import { Link, NavLink } from "react-router-dom";
import { links } from "./../data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaSkullCrossbones } from "react-icons/fa6";

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <>
      <nav>
        <div className="container navContainer">
          <Link to="/">
            <img src={Logo} alt="navLogo" className="navLogo" />
          </Link>
          <ul className={`navlinkss ${isNavShowing ? "navShow" : "navHide"}`}>
            {links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => (isActive ? "activeNav" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button
            className="navtoggleBtn"
            onClick={() => setIsNavShowing(!isNavShowing)}
          >
            {isNavShowing ? <FaSkullCrossbones /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
