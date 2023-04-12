import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/layout/Main/Main';
import Navbar from './components/layout/navbar/Navbar/Navbar';
import ThemeWrapper from './components/layout/ThemeWrapper/ThemeWrapper';
import RouteViews from './components/routing/RouteViews';
import { SearchContextProvider } from './context/searchContext';
import { useScrollable } from './hooks/useScrollable';
import queryClient from './libs/query/queryClient';
import GlobalStyle from './styles/global';

export const App: React.FC = () => {
  const showNavbar = useScrollable();
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <ThemeWrapper>
            <BrowserRouter>
              <Navbar show={showNavbar} />
              <Main>
                <RouteViews />
              </Main>
            </BrowserRouter>
          </ThemeWrapper>
        </SearchContextProvider>
        {process.env.REACT_QUERY_DEVTOOLS === 'open' && (
          <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
        )}
      </QueryClientProvider>
    </>
  );
};
