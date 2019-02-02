import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TableRow extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    colSpan: PropTypes.number,
    category: PropTypes.string,
    data: PropTypes.array
  };

  static defaultProps = {
    // type: null,
    // className: null
  };

  render() {

    // console.log('>>>>>>>>>>>>>>>> TableRow > this.props.className:', this.props.className);
    // console.log('>>>>>>>>>>>>>>>> TableRow > this.props.category:', this.props.category);
    // console.log('>>>>>>>>>>>>>>>> TableRow > this.props.colSpan:', this.props.colSpan);
    // console.log('>>>>>>>>>>>>>>>> TableRow > this.props.data:', this.props.data);

    let rows = [];

    if (this.props.type) {

      if (this.props.className) {

        // console.log('>>>>>>>>>>>>>>>> TableRow > 111111111111111111 <<<<<<<<<<<<<<');

        return (

          <tr className="table-info">
            <th colSpan={this.props.colSpan}>{`${this.props.category.toUpperCase()} `}</th>
          </tr>
        );

      } else {

        // console.log('>>>>>>>>>>>>>>>> TableRow > 22222222222222222222 <<<<<<<<<<<<<<');

        const thDataCols = this.props.data.map((object, index) =>

          <th scope="col" key={index}>

            { object.charAt(0).toUpperCase()+object.slice(1) }

          </th>
        );

        return (

          <tr>

            { thDataCols }

          </tr>
        );
      }

    } else {

      // console.log('>>>>>>>>>>>>>>>> TableRow > 333333333333333333 <<<<<<<<<<<<<<');

      const tDataCols = this.props.data.map((object, index) =>

        <td key={index}>

          { object }

        </td>
      );

      return (

        <tr>

          { tDataCols }

        </tr>
      );
    }
  }
}

export default TableRow;
