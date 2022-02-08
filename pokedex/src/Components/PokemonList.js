import React from 'react';
import axios from 'axios';


export default class PokemonList extends React.Component{
    state = {
        names: []
    }
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=600')
        .then(res => {
            console.log(res)
            this.setState({names: res.data.name});
        });
        
    }
    render(){
        return(
            <div>
                <h1>{ this.state.names }</h1>
            </div>
        )
    }
}