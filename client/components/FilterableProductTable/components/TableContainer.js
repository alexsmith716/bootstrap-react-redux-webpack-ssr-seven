import React, { Component } from 'react';


class TableContainer extends Component {

  render() {

    const item = this.props.item;

    return (

      <div>

        {item}

      </div>

    );
  }
}

export default TableContainer;
