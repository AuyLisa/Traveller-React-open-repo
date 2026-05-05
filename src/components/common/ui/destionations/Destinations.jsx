import { useState } from 'react';
import './Destinations.css';

const data = {
  countries: {
    column1: [
      "Абхазия", "Азербайджан", "Армения", "Бахрейн", "Беларусь",
      "Болгария", "Венгрия", "Венесуэла", "Вьетнам", "Гонконг",
      "Греция", "Грузия"
    ],
    column2: [
      "Египет", "Израиль", "Индия", "Индонезия", "Иордания",
      "Испания", "Италия", "Казахстан", "Катар", "Кипр",
      "Киргизия", "Китай"
    ],
    column3: [
      "Куба", "Маврикий", "Малайзия", "Мальдивы", "Марокко",
      "ОАЭ", "Оман", "Россия", "Саудовская Аравия", "Сейшелы", "Сербия"
    ],
    column4: [
      "Таджикистан", "Таиланд", "Танзания", "Тунис", "Турция",
      "Узбекистан", "Филиппины", "Черногория", "Шри-Ланка",
      "Южная Корея", "Япония"
    ]
  },
  cities: {
    column1: [
      "Москва", "Санкт-Петербург", "Архангельск", "Астрахань",
      "Сочи", "Барнаул", "Владивосток", "Владикавказ", "Екатеринбург",
      "Иваново", "Ижевск", "Иркутск"
    ],
    column2: [
      "Казань", "Калининград", "Калуга", "Кемерово", "Киров",
      "Красноярск", "Магнитогорск", "Махачкала", "Минеральные Воды",
      "Набережные Челны", "Нижний Новгород", "Новосибирск"
    ],
    column3: [
      "Омск", "Оренбург", "Пермь", "Самара", "Саратов", "Сургут",
      "Сыктывкар", "Тюмень", "Ульяновск", "Уфа", "Чебоксары"
    ],
    column4: [
      "Челябинск", "Хабаровск", "Южно-Сахалинск"
    ]
  }
};

function Destinations() {
  const [activeTab, setActiveTab] = useState('countries');

  const currentData = data[activeTab];

  return (
    <div className="destinations">
      <div className="destinations__selectors">
        <p 
          className={activeTab === 'countries' ? 'active' : ''}
          onClick={() => setActiveTab('countries')}
        >
          Страны
        </p>
        <p 
          className={activeTab === 'cities' ? 'active' : ''}
          onClick={() => setActiveTab('cities')}
        >
          Города вылета
        </p>
      </div>

      <div className="destinations__list">
        <ul className="destinations__column">
          {currentData.column1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="destinations__column">
          {currentData.column2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="destinations__column">
          {currentData.column3.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="destinations__column">
          {currentData.column4.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Destinations;