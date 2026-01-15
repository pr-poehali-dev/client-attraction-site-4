import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesProcessReviews = () => {
  const services = [
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
  ];

  const processSteps = [
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
  ];

  const reviews = [
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
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр ремонтных и отделочных работ для любых типов помещений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Как мы работаем
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Прозрачный и понятный процесс от заявки до сдачи объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative animate-fade-in">
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Отзывы клиентов
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{review.project}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesProcessReviews;
