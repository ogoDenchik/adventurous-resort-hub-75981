import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageSquare, Instagram, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { buildWebhookPayload } from '@/utils/tracking';

const WEBHOOK_URL = 'https://ogodenchik.app.n8n.cloud/webhook/11ba0950-0d0d-46ac-b106-efe6059a0c87';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  level: string;
  message: string;
  consent: boolean;
}

const ContactCTA: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<ContactFormData>();
  const consent = watch('consent');

  const onSubmit = async (data: ContactFormData) => {
    if (!data.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to be contacted to submit the form",
        variant: "destructive",
      });
      return;
    }

    try {
      const fullMessage = `Interest: ${data.interest || 'Not specified'}. Level: ${data.level || 'Not specified'}. ${data.message || ''}`;
      
      const webhookPayload = buildWebhookPayload(
        'Ready to Start Journey',
        data.interest || 'General Inquiry',
        data.name,
        data.phone || '',
        data.email,
        fullMessage
      );

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!response.ok) throw new Error('Request failed');

      toast({
        title: "Thank you, we will reply within 24 hours!",
        description: "I'll get back to you within 24 hours",
      });
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send request. Please try WhatsApp or email directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/cyprus-sunset-riding.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-950/95"></div>
      
      <div className="container relative z-10 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase">
            READY TO START YOUR JOURNEY?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Let's talk about your goals, choose the perfect location, and get you on the water.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
          >
            <MessageSquare className="w-8 h-8 mx-auto mb-3 text-green-400" />
            <div className="font-semibold text-lg mb-1">💬 WHATSAPP</div>
            <div className="text-sm text-white/60">Chat directly</div>
          </a>

          <a
            href="https://instagram.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
          >
            <Instagram className="w-8 h-8 mx-auto mb-3 text-pink-400" />
            <div className="font-semibold text-lg mb-1">📱 INSTAGRAM DM</div>
            <div className="text-sm text-white/60">Message me</div>
          </a>

          <a
            href="mailto:your.email@example.com"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
          >
            <Mail className="w-8 h-8 mx-auto mb-3 text-blue-400" />
            <div className="font-semibold text-lg mb-1">📧 EMAIL</div>
            <div className="text-sm text-white/60">Send a request</div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-2 uppercase">📝 OR LEAVE A REQUEST</h3>
            <p className="text-white/70">I'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">Your Name *</Label>
                <Input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-white mb-2 block">WhatsApp / Phone</Label>
              <Input
                id="phone"
                {...register('phone')}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                placeholder="+1 234 567 8900"
              />
              <p className="text-white/50 text-xs mt-1">(Optional but helpful for faster communication)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="interest" className="text-white mb-2 block">I'm interested in... *</Label>
                <Select onValueChange={(value) => setValue('interest', value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private-coaching-egypt">Private Coaching (Egypt)</SelectItem>
                    <SelectItem value="private-coaching-vietnam">Private Coaching (Vietnam)</SelectItem>
                    <SelectItem value="vip-training-egypt">VIP 1-on-1 Training (Egypt)</SelectItem>
                    <SelectItem value="vietnam-kite-camp">Vietnam Kite Camp</SelectItem>
                    <SelectItem value="egypt-kite-safari">Egypt Kite Safari</SelectItem>
                    <SelectItem value="refresh-course">Refresh Course</SelectItem>
                    <SelectItem value="equipment-rental">Equipment Rental</SelectItem>
                    <SelectItem value="exploring">Not sure yet / Just exploring</SelectItem>
                  </SelectContent>
                </Select>
                {errors.interest && <p className="text-red-400 text-sm mt-1">{errors.interest.message}</p>}
              </div>

              <div>
                <Label htmlFor="level" className="text-white mb-2 block">My current level:</Label>
                <Select onValueChange={(value) => setValue('level', value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Complete beginner</SelectItem>
                    <SelectItem value="tried-before">Took a lesson before</SelectItem>
                    <SelectItem value="intermediate">Can ride, want to improve</SelectItem>
                    <SelectItem value="advanced">Advanced (want tricks/progression)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
              <Textarea
                id="message"
                {...register('message')}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                placeholder="Tell me about your goals, preferred dates, or any questions (Optional)"
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setValue('consent', checked as boolean)}
                className="mt-1 border-white/40 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
              <Label htmlFor="consent" className="text-white/90 text-sm cursor-pointer">
                I agree to be contacted via email / WhatsApp
              </Label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-6 transition-all duration-300 hover:scale-105"
            >
              SEND REQUEST
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
