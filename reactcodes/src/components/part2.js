import React from "react";
import './css/main.css';

function Part2() {
	return (
		<div id="part2">
			<div>
				<p>غذایتان را نوش جان کنید</p>
			<div>
			<div className="left"><p>درب منزل یا حضوری از خود رستوران سفارش تان را تحویل بگیرید</p></div>
			<div className="right"><img src={require("./mocks/3-1.png")}/></div>
			</div>
			</div>
			<div>
				<p>غذای خود را انتخاب کنید</p>
				<div>
					<div className="left"><p>غذایی که می خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید</p></div>
					<div className="right"><img src={require("./mocks/3-2.png")}/></div>
				</div>
			</div>

			<div>
				<p>شهر و منطقه خود را وارد کنید</p>
				<div>
					<div className="left">
						<p>منوی مورد علاقه خود را از بین بیش از ۳۵۰۰ رستوران خوب در تهران و شهرستان ها جستجو کنید</p>
					</div>
				<div className="right"><img src={require("./mocks/3-3.png")}/></div>
				</div>
			</div>
		</div>
	);
}

export default Part2;