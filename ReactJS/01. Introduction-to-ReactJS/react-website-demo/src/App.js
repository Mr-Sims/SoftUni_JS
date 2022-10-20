/* eslint-disable */

import {HeroSection} from './components/HeroSection'
import {AboutSection} from './components/About'
import {ServiceSection} from './components/Service'
import {PortfolioSection} from './components/Portfolio'
import { NewsSection } from './components/News';
import { SubscribeSection } from './components/Subscribe';
import { ClientSection } from './components/Client';
import { ContactSection } from './components/Contact';
import { InfoSection } from './components/Info';
import { Footer } from './components/Footer'

 
function App() {
  return (
    <div>
      <HeroSection />

      <AboutSection />

      <ServiceSection />

      <PortfolioSection />

      <NewsSection />
    
      <SubscribeSection />
    
      <ClientSection />

      <ContactSection />
  
      <InfoSection />

      <Footer />

    </div>
  );
}

export default App;
