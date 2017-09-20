import React from 'react';
import { render } from 'react-dom';
import Router from 'utils/Router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import theme from 'utils/Theme';

// Needed for React onTouchTap
injectTapEventPlugin();

const _App = (
  <MuiThemeProvider muiTheme={ theme }>
    <Router />
  </MuiThemeProvider>
);

// Render router object inside of app html element
render(_App, document.getElementById('app'));
