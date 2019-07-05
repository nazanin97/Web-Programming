import React, { Component } from 'react'; 
import './css/restaurants.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ResInfo from "./resInfo";
import ClosedResInfo from "./closedResInfo";
import Footer from "./footer";
import RestaurantDatas from "./restaurantDatas";

// import CheckBox from "./checkBox";
// import filter from './Filtering';
// import InputFilter from './inputFilter';


function Filter (props){
    return(
        <div id="checkboxAndName">
			<CheckBox myid={props.myid} action={props.action} item={props.item}/>       
        </div>
    );
}
class CheckBox extends React.Component{
	constructor(props){
		super();
		this.state = {
			myid: props.myid,
			isChecked: false
		}
		this.handleChecked = this.handleChecked.bind(this);
	}
	handleChecked(){
		this.setState({
			isChecked: !this.state.isChecked
		});
	}
    render(){
      return (
	  	<div>
         	<input id="filter" type="checkbox" onChange={this.handleChecked} onClick={() => this.props.action(this.state.myid)}/>
			 <label>{this.props.item}</label> 
      	</div>
	  )
    }
}
class AllRestaurants extends Component {

	// (un)selectedFilter, filterMap
	constructor(props) {
		super(props);
		this.state = {
			isChecked: {},  
			items: RestaurantDatas,
			pageFilters: {},
			query_restaurant : "",
			query_category : "",
			restaurants : [],
			categories : {}
		}
		this.setFilters = this.setFilters.bind(this);

		this.onSearchCategoryChange = this.onSearchCategoryChange.bind(this);
		this.onSearchRestaurantChange = this.onSearchRestaurantChange.bind(this);
		this.handleChecked = this.handleChecked.bind(this);
		this.setFilters();
	}
	handleChecked (props1) {
		this.setState(prev => {
			prev.isChecked[props1] = !prev.isChecked[props1]
			return prev
		});
	  }
	setFilters() {
		const temp = [];
		for (let index = 0; index < this.state.items.length; index++) {			
		    for(let index1 = 0; index1 < this.state.items[index].categories.length; index1++) {
	            let el = this.state.items[index].categories[index1];
	            if (!temp.includes(el))
	      			temp.push(el);
			}            
		}
		let checked = {}
		let filters = {}
		for (let index = 0; index < temp.length; index++) {
			checked['i'+index] = false;
			filters['i'+index] = <Filter myid={'i'+index} action={this.handleChecked} item={temp[index]} />
		}
		this.state = {
			isChecked: checked,  
			items: RestaurantDatas,
			pageFilters: filters,
			query_restaurant : "",
			query_category : "",
			restaurants : [],
			categories : {}	
		}
	}
	onSearchRestaurantChange(event){
        this.setState({query_restaurant: event.target.value});
    }

    onSearchCategoryChange(event){
        this.setState({query_category: event.target.value});
	}
	render() {
		
		const res1 = [];
		const res2 = [];
		for (let index = 0; index < this.state.items.length; index++) {
			var time = new Date().getHours();
			
			if(this.state.items[index].openingTime < time && this.state.items[index].closingTime > time){
				res1.push(<ResInfo item={this.state.items[index]} />);
			}
			else {
				res2.push(<ClosedResInfo item={this.state.items[index]} />);
			}    
		}
		const a = [];
		const b = [];
		Object.keys(this.state.isChecked).forEach(key => {
			if (this.state.isChecked[key] === true) {
				a.push(this.state.pageFilters[key]);
			} else {
				b.push(this.state.pageFilters[key]);
			}
		});

	return(
		<div>
			<body>
            	<img id="topPic" src={require("./mocks/top.png")}/>
	        	<p id="p1">{this.state.items.length} restaurants service ... area</p>
				<hr/>
	        	<div id="search_container">
		        	<input onChange={this.onSearchRestaurantChange} id="searchField" type="text" placeholder="جست و جوی رستوران در این محدوده"/>
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
							<div id="selectedFilters">
								{a}
							</div>
							<hr/>
							<div id="unselectedFilters">
								{b}
							</div>
						</form>	
					</div>
	        	</div>

				</body>
			<Footer />
		</div>
		);
	}
}
export default AllRestaurants;