import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory'
import Home from './pages/Homepage/Homepage'
import DOZ from './pages/DOZ/DOZ'
import POD from './pages/POD/POD'
import EL from './pages/EL/EL'
import About from './pages/About/About'
import Nav from './components/Nav/Nav'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/the-near-death-of-zaoura', name: 'DOZ', Component: DOZ },
  { path: '/a-politics-of-dissassembly', name: 'POD', Component: POD },
  { path: '/evidencing-life', name: 'EL', Component: EL },
]

const history = createHistory()
export default () => (
    <Router history={history}>
      <Nav/>
      <Route
        render={({ location }) => {
        const {key} = location

          return(
            <TransitionGroup component={null}>
                <CSSTransition
                key={key}
                appear={true}
                classNames="my-node"
                timeout={{enter: 1000, exit: 500}}
                >
                <Switch location={location}>
                  {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                      {({ match }) => (
                        <div className="my-node">
                          <Component/>
                        </div>
                      )}
                    </Route>
                  ))}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )    
        }}
      />
    </Router>
  )