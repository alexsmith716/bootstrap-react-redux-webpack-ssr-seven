import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProductTable extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  // static propTypes = {

  // };

  render() {

    const styles = require('./scss/ProductTable.scss');

    return (

      <div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr className="table-info">
                <th colSpan="11">Sporting Goods ====================================================</th>
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
            <tbody>
              <tr>
                <td>Football</td>
                <td>49.99</td>
                <td>large</td>
                <td>brown</td>
                <td>NFL</td>
                <td>Bullet</td>
                <td>4001</td>
                <td>CA</td>
                <td>true</td>
                <td>231</td>
                <td>false</td>
              </tr>
              <tr>
                <td>Baseball</td>
                <td>9.99</td>
                <td>large</td>
                <td>white</td>
                <td>MLB</td>
                <td>Home Run</td>
                <td>2001</td>
                <td>NJ</td>
                <td>false</td>
                <td>478</td>
                <td>false</td>
              </tr>
              <tr>
                <td>Basketball</td>
                <td>29.99</td>
                <td>large</td>
                <td>orange</td>
                <td>NBA</td>
                <td>Dunk</td>
                <td>65</td>
                <td>NY</td>
                <td>true</td>
                <td>0</td>
                <td>true</td>
              </tr>
              <tr>
                <td>Football</td>
                <td>49.99</td>
                <td>large</td>
                <td>brown</td>
                <td>NFL</td>
                <td>Bullet</td>
                <td>4001</td>
                <td>CA</td>
                <td>true</td>
                <td>231</td>
                <td>false</td>
              </tr>
              <tr>
                <td>Baseball</td>
                <td>9.99</td>
                <td>large</td>
                <td>white</td>
                <td>MLB</td>
                <td>Home Run</td>
                <td>2001</td>
                <td>NJ</td>
                <td>false</td>
                <td>478</td>
                <td>false</td>
              </tr>
              <tr>
                <td>Basketball</td>
                <td>29.99</td>
                <td>large</td>
                <td>orange</td>
                <td>NBA</td>
                <td>Dunk</td>
                <td>65</td>
                <td>NY</td>
                <td>true</td>
                <td>0</td>
                <td>true</td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className="table table-striped">
          <thead>
            <tr className="table-info">
              <th colSpan="11">Sporting Goods Small</th>
            </tr>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Football</td>
              <td>49.99</td>
            </tr>
            <tr>
              <td>Baseball</td>
              <td>9.99</td>
            </tr>
            <tr>
              <td>Basketball</td>
              <td>29.99</td>
            </tr>
          </tbody>
        </table>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr className="table-info">
                <th colSpan="11">Electronics</th>
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
            <tbody>
              <tr>
                <td>Football</td>
                <td>49.99</td>
                <td>large</td>
                <td>brown</td>
                <td>NFL</td>
                <td>Bullet</td>
                <td>4001</td>
                <td>CA</td>
                <td>true</td>
                <td>231</td>
                <td>false</td>
              </tr>
              <tr>
                <td>Baseball</td>
                <td>9.99</td>
                <td>large</td>
                <td>white</td>
                <td>MLB</td>
                <td>Home Run</td>
                <td>2001</td>
                <td>NJ</td>
                <td>false</td>
                <td>478</td>
                <td>false</td>
              </tr>
              <tr>
                <td>Basketball</td>
                <td>29.99</td>
                <td>large</td>
                <td>orange</td>
                <td>NBA</td>
                <td>Dunk</td>
                <td>65</td>
                <td>NY</td>
                <td>true</td>
                <td>0</td>
                <td>true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default ProductTable;

// # of unique category's === # of table's
// # of category's === # of table <tr> rows
// # of keys's === # of table <td> columns
