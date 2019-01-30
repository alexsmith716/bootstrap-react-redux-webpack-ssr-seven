import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TableHeadData extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    colSpan: PropTypes.number,
    category: PropTypes.string,
    data: PropTypes.string
  };

  static defaultProps = {
    colSpan: null
  };

  render() {

    // console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > this.props.colSpan:', this.props.colSpan);
    // console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > this.props.category:', this.props.category);
    // console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > this.props.data:', this.props.data);

    if (this.props.colSpan) {

      return (

        <th colSpan={this.props.colSpan}>{`${this.props.category.toUpperCase()} `}</th>

      );

    } else {

      return (

        <th scope="col">

          {this.props.data.charAt(0).toUpperCase()+this.props.data.slice(1)}

        </th>

      );
    }

    return (

      <th>

        TABLE HEAD DATA!

      </th>

    );
  }
}

export default TableHeadData;
