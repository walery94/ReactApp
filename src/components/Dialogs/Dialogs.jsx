import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
	
	let state = props.store.getState().dialogsPage;
	
	let dialogElement = state.dialog.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id}/>
		)
	});
	
	let messageElement = state.message.map((message) => {
		return (
			<Message message={message.message}/>
		)
	});
	
	let newMessageBody = state.newMessageBody;
	
	let newMessageElement = React.createRef();
	
	let onClickButton = () => {
		props.store.dispatch(sendMessageActionCreator());
	};
	
	let onNewMessageChange = (evt) => {
		let body = evt.target.value;
		props.store.dispatch(updateNewMessageTextActionCreator(body));
	};
	
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__wrapper}>
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
			<section className={classes["new-message"]}>
				<div className={classes["new-message__textarea"]}>
					<textarea ref={newMessageElement} value={newMessageBody} onChange={onNewMessageChange} name="dialog" id="dialog" cols="30" rows="3" />
				</div>
				<div className={classes["new-message__button"]}>
					<button onClick={onClickButton}>New message</button>
				</div>
			</section>
		</div>
	)
};

export default Dialogs;
