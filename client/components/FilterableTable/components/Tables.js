import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from './Table';


class Tables extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    tablesData: PropTypes.array.isRequired,
    filterText: PropTypes.string,
    inStockOnly: PropTypes.bool
  };

  render() {

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const tables = [];

    // tableObject = {
    //   category: 'Sporting Goods 2',
    //   heading: [ 'stocked', 'name', 'price', 'size' ],
    //   tableData: [ 
    //     [ true, 'Baseball 1', '9.99', 'large' ],
    //     [ true, 'Baseball 2', '11.99', 'medium' ],
    //     [ true, 'Baseball 3', '10.99', 'large' ]
    //   ] 
    // };

    let tableObject = { category: '', heading: [], tableData: [] };

    let lastCategory = null;

    this.props.tablesData.forEach((tablesDataObject, index, arr) => {

      // evaluate if category is already a "Table"
      tables.forEach((obj, index, arr) => {

        if (obj.props.data.category === tablesDataObject.category) {
          obj.props.data.tableData.push( Object.values(tablesDataObject));
        }
      });

      if (tablesDataObject.category !== lastCategory) {

        tableObject.category = tablesDataObject.category;

        tableObject.tableData.push( Object.values(tablesDataObject) );

        Object.keys(tablesDataObject).forEach((o) => {
          tableObject.heading.push( o );
        })

        tables.push(
          <Table data={ tableObject } key={index}/>
        );
      }

      tableObject = { category: '', heading: [], tableData: [] };

      lastCategory = tablesDataObject.category;
    });

    return (

      <div>

        {tables}

      </div>
    );
  }
}

export default Tables;

// # of unique category's === # of table's
// # of category's === # of table <tr> rows
// # of keys's === # of table <td> columns
