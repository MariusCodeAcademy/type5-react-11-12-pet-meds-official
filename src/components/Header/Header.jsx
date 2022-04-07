import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h2>🐶 PETS</h2>
      <nav>
        <NavLink to='/'>Pets</NavLink>
        <NavLink to='/medication'>Medication</NavLink>
      </nav>
    </div>
  );
}
// sukurti header
// prideti navlinkus
// prideti module.css stiliu
export default Header;
