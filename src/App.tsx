import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { Soul } from '@/sections/Soul';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { ClosingHero } from '@/sections/ClosingHero';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import PreLoader from '@/components/PreLoader';
import PasswordGate from '@/components/PasswordGate';
import MobileBlock from '@/components/MobileBlock';

function App() {
  return (
    <MobileBlock>
      <PasswordGate>
        <PreLoader />
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main>
            <Hero />
            <About />
            <Soul />
            <Services />
            <ClosingHero />
            <CTA />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </PasswordGate>
    </MobileBlock>
  );
}

export default App;
