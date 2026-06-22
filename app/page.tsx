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
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FounderSection />
        <StatsBar />
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
