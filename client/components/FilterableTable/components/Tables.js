import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import ProductTable from './ProductTable';
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

    // let testData = {
    //   category: 'Sporting Goods 2',
    //   heading: [ 'stocked', 'name', 'price', 'size' ],
    //   tableData: [ 
    //     [ true, 'Baseball 1', '9.99', 'large' ],
    //     [ true, 'Baseball 2', '11.99', 'medium' ],
    //     [ true, 'Baseball 3', '10.99', 'large' ]
    //   ] 
    // };

    let testData = {
      category: '',
      heading: [],
      tableData: []
    };

    let lastCategory = null;

    // iterate through 'this.props.tablesData' array
    // invoking arrow function specified for each element
    this.props.tablesData.forEach((object, index, arr) => {

      if (object.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      if (inStockOnly && !object.stocked) {
        return;
      }

      if (object.category !== lastCategory) {

        testData.category = object.category;
        testData.heading.push('stocked');
        testData.heading.push('name');
        testData.heading.push('price');
        testData.heading.push('size');
        testData.tableData.push([ true, 'Baseball 1', '9.99', 'large' ]);

        console.log('>>>>>>>>>>>>>>>> TABLES > object.category:', object.category);
        // console.log('>>>>>>>>>>>>>>>> TABLES > tables[0].props:', tables[0].props);
        // console.log('>>>>>>>>>>>>>>>> TABLES > tables[index]:', tables[index]);
        // console.log('>>>>>>>>>>>>>>>> TABLES > arr[index]:', arr[index]);
      }

      if (object.category === lastCategory) {

        testData.tableData.push([ true, 'Baseball 2', '11.99', 'medium' ]);
        testData.tableData.push([ true, 'Baseball 3', '10.99', 'large' ]);
      }

      if (object.category !== lastCategory) {

        tables.push(
          <Table data={testData} key={index}/>
        );
      }

      testData = { category: '', heading: [], tableData: [] };

      lastCategory = object.category;
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
