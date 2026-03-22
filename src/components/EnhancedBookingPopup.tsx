import React from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface BookingDetails {
  packageName: string;
  location: string;
  price?: string;
  highlights?: string[];
  included?: string[];
}

interface EnhancedBookingPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  backgroundImage: string;
  title?: string;
  description?: string;
  bookingDetails?: BookingDetails;
  webhookUrl?: string;
  leadSource?: string;
  selectedDates?: string;
}

export const EnhancedBookingPopup: React.FC<EnhancedBookingPopupProps> = ({ 
  open, 
  onOpenChange,
  backgroundImage,
  title = "Book Your Adventure",
  description = "Contact us directly to reserve your spot",
  bookingDetails,
}) => {
  const packageName = bookingDetails?.packageName || 'General Inquiry';
  const waMessage = encodeURIComponent(`Hey OGO Academy! I'm interested in ${packageName}. Can you help me book?`);
  const tgMessage = encodeURIComponent(`Hey OGO Academy! I'm interested in ${packageName}.`);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 hover:scale-110"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <ScrollArea className="max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative h-56 md:h-72 w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img 
              src={backgroundImage} 
              alt="Booking background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center px-4">
                <h2 className="heading-display text-3xl md:text-4xl text-white uppercase">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          {bookingDetails && (
            <div className="bg-accent/10 border-b border-border p-6">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Badge className="mb-2 bg-primary text-primary-foreground">
                      {bookingDetails.packageName}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground uppercase">
                      {bookingDetails.location}
                    </h3>
                  </div>
                  {bookingDetails.price && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="heading-display text-2xl text-primary">{bookingDetails.price}</p>
                    </div>
                  )}
                </div>

                {bookingDetails.highlights && bookingDetails.highlights.length > 0 && (
                  <div className="mb-4">
                    <p className="label-caps text-foreground mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {bookingDetails.highlights.map((highlight, index) => (
                        <span key={index} className="text-sm bg-background px-3 py-1 rounded-full border border-border">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {bookingDetails.included && bookingDetails.included.length > 0 && (
                  <div>
                    <p className="label-caps text-foreground mb-2">What's included:</p>
                    <ul className="space-y-1">
                      {bookingDetails.included.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact Options */}
          <div className="p-8">
            <p className="text-center text-muted-foreground mb-2 label-caps">How to reach us</p>
            <p className="text-center text-foreground text-lg mb-8 font-medium">{description}</p>

            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/48884035225?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] text-base"
              >
                <MessageCircle size={22} />
                Write on WhatsApp
              </a>

              <a
                href={`https://t.me/Denis_ogodenchik`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] text-base"
              >
                <Send size={22} />
                Write on Telegram
              </a>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-6 label-caps">
              We reply within 24 hours · Usually much faster
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
