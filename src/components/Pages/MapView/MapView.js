import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data.json';
import Markers from './VenueMarkers';

class MapView extends Component {
  state = {
    currentLocation: { lat: 52.52437, lng: 13.41053 },
    zoom: 12,
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

export default MapView;