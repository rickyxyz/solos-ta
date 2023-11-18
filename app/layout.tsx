import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// SEO stuff
export const metadata: Metadata = {
  title: 'Football Player List',
  description: 'A list of a football players',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={`bg-slate-50 ${inter.className} h-[calc(100vh-64px)]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
