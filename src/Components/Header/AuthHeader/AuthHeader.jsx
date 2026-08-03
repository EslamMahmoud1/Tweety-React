import { NavLink } from "react-router-dom";
import "../HeaderFooter.css";

const AuthHeader = () => {
  return (
    <header className="main-layout__header">
      <div className="main-layout__header-inner">
        <NavLink to="/" className="main-layout__brand" aria-label="Tweety home">
          Tweety
        </NavLink>
        <div className="main-layout__actions" aria-hidden="true" />
      </div>
    </header>
  );
};

export default AuthHeader;
