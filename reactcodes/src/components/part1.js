import React from "react";
import './css/main.css';
import './font-awesome/css/font-awesome.css'; 
import queryString from 'query-string';

class Part1 extends React.Component {
	constructor(){
		super();
		const values = queryString.parse(document.location.search);
		
        this.state = {
            city : values.city,
            area : values.area,
            query_restaurant : "",
            query_category : "",
            restaurants : [],
			categories : {},
			mylink: "http://localhost:3000/restaurants"
			
        };
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleSearch({target}) {
		this.state.area = target.value;
		this.mylink = this.mylink + "?area" + this.state.area;
	}
	render(){
		return (
			<div id="part1">
					<h2>سفارش آنلاین غذا از بهترین رستوران ها و فست فودها</h2>
					<h6>.برای دیدن لیست رستوران ها و فست فودهایی که به شما سرویس می دهند، منطقه خود را وارد کنید</h6>
				<div id="first">
					<a href={this.setState.mylink} onClick={this.handleSearch}>
						<img onClick={this.handleSearch} src={require("./mocks/search.png")}/>
					</a>
					<fieldset>
						<legend>منطقه خود را وارد کنید</legend>
						<form method="get" action="/restaurants">
							<input type="search" name="area" onChange={this.handleSearch} role="combobox" placeholder="مثلا نیاوران"/>
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

}

export default Part1;