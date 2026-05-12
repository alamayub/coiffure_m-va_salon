import { motion } from 'motion/react';
import { Scissors, Sparkles, Heart, Crown, Camera, Coffee, Zap, Palette } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t, i18n } = useTranslation();

  const services = [
    {
      title: t('services.cut'),
      description: 'Precision cuts tailored to your face shape and lifestyle.',
      icon: Scissors,
      price: 'From 85€',
    },
    {
      title: t('services.color'),
      description: 'Bespoke hand-painted highlights for a sun-kissed finish.',
      icon: Palette,
      price: 'From 180€',
    },
    {
      title: t('services.bridal'),
      description: 'Exquisite styling for your most unforgettable moments.',
      icon: Crown,
      price: 'Consultation Required',
    },
    {
      title: t('services.treatment'),
      description: 'Deep hydration and keratin therapy for ultimate shine.',
      icon: Sparkles,
      price: 'From 60€',
    },
    {
      title: t('services.style'),
      description: t('services.style') + ' ' + (i18n.language === 'en' ? 'Professional red-carpet styling.' : 'Coiffage professionnel tapis rouge.'),
      icon: Zap,
      price: 'From 45€',
    },
    {
      title: t('services.consult'),
      description: 'Expert analysis and professional styling roadmap.',
      icon: Camera,
      price: 'Complimentary',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-20 -right-20 text-[200px] font-serif font-black opacity-[0.02] rotate-90 select-none pointer-events-none uppercase">
        {t('services.tagline')}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold text-xs font-semibold tracking-[0.5em] uppercase mb-4 block"
          >
            {t('services.tagline')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-black/60 font-light leading-relaxed"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-beige/30 hover:bg-beige transition-all duration-500 border border-beige/50 relative"
            >
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-white">
                <service.icon size={24} className="stroke-[1.5]" />
              </div>
              
              <h3 className="font-serif text-2xl mb-4 tracking-tight group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm font-light text-luxury-black/60 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-luxury-black/5">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-luxury-black/40">{t('services.investment')}</span>
                <span className="text-sm font-serif italic text-gold">{service.price}</span>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <div className="relative inline-block py-12 px-24 border border-gold/20">
                <blockquote className="font-serif text-2xl italic font-light tracking-wide max-w-xl mx-auto">
                    "{t('services.quote')}"
                </blockquote>
                <div className="absolute top-0 left-12 -translate-y-1/2 bg-white px-4">
                    <Heart className="text-gold fill-gold" size={20} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
