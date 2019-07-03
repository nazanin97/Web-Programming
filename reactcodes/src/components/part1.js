import React from "react";
import './css/main.css';
import './font-awesome/css/font-awesome.css'; 

function Part1() {
	return (
	<div id="part1">
			<h2>سفارش آنلاین غذا از بهترین رستوران ها و فست فودها</h2>
			<h6>.برای دیدن لیست رستوران ها و فست فودهایی که به شما سرویس می دهند، منطقه خود را وارد کنید</h6>
		<div id="first">
			<a href="">
				<img src={require("./mocks/search.png")}/>
			</a>
			<fieldset>
				<legend>منطقه خود را وارد کنید</legend>
				<form method="get" action="/restaurants">
					<input type="search" name="area" role="combobox" placeholder="مثلا نیاوران"/>
					<i className="fas fa-map-marker-alt"></i>
				</form>
				
			</fieldset>
			<select>
				<option>تهران</option>
				<option>مشهد</option>
				<option>اصفهان</option>
				<option>کرج</option>
				<option>شیراز</option>
				<option>تبریز</option>
				<option>رشت</option>
				<option>قزوین</option>
				<option>پردیس</option>
			</select>
		</div>
		<p>آخرین جستجو: تهران، شیخ هادی، چهارراه ولیعصر</p>
		<img src={require("./mocks/2.png")}/>
	</div>
	);
}

export default Part1;