import React, { Component, Fragment } from 'react';
import { Map, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux';
import { variableNames } from '../../../variableNames';

const mapsKeyword = variableNames.dispatches.state.keywords.maps;
const LAUNCH = variableNames.dispatches.standard.requests.try.LAUNCH;

class MapView extends Component {
  state = {
    currentLocation: {
      lat: 46.95781840824292, lng: -97.23999023437501
    },
    zoom: 6,
    popUpLocation: null
  }

  componentDidMount() {
    this.props.dispatch({ type: LAUNCH });
  }

  onEachFeature = (feature) => {
    console.log('each feature');
    console.log(feature);
    this.setState({ popUpLocation: feature })
  }
  renderCountries = () => {
    const { maps } = this.props;
    // const filtered = maps[mapsKeyword].filter(county => county.properties.GEOID === NDStateID || county.properties.GEOID === cassCountyGeoID);
    return maps[mapsKeyword].map((country, index) => {
      return (
      <GeoJSON
        key={`geojson-${index}`}
        data={country}
        style={() => ({
          color: '#4a83ec',
          weight: 0.5,
          fillColor: "#1a1d62",
          fillOpacity: 1,
        })
        }
        onclick={this.onEachFeature}
      />
    )});
  }

  render() {
    const { currentLocation, zoom, popUpLocation } = this.state;

    return (
      <>
        <Map
          center={currentLocation}
          zoom={zoom}
        >
          <div>text</div>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.renderCountries()}
          {popUpLocation && (
            <Popup
              position={[
                popUpLocation.latlng.lat,
                popUpLocation.latlng.lng,
              ]}
              onClose={() => {
                this.setState({ popUpLocation: null });
              }}
            >
              <div>
                <h2>{popUpLocation.layer.feature.properties.NAME}</h2>
                <h2>{popUpLocation.layer.feature.properties.POP && `population: ${popUpLocation.layer.feature.properties.POP}`}</h2>
              </div>
            </Popup>
          )}
        </Map>
      </>
    );
  }
}

const mapStateToProps = reduxState => ({
  [mapsKeyword]: reduxState[mapsKeyword]
});

export default connect(mapStateToProps)(MapView);
