import NavbarSearchForm, { INavbarSearchFormValues } from './NavbarSearchForm';

interface IConnectedNavbarSearchFormProps {
  isOpen: boolean;
}
const ConnectedNavbarSearchForm: React.FC<IConnectedNavbarSearchFormProps> = ({
  isOpen,
}: IConnectedNavbarSearchFormProps) => {
  const handleSubmit = (values: INavbarSearchFormValues) => {
    console.log(values);
  };

  return <NavbarSearchForm handleSubmit={handleSubmit} isOpen={isOpen} />;
};

export default ConnectedNavbarSearchForm;
