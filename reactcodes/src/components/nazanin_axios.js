import React, {Component} from 'react';
import axios from 'axios/index'

class Nazanin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurant: {}
        }
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

    render() {

        if (!this.state.restaurant.name) {
            return <br/>
        }

        let name = this.state.restaurant.name
        let address = this.state.restaurant.address.addressLine
        let catNames = this.state.restaurant.categories.map(cat => cat.name)
        let cats = ''
        catNames.forEach(element => {
            cats += element
            cats += ' * '
        });

        return <p>{'Name: ' + name + '\n' + 'Address: ' + address + '\n' + 'Cats: ' + cats}</p>

    }
 
}

export default Nazanin