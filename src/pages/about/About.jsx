import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { validateSubscribeEmail } from '../../utils/formValidation';
import './About.css';

function About() {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeError, setSubscribeError] = useState('');
  const [subscribeOk, setSubscribeOk] = useState(false);
  const [consentPd, setConsentPd] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    setSubscribeOk(false);
    const { error, isValid } = validateSubscribeEmail(subscribeEmail);
    if (!isValid) {
      setSubscribeError(error);
      return;
    }
    if (!consentPd) {
      setSubscribeError('Необходимо согласие на обработку персональных данных');
      return;
    }
    setSubscribeError('');
    setSubscribeOk(true);
  }

  return (
    <Layout>
      <div className="about-page">
        
        <div className="about-page__hero">
          <h1 className="about-page__title">О НАС</h1>
          <h2 className="about-page__slogan">
            Добро пожаловать в Traveller!<br />
            Туры, отели и авиабилеты в одном месте
          </h2>
          <p className="about-page__subtitle">
            Открываем мир для вас с 2018 года
          </p>
        </div>

        {/* Блок с фактами/цифрами */}
        <div className="about-page__stats">
          <div className="stat-card">
            <span className="stat-number">7+</span>
            <span className="stat-label">лет на рынке</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50 000+</span>
            <span className="stat-label">счастливых туристов</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">35+</span>
            <span className="stat-label">стран мира</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">1 500+</span>
            <span className="stat-label">отелей партнёров</span>
          </div>
        </div>

        {/* Преимущества (адаптация вашего текста под Traveller) */}
        <div className="about-page__advantages">
          <div className="advantage-block">
            <h3>Размещение в отелях</h3>
            <ul>
              <li>Отели 3*, 4* и 5* по всему миру</li>
              <li>Номера категории «стандарт» и «бизнес»</li>
              <li>Отели в шаговой доступности от достопримечательностей</li>
              <li>Только ваше размещение — никаких подселений</li>
            </ul>
          </div>

          <div className="advantage-block">
            <h3>Питание</h3>
            <ul>
              <li>Только завтраки (BB)</li>
              <li>Полупансион (HB) — завтрак + ужин</li>
              <li>Всё включено (ALL) — в лучших отелях Турции, Египта, Таиланда</li>
              <li>Шведский стол в большинстве отелей</li>
            </ul>
          </div>

          <div className="advantage-block">
            <h3>Экскурсионное обслуживание</h3>
            <ul>
              <li>Профессиональные гиды со стажем от 3 до 20 лет</li>
              <li>Все гиды сертифицированы и владеют иностранными языками</li>
              <li>Входные билеты в музеи уже включены</li>
              <li>Сопровождающий на всём маршруте</li>
            </ul>
          </div>

          <div className="advantage-block">
            <h3>Транспортное обслуживание</h3>
            <ul>
              <li>Авиаперелёт включён в стоимость тура</li>
              <li>Комфортабельные автобусы туристического класса</li>
              <li>Трансфер из аэропорта до отеля</li>
              <li>Водители со стажем более 10 лет</li>
            </ul>
          </div>
        </div>

        {/* Блок с контактами и сертификатами */}
        <div className="about-page__contacts">
          <div className="contacts-info">
            <h3>Свяжитесь с нами</h3>
            <p className="phone">+7 (495) 123-45-67</p>
            <p className="phone">8-777-555-77-55 (бесплатно по РФ)</p>
            <p className="email">info@traveller.ru</p>
            <p className="worktime">Ежедневно с 10:00 до 21:00</p>
          </div>
          
          <div className="certificates">
            <h3>Сертификаты и лицензии</h3>
            <ul>
              <li>Свидетельство о внесении в Единый реестр туроператоров № РТО 012345</li>
              <li>Лауреат премии «Лучший туроператор 2023»</li>
            </ul>
          </div>
        </div>

   
        <div className="about-page__subscribe">
          <h3>Тур в подарок!</h3>
          <p>Подпишитесь на рассылку и участвуйте в розыгрыше тура на двоих</p>
          <form className="subscribe-block" onSubmit={handleSubscribe} noValidate>
            {subscribeError && (
              <p className="subscribe-form__error" role="alert">
                {subscribeError}
              </p>
            )}
            {subscribeOk && (
              <p className="subscribe-form__ok">Спасибо за подписку! Проверьте почту.</p>
            )}
            <div className="subscribe-form">
              <input
                type="email"
                name="subscribe-email"
                placeholder="Ваш email"
                inputMode="email"
                autoComplete="email"
                value={subscribeEmail}
                onChange={(e) => {
                  setSubscribeEmail(e.target.value);
                  if (subscribeError) setSubscribeError('');
                  if (subscribeOk) setSubscribeOk(false);
                }}
                className={`subscribe-input ${subscribeError ? 'subscribe-input--error' : ''}`}
              />
              <button type="submit" className="subscribe-btn">Подписаться</button>
            </div>

            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={consentPd}
                  onChange={(e) => setConsentPd(e.target.checked)}
                />
                Я согласен на обработку персональных данных
              </label>
              <label>
                <input type="checkbox" />
                Я согласен на получение рекламных рассылок
              </label>
            </div>
          </form>
          
          {/* Соцсети */}
          <div className="social-links">
            <span>Подписывайтесь на нас:</span>
            <a href="#" className="social-icon">📘 VK</a>
            <a href="#" className="social-icon">📺 Дзен</a>
            <a href="#" className="social-icon">💬 Telegram</a>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default About;