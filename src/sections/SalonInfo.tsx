import { motion } from 'motion/react';
import { Wifi, Calendar, CreditCard, Baby, Smartphone, MapPin } from 'lucide-react';

const infoItems = [
  {
    title: 'Amenities',
    details: ['Premium Restroom', 'Free High-Speed Wi-Fi'],
    icon: Wifi,
  },
  {
    title: 'Planning',
    details: ['Appointments Recommended', 'Walk-ins subject to availability'],
    icon: Calendar,
  },
  {
    title: 'Payments',
    details: ['Credit & Debit Cards', 'NFC Mobile Payments (Apple/Google Pay)'],
    icon: CreditCard,
  },
  {
    title: 'Children',
    details: ['Family Friendly', 'Kids styling services available'],
    icon: Baby,
  },
];

export const SalonInfo = () => {
  return (
    <section className="py-20 bg-luxury-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-2 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                <item.icon size={24} className="text-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl tracking-wider text-gold">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-xs uppercase tracking-[0.2em] text-warm-gray/60 font-light">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle Divider */}
      <div className="mt-20 max-w-7xl mx-auto px-6 opacity-10">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent w-full" />
      </div>
    </section>
  );
};
