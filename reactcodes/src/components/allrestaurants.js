import React, { Component } from 'react'; 
import './css/restaurants.css';
import axios from 'axios/index';
import ResInfo from "./resInfo";
import ClosedResInfo from "./closedResInfo";
import Footer from "./footer";
import queryString from 'query-string'

function Filter (props){
    return(
        <div id="checkboxAndName">
			<CheckBox action={props.action} item={props.item} checked={props.checked}/>       
        </div>
    );
}
class CheckBox extends React.Component{

	constructor(props) {
		super(props)
		this.checked = this.checked.bind(this)
	}

	checked() {
		this.props.action(this.props.item.id)
		this.setState({
		})
	}

    render(){
		if (this.props.checked) {
			return (
				<div onClick={this.checked} >
					<input id="filter" type="checkbox" checked/>
					<label>{this.props.item.name}</label> 
				</div>
			)
		} else {
			console.log('No with ' + this.props.item.name)
			return (
				<div onClick={this.checked} >
					<input id="filter" type="checkbox"/>
					<label>{this.props.item.name}</label> 
				</div>
			)
		}
    }
}

class AllRestaurants extends Component {

	constructor(props) {
		super(props);
		this.state = {}
		const values = queryString.parse(this.props.location.search);
		this.state = {
			city: values.city,
			area: values.area,
			isChecked: {},  
			query_restaurant : "",
			query_category : "",
			restaurants : [],
			categories : {}
		}

		this.onSearchCategoryChange = this.onSearchCategoryChange.bind(this);
		this.onSearchRestaurantChange = this.onSearchRestaurantChange.bind(this);
		this.handleChecked = this.handleChecked.bind(this);

	}

	componentWillMount() {
		axios.get("http://localhost:3001/restaurants/?city="+this.state.city+"&area="+this.state.area)
            .then((response) => {
				const restaurants = response.data;
                let categories = {};
                restaurants.forEach(rest => {
                    rest.categories.forEach(category => {
                        if (category._id in categories) {
                            categories[category._id].count++;
                        } else {
                            categories[category._id] = {};
                            categories[category._id].count = 1;
                            categories[category._id].id = category._id;
                            categories[category._id].name = category.name;
                            categories[category._id].checked = false;
                        }
                    })
                });
                this.setState({
                    restaurants : restaurants,
                    categories : categories
                });
            });
	}

	handleChecked (props1) {
		this.setState(prev => {
			prev.categories[props1].checked = !(prev.categories[props1].checked)
			return prev
		});
	  }

	onSearchRestaurantChange(event){
        this.setState({query_restaurant: event.target.value});
    }

    onSearchCategoryChange(event){
		console.log('Here with: ' + event.target.value)
        this.setState({query_category: event.target.value});
	}
	
	render() {

		if (this.state.restaurants.length == 0) {
			return <br/>
		}

		let checkedCategories = []; // sorted array of { id , name , count }
        let unCheckedCategories = []; // sorted array of { id , name , count }

		Object.keys(this.state.categories).forEach( categoryKey => {
            let category = this.state.categories[categoryKey]
            if (category.checked) {
                checkedCategories.push(category);
            } else if (category.name.includes(this.state.query_category)) {
                unCheckedCategories.push(category);
            }
        });
        const compare = (a, b) => b.count - a.count;
        checkedCategories.sort(compare);
		unCheckedCategories.sort(compare);
		
		const res1 = [];
		const res2 = [];
		for (let index = 0; index < this.state.restaurants.length; index++) {
			if (this.state.restaurants[index].name.includes(this.state.query_restaurant)) {
				let categoryIncluded = false;
                checkedCategories.forEach(checkedCat => {
                    this.state.restaurants[index].categories.forEach(restCat => {
                        if (checkedCat.name === restCat.name) {
                            categoryIncluded = true;
                        }
                    });
				});
				categoryIncluded = categoryIncluded || checkedCategories.length === 0
				if (!categoryIncluded) {
					continue;
				}
				var time = new Date().getHours();
				if (this.state.restaurants[index].openingTime < time && this.state.restaurants[index].closingTime > time){
					res1.push(<ResInfo item={this.state.restaurants[index]} />);
				}
				else {
					res2.push(<ClosedResInfo item={this.state.restaurants[index]} />);
				}	
			}    
		}

		const a = checkedCategories.map(cat => 
			<Filter action={this.handleChecked} item={cat} checked={true} key={cat.id}></Filter>
		)
		const b = unCheckedCategories.map(cat => 
			<Filter action={this.handleChecked} item={cat} checked={false} key={cat.id}></Filter>
		)

	return(
		<div>
			<body>
            	<img id="topPic" src={require("./mocks/top.png")}/>
	        	<p id="p1">{this.state.restaurants.length} restaurants service ... area</p>
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
							<input onChange={this.onSearchCategoryChange} id="searchField2" type="text" placeholder="جست و جوی دسته بندی غذاها"/>
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