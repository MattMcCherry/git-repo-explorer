import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const RepositoryDetails = () => {
  const { owner, repo } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

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
    <Box>
      {isLoading && <span>loading</span>}
      {!isLoading && data && <span>{data.name}</span>}
    </Box>
  );
};

export default RepositoryDetails;
