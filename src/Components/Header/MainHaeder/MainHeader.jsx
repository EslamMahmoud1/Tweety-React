import { NavLink } from "react-router-dom";
import "../HeaderFooter.css";

const MainHeader = () => {
  return (
    <header className="main-layout__header">
      <div className="main-layout__header-inner">
        <NavLink to="/" className="main-layout__brand" aria-label="Tweety home">
          Tweety
        </NavLink>

        <nav className="main-layout__nav" aria-label="Primary navigation">
          <NavLink to="/ContactUs">ContactUs</NavLink>
        </nav>

        <div className="main-layout__actions" aria-label="Account links">
          <NavLink
            to="/login"
            className="main-layout__auth-link main-layout__auth-link--primary"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/register"
            className="main-layout__auth-link main-layout__auth-link--primary"
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
