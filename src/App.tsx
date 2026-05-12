/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Gallery } from './sections/Gallery';
import { Testimonials } from './sections/Testimonials';
import { Team } from './sections/Team';
import { BookingCTA } from './sections/BookingCTA';
import { Contact } from './sections/Contact';
import { SalonInfo } from './sections/SalonInfo';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SalonInfo />
        <Gallery />
        <Testimonials />
        <Team />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

