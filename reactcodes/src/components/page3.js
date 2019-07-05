import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './css/page3.css';
import Footer from './footer';
import rInf from './testInfo';
import Information from './information';
import ResInfo3 from './resInfo3';
import Comment from './comment';
import Food from './food';
import axios from 'axios/index'
import { text } from '@fortawesome/fontawesome-svg-core';

const BorderLinearProgress = withStyles({
	root: {
	  height: 10,
	  backgroundColor: lighten('#ccc', 0.5),
	},
	bar: {
	  borderRadius: 20,
	  backgroundColor: 'gold',
	},
  })(LinearProgress);

class FindFoods extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			infos1: rInf,	
		}
	}
	render(){
		const tmp = [];
		for (let index = 0; index < this.props.res.foods.length; index++) {
			if(this.props.res.foods[index].foodSet === this.props.item){
				tmp.push(<Food item={this.props.res.foods[index]}/>);
			}
		}
		return(
			<div>
				{tmp}
			</div>
		);
	}
}

class Page3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			infos: rInf,
			restaurant: {},
			query_restaurant : "",
		}
		this.onSearchRestaurantChange = this.onSearchRestaurantChange.bind(this);
	}
	onSearchRestaurantChange(event){
        this.setState({query_restaurant: event.target.value});
    }
	componentWillMount() {
        axios.get('http://localhost:3001/restaurants/' + this.props.match.params.id)
            .then((response) => {
                const restaurant = response.data
                this.setState({
                    restaurant: restaurant
                })
            })
    }
	render(){
		if (!this.state.restaurant.name) {
            return <br/>
		}

		let name = this.state.restaurant.name
		let open = this.state.restaurant.openingTime
		let close = this.state.restaurant.closingTime
		let comments = this.state.restaurant.comments
		let foods = this.state.restaurant.foods
		let avgRate = this.state.restaurant.averageRate
        let address = this.state.restaurant.address.addressLine
        let catNames = this.state.restaurant.categories.map(cat => cat.name)
        let cats = ''
        catNames.forEach(element => {
            cats += element
            cats += ' * '
		});
		const allComments = [];
		for (let index = 0; index < comments.length; index++) {
			allComments.push(<Comment props={comments[index]}/>);
		}
		
		const menus = [];
		const menusReference = []
		// for (let index = 0; index < foods.length; index++) {
		
		// 	if (foods[index].name.includes(this.state.query_restaurant)) {
				
		// 		for (let index = 0; index < catNames.length; index++) {
		// 			var s = 'menuSection'+index;
		// 			menus.push(<a href={'#'+s} id="menuItem" style={{textDecoration:'none'}}><p>{catNames[index]}</p></a>);
		// 			menusReference.push(<ScrollableAnchor id={s}>
		// 				<div style={{margin:'50px', backgroundColor:'rgb(240, 240, 240)'}}>
		// 				<h3 style={{padding:'10px', position:'relative', textAlign:'right'}}>{catNames[index]}</h3>
		// 				<div><FindFoods res={this.state.restaurant} item={catNames[index]} /></div>
		// 				</div>
		// 			</ScrollableAnchor>);
		// 		}
		// 	}    
		// }

		for (let index = 0; index < catNames.length; index++) {
			var s = 'menuSection'+index;
			menus.push(<a href={'#'+s} id="menuItem" style={{textDecoration:'none'}}><p>{catNames[index]}</p></a>);
			menusReference.push(<ScrollableAnchor id={s}>
				<div style={{margin:'50px', backgroundColor:'rgb(240, 240, 240)'}}>
				<h3 style={{padding:'10px', position:'relative', textAlign:'right'}}>{catNames[index]}</h3>
				<div><FindFoods res={this.state.restaurant} item={catNames[index]} /></div>
				</div>
			</ScrollableAnchor>);
		}
		
		
		const orangeStars = [];
		const blackStars = [];
		for (let index = 0; index < Math.floor(avgRate); index++) {
  			orangeStars.push(<span><FontAwesomeIcon icon={faStar} /></span>);
		}
		for (let index = Math.floor(avgRate) ; index < 5; index++) {
			blackStars.push(<span style={{color: 'black'}}><FontAwesomeIcon icon={faStar} /></span>);
	  	}
		
		return (
			
			<div id="page3">
				<img id="topPic" src={require("./mocks/top.png")}/>
				<ResInfo3 props={this.state.restaurant} cats={cats} address={address}/>
				<div id="sections">
					<a href='#section3' id="a1">نظرات کاربران</a>
                    <a href='#section2' id="a2">اطلاعات رستوران</a>
                    <a href='#section1' id="a3">منوی رستوران</a>
				</div>
				<div style={{textAlign:'center'}}>
		        	<input style={{ top:'-200px', marginRight:'20%',marginLeft:'20%', width:'60%', border:'1px solid lightgray', backgroundColor:'rgb(250, 250, 250)'}} onChange={this.onSearchRestaurantChange} id="searchField" type="text" placeholder="جست و جو در منوی این رستوران"/>
	        	</div>
				<hr/>
				<div id="divsContainer">
					<div id="nav_bar">
						{menus}
					</div>
					<div id="westSide">
					<ScrollableAnchor id={'section1'}>
          				<div>
							{menusReference}
						</div>
        			</ScrollableAnchor>
        			<ScrollableAnchor id={'section2'}>
          				<div id="information"> <Information name={name} address={address} open={open} close={close}/> </div>
        			</ScrollableAnchor>
					<ScrollableAnchor id={'section3'}>
          				<div id="comments">
							<h2 style={{textAlign:'right', marginRight:'50px'}}>نظرات کاربران در مورد {name}</h2>
							<hr/>
							<p style={{textAlign:'right', marginRight:'35px'}}>شما هم می توانید بعد از سفارش از این رستوران، نظر خود را درباره ی این رستوران ثبت کنید</p>
							<div id="stars2">
								{orangeStars}
								{blackStars}
								<p id="rate" style={{color:'orange', marginTop:'0'}}>{avgRate}</p>
							</div>
						
							<div id="spec">
								<table>
									<tr>
										<th className="c1">کیفیت غذا</th>
										<th className="c2">
										<BorderLinearProgress
        									
        									variant="determinate"
        									color="orange"
        									value={50}
    									  />
										</th>
									</tr>
									<tr>
										<th className="c1">کیفیت بسته بندی</th>
										<th className="c2">
										<BorderLinearProgress
        									variant="determinate"
        									color="orange"
        									value={50}
    									  />
										</th>
									</tr>
									<tr>
										<th className="c1">سرعت ارسال پیک</th>
										<th className="c2">
										<BorderLinearProgress
        									
        									variant="determinate"
        									color="orange"
        									value={50}
    									  />
										</th>
									</tr>
								</table>
							</div>

							<div>
								{allComments}
							</div>
						
						</div>
        			</ScrollableAnchor>
					</div>
				</div>
				<Footer />
			</div>
			
		)
	}
	

}
export default Page3;

