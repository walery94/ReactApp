import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

let App = (props) => {
	return (
		<BrowserRouter>
			<div className="app__wrapper">
				<Header/>
				<div className="app__main-wrapper">
					<Navigation/>
					<Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
					<Route path="/dialogs" render={() => <Dialogs store={props.store} />}/>
					<Route path="/news" render={() => <News/>}/>
					<Route path="/music" render={() => <Music/>}/>
					<Route path="/settings" render={() => <Settings/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
