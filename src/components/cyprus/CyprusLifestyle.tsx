import React from 'react';
import { Laptop, Sun, Heart, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Laptop, stat: '87%', label: 'студентов — IT и бизнес', color: 'from-blue-500/20 to-cyan-500/20' },
  { icon: Sun, stat: '340', label: 'солнечных дней в году', color: 'from-amber-500/20 to-orange-500/20' },
  { icon: Heart, stat: '70+', label: 'возвращаются снова', color: 'from-rose-500/20 to-pink-500/20' },
  { icon: TrendingUp, stat: '3 дня', label: 'до первого катания', color: 'from-emerald-500/20 to-green-500/20' },
];

const CyprusLifestyle: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
            Почему айтишники выбирают кайт
          </h2>
          <p className="text-muted-foreground">Новое увлечение на всю жизнь</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-10">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className={`relative bg-gradient-to-br ${item.color} rounded-xl p-5 text-center border border-border/30 hover:scale-105 transition-transform duration-300`}
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground">{item.stat}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Photo strip */}
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/cyprus-students-celebrating.jpg" 
            alt="Счастливые студенты на Кипре"
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CyprusLifestyle;
