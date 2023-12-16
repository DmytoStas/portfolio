'use client';

import { projectsData } from '@/lib/data';
import { ProjectItem, SectionHeading } from './index';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <ul>
        {projectsData.map(project => (
          <li key={project.title} className="group mb-3 last:mb-0 sm:mb-8">
            <ProjectItem {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
