import {
  NavbarLogoContainer,
  NavbarLogoPartOne,
  NavbarLogoPartTwo,
} from './NavbarLogo.style';

const NavbarLogo: React.FC = () => {
  return (
    <NavbarLogoContainer to='/'>
      <NavbarLogoPartOne>book</NavbarLogoPartOne>
      <NavbarLogoPartTwo>meets</NavbarLogoPartTwo>
    </NavbarLogoContainer>
  );
};

export default NavbarLogo;
