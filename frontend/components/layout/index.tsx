import Image from 'next/image';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './style';

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

const Layout = ({
  children,
  title = '구리 유도관 와이어 주짓수',
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div css={styles.layout}>
        <Image src='/images/logo.jpeg' width={300} height={300} alt={'Logo'} />
        {children}
      </div>
    </>
  );
};

export default Layout;
