import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to="/">Home Page | </Link>
      <Link to="/login">Login Page | </Link>
      <Link to="/registration">Registration Page </Link>
    </div>
  );
};

