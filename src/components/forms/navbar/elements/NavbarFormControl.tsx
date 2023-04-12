import NavbarFormInput from './NavbarFormInput/NavbarFormInput';

interface INavbarFormControlProps {
  control: 'input';
  name: string;
  handleBlur: () => void;
}

const NavbarFormControl: React.FC<INavbarFormControlProps> = ({
  control,
  name,
  handleBlur,
}: INavbarFormControlProps) => {
  switch (control) {
    case 'input':
      return <NavbarFormInput name={name} handleBlur={handleBlur} />;
    default:
      return null;
  }
};

export default NavbarFormControl;
