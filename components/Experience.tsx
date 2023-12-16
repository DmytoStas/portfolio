'use client';

import {
  VerticalTimeline,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.3)

    return (
        <section
            ref={ref}
            id='experience'
            className='scroll-mt-28 mb-28 sm:mb-40'
        >
        <SectionHeading>My Experience</SectionHeading>
        
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    <ExperienceItem key={index} item={item} />
                ))}
            </VerticalTimeline>
        </section>
    )
}
