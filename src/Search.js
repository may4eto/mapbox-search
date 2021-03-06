import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const accessToken = "pk.eyJ1IjoibWF5NGV0byIsImEiOiJja21mMzRsOG8wc3JvMnJwNXh6MDBzanJ6In0.aiF6EXF-QsXbyx8E_vbCGQ";
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;
        fetch(url).then(response => response.json())
                  .then(data => {
                    const places = this.props.app.state.places;
                    const firstResult = data.features[0];
                    places.push({
                        name: this.state.value,
                        longitude: firstResult.center[0],
                        latitude: firstResult.center[1]
                    })
                    this.props.app.setState({
                        places: places
                    });
                    this.setState({
                        value: ""
                    });
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value = {this.state.value} onChange = {this.handleChange} placeholder="Search..."/>
            </form>
        )
 }
}

export default Search;