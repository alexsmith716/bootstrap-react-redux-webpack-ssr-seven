import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';

class ProductTable extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    tableProducts: PropTypes.object.isRequired,
  };

  render() {

    const styles = require('./scss/ProductTable.scss');
    const category = this.props.tableProducts.category;

    const table = [];

    console.log('>>>>>>>>>>>>>>>> ProductTable > this.props.tableProducts:', this.props.tableProducts);
    const tempColSpan = Object.keys(this.props.tableProducts).length - 2;
    console.log('>>>>>>>>>>>>>>>> ProductTable > tempColSpan:', tempColSpan);

    return (

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr className="table-info">
              <th colSpan={tempColSpan}>{`${category} ===============================================`}</th>
            </tr>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Size</th>
              <th scope="col">Color</th>
              <th scope="col">Make</th>
              <th scope="col">Model</th>
              <th scope="col">ID</th>
              <th scope="col">State</th>
              <th scope="col">Logo</th>
              <th scope="col">Count</th>
              <th scope="col">Ordered</th>
            </tr>
          </thead>

            <TableBody />

        </table>
      </div>

    );
  }
}

export default ProductTable;

// # of unique category's === # of table's
// # of category's === # of table <tr> rows
// # of keys's === # of table <td> columns

// <table className="table table-striped">
//   <thead>
//     <tr className="table-info">
//       <th colSpan={tempColSpan}>{`${category} ===============================================`}</th>
//     </tr>
//     <tr>
//       <th scope="col">Name</th>
//       <th scope="col">Price</th>
//       <th scope="col">Size</th>
//       <th scope="col">Color</th>
//       <th scope="col">Make</th>
//       <th scope="col">Model</th>
//       <th scope="col">ID</th>
//       <th scope="col">State</th>
//       <th scope="col">Logo</th>
//       <th scope="col">Count</th>
//       <th scope="col">Ordered</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Football</td>
//       <td>49.99</td>
//       <td>large</td>
//       <td>brown</td>
//       <td>NFL</td>
//       <td>Bullet</td>
//       <td>4001</td>
//       <td>CA</td>
//       <td>true</td>
//       <td>231</td>
//       <td>false</td>
//     </tr>
//   </tbody>
// </table>










