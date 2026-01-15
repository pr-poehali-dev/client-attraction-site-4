import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/HeroSection';
import ServicesProcessReviews from '@/components/ServicesProcessReviews';
import CalculatorContact from '@/components/CalculatorContact';

const Index = () => {
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

      <HeroSection />
      <ServicesProcessReviews />
      <CalculatorContact />
    </div>
  );
};

export default Index;
