import React, { Component } from 'react'; 
import CountrySelector from '../components/CountrySelector'
import CountryDetail from '../components/CountryDetail'

class CountryContainer extends Component {

    constructor(props) {
        super(props); 

        this.state ={
            countries: []
        }; 

    }
   
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => {this.setState({ countries: data })
        })
    };


    render(){
        return (
            <div className="country-container">
                <h1>Countries</h1>
                <CountrySelector data={this.state.countries} /> 
                
            </div>
        )
    }
}
export default CountryContainer 