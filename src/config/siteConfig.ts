const defaultConfig = {
  company: {
    name: 'РемонтПро',
    tagline: 'Профессиональный ремонт под ключ',
    description: 'Превращаем ваши идеи в реальность. Квартиры, офисы, коттеджи — любая сложность с гарантией качества'
  },
  contact: {
    phone: '+7 (999) 123-45-67',
    email: 'info@remontpro.ru',
    address: 'Москва, ул. Примерная, д. 1'
  },
  stats: {
    projects: '500+',
    projectsLabel: 'Завершённых проектов',
    years: '12',
    yearsLabel: 'Лет на рынке',
    satisfaction: '98%',
    satisfactionLabel: 'Довольных клиентов'
  },
  services: [
    {
      icon: 'Home',
      title: 'Квартиры',
      description: 'Капитальный и косметический ремонт квартир любой площади'
    },
    {
      icon: 'Building2',
      title: 'Офисы',
      description: 'Профессиональный ремонт офисных помещений под ключ'
    },
    {
      icon: 'Castle',
      title: 'Коттеджи',
      description: 'Ремонт загородных домов и коттеджей с отделкой премиум-класса'
    },
    {
      icon: 'Paintbrush',
      title: 'Дизайн-проект',
      description: 'Разработка индивидуального дизайна интерьера'
    },
    {
      icon: 'Wrench',
      title: 'Отделочные работы',
      description: 'Все виды внутренней и наружной отделки помещений'
    },
    {
      icon: 'Zap',
      title: 'Электромонтаж',
      description: 'Полный комплекс электромонтажных работ любой сложности'
    }
  ],
  processSteps: [
    {
      number: '01',
      title: 'Заявка',
      description: 'Оставьте заявку на сайте или позвоните нам'
    },
    {
      number: '02',
      title: 'Замер',
      description: 'Выезд специалиста для замера помещения'
    },
    {
      number: '03',
      title: 'Смета',
      description: 'Составление детальной сметы работ'
    },
    {
      number: '04',
      title: 'Договор',
      description: 'Заключение договора с фиксированной ценой'
    },
    {
      number: '05',
      title: 'Ремонт',
      description: 'Выполнение ремонтных работ в срок'
    },
    {
      number: '06',
      title: 'Приёмка',
      description: 'Сдача объекта и гарантийное обслуживание'
    }
  ],
  reviews: [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличная работа! Ремонт сделали быстро и качественно. Особенно понравилось внимание к деталям.',
      project: 'Ремонт квартиры 65 м²'
    },
    {
      name: 'Дмитрий Козлов',
      rating: 5,
      text: 'Профессиональная команда. Все работы выполнены в срок, смета не изменилась. Рекомендую!',
      project: 'Ремонт офиса 120 м²'
    },
    {
      name: 'Елена Смирнова',
      rating: 5,
      text: 'Делали ремонт коттеджа. Результат превзошёл ожидания! Спасибо за качественную работу.',
      project: 'Ремонт коттеджа 200 м²'
    }
  ],
  footer: {
    description: 'Профессиональный ремонт помещений любой сложности с гарантией качества',
    copyright: '© 2024 РемонтПро. Все права защищены.'
  }
};

const getStoredConfig = () => {
  if (typeof window === 'undefined') return defaultConfig;
  
  const stored = localStorage.getItem('siteConfig');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return defaultConfig;
    }
  }
  return defaultConfig;
};

export const siteConfig = getStoredConfig();