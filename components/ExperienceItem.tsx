import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';

type ExperienceItemProps = {
  item: {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
  };
};

export default function ExperienceItem({ item }: ExperienceItemProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const { date, icon, title, location, description } = item;

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: '#f3f4f6',
          boxShadow: 'none',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'left',
          padding: '1.3rem 2rem',
        }}
        contentArrowStyle={{
          borderRight: '0.4rem solid #9ca3af',
        }}
        date={date}
        icon={icon}
        iconStyle={{
          background: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <h3 className="font-semibold capitalize">{title}</h3>
        <p className="!mt-0 font-normal">{location}</p>
        <p className="!mt-1 !font-normal text-gray-700">{description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
