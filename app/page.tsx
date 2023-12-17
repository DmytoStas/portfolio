import {
  About,
  Intro,
  Projects,
  SectionDivider,
  Skills,
  Experience,
  Contact,
} from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
