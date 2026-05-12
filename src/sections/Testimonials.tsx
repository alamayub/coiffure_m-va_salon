import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie L.',
    role: 'Loyal Client',
    content: 'Very professional salon, very welcoming and professional staff. Always a pleasure to go there. The best balayage I have had in Luxembourg.',
    rating: 5,
  },
  {
    name: 'Anne-Sophie R.',
    role: 'Regular Customer',
    content: 'Top hairdresser, I recommend 100%. Very competent staff who really listen to what you want. The results are always better than expected.',
    rating: 5,
  },
  {
    name: 'Catherine B.',
    role: 'Premium Client',
    content: 'Magnificent salon, dynamic and very competent team. A true luxury experience in the heart of Luxembourg. The results are flawless every time.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold text-xs font-semibold tracking-[0.5em] uppercase mb-4 block">Client Stories</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Beloved by <br />
              <span className="italic font-light">the Distinguished</span>
            </h2>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <div className="flex items-center space-x-2 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
              <span className="text-sm font-semibold text-luxury-black ml-4">5.0 Recommendation</span>
            </div>
            <a 
              href="https://www.google.com/maps/place/Coiffure+M%C3%A9va/@49.6122,6.12882,17z/data=!4m8!3m7!1s0x47954f2b67c78513:0xc16484811f1ac783!8m2!3d49.6122!4d6.12882!9m1!1b1!16s%2Fg%2F11flzh1qn_?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold hover:text-luxury-black transition-colors"
            >
              View all Google Reviews
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative z-10 p-12 bg-beige/20 border border-beige/50 hover:border-gold/30 transition-all duration-700 h-full">
                <Quote size={40} className="text-gold/20 mb-8" />
                <p className="text-luxury-black/70 font-light leading-relaxed mb-10 text-lg">
                  "{t.content}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-serif text-xl tracking-tight mb-1">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-semibold">{t.role}</p>
                </div>
              </div>
              
              {/* Decorative block */}
              <div className="absolute top-4 left-4 -z-10 w-full h-full border border-luxury-black/5 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
