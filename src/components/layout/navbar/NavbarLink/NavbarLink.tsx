import { NavbarLinkAsLink } from './NavbarLink.style';

interface INavbarLinkProps {
  asDropdown?: boolean;
  target: string;
  children: React.ReactNode;
}

const NavbarLink: React.FC<INavbarLinkProps> = ({
  asDropdown,
  target,
  children,
}: INavbarLinkProps) => {
  if (asDropdown) {
    return null;
  }

  return <NavbarLinkAsLink to={target}>{children}</NavbarLinkAsLink>;
};

NavbarLink.defaultProps = {
  asDropdown: false,
};

export default NavbarLink;
