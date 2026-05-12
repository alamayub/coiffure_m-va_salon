import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';

export const BookingCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=1920"
          alt="Salon Experience"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-luxury-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="border border-white/20 p-12 md:p-24 backdrop-blur-md"
        >
          <span className="text-gold text-xs font-semibold tracking-[0.6em] uppercase mb-8 block">Ready for a change?</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-10 leading-tight tracking-tight">
            Book Your <br />
            <span className="italic font-light">Transformation</span>
          </h2>
          <p className="text-warm-gray/60 text-lg mb-12 font-light max-w-xl mx-auto leading-relaxed">
            Step into our world of luxury. Limited slots available for premium balayage and bridal consultations.
          </p>
          <Button size="lg" variant="secondary" className="px-16 shadow-2xl">
            Secure Your Session
          </Button>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};
