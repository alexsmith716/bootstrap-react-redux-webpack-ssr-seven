import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Helmet from 'react-helmet';

import Clock from '../../components/widgets/Clock/Clock';


class StickyFooter extends Component {

  // static propTypes = {
  //   optionalString: PropTypes.string, // declared string JS primitive
  //   optionalNumber: PropTypes.number, // declared number JS primitive
  //   optionalNode: PropTypes.node, // Anything that can be rendered
  // };

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() <<<<<<<<<<<<<<');

    axios.get('../products.json')
      .then(function (response) {
        console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > products.json: ', response);
      })
      .catch(function (error) {
        console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > products.json: ', error);
      })
      .then(function () {
        // always executed
        console.log('>>>>>>>>>>>>>>>> STICKYFOOTER > componentDidMount() > products.json > always executed!');
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

        <Clock />

      </div>
    );
  }
}

export default StickyFooter;
