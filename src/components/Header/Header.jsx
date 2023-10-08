import Logo from "./components/Logo";
import Button from "../../common/Button/Button";

function Header() {
  return (
    <div className="header">
      <a href="#default">
        <Logo />
      </a>
      <div className="header-right">
        <span className="header-userName">Jesús Quiñones</span>
        <Button buttonText="Logout" onClick />
      </div>
    </div>
  );
}

export default Header;
