import React from 'react';
import classes from './Banner.module.css'

const Banner = () => {
	return (
			<section className={classes.banner}>
				<img className={classes.banner__image} src="https://ourplnt.com/wp-content/uploads/2018/12/West-Coast-Southern-Africa-2018-09-29.jpg" alt="image"/>
			</section>
	)
};

export default Banner;
