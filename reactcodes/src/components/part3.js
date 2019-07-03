import React from "react";
import './css/main.css';

fetch(`http://demo2469824.mockable.io/best-restaurants`)
.then(response => {
        return response.json();
})
.then(json => {
    var blocks = document.getElementById('part3').querySelectorAll('.block');
	
	for (var i = 0; i < 3; i++) {
		blocks[i].setAttribute("id", json.restaurants[i].id);
		var v1 = document.createElement("div");

      	var v2 = document.createElement("img");
      	v2.setAttribute("src", json.restaurants[i].imgUrl); 
      	v1.appendChild(v2);
	    blocks[i].appendChild(v1);

    	var v3 = document.createElement("h3");
    	v3.innerHTML = json.restaurants[i].name;
		blocks[i].appendChild(v3);

  		var v4 = document.createElement("h6");
  		v4.innerHTML = '(' + json.restaurants[i].numOfRates + ')';
  		blocks[i].appendChild(v4);

      	for (var k = 0; k < 5; k++) {
      		var icon = document.createElement("i");
      		icon.setAttribute("class", "fas fa-star");
    		blocks[i].appendChild(icon);
    	}
    	var v5 = document.createElement("h5");
    	v5.innerHTML = json.restaurants[i].rate;
    	blocks[i].appendChild(v5);

      	var v6 = document.createElement("p");
      	for (var j = 0; j < json.restaurants[i].foods.length; j++) {
      		v6.innerHTML += json.restaurants[i].foods[j];
  			v6.innerHTML += " • ";
  		}
  	  	blocks[i].appendChild(v6);

    	var v7 = document.createElement("p");
    	v7.innerHTML = json.restaurants[i].address;
      	blocks[i].appendChild(v7);

      	var v8 = document.createElement("input");
      	v8.setAttribute("type", "button");
      	v8.setAttribute("value", "شروع سفارش");
      	blocks[i].appendChild(v8);
					
	}
})
.catch((error) => {
    
});
function Part3() {
	return (
		<div id="part3">
			<h2>رستوران ها و فست فودهای برتر ماه بر اساس امتیازدهی کاربران</h2>
			<table className="table">
				<tr>
					<th><a href="https://www.reyhoon.com/restaurants/baguette-andarzgo-branch">
						<div className="block"></div>
					</a></th>
					<th><a href="https://www.reyhoon.com/restaurants/shila-motahhari">
						<div className="block"></div>
					</a></th>
					<th><a href="https://www.reyhoon.com/restaurants/baguette-andarzgo-branch">
					<div className="block"></div>
					</a></th>
				</tr>
			</table>	
		</div>
	);
}

export default Part3;