import { NavLink } from 'react-router-dom';
import styles from './Components.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Bookstore CMS</h1>
      <nav>
        <NavLink to="/">BOOKS</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </nav>
      <button type="button" aria-label="text" className={styles.headerBtn}><i className="fa-solid fa-user" /></button>
    </header>
  );
}

export default Header;
