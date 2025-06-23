import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ResumeSection } from '@/components/sections/resume';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
