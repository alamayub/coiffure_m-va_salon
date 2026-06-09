import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setIsScrolled(v > 50));
    return () => unsub();
  }, [scrollY]);

  const navLinks = [
    { name: 'Services', to: '/services' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Team', to: '/team' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
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
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) => cn(
                "text-[11px] font-medium tracking-[0.2em] uppercase transition-colors hover:text-gold",
                isActive ? "text-gold font-semibold" : isScrolled ? "text-luxury-black" : "text-white"
              )}
            >
              {link.name}
            </NavLink>
          ))}

          <Link to="/book">
            <Button variant="outline" size="sm" className="ml-4 border-gold text-gold hover:bg-gold hover:text-white">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2 focus:outline-none transition-colors",
            isScrolled ? "text-luxury-black" : "text-white"
          )}
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
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif tracking-[0.2em] uppercase hover:text-gold transition-colors text-luxury-black"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-6 pt-4">
            <Instagram size={20} className="text-gold" />
            <Phone size={20} className="text-gold" />
          </div>
          <Link to="/book" onClick={() => setIsOpen(false)}>
            <Button variant="secondary" size="lg">
              Book Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};
