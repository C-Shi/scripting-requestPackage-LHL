const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => {
    throw err;
  })
  .on('response', (response) => {
    console.log(response.statusMessage);
    console.log(response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'));