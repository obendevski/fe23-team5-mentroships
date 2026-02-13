import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import DarkModeButton from '../DarkModeButton/DarkModeButton';
import classes from './Navbar.module.css';

const Navbar = () => {
  const { theme } = useContext(DarkModeContext);

  return (
    <nav className={classes.Navbar}>
      <ul className={classes.Navigation}>
        <li>
          <NavLink
            exact={true}
            to="/"
            activeClassName={classes.NavbarActiveItem}
            style={{ color: theme === 'light' ? 'black !important' : 'white !important' }}
          >
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            activeClassName={classes.NavbarActiveItem}
            style={{ color: theme === 'light' ? 'black !important' : 'white !important' }}
          >
            Create
          </NavLink>
        </li>
      </ul>
      <DarkModeButton />
    </nav>
  );
};

export default Navbar;
