import React from 'react';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './css/comment.css';


class Comment extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			// id: this.props.item.id,
			// infos: mycomment
		}
	}
	
	render() {
		

		const avg = (this.props.item.quality + this.props.item.packaging +this.props.item.deliveryTime) / 3;
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
                 
                    <p id="name">{this.props.item.author}</p>
                    <div id="stars3">
						<span>{Math.floor(avg)}</span>
						{orangeStars}
						{blackStars}
					</div>
					
					<p id="description">{this.props.item.text}</p>
                    <div id="holder">
                        <span id="time">{this.props.item.create_at}</span>
                        <a id="report">گزارش</a>
                    </div>
					
			</div>
		)
	}
}

export default Comment;