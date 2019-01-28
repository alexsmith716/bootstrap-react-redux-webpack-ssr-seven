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
    data: PropTypes.array
  };

  static defaultProps = {
    colSpan: null
  };

  render() {

    // console.log('>>>>>>>>>>>>>>>> TableHeadData > DATA:', this.props.data);

    const rows = [];

    if (this.props.colSpan) {

      console.log('>>>>>>>>>>>>>>>> TableHeadData > this.props.colSpan > YESSSSSSS <<<<<<<<<<<<<<<');

      return (

        <th colSpan={this.props.colSpan}>{`${this.props.category} `}</th>

      );

    } else {

      console.log('>>>>>>>>>>>>>>>> TableHeadData > this.props.colSpan > NOOOOOOOO <<<<<<<<<<<<<<<');

      return (

        <th scope="col">Name 1</th>

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
