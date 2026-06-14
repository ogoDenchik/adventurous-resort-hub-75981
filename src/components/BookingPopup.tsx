import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = '48884035225';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingPopup: React.FC<BookingPopupProps> = ({ open, onOpenChange }) => {
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

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      const lines = [
        'Hi! I would like to get in touch with OGO Kite Academy.',
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        data.email ? `Email: ${data.email}` : '',
        data.message ? `Message: ${data.message}` : '',
      ].filter(Boolean);
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener,noreferrer');

      toast({
        title: "Opening WhatsApp",
        description: "Please send the prefilled message to complete your request.",
      });

      reset();
      onOpenChange(false);
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please contact us directly on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Adventure</DialogTitle>
          <DialogDescription>
            Get in touch and we'll be happy to help with any questions
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
      </DialogContent>
    </Dialog>
  );
};
