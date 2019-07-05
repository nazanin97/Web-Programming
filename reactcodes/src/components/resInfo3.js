import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons';
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
  			c.push(<a> {this.state.items.categories[index]} ● </a>)
        }
        
        var order;
        var time = new Date().getHours();
		var circle;
		if(this.state.items.openingTime <= time && this.state.items.closingTime > time){
			order = <span>سفارش می پذیرد</span>;
			circle = <span style={{color:'green'}}><FontAwesomeIcon icon={faCircle} /></span>;
		}
		else {
			order = <span>سفارش نمی پذیرد</span>;
			circle = <span style={{color:'red'}}><FontAwesomeIcon icon={faCircle} /></span>;
		}
		const orangeStars = [];
		const blackStars = [];
		for (let index = 0; index < Math.floor(this.state.items.averageRate); index++) {
  			orangeStars.push(<span><FontAwesomeIcon icon={faStar} /></span>);
		}
		for (let index = Math.floor(this.state.items.averageRate) ; index < 5; index++) {
			blackStars.push(<span id="blk"><FontAwesomeIcon icon={faStar} /></span>);
	  	}
		return (
	
			
			<div id="res">
				<div id="info">
                    <p id="order">{order} {circle}</p>

					<img id="reslogo" src={this.state.items.logo}/>
					<h2 id="resname">{this.state.items.name}</h2>
					<div id="stars">
					<span style={{color:'orange'}}>{this.state.items.averageRate}</span>
						{orangeStars}
						{blackStars}
					</div>
			
				<div id="categories">{c}</div>
				<p id="address">{this.state.items.address}</p>
				</div>
				
			
			</div>
	
		
		
			
		)
	}
}

export default ResInfo3;