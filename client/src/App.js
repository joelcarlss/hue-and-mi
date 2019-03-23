import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './config/store'
import history from './config/history'
import Dashboard from './components/Dashboard/Dashboard.js'
import NotFound from './components/NotFound/NotFound'
import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
