import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { sideNavIcon } from "../../utils/constants";

const SideNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidenav-container">
      <p className="sidenav-header">
        Carbon Cell
        <span className="sidenav-icon" onClick={toggleSideNav}>
          {sideNavIcon}
        </span>
      </p>

      {isOpen && (
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id || item.label}>
              <Link
                to={item.link}
                className={`nav-link ${activeLink === item.link ? 'active' : ''}`}
                onClick={() => handleSetActiveLink(item.link)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideNav;
