import React, { useState } from 'react';
import {
  Input, Button, Box, Link, Typography
} from '@material-ui/core';

const RepositorySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const getSearchResults = async () => {
    try {
      const data = await fetch(`./api/search/repositories?searchTerm=${searchTerm}`).then(response => response.json());
      setResults(data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Input autoFocus onKeyUp={event => setSearchTerm(event.target.value)}>Hello world!</Input>
      <Button onClick={getSearchResults}>Search</Button>
      {results > 0 && (results.map(result => (<Typography><Link to={{ pathname: '/repo', state: { result } }}>{result.name}</Link></Typography>)))}
    </Box>
  );
};

export default RepositorySearch;
