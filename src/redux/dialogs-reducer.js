const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialog: [
		{name: "Lera", id: 1},
		{name: "Nikita", id: 2},
		{name: "Vasilina", id: 3},
		{name: "Olga", id: 4},
		{name: "Diana", id: 5}
	],
	message: [
		{message: "Hi", id: 1},
		{message: "How are you?", id: 2},
		{message: "Hello", id: 3},
		{message: "My name is Olga", id: 4},
		{message: "Yo", id: 5}
	],
	newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageText;
			state.newMessageText = '';
			state.message.push({id: 6, message: body});
			return state;
		default:
			return state;
	}
};

export const sendMessageActionCreator = () => {
	return {
		type: SEND_MESSAGE
	}
};

export  const  updateNewMessageTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		body: text
	}
};

export default dialogsReducer;
