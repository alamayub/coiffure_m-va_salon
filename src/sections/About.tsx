import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Images Grid */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000"
                alt="Styling in progress"
                className="w-full h-full object-cover grayscale-[0.3] hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-12 -right-8 md:-right-16 w-1/2 aspect-square z-20 overflow-hidden border-[12px] border-beige shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f8bc2b34?auto=format&fit=crop&q=80&w=800"
                alt="Salon Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 -left-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase block">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Where Art Meets <br />
                <span className="italic font-light">Elegance</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-luxury-black/70 font-light leading-relaxed tracking-wide text-base md:text-lg">
              <p>
                Founded in the heart of Luxembourg's Ville-Haute, Coiffure Méva was born from a vision to bring a new level of sophisticated hair artistry to the city.
              </p>
              <p>
                Our stylists are more than just technicians; they are artists trained in the most advanced European techniques.
              </p>
            </div>

            <div className="flex items-center space-x-12 pt-4">
              <div>
                <span className="block font-serif text-3xl text-gold">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-luxury-black/50">Years Experience</span>
              </div>
              <div className="w-[1px] h-12 bg-gold/20" />
              <div>
                <span className="block font-serif text-3xl text-gold">5.0</span>
                <span className="text-[10px] uppercase tracking-widest text-luxury-black/50">Client Rating</span>
              </div>
            </div>

            <div className="pt-6">
              <a href="#services" className="inline-flex items-center group space-x-3 text-xs font-semibold tracking-[0.3em] uppercase">
                <span>The Experience</span>
                <div className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all duration-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
