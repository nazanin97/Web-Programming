import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import R2 from './r_part2';
import LR3 from './lr_part3';
import LR4 from './lr_part4';

function Register() {
	return (
		<Router>
			<R2 />
			<LR3 />
			<LR4 />
		</Router>
	);
}

export default Register;