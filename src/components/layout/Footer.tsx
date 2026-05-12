import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-luxury-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="flex flex-col space-y-6">
          <Logo light iconSize={20} className="!items-start" />
          <p className="text-warm-gray/60 text-sm leading-relaxed max-w-xs font-light">
            {t('footer.description')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg tracking-wider mb-8">{t('footer.nav')}</h4>
          <ul className="space-y-4 text-sm font-light text-warm-gray/60">
            <li><a href="#services" className="hover:text-white transition-colors">{t('nav.services')}</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">{t('nav.gallery')}</a></li>
            <li><a href="#team" className="hover:text-white transition-colors">{t('nav.team')}</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">{t('nav.book')}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-lg tracking-wider mb-8">{t('footer.visit')}</h4>
          <ul className="space-y-4 text-sm font-light text-warm-gray/60">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>56 Grand-Rue, 1660<br />Ville-Haute Luxembourg</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+352 26 20 34 62</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>info@coiffuremeva.lu</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-serif text-lg tracking-wider mb-8">{t('footer.hours')}</h4>
          <ul className="space-y-3 text-sm font-light text-warm-gray/60">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Mon — Fri</span>
              <span>09:00 - 19:00</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Sat</span>
              <span>09:00 - 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sun</span>
              <span className="text-gold">{t('footer.closed')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-warm-gray/40">
        <p>&copy; {new Date().getFullYear()} Coiffure Méva Luxury Salon. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
