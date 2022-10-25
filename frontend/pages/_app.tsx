import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';

function App({ Component, pageProps }: AppProps & any) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
