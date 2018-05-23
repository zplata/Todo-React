import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainView from './components/MainView/main-view';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CssBaseline>
    <MainView />
  </CssBaseline>,
  document.getElementById('root'),
);
registerServiceWorker();
