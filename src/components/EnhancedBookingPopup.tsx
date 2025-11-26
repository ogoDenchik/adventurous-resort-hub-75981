import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

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
}

export const EnhancedBookingPopup: React.FC<EnhancedBookingPopupProps> = ({ 
  open, 
  onOpenChange,
  backgroundImage,
  title = "Book Your Adventure",
  description = "Fill in your details and we'll get back to you shortly",
  bookingDetails
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const getDeviceInfo = () => {
    const width = window.innerWidth;
    const deviceType = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
    
    return {
      device_type: deviceType,
      browser_language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      platform: navigator.platform,
    };
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('forward-webhook', {
        body: {
          ...data,
          form_type: 'booking_popup',
          booking_package: bookingDetails?.packageName || 'General Inquiry',
          booking_location: bookingDetails?.location || 'Not specified',
          booking_price: bookingDetails?.price || 'Not specified',
          timestamp: new Date().toISOString(),
          ...getDeviceInfo(),
        },
      });
      if (error) throw error;
      
      toast({
        title: "Thank you!",
        description: "Our manager will contact you shortly.",
      });
      
      reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden max-h-[90vh]">
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
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={backgroundImage} 
              alt="Booking background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center px-4">
                <h2 className="text-3xl font-display font-bold text-white uppercase">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          {/* Booking Details Section */}
          {bookingDetails && (
            <div className="bg-accent/10 border-b border-border p-6">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Badge className="mb-2 bg-primary text-primary-foreground">
                      {bookingDetails.packageName}
                    </Badge>
                    <h3 className="text-2xl font-display font-bold text-foreground uppercase">
                      {bookingDetails.location}
                    </h3>
                  </div>
                  {bookingDetails.price && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="text-2xl font-bold text-primary">{bookingDetails.price}</p>
                    </div>
                  )}
                </div>

                {bookingDetails.highlights && bookingDetails.highlights.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2 uppercase">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {bookingDetails.highlights.map((highlight, index) => (
                        <span key={index} className="text-xs bg-background px-3 py-1 rounded-full border border-border">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {bookingDetails.included && bookingDetails.included.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2 uppercase">What's Included:</p>
                    <ul className="space-y-1">
                      {bookingDetails.included.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Form Content */}
          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogDescription className="text-center text-base">
                {description}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Your Full Name *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Your full name"
                className="mt-1"
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number (WhatsApp, Telegram) *</Label>
              <Input
                id="phone"
                {...register('phone')}
                placeholder="+48 884 035 225"
                className="mt-1"
              />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="your.email@example.com"
                className="mt-1"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Which kite trip are you interested in?"
                className="mt-1 min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </form>
        </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
