import React from 'react';
import './css/food.css';

class Food extends React.Component {
	render(){
		return (
            <div id="foodComponent">
                <div id="container">
				    <p id="price">۳۹۰۰۰</p>
                    <p id="title">اسم غذا</p>
                    <p id="description">توضحیات</p>
                    <button>+ افزودن به سبد خرید</button>
			    </div>
            </div>	
		)
	}
}
export default Food;

