import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [roomType, setRoomType] = useState<string>('apartment');
  const [area, setArea] = useState<number[]>([50]);
  const [repairType, setRepairType] = useState<string>('standard');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

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

  const calculatePrice = () => {
    const basePrice = {
      cosmetic: 3000,
      standard: 5000,
      premium: 8000
    };

    const multiplier = {
      apartment: 1,
      office: 1.2,
      cottage: 1.4
    };

    const price = basePrice[repairType as keyof typeof basePrice] * area[0] * multiplier[roomType as keyof typeof multiplier];
    setCalculatedPrice(price);
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" className="text-primary" size={28} />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                РемонтПро
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-semibold hover:text-primary transition-colors">Услуги</a>
              <a href="#calculator" className="text-sm font-semibold hover:text-primary transition-colors">Калькулятор</a>
              <a href="#process" className="text-sm font-semibold hover:text-primary transition-colors">Процесс</a>
              <a href="#reviews" className="text-sm font-semibold hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-sm font-semibold hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Профессиональный ремонт под ключ
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Превращаем ваши идеи в реальность. Квартиры, офисы, коттеджи — любая сложность с гарантией качества
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Завершённых проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/ed589cab-88c0-49ca-84e4-613272b5f52a/files/f802a46a-f811-49f5-908a-f741d1a40c7f.jpg" 
                  alt="Ремонт квартиры"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://cdn.poehali.dev/projects/ed589cab-88c0-49ca-84e4-613272b5f52a/files/659e6c0f-7215-4026-9da8-3c419b02f4d0.jpg" 
                  alt="Ремонт офиса"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://cdn.poehali.dev/projects/ed589cab-88c0-49ca-84e4-613272b5f52a/files/008d50b4-27c6-4a9a-8d10-450f9841a41b.jpg" 
                  alt="Ремонт коттеджа"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover col-span-2 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр ремонтных работ для любых типов помещений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-white" />
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

      <section id="calculator" className="py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
              <p className="text-lg text-muted-foreground">
                Узнайте примерную стоимость вашего ремонта прямо сейчас
              </p>
            </div>
            <Card className="border-2 shadow-2xl">
              <CardHeader>
                <CardTitle>Рассчитать ремонт</CardTitle>
                <CardDescription>Заполните параметры для расчёта стоимости</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="roomType">Тип помещения</Label>
                  <Select value={roomType} onValueChange={setRoomType}>
                    <SelectTrigger id="roomType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартира</SelectItem>
                      <SelectItem value="office">Офис</SelectItem>
                      <SelectItem value="cottage">Коттедж</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="repairType">Тип ремонта</Label>
                  <Select value={repairType} onValueChange={setRepairType}>
                    <SelectTrigger id="repairType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cosmetic">Косметический</SelectItem>
                      <SelectItem value="standard">Стандартный</SelectItem>
                      <SelectItem value="premium">Премиум</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="area">Площадь помещения: {area[0]} м²</Label>
                  <Slider
                    id="area"
                    min={20}
                    max={300}
                    step={5}
                    value={area}
                    onValueChange={setArea}
                    className="w-full"
                  />
                </div>

                <Button onClick={calculatePrice} className="w-full bg-gradient-to-r from-primary to-secondary text-white text-lg py-6">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>

                {calculatedPrice !== null && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20 animate-scale-in">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Примерная стоимость ремонта</p>
                      <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {calculatedPrice.toLocaleString('ru-RU')} ₽
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">*Итоговая цена может отличаться после замера</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Процесс работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачная и понятная система работы на каждом этапе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full" />
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/20 mb-2">{step.number}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{review.text}</p>
                  <p className="text-xs text-primary font-semibold">{review.project}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>Заполните форму для консультации</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Phone" className="text-primary" />
                      Телефон
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Mail" className="text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">info@remontpro.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-primary" />
                      Адрес
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">г. Москва, ул. Примерная, д. 1</p>
                    <p className="text-sm text-muted-foreground">Офис работает пн-пт 9:00-18:00</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="text-xl font-bold">РемонтПро</span>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональный ремонт квартир, офисов и коттеджей с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Ремонт квартир</li>
                <li>Ремонт офисов</li>
                <li>Ремонт коттеджей</li>
                <li>Дизайн-проект</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Наши работы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@remontpro.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 РемонтПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;