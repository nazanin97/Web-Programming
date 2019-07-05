import React from 'react';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import mycomment from "./commentTest";
import './css/comment.css';


class Comment extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			// id: this.props.item.id,
			infos: mycomment
		}
	}
	
	render() {
		console.log("1:"+this.props.quality);
		console.log("2:"+this.props.packaging);
		console.log("3:"+this.props.deliveryTime);

		const avg = (this.props.quality + this.props.packaging +this.props.deliveryTime) / 3;
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
                 
                    <p id="name">{this.props.author}</p>
                    <div id="stars3">
						<span>{Math.floor(avg)}</span>
						{orangeStars}
						{blackStars}
					</div>
					
					<p id="description">{this.props.text}</p>
                    <div id="holder">
                        <span id="time">{this.props.create_at}</span>
                        <a id="report">گزارش</a>
                    </div>
					
			</div>
		)
	}
}

export default Comment;