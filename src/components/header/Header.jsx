import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">Traveller</div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/trips">Туры</Link></li>
          <li><Link to="/hotels">Отели</Link></li>
          <li><Link to="/avia">Авиабилеты</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;