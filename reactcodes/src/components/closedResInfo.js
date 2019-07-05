import React from 'react';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ClosedResInfo extends React.Component {
	constructor(props) {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			
		}
	}
	handleClick() {
        fetch("http://demo2469824.mockable.io/best-restaurants")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error(error));
		
	}
	render() {
		const items = [];
		for (const [index, value] of this.props.item.categories.entries()) {
			items.push(<span> {value} ● </span>);
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
			<div id="res" onClick={this.handleClick}>
				<div id="info">
					<img id="reslogo" src={this.props.item.logo}/>
					<h2 id="resname">{this.props.item.name}</h2>
					<div id="stars">
						<span style={{color:'orange'}}>{this.props.item.averageRate}</span>
						{orangeStars}
						{blackStars}
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

export default ClosedResInfo;