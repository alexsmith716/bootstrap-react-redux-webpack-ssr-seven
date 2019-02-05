import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router';
import { trigger } from 'redial';
// import NProgress from 'nprogress';
import asyncMatchRoutes from '../server/utils/asyncMatchRoutes';

// https://github.com/markdalgleish/redial
// https://github.com/ReactTraining/history
// https://github.com/ReactTraining/react-router/blob/4abe54152400fb987e31d063ad85293551db0032/packages/react-router/docs/api/withRouter.md
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#route
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md#location

// Server-side Data Fetching ============================================================================

// WHAT IS <ReduxAsyncConnect /> DOING?

// The redial package exposes an API to return promises that need to be fulfilled before a route is rendered
// The <ReduxAsyncConnect /> component, wraps the render tree on both server and client

// --------------------------------------------------------------------------
// update component when the location changes
// render data which is dynamically loaded from API into a component on both server and client renders
// passing required data component via props
// rendering 'NProgress' loader if props are empty

// --------------------------------------------------------------------------
// HOC 'withRouter': get access to the history object's properties and the closest <Route>'s match
// 'withRouter' will pass updated match, location, and history props to the wrapped component whenever it renders
// Create a new component that is "connected" (redux terminology) to the router

// History object properties:
//  history.length - The number of entries in the history stack
//  history.location - The current location (see below)
//  history.action - The current navigation action (PUSH, REPLACE, POP)

// passes updated (match, location, history) props (upon render)
// const { match, location, history } = this.props;

@withRouter 

// 'withRouter' does not subscribe to location changes like React Redux's connect does for state changes
// Instead, re-renders after location changes propagate out from the <Router> component
// This means that 'withRouter' does not re-render on route transitions unless its parent component re-renders
// --------------------------------------------------------------------------

// >>>>>>>>>>>> GETTING NAVIGATION 'history' (match, location, history)
// >>>>>>>>>>>> TESTING 'nextProps.location' VS 'location' TO SEE IF 'navigation' OCCURRED
// >>>>>>>>>>>> 'componentWillReceiveProps(nextProps)' invoked before mounted component receives new props
// >>>>>>>>>>>> evaluating 'current props' to 'nextProps' for PROP changes
// >>>>>>>>>>>> update the state in response to prop changes (reset it)

// >>>>>>>>>>>> older componentWillReceiveProps(nextProps) >>> newer getDerivedStateFromProps(props, state)
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

  // Instance Properties
  state = {
    previousLocation: null,
    lastLocation: null,
  };

  // invoked right before calling the render method, both on the initial mount and on subsequent updates
  // invoked after a component is instantiated as well as before it is re-rendered
  // can return an object to update state, or null to indicate that the new props do not require any state updates
  // updates the state based on props or update nothing
  static getDerivedStateFromProps(props, state) {

    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > getDerivedStateFromProps() > props.location: ', props.location);
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > getDerivedStateFromProps() > state.lastLocation: ', state.lastLocation);

    const navigated = props.location !== state.lastLocation;

    if (navigated) {

      console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > getDerivedStateFromProps() > YES NAVIGATE! <<<<<<<<<<');

      return {
        previousLocation: null,
        lastLocation: props.location
      }

    }

    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > getDerivedStateFromProps() > NO NAVIGATE! <<<<<<<<<<');
    return null;

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


  // // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config#matchroutesroutes-pathname
  // async UNSAFE_componentWillReceiveProps(nextProps) {

  //   // invoked before a mounted component receives new props
  //   // using 'componentWillReceiveProps' to 'reset' state when a prop changes
  //   // alternative (v17): make component fully controlled or fully uncontrolled with a key

  //   // Instance Properties
  //   const { history, location, routes } = this.props;
  //   const navigated = nextProps.location !== location;

  //   console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > __CLIENT__ ?: ', __CLIENT__);
  //   console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > __SERVER__ ?: ', __SERVER__);

  //   console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > history:', history);
  //   console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > location:', location);
  //   console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > routes:', routes);

  //   // test if location has changed
  //   // if location changed, update the state in response to location prop changes
  //   // a page refresh has both 'locations' returning false (same key values)
  //   // (key prop to prevent remounting component when transition was made from route with the same component and same key prop)

  //   // If you used componentWillReceiveProps to 'reset' some state when a prop changes, 
  //   // consider either making a component fully controlled or fully uncontrolled with a key instead.

  //   console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > navigated?:', navigated);

  //   if (navigated) {

  //     NProgress.start();

  //     // ==================================================================================================
  //     // Currently Not Loading data on the server or in the lifecycle before rendering the next screen
  //     // ==================================================================================================

  //     // save the location so we can render the old screen
  //     // this.setState({ previousLocation: location });

  //     console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > navigated > routes:', routes);
  //     console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > navigated > nextProps.location.pathname:', nextProps.location.pathname);

  //     // load data while the old screen remains
  //     // const { components, match, params } = await asyncMatchRoutes(routes, nextProps.location.pathname);

  //     // console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > UNSAFE_componentWillReceiveProps() > navigated > components:', components);

  //     // const triggerLocals = {
  //     //   match,
  //     //   params,
  //     //   history,
  //     //   location: nextProps.location
  //     // };

  //     // await trigger('fetch', components, triggerLocals);
  //     // 
  //     // if (__CLIENT__) {
  //     //   await trigger('defer', components, triggerLocals);
  //     // }

  //     // clear 'previousLocation' so the next screen renders
  //     this.setState({ previousLocation: null });

  //     NProgress.done();
  //   }
  // }

  // ----------------------------------------------------------------------------------------------------------

  render() {

    // Instance Properties
    const { children, location } = this.props;
    const { previousLocation } = this.state;

    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > children:', children);
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > location:', location);
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > previousLocation:', previousLocation);

    const theRoute = <Route location={previousLocation || location} render={() => children} />;
    console.log('>>>>>>>>>>>>>>>> ReduxAsyncConnect > render() > <Route>:', theRoute);

    // <Route/>: render some UI when a location matches the route's path 
    // location: (property) where the app is now, where you want it to go,where it was
    // render: (function) allows for inline rendering and wrapping without remounting
    return <Route location={previousLocation || location} render={() => children} />;
  }
}

export default ReduxAsyncConnect;
