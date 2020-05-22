import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let state = {
	_state: {
		profilePage: {
			posts: [
				{message: "Hi!", id: 1},
				{message: "My post", id: 2}
			],
			newPostText: ''
		},
		dialogsPage: {
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
		}
	},
	
	_callSubscriber() {
		console.log("Test");
	},
	
	getState() {
		return this._state;
	},
	
	subscribe (observer) {
		 this._callSubscriber = observer;
	},
	
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state);
	}
};

export default state;
