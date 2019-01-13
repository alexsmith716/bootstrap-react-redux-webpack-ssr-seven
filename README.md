# bootstrap-react-redux-webpack-ssr-seven

## Overview:

App is a continuation of repo `bootstrap-react-redux-webpack-ssr-six`. Picks up at last push `refactor-scss-dir-structure-modified-app-scss-directory-structure-and-games-tictactoe-directory` of `bootstrap-react-redux-webpack-ssr-six`.

(made several changes to `bootstrap-react-redux-webpack-ssr-six` and simply decided to revert back to last push (Git))

Initial push of this app is `refactor(dev config devtool): using devtool inline-source-map for client and source-map for server`.


### REACT COMPONENT CLASS OVERVIEW:

UNSAFE_: encourage unsafe coding practices


Mounting: component rendered to DOM for the first time

  * getInitialState (ES5)
  * constructor(props) (ES6)
  ---------------------------------------------
  * UNSAFE_componentWillMount()
  ---------------------------------------------
  * render
  * componentDidMount()


Updating: ReactDOM 'updates' DOM

  * UNSAFE_componentWillReceiveProps(nextProps)
  * static getDerivedStateFromProps(props, state)
  ---------------------------------------------
  * UNSAFE_componentWillUpdate(nextProps, nextState)
  * shouldComponentUpdate(nextProps, nextState)
  ---------------------------------------------
  * render
  * getSnapshotBeforeUpdate(prevProps, prevState)
  * componentDidUpdate(prevProps, prevState, snapshot)


Unmounting: component removed from DOM
 
  * componentWillUnmount



Other Component API's:

  * setState()
  * forceUpdate()


Class Properties:

  * defaultProps
  * displayName


Instance Properties:

  * props
  * state



### ENCOUNTERED ERRORS/WARNINGS:

#### Warning: Can't perform a React state update on an unmounted component

* Reproducible: 

> SSR route
> SPA route
> edit SSR'd route
> SPA SSR'd/edited route

transform static class properties && properties declared with the property initializer syntax
https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html

Below is a class with four class properties which will be transformed.

`  
class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    };
    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    };
  }
  `

`
  let myBork = new Bork;
  //Property initializers are not on the prototype.
  console.log(myBork.__proto__.boundFunction); // > undefined
  //Bound functions are bound to the class instance.
  console.log(myBork.boundFunction.call(undefined)); // > "bork"
  //Static function exists on the class.
  console.log(Bork.staticFunction()); // > "babelIsCool"
  `

Option:

`loose` (default `false`).

> `true`: class properties are compiled to use an assignment expression instead of `Object.defineProperty`.

`
  class Bork {
    static a = 'foo';
    static b;
    x = 'bar';
    y;
  }
  `

`{ "loose": false }`:

`
  var Bork = function Bork() {
  babelHelpers.classCallCheck(this, Bork);
  Object.defineProperty(this, "x", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'bar'
  });
  Object.defineProperty(this, "y", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: void 0
  });
};
Object.defineProperty(Bork, "a", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'foo'
});
Object.defineProperty(Bork, "b", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: void 0
});
`

`{ "loose": true }`:

`
var Bork = function Bork() {
  babelHelpers.classCallCheck(this, Bork);
  this.x = 'bar';
  this.y = void 0;
};
`

`
Bork.a = 'foo';
Bork.b = void 0;
`
























