import { useState } from 'react';
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavbarLogoBox,
  NavbarMenuBox,
  NavbarNavigationBox,
  NavbarSearchBox,
} from './Navbar.style';

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
        <NavbarLogoBox />
        <NavbarMenuBox />
        <NavbarNavigationBox />
        <NavbarSearchBox />
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;
