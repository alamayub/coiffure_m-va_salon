import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        services: 'Services',
        gallery: 'Gallery',
        team: 'Team',
        about: 'About',
        contact: 'Contact',
        book: 'Book Now'
      },
      hero: {
        tagline: 'Elegance Reimagined in Luxembourg',
        title: 'Elevate Your Natural Radiance',
        subtitle: 'Luxurious hair experiences tailored to the modern professional.',
        cta1: 'Book Appointment',
        cta2: 'View Services'
      },
      about: {
        tagline: 'Our Philosophy',
        title: 'Where Art Meets Elegance',
        p1: 'Founded in the heart of Luxembourg\'s Ville-Haute, Coiffure Méva was born from a vision to bring a new level of sophisticated hair artistry to the city.',
        p2: 'Our stylists are more than just technicians; they are artists trained in the most advanced European techniques.',
        stat1: 'Years Experience',
        stat2: 'Client Rating',
        link: 'The Experience'
      },
      services: {
        tagline: 'The Collection',
        title: 'Bespoke Treatments',
        subtitle: 'Our service menu is a carefully curated selection of premium hair treatments.',
        cut: 'Haircut & Sculpting',
        color: 'Balayage & Color',
        bridal: 'Bridal Artistry',
        treatment: 'Hair Treatment',
        style: 'Blow Dry & Style',
        consult: 'Consultation',
        investment: 'Investment',
        quote: 'Luxury is not a luxury, it\'s a way of being.'
      },
      footer: {
        description: 'Luxury hair salon in the heart of Luxembourg City. We redefine beauty through expertise and elegance.',
        nav: 'Navigation',
        visit: 'Visit Us',
        hours: 'Opening Hours',
        closed: 'Closed'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        services: 'Services',
        gallery: 'Galerie',
        team: 'Équipe',
        about: 'À Propos',
        contact: 'Contact',
        book: 'Réserver'
      },
      hero: {
        tagline: 'L\'élégance réimaginée à Luxembourg',
        title: 'Sublimez votre éclat naturel',
        subtitle: 'Des expériences capillaires luxueuses adaptées aux professionnels modernes.',
        cta1: 'Prendre Rendez-vous',
        cta2: 'Voir les Services'
      },
      about: {
        tagline: 'Notre Philosophie',
        title: 'Où l\'Art rencontre l\'Élégance',
        p1: 'Fondée au cœur de la Ville-Haute de Luxembourg, Coiffure Méva est née d\'une vision visant à apporter un nouveau niveau d\'art capillaire sophistiqué à la ville.',
        p2: 'Nos stylistes sont plus que de simples techniciens ; ce sont des artistes formés aux techniques européennes les plus avancées.',
        stat1: 'Ans d\'Expérience',
        stat2: 'Note Clients',
        link: 'L\'Expérience'
      },
      services: {
        tagline: 'La Collection',
        title: 'Traitements sur Mesure',
        subtitle: 'Notre menu de services est une sélection soigneusement élaborée de soins capillaires haut de gamme.',
        cut: 'Coupe & Sculpture',
        color: 'Balayage & Couleur',
        bridal: 'Coiffure Mariage',
        treatment: 'Soin Capillaire',
        style: 'Brushing & Style',
        consult: 'Consultation',
        investment: 'Investissement',
        quote: 'Le luxe n\'est pas un luxe, c\'est une façon d\'être.'
      },
      footer: {
        description: 'Salon de coiffure de luxe au cœur de la ville de Luxembourg. Nous redéfinissons la beauté par l\'expertise et l\'élégance.',
        nav: 'Navigation',
        visit: 'Nous Visiter',
        hours: 'Horaires d\'Ouverture',
        closed: 'Fermé'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'navigator', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;
