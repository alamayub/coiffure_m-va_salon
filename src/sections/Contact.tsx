import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-gold text-xs font-semibold tracking-[0.5em] uppercase block">Location</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Visit our <br />
                <span className="italic font-light">Sanctuary</span>
              </h2>
              <p className="text-luxury-black/60 font-light max-w-md leading-relaxed">
                Located in the prestigious heart of Luxembourg City. We invite you to experience hair artistry at its finest.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gold">
                  <MapPin size={20} />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-luxury-black">Address</span>
                </div>
                <p className="text-sm font-light leading-relaxed text-luxury-black/70">
                  56 Grand-Rue, 1660<br />
                  Ville-Haute Luxembourg
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gold">
                  <Phone size={20} />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-luxury-black">Contact</span>
                </div>
                <p className="text-sm font-light leading-relaxed text-luxury-black/70">
                  +352 26 20 34 62<br />
                  info@coiffuremeva.lu
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full aspect-video grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 rounded-sm overflow-hidden border border-beige">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.103009665679!2d6.1265880770638114!3d49.61219807144214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954f2b67c78513%3A0xc16484811f1ac783!2sCoiffure%20M%C3%A9va!5e0!3m2!1sen!2slu!4v1715551364283!5m2!1sen!2slu" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-beige p-10 md:p-16 relative"
          >
            <h3 className="font-serif text-3xl mb-8 tracking-tight italic font-light">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/50 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-beige-dark/20 p-4 text-sm font-light focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/50 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-beige-dark/20 p-4 text-sm font-light focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/50 ml-1">Service of Interest</label>
                <select className="w-full bg-white border border-beige-dark/20 p-4 text-sm font-light focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>Balayage & Color</option>
                  <option>Cut & Style</option>
                  <option>Bridal Consultation</option>
                  <option>Hair Treatment</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-black/50 ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border border-beige-dark/20 p-4 text-sm font-light focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <Button variant="primary" size="lg" className="w-full">
                <span>Send Message</span>
                <Send size={16} className="ml-3" />
              </Button>
            </form>
            
            <div className="mt-12 flex justify-center space-x-8 grayscale opacity-50">
                <Instagram size={24} className="hover:text-gold transition-colors cursor-pointer" />
                <Facebook size={24} className="hover:text-gold transition-colors cursor-pointer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
