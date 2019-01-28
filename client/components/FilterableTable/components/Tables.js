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

    console.log('>>>>>>>>>>>>>>>> Tables > this.props.tablesData:', this.props.tablesData);

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const tables = [];

    let tableHeading = { 
      heading: [ 'stocked', 'name', 'price', 'size' ]
    };

    let testData = {
      category: 'Sporting Goods 2',
      heading: [ 'stocked', 'name', 'price', 'size' ],
      tableData: [ 
        [ true, 'Baseball 1', '9.99', 'large' ],
        [ true, 'Baseball 2', '11.99', 'medium' ],
        [ true, 'Baseball 3', '10.99', 'large' ]
      ] 
    };
    // const rows = [];
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

        tables.push(
          <Table data={testData} key={index}/>
        );

        //console.log('>>>>>>>>>>>>>>>> Tables > !!!!!!!!! (object.category !== lastCategory) category:', object.category);
        //console.log('>>>>>>>>>>>>>>>> Tables > !!!!!!!!! (object.category !== lastCategory) name:', object.name);
        //console.log('>>>>>>>>>>>>>>>> Tables > !!!!!!!!! (object.category !== lastCategory) TABLES[INDEX]:', arr[index]);
        //console.log('>>>>>>>>>>>>>>>> Tables > !!!!!!!!! (object.category !== lastCategory) TABLES[INDEX].category:', arr[index].category);
      }

      if (object.category === lastCategory) {

        //console.log('>>>>>>>>>>>>>>>> Tables > !!!!!!!!! (object.category === lastCategory) !!!!!!!!!:', object.category);
        //console.log('>>>>>>>>>>>>>>>> Tables > !!!!!!!!! (object.category === lastCategory) !!!!!!!!!:', object.name);
      }

      // rows.push( {data: object, key={object.name} });

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
