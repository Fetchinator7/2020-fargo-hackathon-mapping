import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data.json';
import Markers from './VenueMarkers';
import { connect } from 'react-redux';
import { variableNames } from '../../../variableNames';

const maps = variableNames.dispatches.state.keywords.maps;
const LAUNCH = variableNames.dispatches.standard.requests.try.LAUNCH;

class MapView extends Component {
  state = {
    currentLocation: { lat: 52.52437, lng: 13.41053 },
    zoom: 12,
  }

  componentDidMount() {
    this.props.dispatch({ type: LAUNCH });
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom}>
        <div>text</div>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        // attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues} />
      </Map>
    );
  }
}

const mapStateToProps = reduxState => ({
  [maps]: reduxState[maps]
});

export default connect(mapStateToProps)(MapView);
