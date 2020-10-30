import React from 'react';
import './app.css';
import {
  Box, CssBaseline, makeStyles
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RepositorySearch from './routes/RepositorySearch';
import RepositoryDetails from './routes/RepositoryDetails';

const App = () => {
  const styles = makeStyles(() => ({
    pageContainer: {
      minHeight: '100vh',
      background:
      'linear-gradient(90deg, rgba(23,106,243,1) 0%, rgba(0,156,239,1) 100%)',
      padding: '1rem',
    },
    contentContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    }
  }))();
  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.contentContainer}>
        <CssBaseline />
        <Router>
          <Box>
            <Box>
              <Switch>
                <Route exact path="/">
                  <RepositorySearch />
                </Route>
                <Route path="/repo/:owner/:repo">
                  <RepositoryDetails />
                </Route>
              </Switch>
            </Box>
          </Box>
        </Router>
      </Box>
    </Box>
  );
};

export default App;
