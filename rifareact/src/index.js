import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

import {
  HashRouter,
} from "react-router-dom";

const renderReactDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}
