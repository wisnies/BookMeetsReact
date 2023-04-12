import { NavigationContainer } from './NavbarNavigation.style';
import NavbarLink from '../NavbarLink/NavbarLink';

const NavbarNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavbarLink target='/'>Home</NavbarLink>
      <NavbarLink target='/'>About</NavbarLink>
      <NavbarLink target='/'>Browse</NavbarLink>
      <NavbarLink target='/'>Community</NavbarLink>
    </NavigationContainer>
  );
};

export default NavbarNavigation;
