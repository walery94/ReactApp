import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
	return (
		<nav className={classes["main-nav"]}>
			<ul className={classes["main-nav__list"]}>
				<li className={classes["main-nav__item"]}>
					<NavLink className={classes["main-nav__link"]} to="/profile" activeClassName={classes["main-nav__active"]}>Profile</NavLink>
				</li>
				<li className={classes["main-nav__item"]}>
					<NavLink className={classes["main-nav__link"]} to="/dialogs" activeClassName={classes["main-nav__active"]}>Messages</NavLink>
				</li>
				<li className={classes["main-nav__item"]}>
					<NavLink className={classes["main-nav__link"]} to="/news" activeClassName={classes["main-nav__active"]}>News</NavLink>
				</li>
				<li className={classes["main-nav__item"]}>
					<NavLink className={classes["main-nav__link"]} to="/music" activeClassName={classes["main-nav__active"]}>Music</NavLink>
				</li>
				<li className={classes["main-nav__item"]}>
					<NavLink className={classes["main-nav__link"]} to="/settings" activeClassName={classes["main-nav__active"]}>Settings</NavLink>
				</li>
			</ul>
		</nav>
	)
};

export default Navigation;
