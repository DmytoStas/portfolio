'use client';

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { FaGithubSquare } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

type ProjectItemProps = (typeof projectsData)[number];

export default function ProjectItem({
  title,
  description,
  tags,
  imageUrl,
  gitHubURL,
  projectURL,
}: ProjectItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition group-hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem]">
        <div className="relative flex h-full flex-col px-5 pb-6 pt-4 sm:max-w-[50%] sm:pl-7 sm:pr-2 sm:pt-6 sm:group-even:ml-[19.5rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="mt-2 leading-6 text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1 sm:mt-auto ">
            {tags.map(tag => (
              <li
                key={tag}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="absolute right-2 top-6 flex cursor-pointer gap-2">
            {projectURL && (
              <a
                href={projectURL}
                target="_blank"
                rel="noopener noreferer nofollow"
                className="borderBlack flex items-center gap-2 rounded-full bg-white p-1 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
              >
                <CgWebsite />
              </a>
            )}

            <a
              href={gitHubURL}
              target="_blank"
              rel="noopener noreferer nofollow"
              className="borderBlack flex items-center gap-2 rounded-full bg-white p-1 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={`${title} project`}
          quality={95}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        />
      </div>
    </motion.div>
  );
}
