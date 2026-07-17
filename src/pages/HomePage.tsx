import { HeroSection } from '../components/sections/HeroSection';
import { BrandSoulSection } from '../components/sections/BrandSoulSection';
import { ProductEcosystemSection } from '../components/sections/ProductEcosystemSection';
import { TechnologySection } from '../components/sections/TechnologySection';
import { AppEcosystemSection } from '../components/sections/AppEcosystemSection';
import { BlogSection } from '../components/sections/BlogSection';
import { LifestyleSection } from '../components/sections/LifestyleSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandSoulSection />
      <ProductEcosystemSection />
      <TechnologySection />
      <AppEcosystemSection />
      <BlogSection />
      <LifestyleSection />
    </main>
  );
}
