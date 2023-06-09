import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  NavbarSearchButton,
  NavbarSearchContainer,
} from './NavbarSearch.style';
import ConnectedNavbarSearchForm from '../../../forms/navbar/NavbarSearchForm/ConnectedNavbarSearchForm';
import NavbarSearchResult from '../NavbarSearchResult/NavbarSearchResult';

const NavbarSearch: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  return (
    <NavbarSearchContainer>
      <NavbarSearchButton onClick={() => setFormIsOpen(!formIsOpen)}>
        <FaSearch />
      </NavbarSearchButton>
      <ConnectedNavbarSearchForm isOpen={formIsOpen} />
      <NavbarSearchResult />
    </NavbarSearchContainer>
  );
};

export default NavbarSearch;
