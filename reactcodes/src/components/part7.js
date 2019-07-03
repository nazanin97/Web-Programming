import React from "react";
import './css/main.css';

function Part7() {
	return (
		<div id="part7">
			<img src={require("./mocks/7.png")}/>
			<h2>ریحون روی موبایل</h2>
			<h5>.برای دریافت لینک دانلود اپلیکیشن ریحون، شماره موبایل خود را وارد کنید</h5>		
			<input id="text_input" type="text" name="mobile_number"/>
			<a href=""><input id="button" type="button" value=" SMS دریافت لینک از طریق"/></a>
			<h6>.اپلیکیشن ریحون برای اندروید و آی او اس در دسترس است</h6>
			<div>
				<a href="https://cafebazaar.ir/app/reyhoon.androidapp/?l=fa&_branch_match_id=640585749355987351">
					<img className="download" src={require("./mocks/cafebazaar-light.png")}/>
				</a>
				<a href="https://app.adjust.com/x5ks5h">
					<img className="download" src={require("./mocks/google-play-light.png")}/>
				</a>
				<a href="">
					<img className="download" src={require("./mocks/sibapp-light.png")}/>
				</a>
				<a href="https://reyhoon.app.link/I1or89kT0H">
					<img className="download" src={require("./mocks/reyhoon-light.png")}/>
				</a>
				<a href="https://www.reyhoon.com/app/ios">
					<img className="download" src={require("./mocks/ios-light.png")}/>
				</a>
			</div>
		</div>
	);
}

export default Part7;