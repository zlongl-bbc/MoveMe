import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Index } from './components/Index';
import { Connections } from './components/Connections';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Index} />
        <Route path='/connections' component={Connections} />
      </Layout>
    );
  }
}
