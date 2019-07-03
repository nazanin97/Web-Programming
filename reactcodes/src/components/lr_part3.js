import React from "react";
import './css/global.css';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { library } from './@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

library.add(
	faFacebookF,
	faTwitter,
	faInstagram,
	faLinkedinIn,
  	faEnvelope
);

function LR3() {
	return (
		<body>
			<div id="lr_part3">
			
	        <a href="https://www.facebook.com"><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
	        <a href="https://www.twitter.com"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
	        <a href="https://www.instagram.com/?hl=en"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
	        <a href="https://www.linkedin.com/"><i><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
	        <a href="url"><i><FontAwesomeIcon icon={faEnvelope} /></i></a>
        </div>
		</body>
	

	);
}

export default LR3;