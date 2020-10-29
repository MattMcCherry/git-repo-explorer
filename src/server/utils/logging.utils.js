const moment = require('moment');
const fs = require('fs');

const getLogs = async () => new Promise((resolve, reject) => {
  fs.readFile('logs.json', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

const storeLogs = async logs => new Promise((resolve, reject) => {
  if (logs) {
    fs.writeFile('logs.json', JSON.stringify(logs), (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  } else {
    reject(new Error('No logs object provided'));
  }
});

exports.logSearchRequest = async (searchTerm) => {
  try {
    const data = await getLogs();
    const logs = JSON.parse(data);
    logs.requests.push({ searchTerm, timestamp: moment().format() });
    await storeLogs(logs);
    return true;
  } catch (err) {
    throw err;
  }
};
