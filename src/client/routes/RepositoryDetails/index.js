import React, { useEffect, useState } from 'react';
import {
  Box, Button, makeStyles, Grid, Typography
} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

const RepositoryDetails = () => {
  const { owner, repo } = useParams();
  const history = useHistory();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const styles = makeStyles(() => ({
    title: {
      marginBottom: '1.5rem',
    },
    container: {
      background: '#f0f0f0',
      borderRadius: '10px',
      padding: '1rem',
    },
  }))();

  const getData = async () => {
    if (isLoading || data) {
      return;
    }
    setLoading(true);
    try {
      const repoDetails = await fetch(`https://api.github.com/repo/${owner}/${repo}`).then(response => response.json());
      setData(repoDetails);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box className={styles.container}>
      <Button type="button" onClick={() => history.goBack()}>
        Back
      </Button>
      {isLoading && <span>Loading...</span>}
      {!isLoading && data && (
      <Grid container>
        <Grid item xs={12} sm={9}>
          <Typography variant="h3">{data.name}</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h3">.</Typography>
        </Grid>
      </Grid>
      )}
    </Box>
  );
};

export default RepositoryDetails;
