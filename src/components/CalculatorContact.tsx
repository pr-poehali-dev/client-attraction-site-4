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
import { siteConfig } from '@/config/siteConfig';

const CalculatorContact = () => {
  const { toast } = useToast();
  const [roomType, setRoomType] = useState<string>('apartment');
  const [area, setArea] = useState<number[]>([50]);
  const [repairType, setRepairType] = useState<string>('standard');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

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
    <>
      <section id="calculator" className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Калькулятор стоимости
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Рассчитайте предварительную стоимость ремонта онлайн
            </p>
          </div>
          <Card className="max-w-3xl mx-auto border-2 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Узнайте стоимость ремонта</CardTitle>
              <CardDescription>Заполните параметры вашего помещения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="roomType">Тип помещения</Label>
                <Select value={roomType} onValueChange={setRoomType}>
                  <SelectTrigger id="roomType">
                    <SelectValue placeholder="Выберите тип" />
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
                    <SelectValue placeholder="Выберите тип ремонта" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cosmetic">Косметический (3000 ₽/м²)</SelectItem>
                    <SelectItem value="standard">Стандартный (5000 ₽/м²)</SelectItem>
                    <SelectItem value="premium">Премиум (8000 ₽/м²)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label htmlFor="area">Площадь помещения: {area[0]} м²</Label>
                <Slider
                  id="area"
                  value={area}
                  onValueChange={setArea}
                  min={20}
                  max={500}
                  step={5}
                  className="w-full"
                />
              </div>

              <Button 
                onClick={calculatePrice} 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>

              {calculatedPrice && (
                <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white animate-scale-in">
                  <div className="text-center">
                    <p className="text-lg mb-2">Предварительная стоимость:</p>
                    <p className="text-4xl font-bold">{calculatedPrice.toLocaleString('ru-RU')} ₽</p>
                    <p className="text-sm mt-2 opacity-90">*Точная стоимость определяется после замера</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Свяжитесь с нами
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="Mail" className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-2 shadow-xl animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                  <CardDescription>Заполните форму и мы вам перезвоним</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-accent to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={28} />
                <span className="text-xl font-bold">{siteConfig.company.name}</span>
              </div>
              <p className="text-white/80">
                {siteConfig.footer.description}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors">Калькулятор</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Процесс</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>{siteConfig.contact.phone}</li>
                <li>{siteConfig.contact.email}</li>
                <li>{siteConfig.contact.address}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>{siteConfig.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CalculatorContact;