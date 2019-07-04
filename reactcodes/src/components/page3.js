import React from 'react';
import ResInfo3 from './resInfo3';
import ScrollableAnchor from 'react-scrollable-anchor';
import './css/page3.css';
import Footer from './footer';
import rInf from './testInfo';

class Page3 extends React.Component {
	constructor(props) {
		super();
		this.state = {
			infos: rInf
		}
	}
	render(){
		const menus = []
		for (let index = 0; index < this.state.infos.categories.length; index++) {
			menus.push(<p id="menuItem">{this.state.infos.categories[index]}</p>)
		}
		
		return (
			<div id="page3">
				<img id="topPic" src={require("./mocks/top.png")}/>
				<ResInfo3 />
				<div id="sections">
					<a href='#section1' id="a1">نظرات کاربران</a>
                    <a href='#section2' id="a2">اطلاعات رستوران</a>
                    <a href='#section3' id="a3">منوی رستوران</a>
				</div>
				<div id="nav_bar">
					{menus}
				</div>
				
				<ScrollableAnchor id={'section1'}>
          			<div id="menu">
						
					</div>
        		</ScrollableAnchor>
        		<ScrollableAnchor id={'section2'}>
          			<div id="information"> </div>
        		</ScrollableAnchor>
				<ScrollableAnchor id={'section3'}>
          			<div id="comments"> </div>
        		</ScrollableAnchor>
				
				<Footer />
			</div>
			
		)
	}
	

}
export default Page3;

