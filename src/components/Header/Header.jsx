import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <h2 className={css.logo}>🐶 PETS</h2>
      <nav>
        <NavLink className={css.navLink} to='/'>
          Pets
        </NavLink>
        <NavLink className={css.navLink} to='/medication'>
          Medication
        </NavLink>
      </nav>
    </header>
  );
}
// sukurti header
// prideti navlinkus
// prideti module.css stiliu
export default Header;
