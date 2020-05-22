import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Banner from "./Banner/Banner";

const Profile = (props) => {
	
	return (
		<main className={classes.profile}>
			<Banner />
			<MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
		</main>
	)
};

export default Profile;
