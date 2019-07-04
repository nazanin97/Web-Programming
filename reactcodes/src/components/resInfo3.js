import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import testInfo from "./testInfo";
import './css/page3.css';

class ResInfo3 extends React.Component {
	constructor(props) {
		super();
		
		this.state = {
			// id: this.props.item.id,
			items: testInfo
		}
	}
	
	render() {
		const c = []
		for (let index = 0; index < this.state.items.categories.length; index++) {
  			c.push(<span> {this.state.items.categories[index]} ● </span>)
        }
        
        var order;
        var time = new Date().getHours();
			
		if(this.state.items.openingTime < time && this.state.items.closingTime > time){
			order = <p>سفارش می پذیرد</p>;
		}
		else {
			order = <p>سفارش نمی پذیرد</p>;
		}    
		return (
	
			
			<div id="res">
				<div id="info">
                    <p id="order">{order}</p>
					<img id="reslogo" src={this.state.items.logo}/>
					<h2 id="resname">{this.state.items.name}</h2>
					<div id="stars">
						<i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
					</div>
			
				<div id="categories">{c}</div>
				<p id="address">{this.state.items.address}</p>
				</div>
				
			
			</div>
	
		
		
			
		)
	}
}

export default ResInfo3;