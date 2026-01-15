import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { siteConfig } from '@/config/siteConfig';

const Admin = () => {
  const { toast } = useToast();
  const [config, setConfig] = useState(siteConfig);

  const handleSave = () => {
    localStorage.setItem('siteConfig', JSON.stringify(config));
    toast({
      title: 'Сохранено!',
      description: 'Настройки успешно обновлены. Обновите страницу для применения изменений.',
    });
  };

  const handleCompanyChange = (field: string, value: string) => {
    setConfig({
      ...config,
      company: { ...config.company, [field]: value }
    });
  };

  const handleContactChange = (field: string, value: string) => {
    setConfig({
      ...config,
      contact: { ...config.contact, [field]: value }
    });
  };

  const handleStatsChange = (field: string, value: string) => {
    setConfig({
      ...config,
      stats: { ...config.stats, [field]: value }
    });
  };

  const handleServiceChange = (index: number, field: string, value: string) => {
    const newServices = [...config.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setConfig({ ...config, services: newServices });
  };

  const handleAddService = () => {
    setConfig({
      ...config,
      services: [...config.services, { icon: 'Wrench', title: 'Новая услуга', description: 'Описание услуги' }]
    });
  };

  const handleRemoveService = (index: number) => {
    const newServices = config.services.filter((_, i) => i !== index);
    setConfig({ ...config, services: newServices });
  };

  const handleReviewChange = (index: number, field: string, value: string | number) => {
    const newReviews = [...config.reviews];
    newReviews[index] = { ...newReviews[index], [field]: value };
    setConfig({ ...config, reviews: newReviews });
  };

  const handleAddReview = () => {
    setConfig({
      ...config,
      reviews: [...config.reviews, { name: 'Имя клиента', rating: 5, text: 'Текст отзыва', project: 'Проект' }]
    });
  };

  const handleRemoveReview = (index: number) => {
    const newReviews = config.reviews.filter((_, i) => i !== index);
    setConfig({ ...config, reviews: newReviews });
  };

  const handleProcessChange = (index: number, field: string, value: string) => {
    const newSteps = [...config.processSteps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setConfig({ ...config, processSteps: newSteps });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Админ-панель
            </h1>
            <p className="text-muted-foreground">Управление содержимым сайта</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Icon name="Home" size={16} className="mr-2" />
              На главную
            </Button>
            <Button onClick={handleSave} className="bg-gradient-to-r from-primary to-secondary">
              <Icon name="Save" size={16} className="mr-2" />
              Сохранить изменения
            </Button>
          </div>
        </div>

        <Tabs defaultValue="company" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="company">Компания</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Информация о компании</CardTitle>
                <CardDescription>Основные данные о вашей компании</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Название компании</Label>
                  <Input
                    id="companyName"
                    value={config.company.name}
                    onChange={(e) => handleCompanyChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Слоган</Label>
                  <Input
                    id="tagline"
                    value={config.company.tagline}
                    onChange={(e) => handleCompanyChange('tagline', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    value={config.company.description}
                    onChange={(e) => handleCompanyChange('description', e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Статистика</CardTitle>
                <CardDescription>Цифры для главной страницы</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Проектов</Label>
                  <Input
                    value={config.stats.projects}
                    onChange={(e) => handleStatsChange('projects', e.target.value)}
                  />
                  <Input
                    placeholder="Подпись"
                    value={config.stats.projectsLabel}
                    onChange={(e) => handleStatsChange('projectsLabel', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Лет</Label>
                  <Input
                    value={config.stats.years}
                    onChange={(e) => handleStatsChange('years', e.target.value)}
                  />
                  <Input
                    placeholder="Подпись"
                    value={config.stats.yearsLabel}
                    onChange={(e) => handleStatsChange('yearsLabel', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Удовлетворённость</Label>
                  <Input
                    value={config.stats.satisfaction}
                    onChange={(e) => handleStatsChange('satisfaction', e.target.value)}
                  />
                  <Input
                    placeholder="Подпись"
                    value={config.stats.satisfactionLabel}
                    onChange={(e) => handleStatsChange('satisfactionLabel', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Контактные данные</CardTitle>
                <CardDescription>Телефон, email и адрес компании</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    value={config.contact.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={config.contact.email}
                    onChange={(e) => handleContactChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Адрес</Label>
                  <Input
                    id="address"
                    value={config.contact.address}
                    onChange={(e) => handleContactChange('address', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Услуги компании</h2>
              <Button onClick={handleAddService} variant="outline">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить услугу
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {config.services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Услуга {index + 1}</CardTitle>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemoveService(index)}
                      >
                        <Icon name="Trash2" size={14} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label>Иконка (lucide-react)</Label>
                      <Input
                        value={service.icon}
                        onChange={(e) => handleServiceChange(index, 'icon', e.target.value)}
                        placeholder="Home, Building2, Castle..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Название</Label>
                      <Input
                        value={service.title}
                        onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Описание</Label>
                      <Textarea
                        value={service.description}
                        onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Этапы работы</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {config.processSteps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">Этап {step.number}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label>Номер</Label>
                      <Input
                        value={step.number}
                        onChange={(e) => handleProcessChange(index, 'number', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Название</Label>
                      <Input
                        value={step.title}
                        onChange={(e) => handleProcessChange(index, 'title', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Описание</Label>
                      <Textarea
                        value={step.description}
                        onChange={(e) => handleProcessChange(index, 'description', e.target.value)}
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Отзывы клиентов</h2>
              <Button onClick={handleAddReview} variant="outline">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить отзыв
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {config.reviews.map((review, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Отзыв {index + 1}</CardTitle>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemoveReview(index)}
                      >
                        <Icon name="Trash2" size={14} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label>Имя клиента</Label>
                      <Input
                        value={review.name}
                        onChange={(e) => handleReviewChange(index, 'name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Рейтинг (1-5)</Label>
                      <Input
                        type="number"
                        min="1"
                        max="5"
                        value={review.rating}
                        onChange={(e) => handleReviewChange(index, 'rating', parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Проект</Label>
                      <Input
                        value={review.project}
                        onChange={(e) => handleReviewChange(index, 'project', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Текст отзыва</Label>
                      <Textarea
                        value={review.text}
                        onChange={(e) => handleReviewChange(index, 'text', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
