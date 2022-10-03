import { Button } from "../Button/Button";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <span>Patryk Sadkowski</span>
        <span>Frontend Software Engineer</span>
      </div>
      <nav className="header__menu main-nav">
        <div className="main-nav__item">About</div>
        <div className="main-nav__item">Work</div>
        <div className="main-nav__item">Github</div>
      </nav>
      <div className="header__contact">
        <Button>Contact</Button>
      </div>
    </header>
  );
};
