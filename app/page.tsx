import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WhatWeBuild from './components/WhatWeBuild';
import EnterpriseTier from './components/EnterpriseTier';
import Methodology from './components/Methodology';
import PlatformsInProduction from './components/PlatformsInProduction';
import BuiltForOrganizations from './components/BuiltForOrganizations';
import DarkNetworkSection from './components/DarkNetworkSection';
import FounderSection from './components/FounderSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    // Sin fondo propio: el <AmbientBackground/> del layout tiene que
    // verse a través de toda la columna de contenido. Con bg-white aquí
    // quedaba tapado y el degradado animado no existía en pantalla.
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <StatsBar />
        <FounderSection />
        <WhatWeBuild />
        <EnterpriseTier />
        <Methodology />
        <PlatformsInProduction />
        <BuiltForOrganizations />
        <DarkNetworkSection />
      </main>
      <Footer />
    </div>
  );
}
