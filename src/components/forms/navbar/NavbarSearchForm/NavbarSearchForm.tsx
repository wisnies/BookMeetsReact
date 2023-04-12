import { useFormik } from 'formik';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {
  NavbarSearchFormContainer,
  NavbarSearchFormButton,
  StyledNavbarFormGroup,
  StyledNavbarFormInput,
  NavbarSearchFormInnerContainer,
} from './NavbarSearchForm.style';
import { useSearchContext } from '../../../../context/searchContext';

export interface INavbarSearchFormValues {
  searchPhrase: string;
}

interface INavbarSearchFormProps {
  handleSubmit: (values: INavbarSearchFormValues) => void;
  isOpen: boolean;
  isLoading: boolean;
}

const NavbarSearchFormForm: React.FC<INavbarSearchFormProps> = ({
  handleSubmit,
  isOpen,
  isLoading,
}: INavbarSearchFormProps) => {
  const navigate = useNavigate();
  const { setNavbarSearchPhrase } = useSearchContext();

  const initialValues: INavbarSearchFormValues = {
    searchPhrase: '',
  };

  const validationSchema = Yup.object({
    searchPhrase: Yup.string().min(3).required(),
  });

  const onSubmit = (values: INavbarSearchFormValues) => {
    handleSubmit(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const handleSearch = () => {
    if (formik.isValid) {
      navigate(`/search?phrase=${formik.values.searchPhrase}`);
    } else {
      navigate(`/search`);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    setNavbarSearchPhrase(e.target.value);

    // add time interval
    if (formik.isValid && !isLoading) {
      handleSubmit(formik.values);
    }
  };

  return (
    <NavbarSearchFormContainer isOpen={isOpen}>
      <NavbarSearchFormInnerContainer onSubmit={formik.handleSubmit}>
        <StyledNavbarFormGroup>
          <StyledNavbarFormInput
            type='text'
            name='searchPhrase'
            onChange={handleChange}
            value={formik.values.searchPhrase}
            placeholder='Search for books...'
          />
        </StyledNavbarFormGroup>
        <NavbarSearchFormButton
          type='button'
          disabled={isLoading}
          onClick={handleSearch}
        >
          <FaSearch />
        </NavbarSearchFormButton>
      </NavbarSearchFormInnerContainer>
    </NavbarSearchFormContainer>
  );
};

export default NavbarSearchFormForm;
