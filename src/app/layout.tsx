import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Video Streaming Web',
  description: 'Desktop Version',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black text-white flex h-screen overflow-hidden`}>
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden relative">
          <TopNav />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
