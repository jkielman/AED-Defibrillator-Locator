import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import './style.scss';
import data from './data/data.json';
import { Grid, Row, Col } from 'react-flexbox-grid';

function find(dups) {
    return dups.Facility_Name;
}

const dupsFound = {};

data.forEach((dups) => {
    dupsFound[find(dups)] = dups;
})

const results = Object.keys(dupsFound).map((resultData) => {
    return dupsFound[resultData];
})

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      latitude: '',
      longitude: '',
    }
    this.getMyLocation = this.getMyLocation.bind(this)
  }

  componentDidMount() {
    this.getMyLocation()
  }

  getMyLocation() {

    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

  render() {

    const { latitude, longitude } = this.state

    return (
      <div>

        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={12} >
              <h1>Your Location</h1>
              <h1>Lat: {latitude} / Lon: {longitude} </h1>
              </Col>
              <Col xs={12} >
              <h1>Nearest Locations</h1>
              {
                results.map((defib, index ) => {
                  return <div key={index}>
                              {defib.Facility_Name}
                              {defib.Street_Address}
                              {defib.Device_Counts}
                         </div>
                })
              }
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('index')
)

