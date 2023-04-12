import {
  NavbarSearchResultContainer,
  NavbarSearchResultInnerContainer,
} from './NavbarSearchResult.style';
import { useSearchContext } from '../../../../context/searchContext';

const NavbarSearchResult: React.FC = () => {
  const { navbarSearchPhrase } = useSearchContext();
  return (
    <NavbarSearchResultContainer isOpen={navbarSearchPhrase.length > 0}>
      <NavbarSearchResultInnerContainer>
        {navbarSearchPhrase}
      </NavbarSearchResultInnerContainer>
    </NavbarSearchResultContainer>
  );
};

export default NavbarSearchResult;
