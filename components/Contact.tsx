'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './SubmitBtn';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { ref } = useSectionInView('Contact');

  const handleFormAction = async (formData: FormData) => {
    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    formRef.current?.reset();
    toast.success('Email sent successfully!');
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-6 text-gray-700">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:dmytroo.stas@gmail.com">
          dmytroo.stas@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col"
        action={handleFormAction}
      >
        <input
          className="rouded-lg borderBlack h-14 px-4"
          name="emailSender"
          type="email"
          placeholder="Your email"
          maxLength={100}
          required
        />

        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4"
          name="message"
          placeholder="Your message"
          maxLength={5000}
          required
        ></textarea>

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
