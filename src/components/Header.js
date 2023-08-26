import { NavLink } from 'react-router-dom';
import styles from './Components.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Bookstore CMS</h1>
      <nav className={styles.navLinks}>
        <NavLink to="/">BOOKS</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </nav>
      <div />
      <div className={styles.userBtn}>
        <button type="button" aria-label="text" className={styles.headerBtn}><i className="fa-solid fa-user" /></button>
      </div>
    </header>
  );
}

export default Header;
