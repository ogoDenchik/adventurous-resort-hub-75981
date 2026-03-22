import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TelegramButton: React.FC = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/Denis_ogodenchik', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-6 z-[70]">
      <Button
        onClick={handleTelegramClick}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center",
          "bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
        )}
        aria-label="Contact us on Telegram"
      >
        <Send size={24} />
      </Button>
    </div>
  );
};

export default TelegramButton;
