import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from 'components/Home';
import Description from 'components/Description';
import Layout from 'components/Layout';
import history from 'utils/history';

const _Router = () =>
  <Router history={ history }>
    <Switch>
      <Route
        path={ `/description/` }
        render={ props =>
          <Layout>
            <Description { ...props }/>
          </Layout>
        }
      />
      <Route
        path={ `` }
        render={ props =>
          <Layout>
            <Home { ...props }/>
          </Layout>
        }
      />
    </Switch>
  </Router>

export default _Router;
