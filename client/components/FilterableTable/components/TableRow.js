import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeadData from './TableHeadData';
import TableData from './TableData';


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

    if (this.props.type && this.props.className) {

      return (

        <tr className="table-info">
          <TableHeadData colSpan={ this.props.colSpan } category={ this.props.category } />
        </tr>
      );

    } else if (this.props.type && !this.props.className) {

      rows = this.props.data.map((object, index) =>
        <TableHeadData key={index} data={object} />
      );

      return (

        <tr>

          {rows}

        </tr>
      );

    } else {

      rows = this.props.data.map((object, index) =>
        <TableData key={index} data={object} />
      );

      return (

        <tr>

          {rows}

        </tr>
      );
    }
  }
}

export default TableRow;
