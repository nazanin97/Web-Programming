import React from 'react';

class CheckBox extends React.Component{
    constructor(props) {
      super();
      this.state = {
		  isChecked: false,
		  
		};
	  this.handleChecked = this.handleChecked.bind(this);
	  
    }
  
    handleChecked () {
      this.setState({isChecked: !this.state.isChecked});
    }
    render(){
      return (
	  	<div>
         	<input id="filter" type="checkbox" onChange={ this.handleChecked }/>
			 <label>{this.props.item}</label> 
      	</div>
	  )
    }
}
export default CheckBox;