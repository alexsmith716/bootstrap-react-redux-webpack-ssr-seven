import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';

// null: 'no value' for numbers and strings,  objects
// Composition vs Inheritance


class TableHead extends Component {

  constructor(props) {

    super(props);

    // this.state = {

    // };
  }

  static propTypes = {
    category: PropTypes.string,
    heading: PropTypes.array
  };

  static defaultProps = {
    //
  };

  render() {

    // const category = this.props.data.category;
    // console.log('>>>>>>>>>>>>>>>> TableHead > this.props.data:', this.props.data);
    // const tempColSpan = Object.keys(this.props.data).length - 2;
    // console.log('>>>>>>>>>>>>>>>> TableHead > tempColSpan:', tempColSpan);

    // console.log('>>>>>>>>>>>>>>>> TableHead !!!!!!! > this.props.category:', this.props.category);
    // console.log('>>>>>>>>>>>>>>>> TableHead !!!!!!! > this.props.heading:', this.props.heading);

    const rows = [];

    rows.push( <TableRow type="thead" className="table-info" colSpan={ this.props.heading.length } category={ this.props.category } key="table-info" /> );

    rows.push( <TableRow type="thead" data={ this.props.heading } key={this.props.heading} /> );

    return (

      <thead>

        {rows}

      </thead>

    );
  }
}

export default TableHead;

//
// <table className="table table-striped">

//   <thead>

//     <tr className="table-info">
//       <th colSpan={tempColSpan}>{`${category} `}</th>
//     </tr>

//     <tr>
//       <th scope="col">Name</th>
//       <th scope="col">Price</th>
//     </tr>

//   </thead>
