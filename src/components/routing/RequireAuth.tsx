import { Navigate, useLocation } from 'react-router-dom';

interface IRequireAuthProps {
  children: React.ReactElement;
}
const RequireAuth: React.FC<IRequireAuthProps> = ({
  children,
}: IRequireAuthProps) => {
  const auth = false; // TODO
  const location = useLocation();

  if (!auth) {
    return <Navigate to='/auth/login' state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
