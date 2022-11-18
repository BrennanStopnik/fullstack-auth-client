import { Link } from 'react-router-dom';
import { useAuth } from "../Hooks/Auth"

export const NavBar = () => {

  const auth = useAuth();

  return (
    <div className='navbar'>
      <h3>{auth.userEmail && `Current user: ${auth.userEmail}`}</h3>
      <Link to="/">Home Page | </Link>
      <Link to="/login">Login Page | </Link>
      <Link to="/registration">Registration Page </Link>
      <button onClick={() => {auth.logout()}}>Logout</button>
    </div>
  );
};

