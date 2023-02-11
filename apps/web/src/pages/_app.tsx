import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/global.css';
import { trpc } from '../utils/trpc';

interface Props extends AppProps {
  pageProps: {
    session: Session;
  };
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <ThemeProvider attribute='class'>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default trpc.withTRPC(App);
