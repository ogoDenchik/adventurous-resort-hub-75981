import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, MessageCircle } from 'lucide-react';

interface CyprusPackagesProps {
  onWhatsApp: () => void;
}

const packages = [
  {
    name: 'Пробный урок',
    duration: '2 часа',
    price: '€80',
    popular: false,
    features: [
      'Теория безопасности',
      'Управление кайтом на берегу',
      'Первый запуск в воде',
      'Всё оборудование включено',
      'Фото с урока',
    ],
  },
  {
    name: 'Базовый курс',
    duration: '3 дня / 6 часов',
    price: '€280',
    popular: true,
    features: [
      'Полная программа обучения',
      'От нуля до waterstart',
      'Персональный инструктор',
      'BBTalking рация в шлеме',
      'Всё оборудование включено',
      'Видео прогресса',
      'Сертификат IKO',
    ],
  },
  {
    name: 'Прогрессия',
    duration: '5 дней / 10 часов',
    price: '€450',
    popular: false,
    features: [
      'Для тех, кто уже стоит на доске',
      'Развороты и смена галса',
      'Катание против ветра',
      'Первые прыжки',
      'Персональный инструктор',
      'Видеоанализ техники',
    ],
  },
];

const CyprusPackages: React.FC<CyprusPackagesProps> = ({ onWhatsApp }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Выберите свой пакет
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Все цены включают оборудование, страховку и трансфер на спот
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-card rounded-xl border-2 p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? 'border-primary shadow-lg scale-[1.02]' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Популярный
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.duration}</p>
                <div className="text-4xl font-display font-bold text-primary">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full gap-2" 
                variant={pkg.popular ? 'default' : 'outline'}
                onClick={onWhatsApp}
              >
                <MessageCircle className="w-4 h-4" />
                Забронировать
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyprusPackages;
