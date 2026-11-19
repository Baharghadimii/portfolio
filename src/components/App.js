import React from 'react';
import Home from './home'
import Projects from './projects'
import Work from './work'
import './App.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <div className="App" id="App">
      <Router>
        <Route render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' component={Home}>
                <Home />
              </Route>
              <Route path="/projects" component={Projects}>
                <Projects />
              </Route>
              <Route path="/work" component={Work} />
            </Switch>
          </AnimatePresence>
        )}></Route>
      </Router>
    </div>

  );
}

export default App;
