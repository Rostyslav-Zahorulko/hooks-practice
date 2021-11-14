import { NavLink } from 'react-router-dom';

import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <NavLink
            exact
            className={s.link}
            activeClassName={s.activeLink}
            to="/"
          >
            Main
          </NavLink>
        </li>

        <li className={s.listItem}>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to="/counter"
          >
            Counter
          </NavLink>
        </li>

        <li className={s.listItem}>
          <NavLink className={s.link} activeClassName={s.activeLink} to="/form">
            Form
          </NavLink>
        </li>

        <li className={s.listItem}>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to="/clock"
          >
            Clock
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
