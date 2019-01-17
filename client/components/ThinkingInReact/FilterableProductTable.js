import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SearchBar from './components/SearchBar';
// import ProductTable from './components/ProductTable';


class FilterableProductTable extends Component {

  static propTypes = {
    optionalString: PropTypes.string, // declared string JS primitive
    optionalNumber: PropTypes.number, // declared number JS primitive
    optionalNode: PropTypes.node, // Anything that can be rendered
  };

  constructor(props) {

    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentDidMount() <<<<<<<<<<<<<<');

    axios.get('../products.json')
      .then(function (response) {
        console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentDidMount() > products.json: ', response);
      })
      .catch(function (err) {
        console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentDidMount() > products.json > ERROR: ', err.message);
      })
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  render() {

    const styles = require('./scss/FilterableProductTable.scss');

    return (

      <div className="card text-center">
        <h2 className="card-header">
          Thinking in React!
        </h2>
        <div className="card-body">
          <div className="card-title">
            <div></div>
            <p className={`card-text ${styles.filterableProductTableUniqueColor}`}>With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card-footer text-muted">
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>

    );
  }
}

export default FilterableProductTable;
