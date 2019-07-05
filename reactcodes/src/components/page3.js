import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
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
		// console.log('P:');
		// console.log(props)
		this.state = {
			infos: rInf,
			restaurant: {}
		}
	}
	componentWillMount() {
        axios.get('http://localhost:3001/restaurants/' + this.props.match.params.id)
            .then((response) => {
                const restaurant = response.data
                console.log('Data:')
                console.log(restaurant)
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
		for (let index = 0; index < catNames.length; index++) {
			var s = 'menuSection'+index;
			menus.push(<a href={'#'+s} id="menuItem" style={{textDecoration:'none'}}><p>{catNames[index]}</p></a>);
			menusReference.push(<ScrollableAnchor id={s}>
				<div style={{margin:'50px', backgroundColor:'rgb(240, 240, 240)'}}>
				<p style={{fontSize:'25px', marginLeft:'90%'}}>{catNames[index]}</p>
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
				<div>
					<div id="nav_bar">
						{menus}
					</div>
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
				<Footer />
			</div>
			
		)
	}
	

}
export default Page3;

