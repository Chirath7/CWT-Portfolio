import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ValueProps from '@/components/ValueProps';
import ProjectsGrid from '@/components/ProjectsGrid';
import StatsBand from '@/components/StatsBand';
import Approach from '@/components/Approach';
import Capabilities from '@/components/Capabilities';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ValueProps />
        <ProjectsGrid />
        <StatsBand />
        <Approach />
        <Capabilities />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
