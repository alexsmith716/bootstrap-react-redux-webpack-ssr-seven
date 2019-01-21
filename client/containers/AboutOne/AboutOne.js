import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Helmet from 'react-helmet';

import Clock from '../../components/widgets/Clock/Clock';
import RandomBootstrapAlert from '../../components/widgets/RandomBootstrapAlert/RandomBootstrapAlert';
import ThinkingInReact from '../../components/ThinkingInReact/ThinkingInReact';


class AboutOne extends Component {

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> AboutOne > componentDidMount() <<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> AboutOne > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  render() {

    const styles = require('./scss/AboutOne.scss');

    const uri = encodeURI('/product-categories.json'); // typeof 'string'

    return (

      <div className="container">

        <Helmet title="About One" />

        <h1 className={styles.uniqueColor}>About One!</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>


        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100 text-center">

              <h2 className="card-header">
                Clock: state and lifecycle in a basic React component!
              </h2>

              <div className="card-body">

                <div className="card-title">

                  <RandomBootstrapAlert />

                  <p>With supporting text below as a natural lead-in to additional content.</p>

                  <a href="#" className="btn btn-primary">Go somewhere</a>

                </div>
              </div>

              <div className="card-footer text-muted">

                <Clock />

              </div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-12 mb-4">

            <div className="card h-100 text-center">

              <h2 className="card-header">
                Thinking in React!
              </h2>

              <div className="card-body">

                <div className="card-title">

                  <ThinkingInReact requestURL={uri} />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default AboutOne;
