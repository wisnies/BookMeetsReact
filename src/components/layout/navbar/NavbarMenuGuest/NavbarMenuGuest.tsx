import { NavbarMenuGuestContainer } from './NavbarMenuGuest.style';
import NavbarLink from '../NavbarLink/NavbarLink';

const NavbarMenuGuest: React.FC = () => {
  return (
    <NavbarMenuGuestContainer>
      <NavbarLink target='/auth/login'>Login</NavbarLink>
      <NavbarLink target='/auth/register'>Register</NavbarLink>
    </NavbarMenuGuestContainer>
  );
};

export default NavbarMenuGuest;
