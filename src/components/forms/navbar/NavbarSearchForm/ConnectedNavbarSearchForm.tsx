import { useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import NavbarSearchForm, { INavbarSearchFormValues } from './NavbarSearchForm';
import { INavbarSearchResponse } from '../../../../libs/interfaces/responses/INavbarSearchResponse';
import { fetchNavbarSearchResult } from '../../../../libs/query/functions/fetchNavbarSearchResult';

interface IConnectedNavbarSearchFormProps {
  isOpen: boolean;
}
const ConnectedNavbarSearchForm: React.FC<IConnectedNavbarSearchFormProps> = ({
  isOpen,
}: IConnectedNavbarSearchFormProps) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const { isLoading, isFetched }: UseQueryResult<INavbarSearchResponse, Error> =
    useQuery<INavbarSearchResponse, Error>(
      ['navbar/search', searchPhrase],
      () => fetchNavbarSearchResult({ searchPhrase }),
      {
        enabled: searchPhrase.length > 0,
      }
    );

  useEffect(() => {
    if (isFetched) {
      setSearchPhrase('');
    }
  }, [isFetched]);
  const handleSubmit = (values: INavbarSearchFormValues) => {
    console.log(values);
  };

  return (
    <NavbarSearchForm
      handleSubmit={handleSubmit}
      isOpen={isOpen}
      isLoading={isLoading}
    />
  );
};

export default ConnectedNavbarSearchForm;
