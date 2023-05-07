import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <div className="link">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="link">
        <NavLink to="/about-us">About us</NavLink>
      </div>
    </>
  );
};
