import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import queryClient from './libs/query/queryClient';
import GlobalStyle from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Hello {process.env.string}</h1>
        </div>
        {process.env.REACT_QUERY_DEVTOOLS === 'open' && (
          <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
        )}
      </QueryClientProvider>
    </>
  );
};
