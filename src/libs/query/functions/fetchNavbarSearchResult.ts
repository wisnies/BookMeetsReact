import { INavbarSearchRequest } from '../../interfaces/requests/INavbarSearchRequest';
import { INavbarSearchResponse } from '../../interfaces/responses/INavbarSearchResponse';

export const fetchNavbarSearchResult = async (
  request: INavbarSearchRequest
): Promise<INavbarSearchResponse> => {
  return {
    books: [request.searchPhrase, '2', '3', '4', '5'],
  };
};
