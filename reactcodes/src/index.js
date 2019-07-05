import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './components/mainPage';
import Login from './components/login';
import Register from './components/register';
import AllRestaurants from './components/allrestaurants';
import Comment from './components/comment';
import Page3 from './components/page3';

import './components/css/global.css';
import './components/css/main.css';

function AppRouter() {
	return (
		<Router>
			<ul className="navigation_bar">
            <a>
                <Link to="/">
                    <img src={require("./components/mocks/logo.png")} id="logo_pic"/>
                </Link>
                
            </a>
            <li id="login">   
                <Link to="/login">ورود</Link>
            </li>
            <li id="register">
                <Link to="/register">عضویت</Link>
            </li>
            <li id="help">
                <a>راهنما</a>
            </li>
            <div></div>
        </ul>
       
			<Route path="/" exact component={Page3} />
			<Route path="/login" exact component={AllRestaurants} />
			<Route path="/register" exact component={Register} />
        	
	    </Router>
	)
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));

