import React from 'react';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ResInfo() {
	return (
		
			<div id="res">
				<div id="info">
					<img id="reslogo" src={require("./mocks/i3.png")}/>
					<h2 id="resname">باگت</h2>
					<div id="stars">
                        <i><FontAwesomeIcon icon={faStar} /></i>
						<i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
                        <i><FontAwesomeIcon icon={faStar} /></i>
					</div>
				
					<div id="categories">categories</div>
					<p id="address">address</p>
				</div>
				<div id="button">
					<button>شروع سفارش</button>
				</div>
				
			</div>
	
	);
}

export default ResInfo;