import React from 'react';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './css/inf.css';


class Information extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
	}
	render(){
		
		
		return (
			<div id="infoSection">
                <h2>اطلاعات رستوران</h2>
                <hr/>
                <h3>res name</h3>
				<h4>آدرس  <FontAwesomeIcon icon={faMapMarkerAlt} /></h4>
                <h4>ساعت سفارش گیری  <FontAwesomeIcon icon={faClock} /></h4>
                <hr/>
				<p id="p1">همه روزه</p>
                <p id="time">زمان</p>
				
			</div>
			
		)
	}
	

}
export default Information;

