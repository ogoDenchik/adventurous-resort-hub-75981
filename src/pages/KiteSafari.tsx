import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Ship, Wind, Users, GraduationCap, CheckCircle, XCircle, Euro, Bed, Eye, Clock, Layers, Sparkles, Sun, Ruler, Anchor, PartyPopper, Wine } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const KiteSafari: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    selectedDate: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll contact you soon to confirm your booking.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      selectedDate: '',
      notes: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/kite-safari-yacht.jpg" 
            alt="KiteSafari Yacht" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              🌊 KiteSafari
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              7-Day Adventure on the Red Sea
            </p>
            <Button size="lg" asChild>
              <a href="#booking">Book Your Adventure</a>
            </Button>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">
          
          {/* What is KiteSafari */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                What is KiteSafari?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KiteSafari is a unique kitesurfing experience aboard a luxury yacht in Egypt's Red Sea. 
                Imagine: crystal-clear lagoons, consistent winds, sandy islands, and a floating 5-star hotel 
                that follows the best wind spots.
              </p>
              <p className="text-lg text-foreground font-semibold mt-4">
                This is not just a trip – it's a lifestyle adventure combining kitesurfing, travel, and community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <img 
                src="/lovable-uploads/kite-safari-beach.jpg" 
                alt="Kitesurfing on crystal-clear waters" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <img 
                src="/lovable-uploads/kite-safari-sunset-jump.jpg" 
                alt="Sunset kitesurfing jump" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </section>

          {/* The Yacht */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Ship className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-display font-bold">The Yacht</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Large luxury yacht accommodating up to 25–30 people
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Spacious cabins (2 beds or double) with private bathrooms
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Chill-out areas, two bars, sun decks, Jacuzzi
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Dining room and lounge
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    Rescue zodiacs to reach the best lagoons
                  </p>
                </div>
                <p className="mt-6 text-foreground font-medium">
                  You live, kite, eat, and relax all on the yacht. Every day we anchor near deserted sandy islands – 
                  we kite directly from the beach while the yacht remains your base.
                </p>
              </div>
              <img 
                src="/lovable-uploads/kite-safari-yacht-kiting.jpg" 
                alt="Luxury yacht with kitesurfers" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </section>

          {/* Kitesurfing Schedule */}
          <section className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Wind className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center">Kitesurfing Schedule</h2>
            </div>
            <p className="text-center text-xl text-muted-foreground mb-12">
              Is Our Schedule?
            </p>
            
            <div className="space-y-8">
              {/* Day 1 */}
              <div className="animate-fade-in">
                <Card className="hover-scale overflow-hidden">
                  <img 
                    src="/lovable-uploads/kite-safari-airplane-arrival.jpg" 
                    alt="Airplane arrival" 
                    className="w-full h-[200px] object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ship className="w-6 h-6 text-primary" />
                      Day 1: Arrival to Hurghada Airport
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      All you need is to book your flight to Hurghada Airport, Egypt, and arrive during the first day of KiteSafari.
                    </p>
                    <p className="text-foreground mb-4">
                      Send your flight number and full name to our manager (whom you'll be in contact with during booking), and we'll arrange your transfer – it's included in the KiteSafari price!
                    </p>
                    <p className="font-semibold text-primary">
                      The transfer will take you straight to the yacht, and from this moment you can fully relax and not worry about anything.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Days 2-5 */}
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Card className="hover-scale overflow-hidden">
                  <img 
                    src="/lovable-uploads/kite-safari-girl-yacht.jpg" 
                    alt="Kitesurfing with yacht in background" 
                    className="w-full h-[200px] object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wind className="w-6 h-6 text-primary" />
                      Days 2-5: Pure Kitesurfing Action
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We're actively engaged in:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kitesurfing in perfect conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>Parties and socializing with new people</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>Snorkeling & Diving</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>Wakeboarding</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-primary">
                      During all this time we completely disconnect from the outside world and immerse ourselves in the unique KiteSafari experience – enjoying and having fun!
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Day 6 */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="hover-scale overflow-hidden">
                  <img 
                    src="/lovable-uploads/kite-safari-two-girls-kiter.png" 
                    alt="Two girls and kiter flying" 
                    className="w-full h-[200px] object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-6 h-6 text-primary" />
                      Day 6: Last Session & Return
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <strong>First half of the day:</strong> We continue kitesurfing and make the most of our last sessions.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>Lunchtime:</strong> We set sail back to the port. We must return before sunset.
                    </p>
                    <p className="font-semibold text-foreground">
                      In the evening, upon returning to port, we pack our things and prepare for departure.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Day 7 */}
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Card className="hover-scale overflow-hidden">
                  <img 
                    src="/lovable-uploads/kite-safari-yacht-group.webp" 
                    alt="Yacht with group of people" 
                    className="w-full h-[200px] object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-6 h-6 text-primary" />
                      Day 7: Departure Day
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      This is the day we say goodbye to the yacht.
                    </p>
                    <p className="text-foreground mb-4">
                      Remember, we'll also take care of your transfer from the yacht to the airport – we'll get you to your flight on time!
                    </p>
                    <p className="text-xl font-semibold text-primary text-center mt-6">
                      🤗 Farewells, hugs, and see you on the next adventure!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>


          {/* Prices & Booking */}
          <section className="mb-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12" id="booking">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">💶 Prices & Bookings</h2>
            
            <div className="text-center mb-12">
              <p className="text-xl font-semibold text-foreground">
                Choose your yacht depending on your budget and preferences
              </p>
            </div>

            {/* Premium Boat - Nord */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Premium Boat – Nord</h3>
                <p className="text-lg text-muted-foreground">Comfortable & Spacious</p>
              </div>

              {/* Nord Gallery Carousel */}
              <div className="mb-8 max-w-4xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/nord-standard-cabin.jpg" 
                        alt="Nord Standard Cabin" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/nord-master-suite.jpg" 
                        alt="Nord Master Suite" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/nord-master-suite-2.jpg" 
                        alt="Nord Master Suite Interior" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/nord-bathroom.jpg" 
                        alt="Nord Bathroom" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/kite-safari-sunset-1.jpg" 
                        alt="Nord at Sunset" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Nord Prices */}
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Bed className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-lg block mb-1">Standard Cabin</span>
                          <p className="text-sm text-muted-foreground">Twin beds, Lower Deck</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-primary whitespace-nowrap">€1,150</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Eye className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-lg block mb-1">Master Suite</span>
                          <p className="text-sm text-muted-foreground">King-size bed, sea view, Upper Deck</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-primary whitespace-nowrap">€1,350</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* VIP Boat - Lyra */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full w-fit mx-auto mb-3">
                  VIP EXPERIENCE
                </div>
                <h3 className="text-3xl font-bold mb-2">VIP Boat – Lyra</h3>
                <p className="text-lg text-muted-foreground">Luxury & Elegance</p>
              </div>

              {/* Lyra Gallery Carousel */}
              <div className="mb-8 max-w-4xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/lyra-yacht-front.jpg" 
                        alt="Lyra Yacht Exterior" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/lyra-standard-cabin.jpg" 
                        alt="Lyra Standard Cabin" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/lyra-master-suite.jpg" 
                        alt="Lyra Master Suite" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/lyra-bathroom.jpg" 
                        alt="Lyra Bathroom" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/lyra-sunset.jpg" 
                        alt="Lyra at Sunset" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img 
                        src="/lovable-uploads/lyra-aerial.jpg" 
                        alt="Lyra Aerial View" 
                        className="rounded-lg w-full h-[400px] object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Lyra Prices */}
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <Card className="border-2 border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Bed className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-lg block mb-1">Standard Cabin</span>
                          <p className="text-sm text-muted-foreground">Premium twin beds, Lower Deck</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-primary whitespace-nowrap">€1,600</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Eye className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-lg block mb-1">Master Suite</span>
                          <p className="text-sm text-muted-foreground">Luxury king bed, panoramic view, Upper Deck</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-primary whitespace-nowrap">€1,800</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Yacht Comparison */}
            <div className="mb-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Yacht Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-center">Premium Boat – Nord</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Ruler className="w-6 h-6 text-primary" />
                      <span className="text-lg">35 meters long</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Layers className="w-6 h-6 text-primary" />
                      <span className="text-lg">3 decks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sun className="w-6 h-6 text-primary" />
                      <span className="text-lg">Standard sundeck</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <XCircle className="w-6 h-6 text-muted-foreground" />
                      <span className="text-lg text-muted-foreground">No Jacuzzi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PartyPopper className="w-6 h-6 text-primary" />
                      <span className="text-lg">Normal party place</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wine className="w-6 h-6 text-primary" />
                      <span className="text-lg">Bar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Anchor className="w-6 h-6 text-primary" />
                      <span className="text-lg">Two zodiacs</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-center">VIP Boat – Lyra</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Ruler className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold">44 meters long</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Layers className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold">4 decks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sun className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold">Wide sundeck for sunbathing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold">Jacuzzi included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PartyPopper className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold">Huge party place</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wine className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold">Two bars</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Anchor className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold">Three zodiacs</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  What's Included
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Accommodation on the yacht</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>3 meals/day + soft drinks (Coke, juices, guava, orange juice, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rescue support & transfers to spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Parties & community life</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-destructive" />
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Flights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Alcoholic drinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Equipment rental / lessons (optional packages below)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Training Options */}
          <section className="mb-20" id="training">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">🪁 Training Options</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">IKO Level 1 Instructor</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary flex items-center gap-2">
                    <Euro className="w-6 h-6" />600/week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Equipment + Lessons with Certified Instructor IKO Level 1, 10h course
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-lg">
                <CardHeader>
                  <div className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full w-fit mb-2">
                    RECOMMENDED
                  </div>
                  <CardTitle className="text-2xl">IKO Level 3 Instructor</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary flex items-center gap-2">
                    <Euro className="w-6 h-6" />800/week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Equipment + Lessons with Certified Instructor IKO Level 3, 10h course
                  </p>
                  <p className="text-sm font-medium mt-2">
                    Perfect if you want guaranteed progress – we teach using BbTalkin radio helmets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">Progress Lesson</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary flex items-center gap-2">
                    <Clock className="w-6 h-6" />€120/hour
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Single lesson with Certified Instructor IKO Level 3
                  </p>
                  <p className="text-sm font-medium mt-2">
                    Focus on specific skills, then practice independently.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              ⚡️ Note: 10h is enough for first steps, but to become fully independent usually requires 20–25h.
            </p>
          </section>

          {/* Contact Form */}
          <section className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              Book Your KiteSafari
            </h2>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dates">Select Your Dates</Label>
                <Select value={formData.selectedDate} onValueChange={(value) => setFormData({...formData, selectedDate: value})}>
                  <SelectTrigger id="dates">
                    <SelectValue placeholder="Choose available dates" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="april-2-9">April 2–9, 2025</SelectItem>
                    <SelectItem value="april-9-16">April 9–16, 2025</SelectItem>
                    <SelectItem value="october-18-25">October 18–25, 2025</SelectItem>
                    <SelectItem value="november-3-17">November 3–17, 2025</SelectItem>
                    <SelectItem value="november-21-dec-5">November 21 – December 5, 2025</SelectItem>
                    <SelectItem value="december-28-jan-4">December 28 – January 4 (New Year Special)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea 
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any special requests or questions?"
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Booking Request
              </Button>
            </form>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is included in the price?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li>✔ Accommodation on the yacht</li>
                      <li>✔ 3 meals/day + soft drinks (Coke, juices, guava, orange juice, etc.)</li>
                      <li>✔ Rescue support & transfers to spots</li>
                      <li>✔ Parties & community life</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need to bring my own gear?</AccordionTrigger>
                  <AccordionContent>
                    You can bring your own equipment or rent premium Duotone gear from us. We offer flexible rental packages starting from €400/week.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Can beginners join the safari?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Many of our guests are complete beginners. We provide full lessons with certified IKO instructors, using BbTalkin radio helmets for effective learning. The Red Sea's shallow lagoons and consistent winds make it perfect for learning.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What about safety?</AccordionTrigger>
                  <AccordionContent>
                    Safety is our top priority. We use rescue boats, BbTalkin radio helmets, certified instructors, and operate in shallow lagoons – providing the safest possible learning conditions. All equipment is regularly maintained and inspected.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How many people are on board?</AccordionTrigger>
                  <AccordionContent>
                    Usually 20–25 people on each trip. It's a mixed international group with riders of different skill levels, creating a diverse and friendly community atmosphere.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>What's the vibe like?</AccordionTrigger>
                  <AccordionContent>
                    It's a community of adventurers! Expect evening BBQs, video analysis sessions, stunning sunsets, parties, and making lifelong friendships. The atmosphere is relaxed, supportive, and fun.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>What's not included in the price?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li>❌ Flights to Egypt</li>
                      <li>❌ Visa (25€ at airport)</li>
                      <li>❌ Alcoholic drinks (available onboard – beer €3/bottle, or bring your own)</li>
                      <li>❌ Equipment rental and lessons (optional packages available)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">🌍 Why Choose Us?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="font-bold mb-2">3+ Years Experience</h3>
                  <p className="text-muted-foreground text-sm">Organizing KiteSafaris in Egypt & Brazil</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">👨‍🏫</div>
                  <h3 className="font-bold mb-2">Certified Instructors</h3>
                  <p className="text-muted-foreground text-sm">International certification & expertise</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🪁</div>
                  <h3 className="font-bold mb-2">Premium Equipment</h3>
                  <p className="text-muted-foreground text-sm">Duotone gear & BbTalkin systems</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-bold mb-2">Family-like Vibe</h3>
                  <p className="text-muted-foreground text-sm">Strong community & lasting friendships</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🌞</div>
                  <h3 className="font-bold mb-2">All Year Round</h3>
                  <p className="text-muted-foreground text-sm">Multiple trips throughout the year</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-bold mb-2">Tailored Experience</h3>
                  <p className="text-muted-foreground text-sm">Flexible packages for all levels</p>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/kite-safari-community.jpg" 
                alt="KiteSafari community" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-12">
                <Button size="lg" asChild>
                  <a href="/booking">Book Your KiteSafari Now</a>
                </Button>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KiteSafari;
