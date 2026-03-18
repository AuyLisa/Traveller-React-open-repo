import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Traveller</div>
      <nav>
        <ul className="header__list">
          <li><Link className="header__link" to="/">Главная</Link></li>
          <li><Link className="header__link" to="/trips">Туры</Link></li>
          <li><Link className="header__link" to="/hotels">Отели</Link></li>
          <li><Link className="header__link" to="/avia">Авиабилеты</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
