import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class JsonComponentLoader extends React.Component {
  
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

    console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() <<<<<<<<<<<<<<');
    console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > typeof props.requestURL: ', typeof this.props.requestURL);
    console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > props.requestURL: ', this.props.requestURL);

    axios.get(decodeURI(this.props.requestURL))
      .then(response => {
        console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > json > SUCCESS typeof: ', typeof response.data);
        console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > json > SUCCESS data: ', response.data);
        this.setState({ data: response.data });
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > json > ERROR.response.data: ', error.response.data);
          console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > json > ERROR.response.status: ', error.response.status);
          console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > json > ERROR.response.headers: ', error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > json > ERROR.message: ', error.message);
        }
        console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > componentDidMount() > json > ERROR.config: ', error.config);
      });
  }

  render () {

    let Component = this.props.component;

    console.log('>>>>>>>>>>>>>>>> JsonComponentLoader > render() > Component!!!: ', this.props.component);

    return <Component content={ this.state.data } />;

  }
}

export default JsonComponentLoader;
