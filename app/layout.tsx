import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Toaster } from 'react-hot-toast';

import { Footer, Header, ThemeSwitch } from '@/components';
import { ActiveSectionContextProvider, ThemeContextProvider } from '@/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dmytro | Personal Portfolio',
  description: 'Dmytro Stas is a junior full-stack developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
        suppressHydrationWarning={true}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
