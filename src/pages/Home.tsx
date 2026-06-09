import { motion } from 'motion/react';
import { Hero } from '../sections/Hero';
import { Testimonials } from '../sections/Testimonials';
import { BookingCTA } from '../sections/BookingCTA';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Star } from 'lucide-react';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-beige min-h-screen text-luxury-black"
    >
      <Hero />

      {/* Philosophy Teaser */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] relative overflow-hidden rounded-xs">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Salon Artwork" 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/5 mix-blend-color" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-gold/15 bg-beige p-8 flex flex-col justify-between hidden lg:flex">
              <Sparkles size={24} className="text-gold" />
              <div>
                <p className="font-serif text-2xl italic">15+</p>
                <p className="text-[9px] uppercase tracking-widest text-luxury-black/60">Years of Elite Practice</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase block">Bespoke Living</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Where Art Meets <br />
                <span className="italic font-light">Elegance</span>
              </h2>
            </div>
            <p className="text-luxury-black/70 text-sm md:text-base leading-relaxed font-light">
              Founded in the heart of Luxembourg's Ville-Haute, Coiffure Méva was born from a vision to bring a new level of sophisticated hair artistry to the city. We believe that hair is the ultimate form of self-expression, and our mission is to reveal your most radiant self.
            </p>
            <div className="pt-4">
              <Link to="/about">
                <Button size="lg" variant="secondary" className="group">
                  <span>Explore Our Story</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Teaser Cards */}
      <section className="py-24 bg-beige border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase block mb-4">Discover More</span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Indulge in our Curated Portals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gold/10 p-10 flex flex-col justify-between hover:border-gold/35 transition-all duration-500 h-[320px]">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold">Bespoke Collection</span>
                <h3 className="font-serif text-2xl">Bespoke Treatments</h3>
                <p className="text-xs text-luxury-black/60 font-light leading-relaxed">
                  Precision cuts, hand-painted balayage, and luxurious treatments curated for outstanding standards.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-gold hover:text-luxury-black transition-colors self-start">
                <span>View Treatment Menu</span>
                <ArrowRight size={12} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white border border-gold/10 p-10 flex flex-col justify-between hover:border-gold/35 transition-all duration-500 h-[320px]">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold">Master Stylists</span>
                <h3 className="font-serif text-2xl">Meet Our Artists</h3>
                <p className="text-xs text-luxury-black/60 font-light leading-relaxed">
                  Our professional hair stylists are elite creators trained in the most sophisticated European techniques.
                </p>
              </div>
              <Link to="/team" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-gold hover:text-luxury-black transition-colors self-start">
                <span>Meet Stylists</span>
                <ArrowRight size={12} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white border border-gold/10 p-10 flex flex-col justify-between hover:border-gold/35 transition-all duration-500 h-[320px]">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold">Visual Portfolio</span>
                <h3 className="font-serif text-2xl">Creative Gallery</h3>
                <p className="text-xs text-luxury-black/60 font-light leading-relaxed">
                  Browse styling session highlights, master transformations, balayage details, and artistic wedding stories.
                </p>
              </div>
              <Link to="/gallery" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-gold hover:text-luxury-black transition-colors self-start">
                <span>Browse Album</span>
                <ArrowRight size={12} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <BookingCTA />
    </motion.div>
  );
};
