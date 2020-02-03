import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return <nav className={s.Navbar}>
	     <ul className={s.navigation}>
		     <li className={s.navigation__item}>
			    <NavLink to="/profile" className={s.item} activeClassName={s.active}> Profile </NavLink>
			 </li>
			  
			<li className={s.navigation__item}>
			    <NavLink to="/dialogs" className={s.item} activeClassName={s.active}> Message </NavLink>
			 </li>

			 <li className={s.navigation__item}>
			    <NavLink to="/news" className={s.item} activeClassName={s.active}> News </NavLink>
			 </li>
			 <li className={s.navigation__item}>
			    <NavLink to="/music" className={s.item} activeClassName={s.active}> Music </NavLink>
			 </li>
			 <li className={s.navigation__item}>
			    <NavLink to="users" className={s.item} activeClassName={s.active}> Users </NavLink>
			 </li>
		 </ul>
	   </nav>
};

export default Navbar;