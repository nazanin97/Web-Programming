import React from "react";
import './css/main.css';

fetch(`http://demo2469824.mockable.io/best-restaurants`)
.then(response => {
        return response.json();
})
.then(json => {
	var blocks = document.getElementById('part4').querySelectorAll('.block');
	var labels = document.getElementById('part4').querySelectorAll('.r_name');
	for (var l = 3; l < 15; l++) {
	  	var q = l - 3;
	    var v9 = document.createElement("img");
      	v9.setAttribute("src", json.restaurants[l].imgUrl);
      	v9.setAttribute("id", json.restaurants[l].id);
      	blocks[q].appendChild(v9);
		labels[q].innerHTML = json.restaurants[l].name;
	}
})
.catch((error) => {
    
});

function Part4() {
	return (
		<div id="part4">
			<h3>رستوران های خوب تهران در ریحون</h3>	
			<img src={require("./mocks/4.png")}/>
			<table className="table">
				<tr>
					<th><div>
							<div className="block"></div>
							<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
				</tr>
				<tr>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
				</tr>
				<tr>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
					<th><div>
						<div className="block"></div>
						<div className="r_name"></div>
					</div></th>
				</tr>
			</table>
		</div>
	);
}

export default Part4;