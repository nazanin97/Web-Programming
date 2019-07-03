var x1;
var x2;
var x3;
var x4;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "http://demo2469824.mockable.io/foods", true);
xhttp.send();
function myFunction(xml) {

    var xmlDoc = xml.responseXML;

    var names = xmlDoc.getElementsByTagName('name');
    var imgUrls = xmlDoc.getElementsByTagName('imgUrl');
    var counts = xmlDoc.getElementsByTagName('count');

    for (var i = 0; i < 4; i++) {
        var str = imgUrls[i].childNodes[0].nodeValue;
        x1[i].setAttribute("src", str);
        x2[i].innerHTML = names[i].childNodes[0].nodeValue;
        x3[i].innerHTML = counts[i].childNodes[0].nodeValue + " رستوران فعال ";    
    }
    for (var i = 4; i < 12; i++) {
      x4[i-4].innerHTML = names[i].childNodes[0].nodeValue;
      x4[i-4].setAttribute("count", counts[i].childNodes[0].nodeValue);  
    }
}

var holdId = '';

$(document).ready(function() {
    x1 = document.getElementById('part5').querySelectorAll('.table .block');
    x2 = document.getElementById('part5').querySelectorAll('.table .types');
    x3 = document.getElementById('part5').querySelectorAll('.table h6');
    x4 = document.getElementById('part5').querySelectorAll('span');

    var linkToLogin = document.getElementById('mainPage').querySelector('.navigation_bar #login');
    var linkToRegister = document.getElementById('mainPage').querySelector('.navigation_bar #register');
  
    linkToLogin.onclick = loadPages;
    linkToRegister.onclick = loadPages;

		$.get("http://demo2469824.mockable.io/best-restaurants", function(data, status){
      			
      		var blocks = $("#part3 .block");

				  for (var i = 0; i < 3; i++) {
					   blocks[i].setAttribute("id", data.restaurants[i].id);

				   var v1 = document.createElement("div");

      		  var v2 = document.createElement("img");
      		  v2.setAttribute("src", data.restaurants[i].imgUrl); 
      	  	v1.appendChild(v2);
			  	   blocks[i].appendChild(v1);

    				var v3 = document.createElement("h3");
    				v3.innerHTML = data.restaurants[i].name;
			   		blocks[i].appendChild(v3);

  					var v4 = document.createElement("h6");
  					v4.innerHTML = '(' + data.restaurants[i].numOfRates + ')';
  					blocks[i].appendChild(v4);

      				for (var k = 0; k < 5; k++) {
      					var icon = document.createElement("i");
      					icon.setAttribute("class", "fas fa-star");
      					blocks[i].appendChild(icon);
      				}
      				var v5 = document.createElement("h5");
      				v5.innerHTML = data.restaurants[i].rate;
      				blocks[i].appendChild(v5);

      				var v6 = document.createElement("p");
      				for (var j = 0; j < data.restaurants[i].foods.length; j++) {
      						v6.innerHTML += data.restaurants[i].foods[j];
  	     					v6.innerHTML += " • ";
  			   		}
  				  	blocks[i].appendChild(v6);

      				var v7 = document.createElement("p");
      				v7.innerHTML = data.restaurants[i].address;
      				blocks[i].appendChild(v7);

      				var v8 = document.createElement("input");
      				v8.setAttribute("type", "button");
      				v8.setAttribute("value", "شروع سفارش");
      				blocks[i].appendChild(v8);
					
			   	}
				  var blocks = $("#part4 .block");
				  var labels = $("#part4 .r_name");
				  for (var l = 3; l < 15; l++) {
				  	var q = l - 3;
					   var v9 = document.createElement("img");
      			v9.setAttribute("src", data.restaurants[l].imgUrl);
      			v9.setAttribute("id", data.restaurants[l].id);
      			blocks[q].appendChild(v9);
			   		labels[q].innerHTML = data.restaurants[l].name;
				  }
  	});
});

function loadPages(){
    holdId = this.id;
} 
		