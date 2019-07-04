import React from 'react';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ResInfo extends React.Component {
	constructor(props) {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		console.log("clicked");
	}
	render() {
		const items = []
		for (const [index, value] of this.props.item.categories.entries()) {
  			items.push(<span> {value} ● </span>)
		}
		return (
			<div id="res">
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
					
				</div>
			
			</div>
		)
	}
}

export default ResInfo;