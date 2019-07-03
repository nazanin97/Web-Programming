import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Part1 from "./part1";
import Part2 from "./part2";
import Part3 from "./part3";
import Part4 from "./part4";
import Part5 from "./part5";
import Part7 from "./part7";
import Footer from "./footer";

function MainPage() {
	 
	return ( 
        <Router>
            <Part1 />
	    	<Part2 />
	  		<Part3 />
      		<Part4 />
      		<Part5 />
      		<Part7 />
            <Footer />
        </Router>  
	 );
};
export default MainPage;