import { Formik, Form, FormikProps } from 'formik';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {
  NavbarSearchFormContainer,
  NavbarSearchFormButton,
} from './NavbarSearchForm.style';
import NavbarFormControl from '../elements/NavbarFormControl';

export interface INavbarSearchFormValues {
  searchPhrase: string;
}

interface INavbarSearchFormProps {
  handleSubmit: (values: INavbarSearchFormValues) => void;
  isOpen: boolean;
}

const NavbarSearchFormForm: React.FC<INavbarSearchFormProps> = ({
  handleSubmit,
  isOpen,
}: INavbarSearchFormProps) => {
  const navigate = useNavigate();

  const initialValues: INavbarSearchFormValues = {
    searchPhrase: '',
  };

  const validationSchema = Yup.object({
    searchPhrase: Yup.string().min(3).required(),
  });

  const onSubmit = (values: INavbarSearchFormValues) => {
    handleSubmit(values);
  };

  const handleBlur = (formik: FormikProps<INavbarSearchFormValues>) => {
    if (formik.isValid) {
      handleSubmit(formik.values);
    }
  };
  const handleSearch = ({
    isValid,
    values,
  }: FormikProps<INavbarSearchFormValues>) => {
    if (isValid) {
      navigate(`/search?phrase=${values.searchPhrase}`);
    } else {
      navigate(`/search`);
    }
  };

  return (
    <NavbarSearchFormContainer isOpen={isOpen}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <NavbarFormControl
              control='input'
              name='searchPhrase'
              handleBlur={() => handleBlur(formik)}
            />
            <NavbarSearchFormButton
              type='button'
              onClick={() => handleSearch(formik)}
            >
              <FaSearch />
            </NavbarSearchFormButton>
          </Form>
        )}
      </Formik>
    </NavbarSearchFormContainer>
  );
};

export default NavbarSearchFormForm;
