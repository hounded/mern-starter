import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//Material UI
import muiTheme from '../muiTheme.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// Base stylesheet
require('./main.css');
const history = browserHistory;



export default function App(props) {
  return (
    <Provider store={props.store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={history}>
          {routes}
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
