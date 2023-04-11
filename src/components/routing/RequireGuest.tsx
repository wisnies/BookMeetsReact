import { Navigate, useLocation } from 'react-router-dom';

interface IRequireGuestProps {
  children: React.ReactElement;
}
const RequireGuest: React.FC<IRequireGuestProps> = ({
  children,
}: IRequireGuestProps) => {
  const auth = false; // TODO
  const location = useLocation();

  if (auth) {
    return <Navigate to='/' state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireGuest;
