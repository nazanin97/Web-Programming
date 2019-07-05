import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import img_logo from './mocks/logo.png'

class ClosedResInfo extends React.Component {
	constructor(props) {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			linkTo: ""
		}
	}
	handleClick() {
        // fetch("mongodb://localhost:27017/reyhoonDatabase")
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch((error) => console.error(error));
		
	}
	render() {
		this.state.linkTo = '/restaurant/' + this.props.item._id;
		const items = [];
		for (const [index, value] of this.props.item.categories.entries()) {
			items.push(<span style={{fontSize:'12px'}}> {value.name} ● </span>);
		  }
		const orangeStars = [];
		const blackStars = [];
		for (let index = 0; index < Math.floor(this.props.item.averageRate); index++) {
  			orangeStars.push(<i><FontAwesomeIcon icon={faStar} /></i>);
		}
		for (let index = Math.floor(this.props.item.averageRate); index < 5; index++) {
			blackStars.push(<i id="blk"><FontAwesomeIcon icon={faStar} /></i>);
	  	}
		
		
		return (
			<Link to={this.state.linkTo}>
				<div id="res" onClick={this.handleClick}>
				<div id="info">
					<img id="reslogo" src={img_logo}/>
					<h2 id="resname">{this.props.item.name}</h2>
					<div id="stars">
						<span style={{color:'orange'}}>{this.props.item.averageRate}</span>
						{orangeStars}
						{blackStars}
					</div>
			
				<div id="categories">{items}</div>
				<p id="address">{this.props.item.address.addressLine}</p>
				</div>
				<div id="button">
					
				</div>
			
			</div>
			</Link>
	
		)
	}
}

export default ClosedResInfo;