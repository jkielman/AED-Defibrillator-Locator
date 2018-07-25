import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { geolocated } from 'react-geolocated';
import ScrollToTop from 'react-router-scroll-top';
import './style.scss';
import data from './data/data.json';
import { Grid, Row, Col } from 'react-flexbox-grid';


const App = () => (
  <Row>
  <Col xs={12}>
    <Row center="xs">
      <Col xs={12} sm={6} >

      <h1>Closet Defibrillator</h1>

        {
          data.map(function(defib){
            return <div>{defib.Facility_Name}{defib.Street_Address}{defib.Device_Counts}</div>;
          })
        }

      </Col>
    </Row>
  </Col>
  </Row>
)


ReactDOM.render(
  <App/>,
  document.getElementById('index')
)

