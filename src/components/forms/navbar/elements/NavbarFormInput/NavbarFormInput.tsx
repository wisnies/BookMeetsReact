import {
  StyledNavbarFormGroup,
  StyledNavbarFormInput,
} from './NavbarFormInput.style';

interface INavbarFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  handleBlur: () => void;
}

const NavbarFormInput: React.FC<INavbarFormInputProps> = ({
  name,
  handleBlur,
  ...rest
}: INavbarFormInputProps) => {
  return (
    <StyledNavbarFormGroup>
      <StyledNavbarFormInput
        id={name}
        name={name}
        placeholder='Search for books, authors, users...'
        onBlur={handleBlur}
        {...rest}
      />
    </StyledNavbarFormGroup>
  );
};

export default NavbarFormInput;
