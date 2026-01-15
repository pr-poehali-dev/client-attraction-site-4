import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
