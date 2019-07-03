import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import L2 from './l_part2';
import LR3 from './lr_part3';
import LR4 from './lr_part4';


function Login() {
	return (
		<Router>
		<L2 />
		<LR3 />
		<LR4 />
		</Router>
		

	);
}

export default Login;