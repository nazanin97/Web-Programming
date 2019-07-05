import React from 'react';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import mycomment from "./commentTest";
import './css/comment.css';


class Comment extends React.Component {
	constructor(props) {
		super();
		
		this.state = {
			// id: this.props.item.id,
			infos: mycomment
		}
	}
	
	render() {
		console.log("1:"+this.state.infos.quality);
		console.log("2:"+this.state.infos.packaging);
		console.log("3:"+this.state.infos.deliveryTime);

		const avg = (this.state.infos.quality + this.state.infos.packaging +this.state.infos.deliveryTime) / 3;
        const orangeStars = [];
		const blackStars = [];
		for (let index = 0; index < Math.floor(avg); index++) {
  			orangeStars.push(<span><FontAwesomeIcon icon={faStar} /></span>);
		}
		for (let index = Math.floor(avg) ; index < 5; index++) {
			blackStars.push(<span style={{color: 'black'}}><FontAwesomeIcon icon={faStar} /></span>);
	  	}
		return (	
			<div id="commentHolder">
                 
                    <p id="name">اکبر</p>
                    <div id="stars3">
						<span>{Math.floor(avg)}</span>
						{orangeStars}
						{blackStars}
					</div>
					
					<p id="description">عالی بود</p>
                    <div id="holder">
                        <span id="time">time</span>
                        <a id="report">گزارش</a>
                    </div>
					
			</div>
		)
	}
}

export default Comment;