import React, {Component} from 'react';
import './PlacesPanel.css';
import PlaceItem from './PlaceItem';

class PlacesPanel extends Component {
    render() {
        const places = this.props.app.state.places;
        let placeItems = <div className="no-results">Nothing added yet</div>
        if (places.length > 0) {
            placeItems = places.map((place, index) => {
                return <PlaceItem place={place} app={this.props.app} key={index} />
            })
        }
        return(
            <div className="places">
                {placeItems}
            </div>        
        )
    }
}

export default PlacesPanel