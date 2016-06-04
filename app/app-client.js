/*global ReactDOM */
'use strict';

const App = require('../components/App.react');

const render = function () {
  ReactDOM.render(
    <App />,
    document.getElementById('content')
  );
};

render();
