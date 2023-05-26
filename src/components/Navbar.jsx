import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Menu() {
  const location = useLocation();
  const [currentPageUrl, setCurrentPageUrl] = useState("");

  useEffect(() => {
    setCurrentPageUrl(window.location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <ul>
        <li className={currentPageUrl === "/" ? "active" : ""}>
          <Link to="/" className="a01" activeclassname="active-link">
            Accueil
          </Link>
        </li>
        <li className={currentPageUrl === "/skills" ? "active" : ""}>
          <Link to="/skills" activeclassname="active-link" className="a02">
            Skills
          </Link>
        </li>
        <li className={currentPageUrl === "/portfolio" ? "active" : ""}>
          <Link to="/portfolio" activeclassname="active-link" className="a03">
            Portfolio
          </Link>
        </li>
        <li className={currentPageUrl === "/contact" ? "active" : ""}>
          <Link to="/contact" className="a04">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
