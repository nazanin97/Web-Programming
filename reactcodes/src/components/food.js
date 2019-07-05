import React from 'react';
import './css/food.css';

class Food extends React.Component {
      constructor(props){
            super(props);
            
      }
	render(){
		return (
            <a id="foodComponent">
                <div id="container">
				    <p id="price">{this.props.item.price}</p>
                    <p id="title">{this.props.item.name}</p>
                    <p id="description">{this.props.item.description}</p>
                    <button>+ افزودن به سبد خرید</button>
			    </div>
            </a>	
		)
	}
}
export default Food;

