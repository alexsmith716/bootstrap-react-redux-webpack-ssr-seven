import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TableHeadData extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    // colSpan: PropTypes.number,
    // category: PropTypes.string,
    // data: PropTypes.array
  };

  static defaultProps = {
    colSpan: null
  };

  render() {

    // console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > this.props.colSpan:', this.props.colSpan);
    // console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > this.props.category:', this.props.category);
    // console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > this.props.data:', this.props.data);

    // {this.props.data.charAt(0).toUpperCase()+this.props.data.slice(1)}
    if (this.props.colSpan) {

      console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > COLSPAN > CATEGORY:', this.props.colSpan, ' :: ', this.props.category);

      return (

        <th colSpan={this.props.colSpan}>{`${this.props.category.toUpperCase()} `}</th>

      );

    } else {

      console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > th scope > this.props.data:', this.props.data);

      const thData = this.props.data.map((object, index) =>
        { Object.values(object) }
      );

      console.log('>>>>>>>>>>>>>>>> TableHeadData !!!!!!! > th scope > thData:', thData);

      return (

        <th scope="col">

          { thData }

        </th>

      );
    }
  }
}

export default TableHeadData;
