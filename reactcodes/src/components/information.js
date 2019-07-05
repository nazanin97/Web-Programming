import React from 'react';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './css/inf.css';


class Information extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render(){
		
		
		return (
			<div id="infoSection">
                <h2>اطلاعات رستوران</h2>
                <hr/>
                <h3>{this.props.name}</h3>
				<h4>{this.props.address} <FontAwesomeIcon icon={faMapMarkerAlt} /></h4>
                <h4>ساعت سفارش گیری  <FontAwesomeIcon icon={faClock} /></h4>
                
				<p id="p1">همه روزه</p>
                <p id="time">{this.props.open} to {this.props.close}</p>
				<hr/>
			</div>
			
		)
	}
	

}
export default Information;

