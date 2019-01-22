import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import FilterableProductTable from './components/FilterableProductTable';

class ThinkingInReact extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      data: []
    };
  }

  static propTypes = {
    requestURL: PropTypes.string
  };

  componentDidMount() {

    console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() <<<<<<<<<<<<<<');
    console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > typeof props.requestURL: ', typeof this.props.requestURL);
    console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > props.requestURL: ', this.props.requestURL);

    axios.get(decodeURI(this.props.requestURL))
      .then(response => {
        console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > json > SUCCESS 1: ', typeof response.data);
        console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > json > SUCCESS 2: ', response.data);
        this.setState({ data: response.data });
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > json > ERROR.response.data: ', error.response.data);
          console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > json > ERROR.response.status: ', error.response.status);
          console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > json > ERROR.response.headers: ', error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > json > ERROR.message: ', error.message);
        }
        console.log('>>>>>>>>>>>>>>>> ThinkingInReact > componentDidMount() > json > ERROR.config: ', error.config);
      });
  }

  render () {

    const styles = require('./scss/ThinkingInReact.scss');

    return <FilterableProductTable data={ this.state.data } />;

  }
}

export default ThinkingInReact;
