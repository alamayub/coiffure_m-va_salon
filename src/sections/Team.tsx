import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Mélanie Valeri',
    role: 'Founder & Master Stylist',
    specialty: 'Balayage & Editorial Styling',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Alessandra Dupont',
    role: 'Senior Stylist',
    specialty: 'Precision Cuts & Color Correction',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2a04?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Julian Moretti',
    role: 'Art Director',
    specialty: 'High-Fashion & Men\'s Grooming',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800',
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold text-xs font-semibold tracking-[0.5em] uppercase mb-4 block">Meet the Artists</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Crafting Beauty <br />
              <span className="italic font-light">Every Day</span>
            </h2>
          </div>
          <p className="text-luxury-black/60 font-light max-w-sm mb-4 leading-relaxed tracking-wide">
            Our team consists of internationally trained stylists who share a passion for excellence and a commitment to artful transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Social Icons Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-between">
                    <div className="flex space-x-4">
                        <Instagram size={20} className="text-white hover:text-gold transition-colors cursor-pointer" />
                        <Linkedin size={20} className="text-white hover:text-gold transition-colors cursor-pointer" />
                    </div>
                    <span className="text-white text-[10px] uppercase tracking-widest font-semibold">View Portfolio</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold block">{member.role}</span>
                <h3 className="font-serif text-3xl tracking-tight group-hover:text-gold transition-colors duration-300">{member.name}</h3>
                <p className="text-sm font-light text-luxury-black/60 tracking-wide uppercase mt-4 border-l border-gold pl-4">
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Grid background */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold/5 -z-10" />
        <div className="absolute top-1/2 left-1/4 w-[1px] h-full bg-gold/5 -z-10" />
      </div>
    </section>
  );
};
