import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes["main-header"]}>
			<img className={classes["main-header__image"]} src="https://bower.io/img/bower-logo.png" alt="logo"/>
		</header>
	)
};

export default Header;
