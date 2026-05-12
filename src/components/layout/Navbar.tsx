import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Instagram, Phone, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setIsScrolled(v > 50));
    return () => unsub();
  }, [scrollY]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo light={!isScrolled} iconSize={18} />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.2em] uppercase hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-luxury-black transition-colors"
          >
            <Globe size={14} />
            <span>{i18n.language === 'en' ? 'FR' : 'EN'}</span>
          </button>

          <Button variant="outline" size="sm" className="ml-4 border-gold text-gold hover:bg-gold hover:text-white">
            {t('nav.book')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-luxury-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: '100vh', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden absolute top-full left-0 right-0 bg-white overflow-hidden shadow-xl"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-24">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif tracking-[0.2em] uppercase hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-3 text-sm font-bold uppercase tracking-[0.3em] text-gold"
          >
            <Globe size={18} />
            <span>{i18n.language === 'en' ? 'French Edition' : 'Version Anglaise'}</span>
          </button>
          <div className="flex space-x-6 pt-4">
            <Instagram size={20} className="text-gold" />
            <Phone size={20} className="text-gold" />
          </div>
          <Button variant="secondary" size="lg" onClick={() => setIsOpen(false)}>
            {t('nav.book')}
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
};
