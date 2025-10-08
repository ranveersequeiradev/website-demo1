import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Capabilities } from '@/components/sections/capabilities';
import { SocialProof } from '@/components/sections/social-proof';
import { FinalCta } from '@/components/sections/final-cta';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Problem />
      <Capabilities />
      <SocialProof />
      <FinalCta />
    </main>
  );
};
