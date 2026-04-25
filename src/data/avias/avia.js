{/* для фильтрации будут 
1 from
2 to
3 price разделится на дешевые и дорогие
4 airline

пути
1 Россия → Турция +
2 Россия → ОАЭ +
3 Россия → Египет +
4 Россия → Таиланд +
5 Россия → Грузия +
6 Россия → Мальдивы +
*/}


const avias = [
  // 1-20: Россия → Турция
  { id: 1, from: 'Москва (SVO)', to: 'Стамбул (IST)', price: 15200, duration: '3ч 30мин', airline: 'Turkish Airlines', departure: '10:00', arrival: '13:30' },
  { id: 2, from: 'Москва (DME)', to: 'Анталия (AYT)', price: 18500, duration: '4ч 15мин', airline: 'Pegasus Airlines', departure: '08:45', arrival: '12:00' },
  { id: 3, from: 'Санкт-Петербург (LED)', to: 'Стамбул (IST)', price: 16800, duration: '3ч 50мин', airline: 'Turkish Airlines', departure: '13:20', arrival: '16:10' },
  { id: 4, from: 'Санкт-Петербург (LED)', to: 'Анталия (AYT)', price: 19200, duration: '4ч 30мин', airline: 'Pegasus Airlines', departure: '06:15', arrival: '09:45' },
  { id: 5, from: 'Казань (KZN)', to: 'Анталия (AYT)', price: 14200, duration: '4ч 00мин', airline: 'Red Wings', departure: '11:15', arrival: '14:15' },
  { id: 6, from: 'Казань (KZN)', to: 'Стамбул (IST)', price: 15500, duration: '3ч 45мин', airline: 'Turkish Airlines', departure: '19:30', arrival: '22:15' },
  { id: 7, from: 'Екатеринбург (SVX)', to: 'Стамбул (IST)', price: 19500, duration: '4ч 30мин', airline: 'Ural Airlines', departure: '06:30', arrival: '10:00' },
  { id: 8, from: 'Екатеринбург (SVX)', to: 'Анталия (AYT)', price: 20800, duration: '4ч 50мин', airline: 'Azur Air', departure: '14:20', arrival: '17:10' },
  { id: 9, from: 'Новосибирск (OVB)', to: 'Анталия (AYT)', price: 22500, duration: '5ч 45мин', airline: 'Pegasus Airlines', departure: '09:00', arrival: '12:45' },
  { id: 10, from: 'Новосибирск (OVB)', to: 'Стамбул (IST)', price: 23800, duration: '5ч 30мин', airline: 'Turkish Airlines', departure: '16:40', arrival: '20:10' },
  { id: 11, from: 'Краснодар (KRR)', to: 'Стамбул (IST)', price: 9800, duration: '2ч 15мин', airline: 'Turkish Airlines', departure: '15:40', arrival: '16:55' },
  { id: 12, from: 'Краснодар (KRR)', to: 'Анталия (AYT)', price: 10500, duration: '2ч 30мин', airline: 'Pegasus Airlines', departure: '22:10', arrival: '23:40' },
  { id: 13, from: 'Сочи (AER)', to: 'Анталия (AYT)', price: 8900, duration: '1ч 50мин', airline: 'Azur Air', departure: '17:20', arrival: '18:10' },
  { id: 14, from: 'Сочи (AER)', to: 'Стамбул (IST)', price: 9200, duration: '2ч 00мин', airline: 'Turkish Airlines', departure: '12:45', arrival: '13:45' },
  { id: 15, from: 'Уфа (UFA)', to: 'Стамбул (IST)', price: 17200, duration: '3ч 40мин', airline: 'Ural Airlines', departure: '07:15', arrival: '09:55' },
  { id: 16, from: 'Уфа (UFA)', to: 'Анталия (AYT)', price: 16500, duration: '4ч 05мин', airline: 'Red Wings', departure: '18:50', arrival: '21:55' },
  { id: 17, from: 'Ростов-на-Дону (ROV)', to: 'Анталия (AYT)', price: 12300, duration: '3ч 05мин', airline: 'Red Wings', departure: '12:50', arrival: '14:55' },
  { id: 18, from: 'Ростов-на-Дону (ROV)', to: 'Стамбул (IST)', price: 11800, duration: '2ч 50мин', airline: 'Turkish Airlines', departure: '09:30', arrival: '11:20' },
  { id: 19, from: 'Самара (KUF)', to: 'Анталия (AYT)', price: 17500, duration: '4ч 15мин', airline: 'Pegasus Airlines', departure: '03:20', arrival: '06:35' },
  { id: 20, from: 'Волгоград (VOG)', to: 'Стамбул (IST)', price: 13500, duration: '3ч 10мин', airline: 'Turkish Airlines', departure: '20:15', arrival: '22:25' },

  // 21-40: Россия → ОАЭ
  { id: 21, from: 'Москва (SVO)', to: 'Дубай (DXB)', price: 25800, duration: '5ч 40мин', airline: 'Emirates', departure: '23:55', arrival: '06:35+1' },
  { id: 22, from: 'Москва (DME)', to: 'Дубай (DXB)', price: 23200, duration: '5ч 30мин', airline: 'flydubai', departure: '20:15', arrival: '02:45+1' },
  { id: 23, from: 'Москва (VKO)', to: 'Дубай (DXB)', price: 24500, duration: '5ч 35мин', airline: 'Aeroflot', departure: '11:00', arrival: '17:35' },
  { id: 24, from: 'Санкт-Петербург (LED)', to: 'Дубай (DXB)', price: 27800, duration: '6ч 10мин', airline: 'Emirates', departure: '12:10', arrival: '18:20' },
  { id: 25, from: 'Санкт-Петербург (LED)', to: 'Абу-Даби (AUH)', price: 26500, duration: '6ч 00мин', airline: 'Etihad Airways', departure: '09:45', arrival: '15:45' },
  { id: 26, from: 'Казань (KZN)', to: 'Дубай (DXB)', price: 21500, duration: '5ч 20мин', airline: 'flydubai', departure: '14:30', arrival: '19:50' },
  { id: 27, from: 'Казань (KZN)', to: 'Абу-Даби (AUH)', price: 20800, duration: '5ч 10мин', airline: 'Etihad Airways', departure: '22:15', arrival: '03:25+1' },
  { id: 28, from: 'Екатеринбург (SVX)', to: 'Дубай (DXB)', price: 24200, duration: '5ч 45мин', airline: 'Ural Airlines', departure: '09:45', arrival: '14:30' },
  { id: 29, from: 'Екатеринбург (SVX)', to: 'Абу-Даби (AUH)', price: 23500, duration: '5ч 35мин', airline: 'Etihad Airways', departure: '16:20', arrival: '20:55' },
  { id: 30, from: 'Новосибирск (OVB)', to: 'Дубай (DXB)', price: 29500, duration: '6ч 30мин', airline: 'flydubai', departure: '07:20', arrival: '11:50' },
  { id: 31, from: 'Новосибирск (OVB)', to: 'Абу-Даби (AUH)', price: 28800, duration: '6ч 20мин', airline: 'Etihad Airways', departure: '18:45', arrival: '23:05' },
  { id: 32, from: 'Сочи (AER)', to: 'Дубай (DXB)', price: 16500, duration: '4ч 15мин', airline: 'Azur Air', departure: '19:30', arrival: '23:45' },
  { id: 33, from: 'Сочи (AER)', to: 'Шарджа (SHJ)', price: 15800, duration: '4ч 00мин', airline: 'Air Arabia', departure: '13:40', arrival: '17:40' },
  { id: 34, from: 'Краснодар (KRR)', to: 'Дубай (DXB)', price: 18800, duration: '4ч 30мин', airline: 'flydubai', departure: '22:10', arrival: '02:40+1' },
  { id: 35, from: 'Уфа (UFA)', to: 'Дубай (DXB)', price: 22800, duration: '5ч 15мин', airline: 'Ural Airlines', departure: '16:25', arrival: '21:40' },
  { id: 36, from: 'Ростов-на-Дону (ROV)', to: 'Дубай (DXB)', price: 19500, duration: '4ч 45мин', airline: 'flydubai', departure: '11:50', arrival: '16:35' },
  { id: 37, from: 'Самара (KUF)', to: 'Дубай (DXB)', price: 21800, duration: '4ч 50мин', airline: 'flydubai', departure: '20:50', arrival: '01:40+1' },
  { id: 38, from: 'Тюмень (TJM)', to: 'Дубай (DXB)', price: 24200, duration: '5ч 25мин', airline: 'flydubai', departure: '04:15', arrival: '08:40' },
  { id: 39, from: 'Пермь (PEE)', to: 'Дубай (DXB)', price: 23800, duration: '5ч 35мин', airline: 'Ural Airlines', departure: '08:30', arrival: '13:05' },
  { id: 40, from: 'Омск (OMS)', to: 'Дубай (DXB)', price: 26800, duration: '5ч 55мин', airline: 'flydubai', departure: '14:10', arrival: '18:05' },

  //41-60 Россия → Египет
  { id: 41, from: 'Москва (SVO)', to: 'Каир (CAI)', price: 22500, duration: '4ч 55мин', airline: 'EgyptAir', departure: '20:40', arrival: '00:35+1' },
  { id: 42, from: 'Москва (DME)', to: 'Хургада (HRG)', price: 19500, duration: '5ч 15мин', airline: 'Red Wings', departure: '10:15', arrival: '13:30' },
  { id: 43, from: 'Москва (VKO)', to: 'Шарм-эль-Шейх (SSH)', price: 20200, duration: '5ч 20мин', airline: 'Aeroflot', departure: '08:45', arrival: '12:05' },
  { id: 44, from: 'Санкт-Петербург (LED)', to: 'Шарм-эль-Шейх (SSH)', price: 21200, duration: '5ч 40мин', airline: 'Aeroflot', departure: '14:50', arrival: '18:30' },
  { id: 45, from: 'Санкт-Петербург (LED)', to: 'Хургада (HRG)', price: 22800, duration: '5ч 55мин', airline: 'Aeroflot', departure: '18:20', arrival: '22:15' },
  { id: 46, from: 'Казань (KZN)', to: 'Хургада (HRG)', price: 18800, duration: '5ч 00мин', airline: 'Azur Air', departure: '12:35', arrival: '16:35' },
  { id: 47, from: 'Казань (KZN)', to: 'Шарм-эль-Шейх (SSH)', price: 19200, duration: '5ч 10мин', airline: 'Red Wings', departure: '23:15', arrival: '03:25+1' },
  { id: 48, from: 'Екатеринбург (SVX)', to: 'Шарм-эль-Шейх (SSH)', price: 23500, duration: '6ч 20мин', airline: 'Azur Air', departure: '07:45', arrival: '12:05' },
  { id: 49, from: 'Екатеринбург (SVX)', to: 'Хургада (HRG)', price: 24200, duration: '6ч 30мин', airline: 'Red Wings', departure: '15:30', arrival: '20:00' },
  { id: 50, from: 'Новосибирск (OVB)', to: 'Хургада (HRG)', price: 28500, duration: '7ч 15мин', airline: 'Red Wings', departure: '23:10', arrival: '03:25+1' },
  { id: 51, from: 'Новосибирск (OVB)', to: 'Шарм-эль-Шейх (SSH)', price: 29200, duration: '7ч 25мин', airline: 'Azur Air', departure: '05:20', arrival: '09:45' },
  { id: 52, from: 'Сочи (AER)', to: 'Каир (CAI)', price: 12500, duration: '3ч 20мин', airline: 'EgyptAir', departure: '16:30', arrival: '18:50' },
  { id: 53, from: 'Сочи (AER)', to: 'Хургада (HRG)', price: 13200, duration: '3ч 45мин', airline: 'Red Wings', departure: '09:40', arrival: '12:25' },
  { id: 54, from: 'Краснодар (KRR)', to: 'Шарм-эль-Шейх (SSH)', price: 14500, duration: '3ч 55мин', airline: 'Azur Air', departure: '19:15', arrival: '22:10' },
  { id: 55, from: 'Уфа (UFA)', to: 'Хургада (HRG)', price: 21200, duration: '5ч 30мин', airline: 'Red Wings', departure: '11:25', arrival: '15:55' },
  { id: 56, from: 'Ростов-на-Дону (ROV)', to: 'Шарм-эль-Шейх (SSH)', price: 16800, duration: '4ч 10мин', airline: 'Azur Air', departure: '14:50', arrival: '18:00' },
  { id: 57, from: 'Самара (KUF)', to: 'Хургада (HRG)', price: 19800, duration: '5ч 05мин', airline: 'Red Wings', departure: '22:40', arrival: '02:45+1' },
  { id: 58, from: 'Минеральные Воды (MRV)', to: 'Каир (CAI)', price: 11800, duration: '3ч 10мин', airline: 'EgyptAir', departure: '12:20', arrival: '14:30' },
  { id: 59, from: 'Волгоград (VOG)', to: 'Хургада (HRG)', price: 18200, duration: '4ч 45мин', airline: 'Azur Air', departure: '17:35', arrival: '21:20' },
  { id: 60, from: 'Челябинск (CEK)', to: 'Шарм-эль-Шейх (SSH)', price: 22500, duration: '5ч 55мин', airline: 'Red Wings', departure: '08:10', arrival: '12:05' },

  // 61-80: Россия → Таиланд
  { id: 61, from: 'Москва (SVO)', to: 'Бангкок (BKK)', price: 35800, duration: '9ч 20мин', airline: 'Aeroflot', departure: '19:30', arrival: '08:50+1' },
  { id: 62, from: 'Москва (DME)', to: 'Бангкок (BKK)', price: 34500, duration: '9ч 10мин', airline: 'Thai Airways', departure: '21:45', arrival: '10:55+1' },
  { id: 63, from: 'Москва (SVO)', to: 'Пхукет (HKT)', price: 37200, duration: '9ч 35мин', airline: 'Aeroflot', departure: '23:00', arrival: '11:35+1' },
  { id: 64, from: 'Москва (VKO)', to: 'Пхукет (HKT)', price: 36500, duration: '9ч 25мин', airline: 'Azur Air', departure: '14:15', arrival: '04:40+1' },
  { id: 65, from: 'Санкт-Петербург (LED)', to: 'Бангкок (BKK)', price: 37800, duration: '9ч 45мин', airline: 'Thai Airways', departure: '13:20', arrival: '04:05+1' },
  { id: 66, from: 'Санкт-Петербург (LED)', to: 'Пхукет (HKT)', price: 39500, duration: '10ч 00мин', airline: 'Aeroflot', departure: '22:40', arrival: '11:40+1' },
  { id: 67, from: 'Екатеринбург (SVX)', to: 'Пхукет (HKT)', price: 39800, duration: '8ч 45мин', airline: 'Azur Air', departure: '16:20', arrival: '02:05+1' },
  { id: 68, from: 'Екатеринбург (SVX)', to: 'Бангкок (BKK)', price: 38500, duration: '8ч 30мин', airline: 'Ural Airlines', departure: '09:15', arrival: '18:45' },
  { id: 69, from: 'Новосибирск (OVB)', to: 'Бангкок (BKK)', price: 42500, duration: '7ч 50мин', airline: 'S7 Airlines', departure: '07:15', arrival: '14:05' },
  { id: 70, from: 'Новосибирск (OVB)', to: 'Пхукет (HKT)', price: 43800, duration: '8ч 05мин', airline: 'Azur Air', departure: '19:40', arrival: '01:45+1' },
  { id: 71, from: 'Красноярск (KJA)', to: 'Бангкок (BKK)', price: 38800, duration: '7ч 30мин', airline: 'Aeroflot', departure: '18:20', arrival: '23:50' },
  { id: 72, from: 'Красноярск (KJA)', to: 'Пхукет (HKT)', price: 39500, duration: '7ч 45мин', airline: 'Azur Air', departure: '11:10', arrival: '16:55' },
  { id: 73, from: 'Иркутск (IKT)', to: 'Бангкок (BKK)', price: 29500, duration: '6ч 15мин', airline: 'S7 Airlines', departure: '08:15', arrival: '13:30' },
  { id: 74, from: 'Иркутск (IKT)', to: 'Пхукет (HKT)', price: 33200, duration: '7ч 10мин', airline: 'S7 Airlines', departure: '21:45', arrival: '02:55+1' },
  { id: 75, from: 'Владивосток (VVO)', to: 'Бангкок (BKK)', price: 28900, duration: '6ч 40мин', airline: 'Thai Airways', departure: '13:30', arrival: '17:10' },
  { id: 76, from: 'Владивосток (VVO)', to: 'Пхукет (HKT)', price: 30500, duration: '7ч 15мин', airline: 'Aeroflot', departure: '02:20', arrival: '06:35' },
  { id: 77, from: 'Хабаровск (KHV)', to: 'Бангкок (BKK)', price: 31200, duration: '6ч 55мин', airline: 'Thai Airways', departure: '20:00', arrival: '23:55' },
  { id: 78, from: 'Южно-Сахалинск (UUS)', to: 'Бангкок (BKK)', price: 35800, duration: '7ч 40мин', airline: 'Aeroflot', departure: '15:30', arrival: '19:10' },
  { id: 79, from: 'Казань (KZN)', to: 'Пхукет (HKT)', price: 38800, duration: '8ч 50мин', airline: 'Azur Air', departure: '23:55', arrival: '11:45+1' },
  { id: 80, from: 'Уфа (UFA)', to: 'Бангкок (BKK)', price: 39200, duration: '8ч 30мин', airline: 'Ural Airlines', departure: '10:40', arrival: '20:10' },


  // 81-100: Россия → Грузия
  { id: 81, from: 'Москва (VKO)', to: 'Тбилиси (TBS)', price: 12200, duration: '2ч 50мин', airline: 'Georgian Airways', departure: '14:15', arrival: '17:05' },
  { id: 82, from: 'Москва (DME)', to: 'Тбилиси (TBS)', price: 11500, duration: '2ч 40мин', airline: 'Georgian Airways', departure: '09:30', arrival: '12:10' },
  { id: 83, from: 'Москва (SVO)', to: 'Тбилиси (TBS)', price: 12800, duration: '2ч 55мин', airline: 'Aeroflot', departure: '19:45', arrival: '22:40' },
  { id: 84, from: 'Санкт-Петербург (LED)', to: 'Тбилиси (TBS)', price: 13800, duration: '3ч 10мин', airline: 'Georgian Airways', departure: '09:30', arrival: '12:40' },
  { id: 85, from: 'Санкт-Петербург (LED)', to: 'Кутаиси (KUT)', price: 12500, duration: '3ч 00мин', airline: 'Red Wings', departure: '16:20', arrival: '19:20' },
  { id: 86, from: 'Казань (KZN)', to: 'Тбилиси (TBS)', price: 10800, duration: '2ч 35мин', airline: 'Georgian Airways', departure: '22:10', arrival: '00:45+1' },
  { id: 87, from: 'Сочи (AER)', to: 'Тбилиси (TBS)', price: 8900, duration: '1ч 35мин', airline: 'Georgian Airways', departure: '11:30', arrival: '13:05' },
  { id: 88, from: 'Сочи (AER)', to: 'Кутаиси (KUT)', price: 7800, duration: '1ч 25мин', airline: 'Red Wings', departure: '18:45', arrival: '20:10' },
  { id: 89, from: 'Краснодар (KRR)', to: 'Тбилиси (TBS)', price: 9500, duration: '1ч 45мин', airline: 'Georgian Airways', departure: '13:15', arrival: '15:00' },
  { id: 90, from: 'Ростов-на-Дону (ROV)', to: 'Тбилиси (TBS)', price: 10200, duration: '1ч 55мин', airline: 'Georgian Airways', departure: '07:40', arrival: '09:35' },
  { id: 91, from: 'Минеральные Воды (MRV)', to: 'Тбилиси (TBS)', price: 7200, duration: '1ч 10мин', airline: 'Georgian Airways', departure: '15:50', arrival: '17:00' },
  { id: 92, from: 'Екатеринбург (SVX)', to: 'Тбилиси (TBS)', price: 16800, duration: '3ч 25мин', airline: 'Ural Airlines', departure: '08:20', arrival: '11:45' },
  { id: 93, from: 'Новосибирск (OVB)', to: 'Тбилиси (TBS)', price: 19800, duration: '4ч 40мин', airline: 'S7 Airlines', departure: '05:30', arrival: '09:10' },
  { id: 94, from: 'Самара (KUF)', to: 'Тбилиси (TBS)', price: 12500, duration: '2ч 50мин', airline: 'Georgian Airways', departure: '17:15', arrival: '20:05' },
  { id: 95, from: 'Уфа (UFA)', to: 'Тбилиси (TBS)', price: 14800, duration: '3ч 05мин', airline: 'Ural Airlines', departure: '12:40', arrival: '15:45' },
  { id: 96, from: 'Волгоград (VOG)', to: 'Тбилиси (TBS)', price: 11200, duration: '2ч 10мин', airline: 'Georgian Airways', departure: '20:30', arrival: '22:40' },
  { id: 97, from: 'Калининград (KGD)', to: 'Тбилиси (TBS)', price: 15800, duration: '3ч 35мин', airline: 'Red Wings', departure: '14:10', arrival: '17:45' },
  { id: 98, from: 'Нижний Новгород (GOJ)', to: 'Тбилиси (TBS)', price: 13200, duration: '2ч 55мин', airline: 'Georgian Airways', departure: '09:55', arrival: '12:50' },
  { id: 99, from: 'Пермь (PEE)', to: 'Тбилиси (TBS)', price: 16200, duration: '3ч 15мин', airline: 'Ural Airlines', departure: '23:20', arrival: '02:35+1' },
  { id: 100, from: 'Тюмень (TJM)', to: 'Тбилиси (TBS)', price: 17200, duration: '3ч 30мин', airline: 'Ural Airlines', departure: '16:45', arrival: '20:15' },

  // 101-120: Россия → Мальдивы
  { id: 101, from: 'Москва (SVO)', to: 'Мале (MLE)', price: 45800, duration: '8ч 40мин', airline: 'Aeroflot', departure: '22:15', arrival: '09:55+1' },
  { id: 102, from: 'Москва (DME)', to: 'Мале (MLE)', price: 47200, duration: '8ч 55мин', airline: 'Azur Air', departure: '09:30', arrival: '21:25' },
  { id: 103, from: 'Москва (VKO)', to: 'Мале (MLE)', price: 46500, duration: '8ч 45мин', airline: 'Red Wings', departure: '14:50', arrival: '02:35+1' },
  { id: 104, from: 'Санкт-Петербург (LED)', to: 'Мале (MLE)', price: 48500, duration: '9ч 10мин', airline: 'Aeroflot', departure: '11:20', arrival: '23:30' },
  { id: 105, from: 'Санкт-Петербург (LED)', to: 'Мале (MLE)', price: 49200, duration: '9ч 20мин', airline: 'Azur Air', departure: '19:40', arrival: '07:55+1' },
  { id: 106, from: 'Екатеринбург (SVX)', to: 'Мале (MLE)', price: 51500, duration: '7ч 55мин', airline: 'Azur Air', departure: '13:15', arrival: '20:10' },
  { id: 107, from: 'Екатеринбург (SVX)', to: 'Мале (MLE)', price: 52800, duration: '8ч 05мин', airline: 'Red Wings', departure: '04:30', arrival: '11:35' },
  { id: 108, from: 'Новосибирск (OVB)', to: 'Мале (MLE)', price: 55800, duration: '8ч 30мин', airline: 'S7 Airlines', departure: '22:50', arrival: '06:20+1' },
  { id: 109, from: 'Новосибирск (OVB)', to: 'Мале (MLE)', price: 54500, duration: '8ч 20мин', airline: 'Azur Air', departure: '08:40', arrival: '16:00' },
  { id: 110, from: 'Казань (KZN)', to: 'Мале (MLE)', price: 48800, duration: '7ч 35мин', airline: 'Red Wings', departure: '17:25', arrival: '01:00+1' },
  { id: 111, from: 'Казань (KZN)', to: 'Мале (MLE)', price: 47500, duration: '7ч 25мин', airline: 'Azur Air', departure: '23:55', arrival: '07:20+1' },
  { id: 112, from: 'Уфа (UFA)', to: 'Мале (MLE)', price: 49800, duration: '7ч 45мин', airline: 'Ural Airlines', departure: '10:15', arrival: '18:00' },
  { id: 113, from: 'Самара (KUF)', to: 'Мале (MLE)', price: 48200, duration: '7ч 30мин', airline: 'Red Wings', departure: '15:40', arrival: '23:10' },
  { id: 114, from: 'Красноярск (KJA)', to: 'Мале (MLE)', price: 53800, duration: '8ч 15мин', airline: 'Azur Air', departure: '12:50', arrival: '20:05' },
  { id: 115, from: 'Иркутск (IKT)', to: 'Мале (MLE)', price: 52500, duration: '8ч 00мин', airline: 'S7 Airlines', departure: '20:30', arrival: '03:30+1' },
  { id: 116, from: 'Ростов-на-Дону (ROV)', to: 'Мале (MLE)', price: 46200, duration: '7ч 15мин', airline: 'Red Wings', departure: '07:10', arrival: '14:25' },
  { id: 117, from: 'Краснодар (KRR)', to: 'Мале (MLE)', price: 44800, duration: '7ч 00мин', airline: 'Azur Air', departure: '18:35', arrival: '01:35+1' },
  { id: 118, from: 'Сочи (AER)', to: 'Мале (MLE)', price: 42500, duration: '6ч 40мин', airline: 'Red Wings', departure: '09:20', arrival: '16:00' },
  { id: 119, from: 'Минеральные Воды (MRV)', to: 'Мале (MLE)', price: 43800, duration: '6ч 55мин', airline: 'Azur Air', departure: '14:10', arrival: '21:05' },
  { id: 120, from: 'Омск (OMS)', to: 'Мале (MLE)', price: 54800, duration: '8ч 25мин', airline: 'Red Wings', departure: '05:45', arrival: '13:10' }
  ];
  
  export default avias;