import React from "react";

import './css/restaurants.css';

import ResInfo from "./resInfo";
import Filter from "./filters";
import Footer from "./footer";

function AllRestaurants() {
	 
	return (
		<q>
			<body>
            <img id="topPic" src={require("./mocks/top.png")}/>
	        <p id="p1">number of restaurants goes here</p>
			<hr/>
	        <div id="search_container">
		        <input id="searchField" type="text" placeholder="جست و جوی رستوران در این محدوده"/>
	        </div>
	        <div id="container">
				<div id="restaurants">
					<ResInfo />
				</div>
		        
				<div id="filters">
					<p id="p2">فیلتر بر اساس انواع غذا</p>
					<hr/>
					<form method="get" action="/">
						<input id="searchField2" type="text" placeholder="جست و جوی دسته بندی غذاها"/>
						<Filter />
					</form>
					
					
				</div>
	        </div>    
        </body>
		<Footer />
		</q>

	 );
};
export default AllRestaurants;