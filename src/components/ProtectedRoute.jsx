import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  let user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <Navigate to={'/register'} />;
  }

  return children;
};

export default ProtectedRoute;
