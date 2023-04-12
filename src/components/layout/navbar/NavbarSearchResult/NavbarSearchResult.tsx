import {
  NavbarSearchResultContainer,
  NavbarSearchResultInnerContainer,
} from './NavbarSearchResult.style';

interface INavbarSearchResultProps {
  isOpen: boolean;
}

const NavbarSearchResult: React.FC<INavbarSearchResultProps> = ({
  isOpen,
}: INavbarSearchResultProps) => {
  return (
    <NavbarSearchResultContainer isOpen={isOpen}>
      <NavbarSearchResultInnerContainer>aa</NavbarSearchResultInnerContainer>
    </NavbarSearchResultContainer>
  );
};

export default NavbarSearchResult;
