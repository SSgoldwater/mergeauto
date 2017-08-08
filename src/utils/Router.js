import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';
import Home from '../components/home/Home';
import Login from '../components/layout/Login';
import theme from './Theme';

const _Router = (
  <MuiThemeProvider muiTheme={ theme }>
    <Router history={ history }>
      <App>
        <Route
          path="/home"
          render={ (props) => <Home { ...props }/> }
        />
        <Route path="/login" component={ Login }/>
      </App>
    </Router>
  </MuiThemeProvider>
);

export default _Router;
