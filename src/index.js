import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './js/containers/AppContainer';

// Import the required CSS
require("normalize.css/normalize.css");
require("./scss/index.scss");

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app')
);