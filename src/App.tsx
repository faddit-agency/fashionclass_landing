import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { InsightSection } from '@/components/sections/InsightSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ResultSection } from '@/components/sections/ResultSection';
import { FreeClassSection } from '@/components/sections/FreeClassSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { InstructorSection } from '@/components/sections/InstructorSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';
import { StickyBottomCTA } from '@/components/sections/StickyBottomCTA';

function App() {
  return (
    <div className="min-h-screen pb-[100px] sm:pb-[68px]">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <InsightSection />
        <SolutionSection />
        <ResultSection />
        <FreeClassSection />
        <CommunitySection />
        <InstructorSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyBottomCTA />
    </div>
  );
}

export default App;
