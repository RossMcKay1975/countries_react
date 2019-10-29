import React, { Component } from 'react';
import CountryDetail from './CountryDetail'

// this.handleChange = this.handleChange.bind(this)

    class CountrySelector extends Component {
        constructor(props){
            super(props)
            this.state ={
                country: {}
            }
            this.handleChange = this.handleChange.bind(this);
        }
        
        
    
        handleChange(event) {
            this.setState ({country: event.target.value})
        }
        render(){
            const countryOptions = this.props.data.map((country, index) => {
                return <option country={country} key={index}>{country.name}</option>})
        return ( 
            <div>
            <select value={this.state.value} onChange = {this.handleChange}> 
                {countryOptions}
            </select>
            <CountryDetail selectedCountry={this.state.country}/> 
            </div>
        )}

    }

    export default CountrySelector
