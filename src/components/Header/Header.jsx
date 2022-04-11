import { NavLink } from 'react-router-dom';
import Container from '../UI/Container';
import css from './Header.module.css';
import Button from './../UI/Button/Button';
import { useContext } from 'react';
import AuthContext from '../../store/authContext';

function Header() {
  const authCtxValue = useContext(AuthContext);
  console.log('authCtxValue ===', authCtxValue);

  return (
    <header>
      <Container className={css.header}>
        <h2 className={css.logo}>🐶 PETS</h2>
        <nav>
          <NavLink className={css.navLink} to='/'>
            Pets
          </NavLink>
          <NavLink className={css.navLink} to='/medication'>
            Medication
          </NavLink>
          {!authCtxValue.isLoggedIn && (
            <NavLink className={css.navLink} to='/login'>
              Login
            </NavLink>
          )}
          {!authCtxValue.isLoggedIn && (
            <NavLink className={css.navLink} to='/register'>
              Register
            </NavLink>
          )}
          {authCtxValue.isLoggedIn && <Button>Logout</Button>}
        </nav>
      </Container>
    </header>
  );
}
// sukurti header
// prideti navlinkus
// prideti module.css stiliu
export default Header;
