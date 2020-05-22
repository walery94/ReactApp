import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import Message from "../Message/Message";

const DialogItem = (props) => {
	
	let path = "/dialogs/" + props.id;
	
	return (
		<li className={classes["user__item"]}>
			<NavLink to={path}>{props.name}</NavLink>
		</li>
	)
};

const DialogItems = () => {
	
	let dialogData = [
		{name: "Lera", id: 1},
		{name: "Nikita", id: 2},
		{name: "Vasilina", id: 3},
		{name: "Olga", id: 4},
		{name: "Diana", id: 5}
	];
	
	let messageData = [
		{message: "Hi", id: 1},
		{message: "How are you?", id: 2},
		{message: "Hello", id: 3},
		{message: "My name is Olga", id: 4},
		{message: "Yo", id: 5}
	];
	
	let dialogElement = dialogData.map( (dialog) => {
		return (
			<DialogItems name={dialog.name} id={dialog.id} />
		)
	});
	
	let messageElement = messageData.map( (message) => {
		return (
			<Message message={message.message} />
		)
	});
	
	return (
		<div className={classes.dialogs}>
		<section className={classes.user}>
			<ul className={classes["user__list"]}>
				{dialogElement}
			</ul>
		</section>
			<section className={classes.message}>
				<ul className={classes["message__list"]}>
					{messageElement}
				</ul>
			</section>
		</div>
	)
};

export default DialogItem;
