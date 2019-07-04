import React from "react";
import './css/global.css';
import './css/login.css';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome'
import { library } from './@fortawesome/fontawesome-svg-core';

import {
	faUser,
	faKey
} from '@fortawesome/free-solid-svg-icons';
library.add(
	faUser,
	faKey
);

function L2() {
	return (
		<q>
			<div id="lr_part2">
			<p>ورود</p>
			<p>ایمیل و یا شماره تلفن خود را وارد کنید</p>
			<div className="input-container">
				<input className="box" type="text" name="username" placeholder="ایمیل یا شماره همراه"/>
				<i><FontAwesomeIcon icon={faUser} /></i>
			</div>
			<div className="input-container">
				<input className="box" type="password" name="pass" placeholder="رمز ورود"/>
				<i><FontAwesomeIcon icon={faKey} /></i>
				
			</div>
		
			<a href="">رمز عبور خود را فراموش کردم</a>
			<input id="button" type="button" value="ورود"/>
		</div>
		</q>
	
	
	);
}

export default L2;