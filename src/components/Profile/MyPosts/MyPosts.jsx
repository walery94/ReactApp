import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
	
	let postElement = props.posts.map( (post) => {
		return (
			<Post message={post.message} />
		)
	});
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};
	
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
};
	
	return (
		<section className={classes.posts}>
			<div className={classes.post__textarea}>
				<textarea onChange={onPostChange} ref={newPostElement} name="message" id="message" cols="30" rows="3" value={props.newPostText} />
			</div>
			<div className={classes.post__button}>
				<button onClick={ addPost }>Add post</button>
			</div>
			{postElement}
		</section>
	)
};

export default MyPosts;
