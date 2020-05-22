import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
	return (
		<li className={classes["message__item"]}>{props.message}</li>
	)
};

export default Message;
