import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Колонка 1 - Компания */}
        <div className="footer__column">
          <h3 className="footer__title">Компания</h3>
          <ul className="footer__list">
            <li><a href="/about">О нас</a></li>
            <li><a href="/career">Карьера в Traveler</a></li>
            <li><a href="/reviews">Отзывы о нас</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </div>

        {/* Колонка 2 - Инструменты */}
        <div className="footer__column">
          <h3 className="footer__title">Инструменты</h3>
          <ul className="footer__list">
            <li><a href="/price-calendar">Календарь низких цен</a></li>
            <li><a href="/gift-certificates">Подарочные сертификаты</a></li>
            <li><a href="/installment">Оформить тур в рассрочку</a></li>
            <li><a href="/partners">Партнерская программа</a></li>
            <li><a href="/travel-journal">Журнал о путешествиях</a></li>
          </ul>
        </div>

        {/* Колонка 3 - Помощь */}
        <div className="footer__column">
          <h3 className="footer__title">Помощь</h3>
          <ul className="footer__list">
            <li><a href="/how-to-book">Как забронировать тур?</a></li>
            <li><a href="/visa-rules">Правила въезда и визы</a></li>
            <li><a href="/faq">Ответы на вопросы</a></li>
            <li><a href="/promotions">Акции</a></li>
            <li><a href="/hotels-only">Отели без перелета</a></li>
          </ul>
        </div>

        {/* Колонка 4 - Направления */}
        <div className="footer__column">
          <h3 className="footer__title">Популярные направления</h3>
          
          <div className="footer__destinations-group">
            <strong>Россия:</strong>
            <a href="/sochi">Сочи</a>, <a href="/adler">Адлер</a>, <a href="/spb">СПб</a>, <a href="/moscow">Москва</a>
          </div>
          
          <div className="footer__destinations-group">
            <strong>Турция:</strong>
            <a href="/istanbul">Стамбул</a>, <a href="/antalya">Анталья</a>, <a href="/alanya">Алания</a>
          </div>
          
          <div className="footer__destinations-group">
            <strong>Таиланд:</strong>
            <a href="/phuket">Пхукет</a>, <a href="/pattaya">Паттайя</a>
          </div>
          
          <div className="footer__destinations-group">
            <strong>Египет:</strong>
            <a href="/hurghada">Хургада</a>, <a href="/sharm">Шарм-Эль-Шейх</a>
          </div>
          
          <div className="footer__destinations-group">
            <strong>ОАЭ:</strong>
            <a href="/dubai">Дубай</a>, <a href="/sharjah">Шарджа</a>
          </div>
          
          <div className="footer__destinations-group">
            <strong>Мальдивы:</strong>
            <a href="/male">Мале</a>, <a href="/maafushi">Маафуши</a>
          </div>
          
          <div className="footer__destinations-group">
            <strong>Шри-Ланка:</strong>
            <a href="/hikkaduwa">Хиккадува</a>
          </div>
          
          <div className="footer__destinations-group">
            <strong>Индия:</strong>
            <a href="/goa">Гоа</a>
          </div>
        </div>

        {/* Колонка 5 - Туроператоры */}
        <div className="footer__column">
          <h3 className="footer__title">Туры от туроператоров</h3>
          <ul className="footer__list">
            <li><a href="/anex">Anex</a></li>
            <li><a href="/biblio-globus">Biblio Globus</a></li>
            <li><a href="/coral-travel">Coral Travel</a></li>
            <li><a href="/level-travel">Level.Travel</a></li>
            <li><a href="/pegas">Pegas Touristik</a></li>
            <li><a href="/fun-sun">Fun&Sun</a></li>
            <li><a href="/sunmar">Sunmar</a></li>
            <li><a href="/tez-tour">Tez Tour</a></li>
            <li><a href="/alean">Алеан</a></li>
          </ul>
        </div>
      </div>

      {/* Блок "Будьте с нами" и соцсети */}
      <div className="footer__social">
        <h3 className="footer__social-title">Будьте с нами</h3>
        <div className="footer__social-icons">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="ВКонтакте">
            <svg className="footer__social-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M21.303 6.754c.128-.418 0-.724-.625-.724h-2.064c-.525 0-.767.278-.896.583 0 0-1.061 2.582-2.563 4.258-.482.482-.701.634-.963.634-.131 0-.321-.152-.321-.57V6.754c0-.524-.158-.724-.621-.724H8.716c-.348 0-.558.258-.558.505 0 .53.79.652.871 2.141v3.232c0 .708-.133.836-.425.836-.701 0-2.406-2.574-3.418-5.522-.199-.57-.398-.778-.925-.778H1.646c-.6 0-.718.278-.718.583 0 .546.74 3.257 3.451 6.84 1.806 2.58 4.351 3.976 6.667 3.976 1.391 0 1.562-.312 1.562-.85v-1.959c0-.624.133-.748.578-.748.327 0 .889.163 2.201 1.417 1.5 1.5 1.746 2.17 2.59 2.17h2.064c.6 0 .9-.312.727-.927-.189-.589-.87-1.443-1.772-2.456-.489-.57-1.222-1.183-1.445-1.49-.31-.365-.222-.526 0-.852 0 0 2.556-3.603 2.822-4.828z"/>
            </svg>
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Telegram">
            <svg className="footer__social-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.02-.14-.06-.2-.08-.06-.18-.04-.26-.02-.11.02-1.84 1.17-5.2 3.44-.49.34-.94.5-1.34.49-.44-.01-1.29-.25-1.92-.46-.77-.25-1.38-.38-1.33-.81.03-.22.33-.45.91-.68 3.49-1.52 5.82-2.52 6.99-3.01 3.33-1.39 4.02-1.63 4.47-1.64.1 0 .32.02.46.14.12.1.15.24.16.37-.01.05-.02.11-.03.18z"/>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="YouTube">
            <svg className="footer__social-icon" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403c.857-.23 1.534-.908 1.767-1.765.414-1.572.417-4.814.417-4.814s.004-3.265-.41-4.812zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Traveler. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;