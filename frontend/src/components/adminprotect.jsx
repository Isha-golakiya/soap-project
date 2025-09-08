import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotAuthorized from './noaccess'; 


const ProtectedAdminRoute = () => {
  const user = useSelector(state => state.user.user);

  if (!user) return <Link to="/" replace />;
  if (user.role !== 'admin') return <NotAuthorized />; 

  return <Outlet />;
};

export default ProtectedAdminRoute;
