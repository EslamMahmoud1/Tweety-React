import { NavLink } from "react-router-dom";

const AuthHeader = () => {
  return (
    <header className="main-layout__header">
      <div className="main-layout__header-inner">
        <NavLink to="/" className="main-layout__brand" aria-label="Tweety home">
          Tweety
        </NavLink>
      </div>
    </header>
  );
};

export default AuthHeader;
