
import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface AdPopupProps {
  onBookNow: () => void;
  onShowInstructions: () => void;
  showInstructions: boolean;
  onCloseInstructions: () => void;
}

export function AdPopup({ onBookNow, onShowInstructions, showInstructions, onCloseInstructions }: AdPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = () => {
    setIsOpen(false);
    onShowInstructions();
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("brazil - 30%");
    window.open(`https://wa.me/48884035225?text=${message}`, '_blank');
  };

  const handleTelegramClick = () => {
    window.open(`https://t.me/Denis_ogodenchik`, '_blank');
  };

  return (
    <>
      {/* First Popup - Discount Offer */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={`sm:max-w-md p-0 overflow-hidden ${isMobile ? 'w-[90%] max-h-[80vh]' : ''}`}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/brazil-sunset-team.jpg" 
                alt="Brazil Kite Safari"
                className={`w-full object-cover ${isMobile ? 'h-36' : 'h-48'}`}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    🔥 Hot Offer! 🔥
                  </motion.div>
                </DialogTitle>
              </DialogHeader>

              <motion.div 
                className="text-center space-y-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-green-600">
                  Brazil Travel - 30% OFF!
                </h3>
                <p className="text-muted-foreground">
                  Don't miss this exclusive discount on your Brazilian kitesurfing adventure
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  onClick={handleBookNow}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Book Now
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                  Remind Me Later
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Second Popup - Booking Instructions */}
      <Dialog open={showInstructions} onOpenChange={(open) => {
        if (!open) {
          onCloseInstructions();
        }
      }}>
        <DialogContent className={`sm:max-w-md p-0 overflow-hidden ${isMobile ? 'w-[90%] max-h-[80vh]' : ''}`}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/brazil-flag-booking.jpg" 
                alt="Brazil Flag"
                className={`w-full object-cover ${isMobile ? 'h-36' : 'h-48'}`}
              />
              <button 
                onClick={onCloseInstructions}
                className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-center">
                  Booking Instructions
                </DialogTitle>
              </DialogHeader>

              <motion.div 
                className="text-center space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-muted-foreground">
                  To secure your booking, write us a message on:
                </p>
                
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handleTelegramClick}
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Send size={20} />
                    <span>Telegram</span>
                  </button>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-green-700 dark:text-green-400">
                    Message to send:
                  </p>
                  <p className="text-lg font-bold mt-2">
                    "brazil - 30%"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    ...and you will secure your discount!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
