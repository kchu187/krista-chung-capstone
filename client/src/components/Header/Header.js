import "./Header.scss";
import { NavLink } from "react-router-dom";
import myAvatar from "../../assets/images/avatar.png";
import logo from "../../assets/images/WhereBean-logo.png";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} className="header__logo" alt="logo" />
      </NavLink>

      <img
        src={myAvatar}
        className="header__avatar"
        alt="grey silhouette of a person"
      />
    </header>
  );
}

export default Header;
