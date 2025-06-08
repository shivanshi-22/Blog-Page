import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevBlog - Modern Web Development Insights',
  description: 'Discover the latest trends, tutorials, and insights in web development. From TypeScript to CSS Grid, stay ahead in the world of programming.',
  keywords: 'web development, programming, TypeScript, CSS, JavaScript, React, Next.js',
  authors: [{ name: 'DevBlog Team' }],
  openGraph: {
    title: 'DevBlog - Modern Web Development Insights',
    description: 'Discover the latest trends, tutorials, and insights in web development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}