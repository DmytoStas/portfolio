'use client';

import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Since the beginning of my career as an electrician, I have always had a
        passion for technology, which led me to web development over a year ago.
        After completing a comprehensive course, I honed my skills in
        fundamental technologies such as{' '}
        <span className="font-medium">HTML, CSS, JavaScript, React</span> and
        <span className="font-medium"> Node.js</span>. Independently exploring{' '}
        <span className="font-medium">TypeScript</span>, I used it extensively
        in my projects, along with <span className="font-medium">Next.js</span>.
        The prospect of continuous learning keeps me excited about the
        opportunities ahead.
      </p>
      <p className="mb-3">
        Outside of work, I love traveling, spending time with my friends, and
        playing computer games. I enjoy activities like basketball and swimming.
      </p>
      <p>
        Right now, I`m searching for a{' '}
        <span className="font-medium italic">
          full-time position as a junior front-end developer
        </span>{' '}
        where I can continue to develop personally and contribute to the success
        of the company.
      </p>
    </motion.section>
  );
}
