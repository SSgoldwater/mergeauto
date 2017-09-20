import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/Home';
import Layout from 'components/Layout';
import history from 'utils/history';

const _Router = () =>
  <Router history={ history }>
    <Switch>
      <Route
        path={ `/` }
        render={ props =>
          <Layout>
            <Home { ...props }/>
          </Layout>
        }
      />
    </Switch>
  </Router>

export default _Router;
