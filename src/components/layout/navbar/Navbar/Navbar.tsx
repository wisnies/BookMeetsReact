import { useState } from 'react';
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavbarLogoBox,
  NavbarMenuBox,
  NavbarNavigationBox,
  NavbarSearchBox,
} from './Navbar.style';
import NavbarLogo from '../NavbarLogo/NavbarLogo';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import NavbarNavigation from '../NavbarNavigation/NavbarNavigation';
import NavbarSearch from '../NavbarSearch/NavbarSearch';

interface INavbarProps {
  show: boolean;
}

const Navbar: React.FC<INavbarProps> = ({ show }: INavbarProps) => {
  const [showOnHover, setShowOnHover] = useState(false);

  return (
    <NavbarContainer
      show={show}
      showOnHover={showOnHover}
      onMouseEnter={() => setShowOnHover(true)}
      onMouseLeave={() => setShowOnHover(false)}
    >
      <NavbarInnerContainer>
        <NavbarLogoBox>
          <NavbarLogo />
        </NavbarLogoBox>
        <NavbarMenuBox>
          <NavbarMenu />
        </NavbarMenuBox>
        <NavbarNavigationBox>
          <NavbarNavigation />
        </NavbarNavigationBox>
        <NavbarSearchBox>
          <NavbarSearch />
        </NavbarSearchBox>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;
