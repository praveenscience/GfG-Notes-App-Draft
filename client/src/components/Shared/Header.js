import React from "react";
import { Link } from "react-router-dom";

const Header = ({ dark, children, className, pages }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={
        `Header navbar navbar-${dark} bg-${dark}` +
        (className ? " " + className : "") +
        (pages && pages.length ? " navbar-expand-lg" : "")
      }
    >
      <span className="navbar-brand">{children}</span>
      {pages && pages.length > 0 && (
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {pages
              .filter(a => !a.DontShow)
              .map((item, key) => (
                <li className="nav-item" key={key}>
                  <Link to={item.Path} className="nav-link">
                    {item.Name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
