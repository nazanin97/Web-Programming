import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/restaurants.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ResInfo from "./resInfo";
import ClosedResInfo from "./closedResInfo";
import Footer from "./footer";
import RestaurantDatas from "./restaurantDatas";
import CheckBox from "./checkBox";


function Filter (props){
    return(
        <div id="checkboxAndName">
			<CheckBox item={props.item}/>       
        </div>
    );
}
class AllRestaurants extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: RestaurantDatas
		}
	}
	// componentDidMount() {
	// 	fetch("http://demo2469824.mockable.io/best-restaurants")
	// 	.then(res => res.json())
	// 	.then((data) => {
	// 		this.setState({items: json.restaurants});
	// 		console.log(this.state.items);
	// 	})
	// 	.catch(console.log)
	
	// }
	render() {
		//const resItem = this.state.items.map(item => <ResInfo item={item} />);
		const res1 = [];
		const res2 = [];
		const temp = [];
		for (let index = 0; index < this.state.items.length; index++) {
			var time = new Date().getHours();
			
			if(this.state.items[index].openingTime < time && this.state.items[index].closingTime > time){
				res1.push(<ResInfo item={this.state.items[index]} />);
			}
			else {
				res2.push(<ClosedResInfo item={this.state.items[index]} />);
			}

		    for(let index1 = 0; index1 < this.state.items[index].categories.length; index1++) {
	            let el = this.state.items[index].categories[index1];
	            if (!temp.includes(el))
	      			temp.push(el);
			}            
		}
		const pageFilters = temp.map(item => <Filter item={item}/>);
	return(
		<q>
			<body>
            	<img id="topPic" src={require("./mocks/top.png")}/>
	        	<p id="p1">{this.state.items.length} restaurants service ... area</p>
				<hr/>
	        	<div id="search_container">
		        	<input id="searchField" type="text" placeholder="جست و جوی رستوران در این محدوده"/>
	        	</div>
	        	<div id="container">
					<div id="allRestaurants">
						<div id="restaurants" >
							{res1}
						</div>
						<div id="closedContainer">
							<p id="title">رستوران های بسته</p>
							<div id="closedrestaurants" >
								{res2}
							</div>
						</div>
					</div>
					
		        
					<div id="filters">
						<p id="p2">فیلتر بر اساس انواع غذا</p>
						<hr/>
						<form method="get" action="/">
							<input id="searchField2" type="text" placeholder="جست و جوی دسته بندی غذاها"/>
							<div>
							{pageFilters}
							</div>
						</form>	
					</div>
	        	</div>

        	</body>
			<Footer />
		</q>
		);
	}
}
export default AllRestaurants;