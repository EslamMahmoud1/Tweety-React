import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="main-layout__header">
      <div className="main-layout__header-inner">
        <NavLink to="/" className="main-layout__brand" aria-label="Tweety home">
          Tweety
        </NavLink>

        <nav className="main-layout__nav" aria-label="Primary navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/ContactUs">ContactUs</NavLink>
        </nav>

        <NavLink to="/login">Login</NavLink>

        <NavLink to="/register">Register</NavLink>
      </div>
    </header>
  );
};

export default MainHeader;
