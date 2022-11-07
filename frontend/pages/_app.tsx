import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyles from '../styles/GlobalStyles';
import { RecoilRoot } from 'recoil';
import PageWrapper from '../components/wrapper/PageWrapper';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps & any) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
