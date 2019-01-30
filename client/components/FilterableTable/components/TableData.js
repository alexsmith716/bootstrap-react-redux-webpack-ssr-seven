import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TableData extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    // data: PropTypes.
  };

  static defaultProps = {
    //
  };

  render() {

    // console.log('>>>>>>>>>>>>>>>> TableData !!!!!!! > this.props.data:', this.props.data);

    const d = JSON.stringify(this.props.data);

    return (

        <td>

          { d }

        </td>

    );
  }
}

export default TableData;
