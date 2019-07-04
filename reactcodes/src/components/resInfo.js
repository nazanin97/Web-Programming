import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ResInfo extends React.Component {
	constructor(props) {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			// id: this.props.item.id,
			character: {}
		}
	}
	handleClick() {
		return <Route to="/login" />;
		fetch("http://demo2469824.mockable.io/best-restaurants")
        .then(response => response.json())
        .then(data => {
			this.setState({
				character: data
			})
		})
		.catch((error) => console.error(error));
		
	}
	render() {
		const items = []
		for (const [index, value] of this.props.item.categories.entries()) {
  			items.push(<span> {value} ● </span>)
		}
		return (
	
				<a href='/login' style={{textDecoration:'none', outlineStyle:'none'}}>
				<div id="res" onClick={this.handleClick}>
				<div id="info">
					<img id="reslogo" src={this.props.item.logo}/>
					<h2 id="resname">{this.props.item.name}</h2>
					<div id="stars">
						<i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
					</div>
			
				<div id="categories">{items}</div>
				<p id="address">{this.props.item.address}</p>
				</div>
				<div id="button">
					<button>شروع سفارش</button>
				</div>
			
			</div>
				</a>
		
		
			
		)
	}
}

export default ResInfo;