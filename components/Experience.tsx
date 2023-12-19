'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.2);

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map(item => (
          <ExperienceItem key={item.id} {...item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
