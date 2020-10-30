const axios = require('axios');

exports.search_respositories = searchTerm => new Promise(async (resolve, reject) => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&sort=stars`, { headers: { Accept: 'application/vnd.github.v3+json' } });
    resolve(response.data);
  } catch (err) {
    reject(err);
  }
});
