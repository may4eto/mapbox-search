import React, {Component} from 'react';
import mapbox from '!mapbox-gl';
import './Map.css'

class Map extends Component {
    componentDidMount() {
        const app = this.props.app
        mapbox.accessToken = 'pk.eyJ1IjoibWF5NGV0byIsImEiOiJja21mMzRsOG8wc3JvMnJwNXh6MDBzanJ6In0.aiF6EXF-QsXbyx8E_vbCGQ';
        var map = new mapbox.Map({
            container: 'map',
            style: app.state.style,
            center: [
                app.state.longitude, app.state.latitude
            ],
            zoom: 13
        });
        const navigationControl = new mapbox.NavigationControl();
        map.addControl(navigationControl);
        this.props.app.setState({
            map: map
        })
    }
    render() {
        const app = this.props.app;
        const map = this.props.app.state.map;
        if(map) {
           map.setStyle(app.state.style); 
        }

        return (
            <div id="map">
            </div>
        );
    }
}

export default Map;