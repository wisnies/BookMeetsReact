import React, { createContext, useContext, useMemo, useState } from 'react';

interface ISearchContext {
  navbarSearchPhrase: string;
  setNavbarSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

interface ISearchContextProviderProps {
  children: React.ReactNode;
}

export const SearchContextProvider: React.FC<ISearchContextProviderProps> = ({
  children,
}: ISearchContextProviderProps) => {
  const [navbarSearchPhrase, setNavbarSearchPhrase] = useState('');

  const value = useMemo(
    () => ({
      navbarSearchPhrase,
      setNavbarSearchPhrase,
    }),
    [navbarSearchPhrase]
  );
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
