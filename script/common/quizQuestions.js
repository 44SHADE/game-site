const quiz = [
  {
    text: "Какая планета ближе всего к Солнцу?",
    options: ["1. Земля", "2. Венера", "3. Меркурий", "4. Марс"],
    correctAnswer: 3,
  },
  {
    text: "Какой океан самый большой?",
    options: [
      "1. Атлантический",
      "2. Тихий",
      "3. Индийский",
      "4. Северный Ледовитый",
    ],
    correctAnswer: 2,
  },
  {
    text: "Какая столица Франции?",
    options: ["1. Рим", "2. Лондон", "3. Париж", "4. Берлин"],
    correctAnswer: 3,
  },
  {
    text: "Как называется высшая точка Земли?",
    options: ["1. Эверест", "2. Килиманджаро", "3. Монт Блан", "4. Фудзи"],
    correctAnswer: 1,
  },
  {
    text: "Какой элемент имеет символ O?",
    options: ["1. Золото", "2. Кислород", "3. Водород", "4. Азот"],
    correctAnswer: 2,
  },
  {
    text: "Кто написал 'Войну и мир'?",
    options: ["1. Достоевский", "2. Толстой", "3. Чехов", "4. Пушкин"],
    correctAnswer: 2,
  },
  {
    text: "Какой газ составляет 21% воздуха?",
    options: ["1. Азот", "2. Кислород", "3. Углекислый газ", "4. Водород"],
    correctAnswer: 2,
  },
  {
    text: "Какая из этих стран не находится в Европе?",
    options: ["1. Германия", "2. Франция", "3. Канада", "4. Испания"],
    correctAnswer: 3,
  },
  {
    text: "Как называется процесс превращения твердого вещества в газ?",
    options: [
      "1. Конденсация",
      "2. Сублимация",
      "3. Испарение",
      "4. Плавление",
    ],
    correctAnswer: 2,
  },
  {
    text: "Какой орган человеческого тела отвечает за фильтрацию крови?",
    options: ["1. Печень", "2. Сердце", "3. Почки", "4. Легкие"],
    correctAnswer: 3,
  },
  {
    text: "Сколько континентов на Земле?",
    options: ["1. Пять", "2. Шесть", "3. Семь", "4. Восемь"],
    correctAnswer: 3,
  },
  {
    text: "Какая страна самая большая по площади?",
    options: ["1. США", "2. Россия", "3. Канада", "4. Китай"],
    correctAnswer: 2,
  },
  {
    text: "Какая из этих планет имеет кольца?",
    options: ["1. Венера", "2. Марс", "3. Юпитер", "4. Сатурн"],
    correctAnswer: 4,
  },
  {
    text: "Какой художник написал 'Мона Лиза'?",
    options: ["1. Пикассо", "2. Дали", "3. Леонардо да Винчи", "4. Ван Гог"],
    correctAnswer: 3,
  },
  {
    text: "Кто был первым президентом США?",
    options: [
      "1. Авраам Линкольн",
      "2. Джордж Вашингтон",
      "3. Томас Джефферсон",
      "4. Рональд Рейган",
    ],
    correctAnswer: 2,
  },
  {
    text: "Какой элемент таблицы Менделеева имеет символ Na?",
    options: ["1. Натрий", "2. Калий", "3. Магний", "4. Водород"],
    correctAnswer: 1,
  },
  {
    text: "Какое животное является символом Австралии?",
    options: ["1. Кенгуру", "2. Коала", "3. Пингвин", "4. Панда"],
    correctAnswer: 1,
  },
  {
    text:
      "Как называется известный российский космонавт, первый в космосе?",
    options: [
      "1. Юрий Гагарин",
      "2. Валентина Терешкова",
      "3. Алексей Леонов",
      "4. Сергей Королев",
    ],
    correctAnswer: 1,
  },
  {
    text: "Какой город является столицей Японии?",
    options: ["1. Токио", "2. Киото", "3. Осака", "4. Хиросима"],
    correctAnswer: 1,
  },
  {
    text: "Какой из этих художников является импрессионистом?",
    options: ["1. Моне", "2. Рафаэль", "3. Рембрандт", "4. Гойя"],
    correctAnswer: 1,
  },
  {
    text: "Какой месяц в году самый короткий?",
    options: ["1. Январь", "2. Февраль", "3. Март", "4. Апрель"],
    correctAnswer: 2,
  },
  {
    text: "Какой символ химического элемента 'Au'?",
    options: ["1. Сера", "2. Серебро", "3. Золото", "4. Уран"],
    correctAnswer: 3,
  },
  {
    text: "Какая птица является символом мира?",
    options: ["1. Орел", "2. Голубь", "3. Сова", "4. Ласточка"],
    correctAnswer: 2,
  },
  {
    text: "Какой элемент таблицы Менделеева имеет атомный номер 1?",
    options: ["1. Водород", "2. Гелий", "3. Литий", "4. Кислород"],
    correctAnswer: 1,
  },
  {
    text: "Какая планета самая большая?",
    options: ["1. Земля", "2. Юпитер", "3. Сатурн", "4. Марс"],
    correctAnswer: 2,
  },
  {
    text: "Что из этого является млекопитающим?",
    options: ["1. Крокодил", "2. Лягушка", "3. Кит", "4. Утка"],
    correctAnswer: 3,
  },
  {
    text: "Какой цвет получается при смешивании красного и синего?",
    options: ["1. Оранжевый", "2. Фиолетовый", "3. Зеленый", "4. Коричневый"],
    correctAnswer: 2,
  },
  {
    text: "Какой человек изобрел телефон?",
    options: [
      "1. Томас Эдисон",
      "2. Александр Белл",
      "3. Никола Тесла",
      "4. Альберт Эйнштейн",
    ],
    correctAnswer: 2,
  },
  {
    text: "Что из этого является фруктом?",
    options: ["1. Морковь", "2. Яблоко", "3. Лук", "4. Картофель"],
    correctAnswer: 2,
  },
  {
    text:
      "Какой элемент используется для производства электрических аккумуляторов?",
    options: ["1. Литий", "2. Магний", "3. Калий", "4. Натрий"],
    correctAnswer: 1,
  },
];

export { quiz };
