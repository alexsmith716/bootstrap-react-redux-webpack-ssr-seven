import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './components/SearchBar';
import ProductTables from './components/ProductTables';


// FilterableProductTable
//     SearchBar
//
//     ProductTable
//         ProductCategoryRow
//         ProductRow

// React DOM compares the element and its children to the previous one, 
// and only applies the DOM updates necessary to bring the DOM to the desired state

// only the node whose contents has changed gets updated by React DOM
// think about how the UI should look at any given moment not how to change it over time

// All React components must act like pure functions with respect to their props
// State (changes) allows React components to change their output over time in response to user actions, 
// network responses, and anything else without violating 'pure function' rule

class FilterableProductTable extends Component {

  constructor(props) {

    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false
    };

    // handle events
    // events are named using camelCase, rather than lowercase
    // with JSX you pass a function as the event handler, rather than a string
    // 'e.preventDefault()' prevents default behavior in React
    // 'bind(this)' is necessary to make `this` work in the callback
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  static propTypes = {
    content: PropTypes.array.isRequired
  };

  handleFilterTextChange(filterText) {
    // console.log('>>>>>>>>>>>>>>> FilterableProductTable > handleFilterTextChange > filterText1:', filterText);
    this.setState({ filterText: filterText });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly })
  }

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentDidMount() <<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  render() {

    console.log('>>>>>>>>>>>>>>>> FilterableProductTable > render() > this.props.content: ', this.props.content);

    const styles = require('./scss/FilterableProductTable.scss');

    return (

      <div className={styles.filterableProductTableContainer}>

        <div className={styles.tableSearchContainer}>

          <div className={styles.tableSearch}>

            <SearchBar 
              filterText = { this.state.filterText }
              inStockOnly = { this.state.inStockOnly }
              onFilterTextChange = { this.handleFilterTextChange }
              onInStockChange = { this.handleInStockChange }
            />

          </div>

        </div>

        <br />

        <div className={styles.tableContainer}>

          <ProductTables 
            products = { this.props.content } 
            filterText = { this.state.filterText }
            inStockOnly = { this.state.inStockOnly }
          />

        </div>

      </div>

    );
  }
}

export default FilterableProductTable;
