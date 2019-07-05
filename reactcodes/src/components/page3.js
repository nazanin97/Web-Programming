import React from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './css/page3.css';
import Footer from './footer';
import rInf from './testInfo';
import Information from './information';
import ResInfo3 from './resInfo3';
import Comment from './comment';


class Page3 extends React.Component {
	constructor(props) {
		super();
		this.state = {
			infos: rInf
		}
	}
	render(){
		const menus = [];
		const menusReference = []
		for (let index = 0; index < this.state.infos.categories.length; index++) {
			var s = 'menuSection'+index;
			menus.push(<a href={'#'+s} id="menuItem" style={{textDecoration:'none'}}><p>{this.state.infos.categories[index]}</p></a>);
			console.log("s:"+s);
			menusReference.push(<ScrollableAnchor id={s}>
				<div style={{margin:'10px'}}>
				<a style={{display:'inlineBlock', backgroundColor:'yellow',fontSize:'20px',position:'relative', textAlign:'right'}}>{this.state.infos.categories[index]}</a>
				<div style={{backgroundColor:'red', height:'200px'}}></div>
				</div>
			</ScrollableAnchor>);
		}
		const orangeStars = [];
		const blackStars = [];
		for (let index = 0; index < Math.floor(this.state.infos.averageRate); index++) {
  			orangeStars.push(<span><FontAwesomeIcon icon={faStar} /></span>);
		}
		for (let index = Math.floor(this.state.infos.averageRate) ; index < 5; index++) {
			blackStars.push(<span style={{color: 'black'}}><FontAwesomeIcon icon={faStar} /></span>);
	  	}
		
		return (
			<div id="page3">
				<img id="topPic" src={require("./mocks/top.png")}/>
				<ResInfo3 />
				<div id="sections">
					<a href='#section3' id="a1">نظرات کاربران</a>
                    <a href='#section2' id="a2">اطلاعات رستوران</a>
                    <a href='#section1' id="a3">منوی رستوران</a>
				</div>
				<div id="nav_bar">
					{menus}
				</div>
				
				<ScrollableAnchor id={'section1'}>
          			<div id="menuSection">
						{menusReference}
					</div>
        		</ScrollableAnchor>
        		<ScrollableAnchor id={'section2'}>
          			<div id="information"> <Information /> </div>
        		</ScrollableAnchor>
				<ScrollableAnchor id={'section3'}>
          			<div id="comments">
						<h2 style={{textAlign:'right', marginRight:'50px'}}>نظرات کاربران در مورد {this.state.infos.name}</h2>
						<hr/>
						<p style={{textAlign:'right', marginRight:'35px'}}>شما هم می توانید بعد از سفارش از این رستوران، نظر خود را درباره ی این رستوران ثبت کنید</p>
						<div id="stars2">
							{orangeStars}
							{blackStars}
							<p id="rate" style={{color:'orange', marginTop:'0'}}>{this.state.infos.averageRate}</p>
						</div>
						
						<div id="spec">
							<table>
								<tr>
									<th className="c1">کیفیت غذا</th>
									<th className="c2">...</th>
								</tr>
								<tr>
									<th className="c1">کیفیت بسته بندی</th>
									<th className="c2">...</th>
								</tr>
								<tr>
									<th className="c1">سرعت ارسال پیک</th>
									<th className="c2">...</th>
								</tr>
							</table>
						</div>
						<Comment />
					</div>
        		</ScrollableAnchor>
				
				<Footer />
			</div>
			
		)
	}
	

}
export default Page3;

