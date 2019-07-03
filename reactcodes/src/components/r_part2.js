import React from "react";
import './css/global.css';
import './css/register.css';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome'
import { library } from './@fortawesome/fontawesome-svg-core';
import {
	faUser,
	faKey,
	faPhone,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons';
library.add(
	faUser,
	faKey,
	faPhone,
	faEnvelope
);

function R2() {
	return (

<div id="lr_part2">
	<p>ثبت نام</p>
	<p>از اینکه داری به جمع ریحونیا می پیوندی خیلی خوشحالیم</p>
	<div id="container">
		<div className="row">
			<input className="box" type="text" name="username" placeholder="نام و نام خانوادگی"/>
			<i><FontAwesomeIcon icon={faUser} /></i>
			
		</div>
		<div>
			<input className="box" type="text" name="username" placeholder="شماره همراه"/>
			<i><FontAwesomeIcon icon={faPhone} /></i>
			
		</div>
		<div>
			<input className="box" type="text" name="username" placeholder="ایمیل"/>
			<i><FontAwesomeIcon icon={faEnvelope} /></i>
			
		</div>
		<div className="row">
			<input className="box" type="text" name="username" placeholder="رمز عبور"/>
			<i><FontAwesomeIcon icon={faKey} /></i>
			
		</div>
		<div className="row">
			<input className="box" type="text" name="username" placeholder="تکرار رمز عبور"/>
			<i><FontAwesomeIcon icon={faKey} /></i>
			
		</div>
	</div>

	<input id="button" type="button" value="ثبت نام"/>
</div>


	
	);
}

export default R2;