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
import { Ship, Wind, Users, GraduationCap, CheckCircle, XCircle, Euro, Bed, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

          {/* Kitesurfing Program */}
          <section className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Wind className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Kitesurfing Program</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Wind Guaranteed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">15–25 knots almost daily</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2–3 Sessions/Day</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Multiple opportunities to ride</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Perfect Spots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Flat-water lagoons and wave spots</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>All Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Beginners, intermediate, advanced</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Rescue boats on standby</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Video Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Evening sessions to improve technique</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img 
                src="/lovable-uploads/kite-safari-action-1.jpg" 
                alt="Kitesurfing action" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <img 
                src="/lovable-uploads/kite-safari-action-2.jpg" 
                alt="Kitesurfing action" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </section>

          {/* Training Options */}
          <section className="mb-20" id="training">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Training Options</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">IKO Level 1 Instructor</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary flex items-center gap-2">
                    <Euro className="w-6 h-6" />500/week
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
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              ⚡️ Note: 10h is enough for first steps, but to become fully independent usually requires 20–25h.
            </p>
          </section>

          {/* Prices & Booking */}
          <section className="mb-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12" id="booking">
            <div className="flex items-center gap-3 mb-8">
              <Euro className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Prices & Bookings</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Accommodation Prices</h3>
                <div className="space-y-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-2">
                        <Bed className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-semibold">Standard Cabin</span>
                              <p className="text-sm text-muted-foreground">Twin beds in the room, lower deck -1</p>
                            </div>
                            <span className="text-2xl font-bold text-primary whitespace-nowrap ml-4">€1,150</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-2">
                        <Eye className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-semibold">Master Suite</span>
                              <p className="text-sm text-muted-foreground">King-size bed, sea view, upper deck +2</p>
                            </div>
                            <span className="text-2xl font-bold text-primary whitespace-nowrap ml-4">€1,350</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

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
                    <span>Visa (25€ at airport)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Alcoholic drinks (can be bought onboard – beer €3 per bottle, or bring your own)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Equipment rental / lessons (optional packages above)</span>
                  </li>
                </ul>
              </div>
            </div>
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
