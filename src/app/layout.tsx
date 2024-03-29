import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from './Provider';
import { Header } from './_components/server/header/Header';
import '@fortawesome/fontawesome-svg-core/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
