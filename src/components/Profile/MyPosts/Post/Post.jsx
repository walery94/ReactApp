import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
	return (
		<section className={classes.post}>
			<img src="https://cs16planet.ru/steam-avatars/images/avatar1833.jpg"/>
			<span>{props.message}</span>
		</section>
	)
};

export default Post;
