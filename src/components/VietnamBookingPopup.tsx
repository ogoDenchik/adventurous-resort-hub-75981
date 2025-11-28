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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { buildWebhookPayload } from "@/utils/tracking";

const VIETNAM_WEBHOOK_URL = 'https://ogodenchik.app.n8n.cloud/webhook/11ba0950-0d0d-46ac-b106-efe6059a0c87';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  whatsapp: z.string().min(10, 'WhatsApp number must be at least 10 digits'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  dates: z.string().min(1, 'Please select dates'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface VietnamBookingPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedDates?: string;
  preselectedPackage?: string;
}

export const VietnamBookingPopup: React.FC<VietnamBookingPopupProps> = ({ 
  open, 
  onOpenChange,
  preselectedDates = '',
  preselectedPackage = ''
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      dates: preselectedDates,
    }
  });

  // Set preselected dates when they change
  React.useEffect(() => {
    if (preselectedDates) {
      setValue('dates', preselectedDates);
    }
  }, [preselectedDates, setValue]);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const packageName = preselectedPackage || 'Vietnam Camp';
      const message = `Customer is interested in ${packageName}. Selected dates: ${data.dates}`;
      
      const webhookPayload = buildWebhookPayload(
        'Vietnam Camp',
        packageName,
        data.name,
        data.whatsapp,
        data.email || '',
        message
      );

      const response = await fetch(VIETNAM_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!response.ok) throw new Error('Request failed');
      
      toast({
        title: "Thank you, we will reply within 24 hours!",
        description: "We'll contact you shortly to confirm your spot.",
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

  const selectedDates = watch('dates');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Vietnam Kite Camp</DialogTitle>
          <DialogDescription>
            {preselectedPackage && (
              <span className="font-semibold text-foreground">{preselectedPackage} • </span>
            )}
            Reserve your spot now
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
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
            <Label htmlFor="whatsapp">WhatsApp Number *</Label>
            <Input
              id="whatsapp"
              {...register('whatsapp')}
              placeholder="+48 884 035 225"
              className="mt-1"
            />
            {errors.whatsapp && (
              <p className="text-sm text-destructive mt-1">{errors.whatsapp.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email (optional)</Label>
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
            <Label htmlFor="dates">Choose Your Dates *</Label>
            <Select
              value={selectedDates}
              onValueChange={(value) => setValue('dates', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select camp dates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="January 20–30, 2026">January 20–30, 2026</SelectItem>
                <SelectItem value="February 13–23, 2026">February 13–23, 2026</SelectItem>
              </SelectContent>
            </Select>
            {errors.dates && (
              <p className="text-sm text-destructive mt-1">{errors.dates.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Request...' : 'Reserve My Spot'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
