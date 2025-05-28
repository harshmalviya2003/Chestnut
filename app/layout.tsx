import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import { MouseTrailer } from "@/components/mouse-trailer"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Demo Chestnut',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
          <MouseTrailer />
          {children}
      </body>
    </html>
  );
}
