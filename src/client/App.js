import React from 'react';
import './app.css';
import {
  Box, CssBaseline
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RepositorySearch from './routes/RepositorySearch';
import RepositoryDetails from './routes/RepositoryDetails';

const App = () => (
  <>
    <CssBaseline />
    <Router>
      <Box>
        <Box>
          <Switch>
            <Route exact path="/">
              <RepositorySearch />
            </Route>
            <Route path="/repo">
              <RepositoryDetails />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  </>
);

export default App;
