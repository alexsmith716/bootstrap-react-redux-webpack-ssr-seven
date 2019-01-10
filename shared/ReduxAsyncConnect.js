import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router';
import { trigger } from 'redial';
// import NProgress from 'nprogress';
import asyncMatchRoutes from '../server/utils/asyncMatchRoutes';

// --------------------------------------------------------------------------
// update component when the location changes
// render data which is dynamically loaded from API into a component on both server and client renders
// passing required data component via props
// rendering 'NProgress' loader if props are empty

// --------------------------------------------------------------------------
// HOC 'withRouter': get access to the history object's properties and the closest <Route>'s match
// 'withRouter' will pass updated match, location, and history props to the wrapped component whenever it renders
// Create a new component that is "connected" (redux terminology) to the router
// <Route> render methods are passed the same three route props: ('match', 'location', 'history')

@withRouter // 'react-router' passes updated (match, location, history) props (upon render)

// 'withRouter' does not subscribe to location changes like React Redux's connect does for state changes
// Instead, re-renders after location changes propagate out from the <Router> component
// This means that 'withRouter' does not re-render on route transitions unless its parent component re-renders
// --------------------------------------------------------------------------

// >>>>>>>>>>>> GETTING NAVIGATION 'history' (match, location, history)
// >>>>>>>>>>>> TESTING 'nextProps.location' VS 'location' TO SEE IF 'navigation' OCCURRED
// >>>>>>>>>>>> 'componentWillReceiveProps(nextProps)' invoked before mounted component receives new props
// >>>>>>>>>>>> evaluating 'current props' to 'nextProps' for PROP changes
// >>>>>>>>>>>> update the state in response to prop changes (reset it)

// >>>>>>>>>>>> 'static getDerivedStateFromProps(props, state)' VS 'componentWillReceiveProps(nextProps)'

// >>>>>>>>>>>> 'componentWillReceiveProps' is invoked before a mounted component receives new props
// >>>>>>>>>>>> 'getDerivedStateFromProps' is invoked right before calling the render method

// >>>>>>>>>>>> CHILDREN: Some components don't know their children ahead of time
// >>>>>>>>>>>> CHILDREN: common for components that represent generic 'boxes'
// >>>>>>>>>>>> CHILDREN: such components use special 'children' prop to pass 'children' elements directly into their output
// --------------------------------------------------------------------------

class ReduxAsyncConnect extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired
  };

  state = {
    previousLocation: null
  };

  UNSAFE_componentWillMount() {
    // NProgress.configure({ trickleSpeed: 222200 });
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillMount() <<<<<<<<<<<<<<');
  }

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentDidMount() <<<<<<<<<<<<<<');
  }

  componentWillUnmount() {
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentWillUnmount() <<<<<<<<<<<<<<');
  }

  componentDidUpdate() {
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentDidUpdate() <<<<<<<<<<<<<<');
  }

  async UNSAFE_componentWillReceiveProps(nextProps) {

    const { history, location, routes } = this.props;
    const navigated = nextProps.location !== location;

    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentWillReceiveProps() > __CLIENT__ ?: ', __CLIENT__);
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentWillReceiveProps() > __SERVER__ ?: ', __SERVER__);

    // test if location has changed
    // if location changed, update the state in response to location prop changes
    // a page refresh has both 'locations' returning false (same key values)
    // (key prop to prevent remounting component when transition was made from route with the same component and same key prop)

    // If you used componentWillReceiveProps to 'reset' some state when a prop changes, 
    // consider either making a component fully controlled or fully uncontrolled with a key instead.

    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentWillReceiveProps() > navigated?:', navigated);

    if (navigated) {

      // NProgress.start();
      this.setState({ previousLocation: location });

      console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentWillReceiveProps() > navigated > routes:', routes);
      console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > componentWillReceiveProps() > navigated > nextProps.location.pathname:', nextProps.location.pathname);

      // load data while the old screen remains
      const { components, match, params } = await asyncMatchRoutes(routes, nextProps.location.pathname);

      const triggerLocals = {
        match,
        params,
        history,
        location: nextProps.location
      };

      await trigger('fetch', components, triggerLocals);
      
      if (__CLIENT__) {
        await trigger('defer', components, triggerLocals);
      }

      // clear 'previousLocation' so the next screen renders
      this.setState({ previousLocation: null });

      // NProgress.done();
    }
  }

  // ----------------------------------------------------------------------------------------------------------

  render() {
    const { children, location } = this.props;
    const { previousLocation } = this.state;

    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > children:', children);
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > location:', location);
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > previousLocation:', previousLocation);

    const theRoute = <Route location={previousLocation || location} render={() => children} />;
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > <Route>:', theRoute);

    return <Route location={previousLocation || location} render={() => children} />;
  }
}

export default ReduxAsyncConnect;
