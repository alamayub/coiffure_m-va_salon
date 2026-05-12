import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1595476108010-b4d1f8bc2b34?auto=format&fit=crop&q=80&w=800', category: 'Interior', title: 'The Lounge' },
  { id: 2, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800', category: 'Styling', title: 'Artist at Work' },
  { id: 3, url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800', category: 'Results', title: 'Perfect Balayage' },
  { id: 4, url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800', category: 'Interior', title: 'Station Details' },
  { id: 5, url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800', category: 'Results', title: 'Luxury Blowout' },
  { id: 6, url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800', category: 'Bridal', title: 'Bridal Perfection' },
  { id: 7, url: 'https://images.unsplash.com/photo-1620331311520-246422ff13f9?auto=format&fit=crop&q=80&w=800', category: 'Details', title: 'Premium Products' },
  { id: 8, url: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800', category: 'Results', title: 'Classic Elegance' },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Interior', 'Styling', 'Results', 'Bridal'];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.5em] uppercase mb-4 block">The Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12">Visual Excellence</h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-gold/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 relative py-2 ${
                  filter === cat ? 'text-gold' : 'text-luxury-black/40 hover:text-luxury-black'
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <Maximize2 className="text-white mb-2" size={24} />
                  <span className="text-white text-[10px] uppercase tracking-[0.2em]">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-gold transition-colors">
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-16 left-0 text-white text-center w-full">
                <p className="font-serif text-2xl tracking-wide">{selectedImage.title}</p>
                <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-medium mt-2">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
