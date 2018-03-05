import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main/Main';
import { HashRouter } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
        <Main />
  </HashRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
