import {
  NavbarMenuContainer,
  NavbarMenuInnerContainer,
} from './NavbarMenu.style';
import {
  MaxTabletContainer,
  MinTabletContainer,
} from '../../../../styles/common';
import RoundedButton from '../../../buttons/RoundedButton/RoundedButton';
import NavbarMenuAuth from '../NavbarMenuAuth/NavbarMenuAuth';
import NavbarMenuGuest from '../NavbarMenuGuest/NavbarMenuGuest';

const NavbarMenu: React.FC = () => {
  const isAuth = false; // todo
  return (
    <NavbarMenuContainer>
      <MaxTabletContainer>
        <NavbarMenuInnerContainer>
          <RoundedButton target='/auth/login' color='accentPrimary1'>
            Join
          </RoundedButton>
        </NavbarMenuInnerContainer>
      </MaxTabletContainer>
      <MinTabletContainer>
        <NavbarMenuInnerContainer>
          {isAuth ? <NavbarMenuAuth /> : <NavbarMenuGuest />}
        </NavbarMenuInnerContainer>
      </MinTabletContainer>
    </NavbarMenuContainer>
  );
};

export default NavbarMenu;
