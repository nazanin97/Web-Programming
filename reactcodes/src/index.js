import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './components/mainPage';
import Login from './components/login';
import Register from './components/register';
import AllRestaurants from './components/allrestaurants';
import Comment from './components/comment';
import Page3 from './components/page3';
import AreaSelectionBar from './components/search1';

import './components/css/global.css';
import './components/css/main.css';
import Nazanin from './components/nazanin_axios';

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
                <Link to="/restaurants">ورود</Link>
            </li>
            <li id="register">
                <Link to="/register">عضویت</Link>
            </li>
            <li id="help">
                <a>راهنما</a>
            </li>
            <div></div>
        </ul>
       
			<div>
                <Route path="/" exact component={MainPage} />
                <Route path="/restaurants" exact component={AllRestaurants} />
                <Route path="/register" exact component={Register} />
                <Route path="/restaurant/:id" exact component={Page3} />
                <Route path="/test/:id" exact component={Nazanin} />
            </div>
        	
	    </Router>
	)
};

ReactDOM.render(<AppRouter />, document.getElementById('root'));

