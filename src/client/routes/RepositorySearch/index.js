import React, { useState, useCallback } from 'react';
import {
  Input, Button, Box, Typography, makeStyles, Grid
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const RepositorySearch = () => {
  const styles = makeStyles(() => ({
    input: {
      marginRight: '1rem',
    },
    title: {
      marginBottom: '1.5rem',
    },
    container: {
      background: '#f0f0f0',
      borderRadius: '10px',
      padding: '1rem',
    },
    resultsContainer: {
      marginTop: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    resultContainer: {
      margin: '0.25rem 0'
    },
  }))();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const sendRequest = useCallback(async () => {
    if (isLoading) {
      return;
    }
    setLoading(true);
    try {
      const data = await fetch(`./api/search/repositories?searchTerm=${searchTerm}`).then(response => response.json());
      setResults(data.items);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [isLoading, results, searchTerm]);


  return (
    <Box className={styles.container}>
      <Grid container>
        <Grid item xs={12} sm={9}>
          <Typography variant="h3" className={styles.title}>Repo explorer</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input className={styles.input} autoFocus onKeyUp={event => setSearchTerm(event.target.value)}>Hello world!</Input>
          <Button onClick={sendRequest}>Search</Button>
        </Grid>
      </Grid>
      <Box className={styles.resultsContainer}>
        {isLoading && <span>Loading...</span>}
        {!isLoading && results.length > 0 && (results.map(result => (
          <Box className={styles.resultContainer} key={result.id}>
            <Typography><Link to={`/repo/${result.full_name}`}>{result.name}</Link></Typography>
          </Box>
        )))}
        {!isLoading && results.length === 0 && <span>No results to show</span>}
      </Box>
    </Box>
  );
};

export default RepositorySearch;
