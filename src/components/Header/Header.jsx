import { NavLink } from 'react-router-dom';
import Container from '../UI/Container';
import css from './Header.module.css';
import Button from './../UI/Button/Button';

function Header() {
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
          <NavLink className={css.navLink} to='/login'>
            Login
          </NavLink>
          <NavLink className={css.navLink} to='/register'>
            Register
          </NavLink>
          <Button>Logout</Button>
        </nav>
      </Container>
    </header>
  );
}
// sukurti header
// prideti navlinkus
// prideti module.css stiliu
export default Header;
