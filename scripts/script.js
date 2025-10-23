const players = {
  goalkeepers: {
    maignan: {
      firstName: "Майк",
      lastName: "Меньян",
      team: "Милан",
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [3, 1],
          },
          7: {
            teams: ["Милан", "Фиорентина"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [1, 0],
          },
        },
      },
    },
    mamardashvili: {
      firstName: "Георгий",
      lastName: "Мамардашвили",
      team: "Ливерпуль",
      stats: {
        pl: {
          7: {
            teams: ["Челси", "Ливерпуль"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [4, 1],
          },
        },
      },
    },
    pope: {
      firstName: "Ник",
      lastName: "Поуп",
      team: "Ньюкасл",
      stats: {
        pl: {
          8: {
            teams: ["Брайтон", "Ньюкасл"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [3, 1],
          },
        },
      },
    },
    raya: {
      firstName: "Давид",
      lastName: "Райя",
      team: "Арсенал",
      stats: {
        ucl: {
          1: {
            teams: ["Атлетик Бильбао", "Арсенал"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
          2: {
            teams: ["Арсенал", "Олимпиакос"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [3, 1],
          },
          3: {
            teams: ["Арсенал", "Атлетико"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [1, 0],
          },
        },
      },
    },
    szczesny: {
      firstName: "Войцех",
      lastName: "Щенсный",
      team: "Барселона",
      stats: {
        laLiga: {
          8: {
            teams: ["Севилья", "Барселона"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [4, -2],
            saves: [1, 0],
          },
          9: {
            teams: ["Барселона", "Жирона"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [3, 1],
          },
        },
      },
    },
  },
  defenders: {
    diLorenzo: {
      firstName: "Джованни",
      lastName: "Ди Лоренцо",
      team: "Наполи",
      stats: {
        seriaA: {
          6: {
            teams: ["Наполи", "Дженоа"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          7: {
            teams: ["Торино", "Наполи"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
        },
      },
    },
    dumfries: {
      firstName: "Дензел",
      lastName: "Дюмфрис",
      team: "Интер",
      stats: {
        ucl: {
          1: {
            teams: ["Аякс", "Интер"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [4, 1],
          },
          2: {
            teams: ["Интер", "Славия"],
            result: "3-0",
            minutesOnField: [76, 2],
            cleanSheet: [true, 4],
            goals: [1, 6],
            tackles: [2, 0],
          },
          3: {
            teams: ["Юнион", "Интер"],
            result: "0-4",
            minutesOnField: [77, 2],
            cleanSheet: [true, 4],
            goals: [1, 6],
            tackles: [10, 3],
            playerOfTheMatch: [true, 3],
          },
        },
        seriaA: {
          6: {
            teams: ["Интер", "Кремонезе"],
            result: "4-1",
            minutesOnField: [53, 1],
          },
          7: {
            teams: ["Рома", "Интер"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    gabriel: {
      firstName: "Магальяйнс",
      lastName: "Габриэл",
      team: "Арсенал",
      stats: {
        pl: {
          7: {
            teams: ["Арсенал", "Вест Хэм"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          8: {
            teams: ["Фулхэм", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            assists: [1, 3],
          },
        },
      },
    },
    guehi: {
      firstName: "Марк",
      lastName: "Гехи",
      team: "Кристал Пэлас",
      stats: {
        pl: {
          8: {
            teams: ["Кристал Пэлас", "Борнмут"],
            result: "3-3",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            tackles: [undefined, 1],
            shotAfterGoal: [1, 3],
          },
        },
      },
    },
    gvardiol: {
      firstName: "Йошко",
      lastName: "Гвардиол",
      team: "Манчестер Сити",
      stats: {
        ucl: {
          3: {
            teams: ["Вильярреал", "Манчестер Сити"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [7, 2],
          },
        },
      },
    },
    huijsen: {
      firstName: "Дин",
      lastName: "Хейсен",
      team: "Реал Мадрид",
      stats: {
        ucl: {
          1: {
            teams: ["Реал Мадрид", "Марсель"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [3, 1],
          },
          2: {
            teams: ["Кайрат", "Реал Мадрид"],
            result: "0-5",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [14, 4],
          },
        },
        laLiga: {
          8: {
            teams: ["Реал Мадрид", "Вильярреал"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
        },
      },
    },
    kounde: {
      firstName: "Жюль",
      lastName: "Кунде",
      team: "Барселона",
      stats: {
        laLiga: {
          8: {
            teams: ["Севилья", "Барселона"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [4, -2],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Барселона", "Жирона"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
        },
      },
    },
    leNormand: {
      firstName: "Робен",
      lastName: "Ле Норман",
      team: "Атлетико",
      stats: {
        laLiga: {
          8: {
            teams: ["Сельта", "Атлетико"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
          9: {
            teams: ["Атлетико", "Осасуна"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    llorente: {
      firstName: "Маркос",
      lastName: "Льоренте",
      team: "Атлетико",
      stats: {
        laLiga: {
          8: {
            teams: ["Сельта", "Атлетико"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 3],
          },
          9: {
            teams: ["Атлетико", "Осасуна"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
        },
      },
    },
    saliba: {
      firstName: "Вильям",
      lastName: "Салиба",
      team: "Арсенал",
      stats: {
        pl: {
          7: {
            teams: ["Арсенал", "Вест Хэм"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          8: {
            teams: ["Фулхэм", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    spinazzola: {
      firstName: "Леонардо",
      lastName: "Спинаццола",
      team: "Наполи",
      stats: {
        seriaA: {
          6: {
            teams: ["Наполи", "Дженоа"],
            result: "2-1",
            minutesOnField: [40, 1],
            shotAfterGoal: [1, 3],
          },
          7: {
            teams: ["Торино", "Наполи"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
        },
      },
    },
    tomori: {
      firstName: "Фикайо",
      lastName: "Томори",
      team: "Милан",
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
        },
      },
    },
    vanDijk: {
      firstName: "Вирджил",
      lastName: "ван Дейк",
      team: "Ливерпуль",
      stats: {
        pl: {
          7: {
            teams: ["Челси", "Ливерпуль"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    vandeVen: {
      firstName: "Микки",
      lastName: "ван де Вен",
      team: "Тоттенхэм",
      stats: {
        ucl: {
          1: {
            teams: ["Тоттенхэм", "Вильярреал"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            tackles: [11, 3],
          },
          2: {
            teams: ["Буде-Глимт", "Тоттенхэм"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            goals: [1, 6],
            yellowCard: [1, -1],
            tackles: [4, 1],
          },
          3: {
            teams: ["Монако", "Тоттенхэм"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [8, 2],
          },
        },
      },
    },
    zappacosta: {
      firstName: "Давиде",
      lastName: "Дзаппакоста",
      team: "Аталанта",
      stats: {
        seriaA: {
          6: {
            teams: ["Аталанта", "Комо"],
            result: "1-1",
            minutesOnField: [90, 2],
            tackles: [undefined, 1],
          },
          7: {
            teams: ["Аталанта", "Лацио"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
  },
  midfielders: {
    ardaGuler: {
      firstName: "Арда",
      lastName: "Гюлер",
      team: "Реал Мадрид",
      stats: {
        ucl: {
          2: {
            teams: ["Кайрат", "Реал Мадрид"],
            result: "0-5",
            minutesOnField: [80, 2],
            cleanSheet: [true, 1],
            assists: [1, 3],
            tackles: [2, 0],
          },
          3: {
            teams: ["Реал Мадрид", "Ювентус"],
            result: "1-0",
            minutesOnField: [74, 2],
            cleanSheet: [true, 1],
            tackles: [2, 0],
            playerOfTheMatch: [true, 3],
          },
        },
        laLiga: {
          8: {
            teams: ["Реал Мадрид", "Вильярреал"],
            result: "3-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Хетафе", "Реал Мадрид"],
            result: "0-1",
            minutesOnField: [25, 1],
            assists: [1, 3],
          },
        },
      },
    },
    buchanan: {
      firstName: "Тейджон",
      lastName: "Бьюкенен",
      team: "Вильярреал",
      stats: {
        laLiga: {
          9: {
            teams: ["Вильярреал", "Бетис"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    caicedo: {
      firstName: "Мойсес",
      lastName: "Кайседо",
      team: "Челси",
      stats: {
        pl: {
          8: {
            teams: ["Ноттингем Форест", "Челси"],
            result: "0-3",
            minutesOnField: [45, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    calhanoglu: {
      firstName: "Хакан",
      lastName: "Чалханоглу",
      team: "Интер",
      stats: {
        ucl: {
          1: {
            teams: ["Аякс", "Интер"],
            result: "0-2",
            minutesOnField: [86, 2],
            cleanSheet: [true, 1],
            assists: [2, 6],
            tackles: [5, 1],
          },
          2: {
            teams: ["Интер", "Славия"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            tackles: [4, 1],
          },
          3: {
            teams: ["Юнион", "Интер"],
            result: "0-4",
            minutesOnField: [59, 1],
            goals: [1, 5],
            tackles: [2, 0],
          },
        },
        seriaA: {
          7: {
            teams: ["Рома", "Интер"],
            result: "0-1",
            minutesOnField: [62, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    doku: {
      firstName: "Жереми",
      lastName: "Доку",
      team: "Манчестер Сити",
      stats: {
        pl: {
          7: {
            teams: ["Брентфорд", "Манчестер Сити"],
            result: "0-1",
            minutesOnField: [14, 1],
          },
          8: {
            teams: ["Манчестер Сити", "Эвертон"],
            result: "2-0",
            minutesOnField: [59, 1],
          },
        },
      },
    },
    gravenberch: {
      firstName: "Райан",
      lastName: "Гравенберх",
      team: "Ливерпуль",
      stats: {
        pl: {
          7: {
            teams: ["Челси", "Ливерпуль"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    iWilliams: {
      firstName: "Иньяки",
      lastName: "Уильямс",
      team: "Атлетик Бильбао",
      stats: {
        laLiga: {
          8: {
            teams: ["Атлетик Бильбао", "Мальорка"],
            result: "2-1",
            minutesOnField: [53, 1],
            goals: [1, 5],
          },
          9: {
            teams: ["Эльче", "Атлетик Бильбао"],
            result: "0-0",
            minutesOnField: [45, 1],
          },
        },
      },
    },
    kThuram: {
      firstName: "Хефрен",
      lastName: "Тюрам",
      team: "Ювентус",
      stats: {
        ucl: {
          1: {
            teams: ["Ювентус", "Боруссия Дортмунд"],
            result: "4-4",
            minutesOnField: [90, 2],
            tackles: [7, 2],
          },
        },
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [21, 1],
          },
          7: {
            teams: ["Комо", "Ювентус"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    kudus: {
      firstName: "Мохаммед",
      lastName: "Кудус",
      team: "Тоттенхэм",
      stats: {
        ucl: {
          1: {
            teams: ["Тоттенхэм", "Вильярреал"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
          },
          3: {
            teams: ["Монако", "Тоттенхэм"],
            result: "0-0",
            minutesOnField: [79, 2],
            cleanSheet: [true, 1],
            tackles: [2, 0],
          },
        },
      },
    },
    modric: {
      firstName: "Лука",
      lastName: "Модрич",
      team: "Милан",
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          7: {
            teams: ["Милан", "Фиорентина"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            captain: true,
          },
        },
      },
    },
    olise: {
      firstName: "Майкл",
      lastName: "Олисе",
      team: "Бавария",
      stats: {
        ucl: {
          1: {
            teams: ["Бавария", "Челси"],
            result: "3-1",
            minutesOnField: [90, 2],
            assists: [1, 3],
            yellowCard: [1, -1],
            tackles: [1, 0],
          },
          2: {
            teams: ["Пафос", "Бавария"],
            result: "1-5",
            minutesOnField: [73, 2],
            assists: [2, 6],
            goals: [1, 5],
            tackles: [3, 1],
          },
          3: {
            teams: ["Бавария", "Брюгге"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            tackles: [2, 0],
          },
        },
      },
    },
    pedri: {
      firstName: "",
      lastName: "Педри",
      team: "Барселона",
      stats: {
        laLiga: {
          8: {
            teams: ["Севилья", "Барселона"],
            result: "4-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            assists: [1, 3],
            tackles: [undefined, 2],
          },
          9: {
            teams: ["Барселона", "Жирона"],
            result: "2-1",
            minutesOnField: [63, 2],
            goals: [1, 5],
            tackles: [undefined, 2],
          },
        },
      },
    },
    reijnders: {
      firstName: "Тиджани",
      lastName: "Рейндерс",
      team: "Манчестер Сити",
      stats: {
        pl: {
          7: {
            teams: ["Брентфорд", "Манчестер Сити"],
            result: "0-1",
            minutesOnField: [76, 2],
            cleanSheet: [true, 1],
          },
          8: {
            teams: ["Манчестер Сити", "Эвертон"],
            result: "2-0",
            minutesOnField: [59, 1],
          },
        },
      },
    },
    yıldız: {
      firstName: "Кенан",
      lastName: "Йылдыз",
      team: "Ювентус",
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [69, 2],
            cleanSheet: [true, 1],
          },
          7: {
            teams: ["Комо", "Ювентус"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
        },
      },
    },
    zamboAnguissa: {
      firstName: "Андре",
      lastName: "Замбо-Ангисса",
      team: "Наполи",
      stats: {
        seriaA: {
          6: {
            teams: ["Наполи", "Дженоа"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            shotAfterGoal: [1, 3],
          },
          7: {
            teams: ["Торино", "Наполи"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    zubimendi: {
      firstName: "Мартин",
      lastName: "Субименди",
      team: "Арсенал",
      stats: {
        pl: {
          7: {
            teams: ["Арсенал", "Вест Хэм"],
            result: "2-0",
            minutesOnField: [60, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          8: {
            teams: ["Фулхэм", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            fullMatch: [true, 1],
          },
        },
      },
    },
  },
  forwards: {
    alvarez: {
      firstName: "Хулиан",
      lastName: "Альварес",
      team: "Атлетико",
      stats: {
        laLiga: {
          8: {
            teams: ["Сельта", "Атлетико"],
            result: "1-1",
            minutesOnField: [81, 2],
            captain: true,
          },
          9: {
            teams: ["Атлетико", "Осасуна"],
            result: "1-0",
            minutesOnField: [82, 2],
            captain: true,
          },
        },
      },
    },
    davis: {
      firstName: "Кинан",
      lastName: "Дэвис",
      team: "Удинезе",
      stats: {
        seriaA: {
          7: {
            teams: ["Кремонезе", "Удинезе"],
            result: "1-1",
            minutesOnField: [15, 1],
          },
        },
      },
    },
    ettaEyong: {
      firstName: "Карл",
      lastName: "Этта Йонг",
      team: "Леванте",
      stats: {
        laLiga: {
          8: {
            teams: ["Реал Овьедо", "Леванте"],
            result: "0-2",
            minutesOnField: [87, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Леванте", "Райо Вальекано"],
            result: "0-3",
            minutesOnField: [74, 2],
          },
        },
      },
    },
    haaland: {
      firstName: "Эрлинг",
      lastName: "Холанд",
      team: "Манчестер Сити",
      stats: {
        ucl: {
          3: {
            teams: ["Вильярреал", "Манчестер Сити"],
            result: "0-2",
            minutesOnField: [86, 2],
            goals: [1, 4],
          },
        },
        pl: {
          7: {
            teams: ["Брентфорд", "Манчестер Сити"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            captain: true,
          },
          8: {
            teams: ["Манчестер Сити", "Эвертон"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [2, 8],
            captain: true,
          },
        },
      },
    },
    kane: {
      firstName: "Харри",
      lastName: "Кейн",
      team: "Бавария",
      stats: {
        ucl: {
          1: {
            teams: ["Бавария", "Челси"],
            result: "3-1",
            minutesOnField: [89, 2],
            goals: [2, 8],
            earnedPenalty: [1, 2],
            tackles: [2, 0],
            playerOfTheMatch: [true, 3],
          },
          2: {
            teams: ["Пафос", "Бавария"],
            result: "1-5",
            minutesOnField: [64, 2],
            goals: [2, 8],
            playerOfTheMatch: [true, 3],
            captain: true,
          },
          3: {
            teams: ["Бавария", "Брюгге"],
            result: "4-0",
            minutesOnField: [69, 2],
            goals: [1, 4],
            tackles: [1, 0],
            captain: true,
          },
        },
      },
    },
    mateta: {
      firstName: "Жан-Филипп",
      lastName: "Матета",
      team: "Кристал Пэлас",
      stats: {
        pl: {
          7: {
            teams: ["Эвертон", "Кристал Пэлас"],
            result: "2-1",
            minutesOnField: [70, 2],
          },
          8: {
            teams: ["Кристал Пэлас", "Борнмут"],
            result: "3-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [3, 12],
          },
        },
      },
    },
    mbappe: {
      firstName: "Килиан",
      lastName: "Мбаппе",
      team: "Реал Мадрид",
      stats: {
        ucl: {
          1: {
            teams: ["Реал Мадрид", "Марсель"],
            result: "2-1",
            minutesOnField: [90, 2],
            goals: [2, 8],
            playerOfTheMatch: [true, 3],
            captain: true,
          },
          2: {
            teams: ["Кайрат", "Реал Мадрид"],
            result: "0-5",
            minutesOnField: [81, 2],
            goals: [3, 12],
            outsideTheBox: [1, 1],
            playerOfTheMatch: [true, 3],
          },
          3: {
            teams: ["Реал Мадрид", "Ювентус"],
            result: "1-0",
            minutesOnField: [90, 2],
            tackles: [1, 0],
          },
        },
        laLiga: {
          8: {
            teams: ["Реал Мадрид", "Вильярреал"],
            result: "3-1",
            minutesOnField: [83, 2],
            goals: [1, 4],
            assists: [1, 3],
          },
          9: {
            teams: ["Хетафе", "Реал Мадрид"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    mThuram: {
      firstName: "Маркус",
      lastName: "Тюрам",
      team: "Интер",
      stats: {
        ucl: {
          2: {
            teams: ["Интер", "Славия"],
            result: "3-0",
            minutesOnField: [66, 2],
            assists: [1, 3],
            tackles: [1, 0],
            playerOfTheMatch: [true, 3],
          },
        },
      },
    },
    pavlidis: {
      firstName: "Вангелис",
      lastName: "Павлидис",
      team: "Бенфика",
      stats: {
        ucl: {
          1: {
            teams: ["Бенфика", "Карабах"],
            result: "2-3",
            minutesOnField: [79, 2],
            goals: [1, 4],
            tackles: [3, 1],
          },
        },
      },
    },
    vlahovic: {
      firstName: "Душан",
      lastName: "Влахович",
      team: "Ювентус",
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [21, 1],
          },
        },
      },
    },
    welbeck: {
      firstName: "Дэнни",
      lastName: "Уэлбек",
      team: "Брайтон",
      stats: {
        pl: {
          7: {
            teams: ["Вулверхэмптон", "Брайтон"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
          },
        },
      },
    },
    woltemade: {
      firstName: "Ник",
      lastName: "Вольтемаде",
      team: "Ньюкасл",
      stats: {
        pl: {
          8: {
            teams: ["Брайтон", "Ньюкасл"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
          },
        },
      },
    },
  },
}; // Игроки
const activeTeams = {
  Арсенал: {
    color: ["fff", "ef0107"],
    opponents_ucl: [
      "Атлетик Бильбао",
      "Олимпиакос",
      "Атлетико",
      "Славия",
      "Бавария",
      "Брюгге",
      "Интер",
      "Кайрат",
    ],
    opponents_pl: [
      "Вест Хэм",
      "Фулхэм",
      "Кристал Пэлас",
      "Бернли",
      "Сандерленд",
      "Тоттенхэм",
      "Челси",
      "Брентфорд",
      "Астон Вилла",
      "Вулверхэмптон",
      "Эвертон",
      "Брайтон",
      "Астон Вилла",
      "Борнмут",
      "Ливерпуль",
      "Ноттингем Форест",
      "Манчестер Юнайтед",
      "Лидс",
      "Сандерленд",
      "Брентфорд",
      "Тоттенхэм",
      "Челси",
      "Брайтон",
      "Эвертон",
      "Вулверхэмптон",
      "Борнмут",
      "Манчестер Сити",
      "Ньюкасл",
      "Фулхэм",
      "Вест Хэм",
      "Бернли",
      "Кристал Пэлас",
    ],
  },
  Аталанта: {
    color: ["0a67b1", "1d1e1c"],
    opponents_seriaA: [
      "Комо",
      "Лацио",
      "Кремонезе",
      "Милан",
      "Удинезе",
      "Сассуоло",
      "Наполи",
      "Фиорентина",
      "Верона",
      "Кальяри",
      "Дженоа",
      "Интер",
      "Рома",
      "Болонья",
      "Торино",
      "Пиза",
      "Парма",
      "Комо",
      "Кремонезе",
      "Лацио",
      "Наполи",
      "Сассуоло",
      "Удинезе",
      "Интер",
      "Верона",
      "Лечче",
      "Ювентус",
      "Рома",
      "Кальяри",
      "Дженоа",
      "Милан",
      "Болонья",
      "Фиорентина",
    ],
  },
  "Атлетик Бильбао": {
    color: ["fff", "ee2523"],
    opponents_laLiga: [
      "Мальорка",
      "Эльче",
      "Хетафе",
      "Реал Сосьедад",
      "Реал Овьедо",
      "Барселона",
      "Леванте",
      "Атлетико",
      "Сельта",
      "Эспаньол",
      "Осасуна",
      "Реал Мадрид",
      "Мальорка",
      "Севилья",
      "Реал Сосьедад",
      "Леванте",
      "Реал Овьедо",
      "Эльче",
      "Райо Вальекано",
      "Барселона",
      "Жирона",
      "Бетис",
      "Хетафе",
      "Вильярреал",
      "Атлетико",
      "Осасуна",
      "Депортиво Алавес",
      "Валенсия",
      "Эспаньол",
      "Сельта",
      "Реал Мадрид",
    ],
  },
  Атлетико: {
    color: ["e8151e", "282a6f"],
    opponents_laLiga: [
      "Сельта",
      "Осасуна",
      "Бетис",
      "Севилья",
      "Леванте",
      "Хетафе",
      "Реал Овьедо",
      "Атлетик Бильбао",
      "Валенсия",
      "Жирона",
      "Реал Сосьедад",
      "Барселона",
      "Депортиво Алавес",
      "Мальорка",
      "Леванте",
      "Бетис",
      "Райо Вальекано",
      "Эспаньол",
      "Реал Овьедо",
      "Реал Сосьедад",
      "Хетафе",
      "Реал Мадрид",
      "Барселона",
      "Севилья",
      "Атлетик Бильбао",
      "Эльче",
      "Валенсия",
      "Сельта",
      "Осасуна",
      "Жирона",
      "Вильярреал",
    ],
  },
  Бавария: {
    color: ["fff", "ed0038"],
    opponents_ucl: [
      "Челси",
      "Пафос",
      "Брюгге",
      "ПСЖ",
      "Арсенал",
      "Спортинг",
      "Юнион",
      "ПСВ",
    ],
  },
  Барселона: {
    color: ["004d98", "a50044"],
    opponents_laLiga: [
      "Севилья",
      "Жирона",
      "Реал Мадрид",
      "Эльче",
      "Сельта",
      "Атлетик Бильбао",
      "Депортиво Алавес",
      "Бетис",
      "Осасуна",
      "Вильярреал",
      "Эспаньол",
      "Атлетико",
      "Реал Сосьедад",
      "Реал Овьедо",
      "Эльче",
      "Мальорка",
      "Жирона",
      "Леванте",
      "Вильярреал",
      "Атлетик Бильбао",
      "Севилья",
      "Райо Вальекано",
      "Атлетико",
      "Эспаньол",
      "Хетафе",
      "Сельта",
      "Осасуна",
      "Реал Мадрид",
      "Депортиво Алавес",
      "Бетис",
      "Валенсия",
    ],
  },
  Бенфика: {
    color: ["fff", "e83030"],
    opponents_ucl: [
      "Карабах",
      "Челси",
      "Ньюкасл",
      "Байер",
      "Аякс",
      "Наполи",
      "Ювентус",
      "Реал Мадрид",
    ],
  },
  Брайтон: {
    color: ["fff", "005daa"],
    opponents_pl: [
      "Вулверхэмптон",
      "Ньюкасл",
      "Манчестер Юнайтед",
      "Лидс",
      "Кристал Пэлас",
      "Брентфорд",
      "Ноттингем Форест",
      "Астон Вилла",
      "Вест Хэм",
      "Ливерпуль",
      "Сандерленд",
      "Арсенал",
      "Вест Хэм",
      "Бернли",
      "Манчестер Сити",
      "Борнмут",
      "Фулхэм",
      "Эвертон",
      "Кристал Пэлас",
      "Астон Вилла",
      "Брентфорд",
      "Ноттингем Форест",
      "Арсенал",
      "Сандерленд",
      "Ливерпуль",
      "Бернли",
      "Тоттенхэм",
      "Челси",
      "Ньюкасл",
      "Вулверхэмптон",
      "Лидс",
      "Манчестер Юнайтед",
    ],
  },
  Вильярреал: {
    color: ["ffe667", "005187"],
    opponents_laLiga: [
      "Реал Мадрид",
      "Бетис",
      "Валенсия",
      "Райо Вальекано",
      "Эспаньол",
      "Мальорка",
      "Реал Сосьедад",
      "Хетафе",
      "Леванте",
      "Барселона",
      "Эльче",
      "Депортиво Алавес",
      "Бетис",
      "Реал Мадрид",
      "Осасуна",
      "Эспаньол",
      "Хетафе",
      "Валенсия",
      "Барселона",
      "Эльче",
      "Депортиво Алавес",
      "Реал Сосьедад",
      "Жирона",
      "Атлетик Бильбао",
      "Сельта",
      "Реал Овьедо",
      "Леванте",
      "Мальорка",
      "Севилья",
      "Райо Вальекано",
      "Атлетико",
    ],
  },
  Интер: {
    color: ["00219c", "000"],
    opponents_ucl: [
      "Аякс",
      "Славия",
      "Юнион",
      "Кайрат",
      "Атлетико",
      "Ливерпуль",
      "Арсенал",
      "Боруссия Дортмунд",
    ],
    opponents_seriaA: [
      "Кремонезе",
      "Рома",
      "Наполи",
      "Фиорентина",
      "Верона",
      "Лацио",
      "Милан",
      "Пиза",
      "Комо",
      "Дженоа",
      "Лечче",
      "Аталанта",
      "Болонья",
      "Парма",
      "Наполи",
      "Удинезе",
      "Пиза",
      "Кремонезе",
      "Сассуоло",
      "Ювентус",
      "Лечче",
      "Дженоа",
      "Милан",
      "Аталанта",
      "Фиорентина",
      "Рома",
      "Комо",
      "Кальяри",
      "Торино",
      "Парма",
      "Лацио",
      "Верона",
      "Болонья",
    ],
  },
  "Кристал Пэлас": {
    color: ["ee2e24", "0055a5"],
    opponents_pl: [
      "Эвертон",
      "Борнмут",
      "Арсенал",
      "Брентфорд",
      "Брайтон",
      "Вулверхэмптон",
      "Манчестер Юнайтед",
      "Бернли",
      "Фулхэм",
      "Манчестер Сити",
      "Лидс",
      "Тоттенхэм",
      "Фулхэм",
      "Ньюкасл",
      "Астон Вилла",
      "Сандерленд",
      "Челси",
      "Ноттингем Форест",
      "Брайтон",
      "Бернли",
      "Вулверхэмптон",
      "Манчестер Юнайтед",
      "Тоттенхэм",
      "Лидс",
      "Манчестер Сити",
      "Ньюкасл",
      "Вест Хэм",
      "Ливерпуль",
      "Борнмут",
      "Эвертон",
      "Брентфорд",
      "Арсенал",
    ],
  },
  Леванте: {
    color: ["005ca3", "b3023d"],
    opponents_laLiga: [
      "Реал Овьедо",
      "Райо Вальекано",
      "Мальорка",
      "Сельта",
      "Атлетико",
      "Валенсия",
      "Атлетик Бильбао",
      "Осасуна",
      "Вильярреал",
      "Реал Сосьедад",
      "Севилья",
      "Эспаньол",
      "Реал Мадрид",
      "Эльче",
      "Атлетико",
      "Атлетик Бильбао",
      "Валенсия",
      "Барселона",
      "Депортиво Алавес",
      "Жирона",
      "Райо Вальекано",
      "Реал Овьедо",
      "Реал Сосьедад",
      "Хетафе",
      "Эспаньол",
      "Севилья",
      "Вильярреал",
      "Осасуна",
      "Сельта",
      "Мальорка",
      "Бетис",
    ],
  },
  Ливерпуль: {
    color: ["fff", "d20019"],
    opponents_pl: [
      "Челси",
      "Манчестер Юнайтед",
      "Брентфорд",
      "Астон Вилла",
      "Манчестер Сити",
      "Ноттингем Форест",
      "Вест Хэм",
      "Сандерленд",
      "Лидс",
      "Брайтон",
      "Тоттенхэм",
      "Вулверхэмптон",
      "Лидс",
      "Фулхэм",
      "Арсенал",
      "Бернли",
      "Борнмут",
      "Ньюкасл",
      "Манчестер Сити",
      "Сандерленд",
      "Ноттингем Форест",
      "Вест Хэм",
      "Вулверхэмптон",
      "Тоттенхэм",
      "Брайтон",
      "Фулхэм",
      "Эвертон",
      "Кристал Пэлас",
      "Манчестер Юнайтед",
      "Челси",
      "Астон Вилла",
      "Брентфорд",
    ],
  },
  "Манчестер Сити": {
    color: ["fff", "6caddf"],
    opponents_ucl: [
      "Наполи",
      "Монако",
      "Вильярреал",
      "Боруссия Дортмунд",
      "Байер",
      "Реал Мадрид",
      "Буде-Глимт",
      "Галатасарай",
    ],
    opponents_pl: [
      "Брентфорд",
      "Эвертон",
      "Астон Вилла",
      "Борнмут",
      "Ливерпуль",
      "Ньюкасл",
      "Лидс",
      "Фулхэм",
      "Сандерленд",
      "Кристал Пэлас",
      "Вест Хэм",
      "Ноттингем Форест",
      "Сандерленд",
      "Челси",
      "Брайтон",
      "Манчестер Юнайтед",
      "Вулверхэмптон",
      "Тоттенхэм",
      "Ливерпуль",
      "Фулхэм",
      "Ньюкасл",
      "Лидс",
      "Ноттингем Форест",
      "Вест Хэм",
      "Кристал Пэлас",
      "Челси",
      "Арсенал",
      "Бернли",
      "Эвертон",
      "Брентфорд",
      "Борнмут",
      "Астон Вилла",
    ],
  },
  Милан: {
    color: ["e4002b", "101820"],
    opponents_seriaA: [
      "Ювентус",
      "Фиорентина",
      "Пиза",
      "Аталанта",
      "Рома",
      "Парма",
      "Интер",
      "Лацио",
      "Торино",
      "Сассуоло",
      "Комо",
      "Верона",
      "Кальяри",
      "Дженоа",
      "Фиорентина",
      "Лечче",
      "Рома",
      "Болонья",
      "Комо",
      "Пиза",
      "Парма",
      "Кремонезе",
      "Интер",
      "Лацио",
      "Торино",
      "Наполи",
      "Удинезе",
      "Верона",
      "Ювентус",
      "Сассуоло",
      "Аталанта",
      "Дженоа",
      "Кальяри",
    ],
  },
  Наполи: {
    color: ["fff", "01a7e1"],
    opponents_seriaA: [
      "Дженоа",
      "Торино",
      "Интер",
      "Лечче",
      "Комо",
      "Болонья",
      "Аталанта",
      "Рома",
      "Ювентус",
      "Удинезе",
      "Парма",
      "Кремонезе",
      "Лацио",
      "Верона",
      "Интер",
      "Сассуоло",
      "Ювентус",
      "Фиорентина",
      "Дженоа",
      "Рома",
      "Аталанта",
      "Верона",
      "Торино",
      "Лечче",
      "Кальяри",
      "Милан",
      "Парма",
      "Лацио",
      "Кремонезе",
      "Комо",
      "Болонья",
      "Пиза",
      "Удинезе",
    ],
  },
  Ньюкасл: {
    color: ["fff", "231f20"],
    opponents_pl: [
      "Ноттингем Форест",
      "Брайтон",
      "Фулхэм",
      "Вест Хэм",
      "Брентфорд",
      "Манчестер Сити",
      "Эвертон",
      "Тоттенхэм",
      "Бернли",
      "Сандерленд",
      "Челси",
      "Манчестер Юнайтед",
      "Бернли",
      "Кристал Пэлас",
      "Лидс",
      "Вулверхэмптон",
      "Астон Вилла",
      "Ливерпуль",
      "Брентфорд",
      "Тоттенхэм",
      "Манчестер Сити",
      "Эвертон",
      "Манчестер Юнайтед",
      "Челси",
      "Сандерленд",
      "Кристал Пэлас",
      "Борнмут",
      "Арсенал",
      "Брайтон",
      "Ноттингем Форест",
      "Вест Хэм",
      "Фулхэм",
    ],
  },
  "Реал Мадрид": {
    color: ["fff", "004996"],
    opponents_ucl: [
      "Марсель",
      "Кайрат",
      "Ювентус",
      "Ливерпуль",
      "Олимпиакос",
      "Манчестер Сити",
      "Монако",
      "Бенфика",
    ],
    opponents_laLiga: [
      "Вильярреал",
      "Хетафе",
      "Барселона",
      "Валенсия",
      "Райо Вальекано",
      "Эльче",
      "Жирона",
      "Сельта",
      "Депортиво Алавес",
      "Севилья",
      "Бетис",
      "Атлетик Бильбао",
      "Леванте",
      "Вильярреал",
      "Райо Вальекано",
      "Валенсия",
      "Реал Сосьедад",
      "Осасуна",
      "Хетафе",
      "Сельта",
      "Эльче",
      "Атлетико",
      "Мальорка",
      "Жирона",
      "Бетис",
      "Депортиво Алавес",
      "Эспаньол",
      "Барселона",
      "Реал Овьедо",
      "Севилья",
      "Атлетик Бильбао",
    ],
  },
  Тоттенхэм: {
    color: ["fff", "132257"],
    opponents_ucl: [
      "Вильярреал",
      "Буде-Глимт",
      "Монако",
      "Копенгаген",
      "ПСЖ",
      "Славия",
      "Боруссия Дортмунд",
      "Айнтрахт Франкфурт",
    ],
  },
  Удинезе: {
    color: ["fff", "7f7f7f"],
    opponents_seriaA: [
      "Удинезе",
      "Кремонезе",
      "Лечче",
      "Ювентус",
      "Аталанта",
      "Рома",
      "Болонья",
      "Парма",
      "Дженоа",
      "Наполи",
      "Фиорентина",
      "Лацио",
      "Комо",
      "Торино",
      "Пиза",
      "Интер",
      "Верона",
      "Рома",
      "Лечче",
      "Сассуоло",
      "Болонья",
      "Фиорентина",
      "Аталанта",
      "Ювентус",
      "Дженоа",
      "Комо",
      "Милан",
      "Парма",
      "Лацио",
      "Торино",
      "Кальяри",
      "Кремонезе",
      "Наполи",
    ],
  },
  Челси: {
    color: ["fff", "001489"],
    opponents_pl: [
      "Ливерпуль",
      "Ноттингем Форест",
      "Сандерленд",
      "Тоттенхэм",
      "Вулверхэмптон",
      "Бернли",
      "Арсенал",
      "Лидс",
      "Борнмут",
      "Эвертон",
      "Ньюкасл",
      "Астон Вилла",
      "Борнмут",
      "Манчестер Сити",
      "Фулхэм",
      "Брентфорд",
      "Кристал Пэлас",
      "Вест Хэм",
      "Вулверхэмптон",
      "Лидс",
      "Бернли",
      "Арсенал",
      "Астон Вилла",
      "Ньюкасл",
      "Эвертон",
      "Манчестер Сити",
      "Манчестер Юнайтед",
      "Брайтон",
      "Ноттингем Форест",
      "Ливерпуль",
      "Тоттенхэм",
      "Сандерленд",
    ],
  },
  Ювентус: {
    color: ["fff", "000"],
    opponents_ucl: [
      "Боруссия Дортмунд",
      "Вильярреал",
      "Реал Мадрид",
      "Спортинг",
      "Буде-Глимт",
      "Пафос",
      "Бенфика",
      "Монако",
    ],
    opponents_seriaA: [
      "Милан",
      "Комо",
      "Лацио",
      "Удинезе",
      "Кремонезе",
      "Торино",
      "Фиорентина",
      "Кальяри",
      "Наполи",
      "Болонья",
      "Рома",
      "Пиза",
      "Лечче",
      "Сассуоло",
      "Кремонезе",
      "Кальяри",
      "Наполи",
      "Парма",
      "Лацио",
      "Интер",
      "Комо",
      "Рома",
      "Пиза",
      "Удинезе",
      "Сассуоло",
      "Дженоа",
      "Аталанта",
      "Болонья",
      "Милан",
      "Верона",
      "Лечче",
      "Фиорентина",
      "Торино",
    ],
  },
}; // Активные команды
const teams = {
  "Айнтрахт Франкфурт": "Eintracht_Frankfurt",
  Аякс: "Ajax",
  Арсенал: "Arsenal",
  "Астон Вилла": "Aston_Villa",
  Аталанта: "Atalanta",
  "Атлетик Бильбао": "Athletic_Bilbao",
  Атлетико: "Atletico",
  Байер: "Bayer",
  Бавария: "Bayern",
  Барселона: "Barcelona",
  Бенфика: "Benfica",
  Бернли: "Burnley",
  Бетис: "Betis",
  Болонья: "Bologna",
  Борнмут: "Bournemouth",
  "Боруссия Дортмунд": "Borussia_Dortmund",
  Брайтон: "Brighton",
  Брентфорд: "Brentford",
  "Буде-Глимт": "Bodo_Glimt",
  Брюгге: "Brugge",
  Валенсия: "Valencia",
  Верона: "Verona",
  "Вест Хэм": "West_Ham",
  Вильярреал: "Villarreal",
  Вулверхэмптон: "Wolverhampton",
  Галатасарай: "Galatasaray",
  "Депортиво Алавес": "Deportivo_Alaves",
  Дженоа: "Genoa",
  Жирона: "Girona",
  Интер: "Inter",
  Кальяри: "Cagliari",
  Карабах: "Qarabag",
  Кайрат: "Kairat",
  Комо: "Como",
  Копенгаген: "Copenhagen",
  Кремонезе: "Cremonese",
  "Кристал Пэлас": "Crystal_Palace",
  Лацио: "Lazio",
  Леванте: "Levante",
  Лечче: "Lecce",
  Ливерпуль: "Liverpool",
  Лидс: "Leeds",
  Мальорка: "Mallorca",
  "Манчестер Сити": "Manchester_City",
  "Манчестер Юнайтед": "Manchester_United",
  Марсель: "Marseille",
  Милан: "Milan",
  Монако: "Monaco",
  Наполи: "Napoli",
  "Ноттингем Форест": "Nottingham_Forest",
  Ньюкасл: "Newcastle",
  Олимпиакос: "Olympiacos",
  Осасуна: "Osasuna",
  Парма: "Parma",
  Пафос: "Pafos",
  Пиза: "Pisa",
  ПСВ: "PSV",
  ПСЖ: "PSG",
  "Райо Вальекано": "Rayo_Vallecano",
  "Реал Мадрид": "Real_Madrid",
  "Реал Овьедо": "Real_Oviedo",
  "Реал Сосьедад": "Real_Sociedad",
  Рома: "Roma",
  Сандерленд: "Sunderland",
  Сассуоло: "Sassuolo",
  Севилья: "Sevilla",
  Сельта: "Celta",
  Славия: "Slavia",
  Спортинг: "Sporting",
  Торино: "Torino",
  Тоттенхэм: "Tottenham",
  Удинезе: "Udinese",
  Фиорентина: "Fiorentina",
  Фулхэм: "Fulham",
  Хетафе: "Getafe",
  Челси: "Chelsea",
  Эвертон: "Everton",
  Эльче: "Elche",
  Эспаньол: "Espanyol",
  Ювентус: "Juventus",
  Юнион: "Union",
}; // Логотипы команд
const leagues = {
  ucl: {
    name: "Champions League",
    background: "linear-gradient(93.5deg,#0232ff 0.59%,#010056 94.82%)",
    button: "#040a63",
  },
  pl: {
    name: "Premier League",
    background: "linear-gradient(90deg,#37003c,#953bff)",
    button: "#37003c",
  },
  laLiga: {
    name: "LaLiga",
    background: "#ff4b44",
    button: "#ff4b44",
  },
  seriaA: {
    name: "Seria A",
    background:
      "url(https://jeromesolomonmalone.github.io/fantasy/images/other/seriA_cover.webp) no-repeat center center / cover",
    button: "#2047e3",
  },
}; // Данные лиг
const terms = {
  goals: ["гол", "гола", "голов"],
  cleanSheet: ["сухой матч", "сухих матча", "сухих матчей", "сухой матч"],
  missedGoals: ["пропущенный гол", "пропущенных гола", "пропущенных голов"],
  savingPenalty: ["отбитый пенальти", "отбитых пенальти", "отбитых пенальти"],
  saves: ["сейв", "сейва", "сейвов"],
  minutesOnField: ["минута на поле", "минуты на поле", "минут на поле"],
  fullMatch: ["полный матч", "полных матча", "полных матчей", "полный матч"],
  outsideTheBox: [
    "гол из-за штрафной",
    "гола из-за штрафной",
    "голов из-за штрафной",
  ],
  playerOfTheMatch: [
    "награда «Игрок матча»",
    "награды «Игрок матча»",
    "наград «Игрок матча»",
    "награда «Игрок матча»",
  ],
  assists: ["голевой пас", "голевых паса", "голевых пасов"],
  shotAfterGoal: [
    "удар, после сэйва которого забит гол на добивании",
    "удара, после сэйва которого забит гол на добивании",
    "ударов, после сэйва которого забит гол на добивании",
  ],
  tackles: [
    "возврат владения",
    "возврата владения",
    "возвратов владения",
    "возвраты владения",
  ],
  earnedPenalty: [
    "заработанный пенальти",
    "заработанных пенальти",
    "заработанных пенальти",
  ],
  concedingPenalty: [
    "привезенный пенальти",
    "привезенных пенальти",
    "привезенных пенальти",
  ],
  missingPenalty: [
    "незабитый пенальти",
    "незабитых пенальти",
    "незабитых пенальти",
  ],
  yellowCard: ["желтая карточка", "желтые карточки", "желтых карточек"],
  redCard: ["красная карточка", "красные карточки", "красных карточек"],
  ownGoal: ["автогол", "автогола", "автоголов"],
  captain: ["тур «Капитан»", "тура «Капитан»", "туров «Капитан»", "капитан"],
}; // Терминология правил
for (const key in terms) {
  if (terms[key].length >= 4) {
    terms[key][3] =
      terms[key][3].charAt(0).toUpperCase() + terms[key][3].slice(1);
  }
}
function translate(term, value) {
  const data = terms[term];
  if (!data) return null;

  // Объединяем проверки для undefined и true
  if (value === undefined || value === true) {
    return data.length > 3 ? data[3] : data[0];
  }

  if (data.length === 1) return data[0];

  const num = Math.abs(value) % 100;
  const lastDigit = num % 10;

  // Оптимизируем условные выражения
  return num >= 11 && num <= 14
    ? data[2]
    : lastDigit === 1
    ? data[0]
    : lastDigit >= 2 && lastDigit <= 4
    ? data[1]
    : data[2];
}
const locationOfTheImages =
  "https://jeromesolomonmalone.github.io/fantasy/images/";

const headerButtons = document.querySelector(".header_buttons");
function createButton(league, key, isActive) {
  const button = document.createElement("button");
  button.classList.add("header_button");
  button.dataset.league = key;
  button.style.setProperty("--button-background", league.button);
  if (isActive) button.classList.add("header_button-is_active");
  const img = document.createElement("img");
  img.src = `${locationOfTheImages}logos/leagues/mini/${key}.png`;
  img.alt = `Логотип чемпионата "${league.name}"`;
  img.addEventListener("load", () => {
    img.style.opacity = "1";
  });
  button.appendChild(img);

  return button;
}
let isFirst = true;
Object.keys(leagues).forEach((key) => {
  headerButtons.appendChild(createButton(leagues[key], key, isFirst));
  isFirst = false;
}); // Главные кнопки в html

function calculateLeaguePoints() {
  const leaguePoints = {};

  for (const position of Object.values(players)) {
    for (const player of Object.values(position)) {
      if (!player.stats) continue;

      for (const [league, stats] of Object.entries(player.stats)) {
        leaguePoints[league] = leaguePoints[league] || 0;
        leaguePoints[league] += calculatePlayerPoints(stats);
      }
    }
  }

  return leaguePoints;
}
function calculatePlayerPoints(stats) {
  let totalPoints = 0;

  for (const match of Object.values(stats)) {
    let matchPoints = 0;

    for (const key in match) {
      const value =
        Array.isArray(match[key]) && typeof match[key][1] === "number"
          ? match[key][1]
          : 0;
      matchPoints += value;
    }

    if (match.captain) matchPoints *= 2;
    totalPoints += matchPoints;
  }
  return totalPoints;
} // Функция для подсчета очков игрока
const totalPoints = calculateLeaguePoints(); // Сумма очков по лигам

const headerElements = {
  buttons: document.querySelectorAll(".header_button"),
  top: document.querySelector(".header_top"),
  topRight: document.querySelector(".header_top_right"),
  logo: document.querySelector(".header_logo"),
  logoBig: document.querySelector(".header_logo_transparent"),
  title: document.querySelector(".header_title"),
  points: document.querySelector(".header_points"),
  runningLine: document.querySelector(".header_running_line"),
};
const playersList = document.querySelector(".players_list");
const playerTemplate = document.querySelector("#player-template").content;
function createElements(container, { count = 0 } = {}) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    frag.appendChild(document.createElement("p"));
  }
  container.appendChild(frag);
}
createElements(headerElements.runningLine, { count: 30 });
createElements(playerTemplate.querySelector(".player_running_line"), {
  count: 4,
});
createElements(document.querySelector(".popup_running_line"), { count: 20 });
let appState = {
  currentLeagueKey: null,
};
const BREAKPOINT = 1280;
const logoLink = `${locationOfTheImages}logos/leagues/big/`;
const logoWhiteLink = `${logoLink}white/`;
function updateLogo() {
  headerElements.logo.src =
    appState.currentLeagueKey === "seriaA"
      ? `${logoLink}${appState.currentLeagueKey}.png`
      : window.innerWidth < BREAKPOINT
      ? `${logoWhiteLink}${appState.currentLeagueKey}.png`
      : `${logoLink}${appState.currentLeagueKey}.png`;
}
function updateHeaderAndCSS(leagueKey) {
  appState.currentLeagueKey = leagueKey;
  const league = leagues[leagueKey];

  const imagesToLoad = [headerElements.logo, headerElements.logoBig];
  imagesToLoad.forEach((el) => (el.style.opacity = 0));
  headerElements.topRight.style.opacity = 0;

  document.documentElement.style.setProperty(
    "--background-header-from-js",
    league.background
  );
  headerElements.title.textContent = league.name;
  headerElements.points.textContent = totalPoints[leagueKey];

  headerElements.logoBig.src = `${logoWhiteLink}${leagueKey}.png`;
  headerElements.logo.alt =
    headerElements.logoBig.alt = `Логотип ${league.name}`;

  let loaded = 0;
  const onLoad = () => {
    if (++loaded === imagesToLoad.length) {
      imagesToLoad.forEach((el, index) => {
        el.style.opacity = [1, 0.16][index];
      });
      headerElements.topRight.style.opacity = 1;
    }
  };
  imagesToLoad.forEach((el) => {
    el.addEventListener("load", onLoad);
  });

  headerElements.runningLine
    .querySelectorAll("p")
    .forEach((p) => (p.textContent = league.name));

  updateLogo();
}
playersList.innerHTML = Object.keys(players)
  .map(
    (position) => `
  <h2 class="position_title">${position}</h2>
  <div class="position_container ${position}"></div>
`
  )
  .join(""); // Добавление div  по позициям
function createPlayerElement(playerData, leagueKey, parentKey, playerKey) {
  const playerClone = playerTemplate.cloneNode(true);
  const templateElements = {
    player: playerClone.querySelector(".player_item"),
    photo: playerClone.querySelector(".player_photo"),
    firstName: playerClone.querySelector(".player_firstName"),
    lastName: playerClone.querySelector(".player_lastName"),
    pointsWrapper: playerClone.querySelector(".player_totalPoints_wrapper"),
    runningLinePs: playerClone.querySelectorAll(".player_running_line p"),
  };
  const popup = document.querySelector(".popup");
  const linkToThePhoto = `${locationOfTheImages}players/${leagueKey}/${playerKey}.${
    leagueKey === "pl" ? "png" : "webp"
  }`;

  templateElements.photo.src = linkToThePhoto;
  templateElements.photo.alt = `${playerData.firstName} ${playerData.lastName}`;
  templateElements.photo.addEventListener("load", () => {
    templateElements.photo.style.opacity = "1";
  });

  templateElements.firstName.textContent = playerData.firstName;
  templateElements.lastName.textContent = playerData.lastName;
  templateElements.pointsWrapper.innerHTML = "";

  const stats = playerData.stats[leagueKey];
  const points = stats ? calculatePlayerPoints(stats) : 0;
  const divCount = points < 10 ? 4 : 3;

  for (let i = 1; i <= divCount; i++) {
    const div = document.createElement("div");
    div.classList.add(`point-div-${i}`);

    for (let j = 0; j < 8; j++) {
      div.appendChild(document.createElement("p")).textContent = points;
    }

    templateElements.pointsWrapper.appendChild(div);
  }

  templateElements.runningLinePs.forEach(
    (p) => (p.textContent = parentKey.slice(0, -1))
  );

  templateElements.player.addEventListener("click", () => {
    const popupElements = {
      header: popup.querySelector(".popup_header"),
      firstName: popup.querySelector(".popup_player_firstName"),
      lastName: popup.querySelector(".popup_player_lastName"),
      photo: popup.querySelector(".popup_player_photo"),
      points: popup.querySelector(".popup_player_points"),
      team: popup.querySelector(".popup_player_team"),
      teamBig: popup.querySelector(".popup_player_team_big"),
      runningLinePs: popup.querySelectorAll(".popup_running_line p"),
      buttons: popup.querySelector(".popup_buttons"),
      tourResult: popup.querySelector(".tour_result"),
      tourStats: popup.querySelector(".tour_statistics"),
      genStats: popup.querySelector(".general_statistics"),
    };

    // Инициализация popup
    openPopup(popup);
    addCloseOverlayListener(popup);
    popup
      .querySelector(".close")
      .addEventListener("click", () => closePopup(popup));

    // Заполнение данных игрока
    const teamInfo = activeTeams[playerData.team];

    const elementsToLoad = [
      popupElements.photo,
      popupElements.team,
      popupElements.teamBig,
    ];
    elementsToLoad.forEach((el) => (el.style.opacity = 0));
    popupElements.header.classList.remove(
      ...Array.from(popupElements.header.classList).filter((cls) =>
        cls.startsWith("popup_header_")
      )
    );
    popupElements.header.classList.add(`popup_header_${leagueKey}`);
    popupElements.firstName.textContent = playerData.firstName;
    popupElements.lastName.textContent = playerData.lastName;
    popupElements.photo.src = linkToThePhoto;
    popupElements.photo.alt = `${playerData.firstName} ${playerData.lastName}`;
    popupElements.points.textContent = stats ? calculatePlayerPoints(stats) : 0;
    popupElements.team.src = `${locationOfTheImages}logos/teams/${
      teams[playerData.team]
    }.png`;
    popupElements.teamBig.src = `${locationOfTheImages}logos/teams/white/${
      teams[playerData.team]
    }.png`;
    popupElements.team.alt =
      popupElements.teamBig.alt = `Логотип футбольного клуба ${playerData.team}`;
    popupElements.runningLinePs.forEach(
      (p) => (p.textContent = parentKey.slice(0, -1))
    );
    let loaded = 0;
    const onLoad = () => {
      if (++loaded === elementsToLoad.length) {
        elementsToLoad.forEach((el, index) => {
          el.style.opacity = [1, 1, 0.16][index];
        });
      }
    };
    elementsToLoad.forEach((el, index) => {
      el.addEventListener("load", onLoad);
    });

    // Создание кнопок туров
    const opponents = teamInfo[`opponents_${leagueKey}`];
    const startIndex =
      leagueKey === "pl"
        ? 7
        : leagueKey === "laLiga"
        ? 8
        : leagueKey === "seriaA"
        ? 6
        : 1;

    popupElements.buttons.innerHTML = "";
    opponents.forEach((teamName, index) => {
      const tourNumber = startIndex + index;
      const button = document.createElement("button");
      const p = document.createElement("p");
      const buttonWrapper = document.createElement("div");
      const imgWrapper = document.createElement("div");
      const img = document.createElement("img");

      p.textContent = `GW.${tourNumber}`;
      img.src = `${locationOfTheImages}logos/teams/${teams[teamName]}.png`;
      img.alt = `Логотип ${teamName}`;
      imgWrapper.appendChild(img);
      imgWrapper.classList.add("popup_button_img_wrapper");
      buttonWrapper.appendChild(imgWrapper);
      buttonWrapper.classList.add("popup_button_wrapper");
      button.appendChild(p);
      button.appendChild(buttonWrapper);
      button.dataset.tour = tourNumber;

      if (!stats[tourNumber]) button.classList.add("disabled");
      popupElements.buttons.appendChild(button);
    });

    // Создание цветов команды
    const leftColor = `#${teamInfo.color[0]}`;
    const rightColor = `#${teamInfo.color[1]}`;
    document.documentElement.style.setProperty(
      "--background-team-left",
      leftColor
    );
    document.documentElement.style.setProperty(
      "--background-team-right",
      rightColor
    );

    // Находим активную кнопку
    const activeButton = [...popupElements.buttons.children]
      .filter((btn) => !btn.classList.contains("disabled"))
      .pop();

    if (activeButton) activeButton.classList.add("active");

    // Очистка контейнеров
    popupElements.tourResult.innerHTML =
      popupElements.tourStats.innerHTML =
      popupElements.genStats.innerHTML =
        "";

    // Собираем общую статистику
    const generalStats = {};
    const booleanKeys = new Set();

    for (const tour in stats) {
      if (tour === "teams" || tour === "result") continue;
      for (const key in stats[tour]) {
        if (key === "teams" || key === "result") continue;
        const value = stats[tour][key];

        if (!generalStats[key]) generalStats[key] = [0, 0];

        if (Array.isArray(value)) {
          const firstValue = value[0] !== undefined ? value[0] : 0;
          const secondValue = value[1] !== undefined ? value[1] : 0;

          if (firstValue === true && typeof secondValue === "number") {
            generalStats[key][0]++;
            generalStats[key][1] += secondValue;
            booleanKeys.add(key);
          } else if (
            typeof firstValue === "number" &&
            typeof secondValue === "number"
          ) {
            generalStats[key][0] += firstValue;
            generalStats[key][1] += secondValue;
          } else if (typeof secondValue === "number") {
            generalStats[key][1] += secondValue;
          }
        } else if (value === true) {
          generalStats[key][0]++;
          booleanKeys.add(key);
        }
      }
    }

    // Отображаем общую статистику
    const keys = Object.keys(generalStats);
    const nonBoolean = keys.filter((key) => !booleanKeys.has(key));
    const boolean = keys.filter((key) => booleanKeys.has(key));
    const allKeys = [...nonBoolean, ...boolean];

    allKeys.forEach((key) => {
      const [count, sum] = generalStats[key];

      const p = document.createElement("p");
      const span = document.createElement("span");

      const isValidKey = booleanKeys.has(key) || count !== 0;
      const translateValue = isValidKey ? count : undefined;
      const baseText = translate(key, translateValue);

      p.textContent = isValidKey ? `${count} ${baseText}` : baseText;

      if (key !== "captain") {
        span.textContent = `${sum} оч.`;
        span.classList.add("statistics_points");
        p.textContent += ":";
        p.appendChild(span);
      }

      popupElements.genStats.appendChild(p);

      if (key === allKeys[allKeys.length - 1]) {
        const totalP = document.createElement("p");
        totalP.classList.add("statistics_total_points");
        totalP.innerHTML = `Итого:<span>${points}</span> оч.`;
        popupElements.genStats.appendChild(totalP);
      }
    });

    // Функция обновления тура
    const updateTour = (tourNumber) => {
      popupElements.tourResult.innerHTML = popupElements.tourStats.innerHTML =
        "";

      const tourStats = stats[tourNumber];
      if (!tourStats) return;

      // Результат матча
      const [homeTeam, awayTeam] = tourStats.teams;
      const score = tourStats.result;
      const [homeScore, awayScore] = score.split("-").map(Number);

      const homeTeamElement = document.createElement("p");
      homeTeamElement.textContent = homeTeam;

      const homeLogo = document.createElement("img");
      homeLogo.src = `${locationOfTheImages}logos/teams/${teams[homeTeam]}.png`;
      homeLogo.alt = `Логотип ${homeTeam}`;

      const awayTeamElement = document.createElement("p");
      awayTeamElement.textContent = awayTeam;

      const awayLogo = document.createElement("img");
      awayLogo.src = `${locationOfTheImages}logos/teams/${teams[awayTeam]}.png`;
      awayLogo.alt = `Логотип ${awayTeam}`;

      [homeLogo, awayLogo].forEach((logo) =>
        logo.addEventListener("load", () => (logo.style.opacity = "1"))
      );

      const scoreElement = document.createElement("p");
      scoreElement.classList.add("tour_score");
      scoreElement.textContent = score;

      [homeTeamElement, awayTeamElement].forEach((el) =>
        el.classList.remove("loser")
      );
      if (homeScore < awayScore) {
        homeTeamElement.classList.add("loser");
      } else if (awayScore < homeScore) {
        awayTeamElement.classList.add("loser");
      }

      [
        homeTeamElement,
        homeLogo,
        scoreElement,
        awayLogo,
        awayTeamElement,
      ].forEach((element) => popupElements.tourResult.appendChild(element));

      let totalPoints = 0;
      // Статистика тура
      for (const key in tourStats) {
        if (key === "teams" || key === "result") continue;

        const value = tourStats[key];
        let [val1, val2] = ["", ""];

        if (Array.isArray(value)) {
          const firstValue = value[0] !== undefined ? value[0] : "";
          const secondValue = value[1] !== undefined ? value[1] : "";

          if (firstValue === true) {
            val2 = secondValue;
          } else if (
            typeof firstValue === "number" &&
            typeof secondValue === "number"
          ) {
            val1 = firstValue;
            val2 = secondValue;
          } else {
            val1 = firstValue;
            val2 = secondValue;
          }
        }

        const p = document.createElement("p");
        const span = document.createElement("span");
        p.classList.value = "";

        const baseText = translate(key, value[0] ?? undefined);
        p.textContent = val1 ? `${val1} ${baseText}` : baseText;

        if (val2 !== "") {
          p.textContent += ":";
          span.textContent = `${val2} оч.`;
          span.classList.add("statistics_points");
          p.appendChild(span);
        }

        if (key === "captain") {
          p.classList.add("statistics_captain");
        }

        popupElements.tourStats.appendChild(p);

        totalPoints += Number(val2);
        if (key === "captain") {
          totalPoints *= 2;
        }
        if (key === Object.keys(tourStats).at(-1)) {
          const totalP = document.createElement("p");
          totalP.classList.add("statistics_total_points");
          totalP.innerHTML = `Итого:<span>${totalPoints}</span> оч.`;
          popupElements.tourStats.appendChild(totalP);
        }
      }
    };

    // Инициализация активного тура
    if (activeButton) {
      updateTour(activeButton.dataset.tour);
    }

    // Обработчики кнопок
    popupElements.buttons.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button || button.classList.contains("disabled")) return;

      popupElements.buttons
        .querySelectorAll("button")
        .forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
      updateTour(button.dataset.tour);
    });
  });

  return playerClone;
}
function addPlayers(position, leagueKey) {
  playersList.classList.remove(
    ...Array.from(playersList.classList).filter((cls) =>
      cls.startsWith("players_list_")
    )
  );
  playersList.classList.add(`players_list_${leagueKey}`);

  const container = playersList.querySelector(`.${position}`);
  container.innerHTML = "";

  const positionPlayers = players[position];
  for (const playerKey in positionPlayers) {
    const player = positionPlayers[playerKey];
    if (player.stats[leagueKey]) {
      container.appendChild(
        createPlayerElement(player, leagueKey, position, playerKey)
      );
    }
  }
}
function updatePlayers(leagueKey) {
  Object.keys(players).forEach((position) => {
    addPlayers(position, leagueKey);
  });
}
function handleButtonClick(button) {
  headerElements.buttons.forEach((btn) =>
    btn.classList.remove("header_button-is_active")
  );
  button.classList.add("header_button-is_active");

  const leagueKey = button.dataset.league;

  updateHeaderAndCSS(leagueKey);
  updatePlayers(leagueKey);
}
function init() {
  const activeButton = document.querySelector(".header_button-is_active");
  if (activeButton) {
    handleButtonClick(activeButton);
  }
}
headerElements.buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button));
});
document.addEventListener("DOMContentLoaded", () => {
  init();
}); // Всё, что касается обновления шапки с логотипом и списка игроков

function openPopup(popupElement) {
  const body = document.body;
  const scrollPosition = window.scrollY;
  body.dataset.scrollPosition = scrollPosition;
  body.style.top = `-${scrollPosition}px`;
  body.classList.add("scroll-lock");
  popupElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByEsc);
}
function closePopup(popupElement) {
  const body = document.body;
  const scrollPosition = body.dataset.scrollPosition;
  body.style.top = "";
  body.classList.remove("scroll-lock");
  window.scrollTo(0, scrollPosition);
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByEsc);
}
function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}
function addCloseOverlayListener(element) {
  element.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) {
      closePopup(e.currentTarget);
    }
  });
}
window.addEventListener("resize", updateLogo);
