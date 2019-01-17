import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Helmet from 'react-helmet';

import Clock from '../../components/widgets/Clock/Clock';
import RandomBootstrapAlert from '../../components/widgets/RandomBootstrapAlert/RandomBootstrapAlert';
// import FilterableProductTable from '../../components/FilterableProductTable';

class StickyFooter extends Component {

  static propTypes = {
    optionalString: PropTypes.string, // declared string JS primitive
    optionalNumber: PropTypes.number, // declared number JS primitive
    optionalNode: PropTypes.node, // Anything that can be rendered
  };

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() <<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  render() {

    const styles = require('./scss/StickyFooter.scss');

    return (

      <div className="container">

        <h1 className={styles.stickyFooterUniqueColor}>Sticky Footer Test!</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>

        <div className="card text-center">
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
    );
  }
}

export default StickyFooter;
