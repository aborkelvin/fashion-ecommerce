import AuthLayout from "../_components/AuthLayout";

export default function LoginPage() {
    return <AuthLayout page="login" />;
}



/* 
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
 */