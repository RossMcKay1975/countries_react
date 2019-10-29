import React, { Component } from 'react'; 
import CountrySelector from '../components/CountrySelector'

class CountryContainer extends Component {

    constructor(props) {
        super(props); 

        this.state ={
            data: null, 
        }; 

    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.setState({ data })); 
    }
    render(){
        return (
            <div className="country-container">
                <h1>Countries</h1>
                <CountrySelector data={this.state.data} /> 
            </div>
        )
    }
}
export default CountryContainer 