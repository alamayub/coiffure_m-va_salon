import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { MousePointer2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-beige/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-gold text-xs md:text-sm font-medium tracking-[0.5em] uppercase mb-6">
            {t('hero.tagline')}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] tracking-tight">
            {i18n.language === 'en' ? (
              <>Elevate Your <br /><span className="italic font-light">Natural Radiance</span></>
            ) : (
              <>Sublimez votre <br /><span className="italic font-light">Éclat Naturel</span></>
            )}
          </h1>
          <p className="text-warm-gray/80 text-sm md:text-base max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" variant="secondary">{t('hero.cta1')}</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              {t('hero.cta2')}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>

      {/* Subtle animated elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-[120px] animate-pulse delay-1000" />
    </section>
  );
};
