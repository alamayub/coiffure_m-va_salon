import { motion } from 'motion/react';
import { Gallery } from '../sections/Gallery';

export const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-beige min-h-screen text-luxury-black pt-24"
    >
      <div className="py-12 bg-white/40 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase block mb-2">Visual Heritage</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">Our Master Portfolio</h1>
        </div>
      </div>

      <Gallery />
    </motion.div>
  );
};
