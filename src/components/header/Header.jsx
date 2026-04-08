import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import LogOut from '../log-out/LogOut';
import './Header.css';

function Header() {
  const cart = useCart();
  const cartCount = cart.reduce((n, item) => n + item.quantity, 0);


  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        Traveller
      </Link>
      <nav>
        <ul className="header__list">
          <li><Link className="header__link" to="/">Главная</Link></li>
          <li><Link className="header__link" to="/trips">Туры</Link></li>
          <li><Link className="header__link" to="/hotels">Отели</Link></li>
          <li><Link className="header__link" to="/avia">Авиабилеты</Link></li>
          <li>
            <Link className="header__link header__cart" to="/cart">
              Корзина
              {cartCount > 0 && (
                <span className="header__cart-badge">{cartCount}</span>
              )}
            </Link>
          </li>


 {/* Показываем разное для залогиненных и незалогиненных пользователей */}
          {currentUser ? (
            <>
              <li>
                <Link className="header__link" to="/profile">
                  👤 {currentUser.name}
                </Link>
              </li>
              <li>
                <LogOut />
              </li>
            </>
          ) : (
            <>
              <li><Link className="header__link" to="/registration">Регистрация</Link></li>
              <li><Link className="header__link" to="/login">Войти</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;