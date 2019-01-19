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

    axios.get('/product-categories.json')
      .then(response => {
        console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > json > SUCCESS: ', response.data);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > json > ERROR.response.data: ', error.response.data);
          console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > json > ERROR.response.status: ', error.response.status);
          console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > json > ERROR.response.headers: ', error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > json > ERROR.message: ', error.message);
        }
        console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > json > ERROR.config: ', error.config);
      });
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
