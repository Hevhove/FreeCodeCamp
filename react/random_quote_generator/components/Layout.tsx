import Head from 'next/head';
import styles from '../styles/index.module.css';

interface LayoutProps {
  children: React.ReactNode;
  bgImage: string;
}

export default function Layout({ children, bgImage }: LayoutProps) {
  return (
    <div className={styles['layout-container']} style={{ backgroundImage: `url(${bgImage})`, transition: 'all 0.5s ease-out',}}>
      <Head>
        <title>Random Quote Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen">{children}</main>
    </div>
  );
}