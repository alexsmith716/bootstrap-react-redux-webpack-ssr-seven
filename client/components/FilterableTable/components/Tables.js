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

    let testData = { category: '', heading: [], tableData: [] };

    let lastCategory = null;

    // iterate through 'this.props.tablesData' array
    // invoking arrow function specified for each element
    this.props.tablesData.forEach((object, index, arr) => {

      // if (object.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      //   return;
      // }

      // if (inStockOnly && !object.stocked) {
      //   return;
      // }

      if (object.category !== lastCategory) {

        testData.category = object.category;

        console.log('>>>>>>>>>>>>>>>> TABLES > (object.category !== lastCategory) 1 > object:', object.category, ' :: ', object);

        for(let h in object) {
          if (h !== 'category'){
            testData.heading.push(h);
          }
        }

        for(let b in object) {
          if (b !== 'category'){
            testData.tableData.push(object[b]);
          }
        }

        // console.log('>>>>>>>>>>>>>>>> TABLES > object.category >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:', object.category);
        // console.log('>>>>>>>>>>>>>>>> TABLES > (object.category !== lastCategory) 1 > object:', object.category, ' :: ', object);
        // console.log('>>>>>>>>>>>>>>>> TABLES > tables[0].props:', tables[0].props);
        // console.log('>>>>>>>>>>>>>>>> TABLES > tables[index]:', tables[index]);
        // console.log('>>>>>>>>>>>>>>>> TABLES > arr[index]:', arr[index]);
      }

      if (object.category === lastCategory) {

        console.log('>>>>>>>>>>>>>>>> TABLES > (object.category === lastCategory) > object:', object.category, ' :: ', object);

        for(let c in object) {
          if (c !== 'category'){
            testData.tableData.push(object[c]);
          }
        }
      } else 

      if (object.category !== lastCategory) {

        console.log('>>>>>>>>>>>>>>>> TABLES > (object.category !== lastCategory) 2 > object:', object.category, ' :: ', testData);
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
