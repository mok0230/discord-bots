require('dotenv').config({ path: '../.env' });

const path = require('path');

const getTokenValue = (botPath) => {
  const basename = path.basename(botPath, '.js');
  console.log('basename', basename);
  const tokenName = `${basename.toUpperCase()}_TOKEN`
  return process.env[tokenName];
}

module.exports = { getTokenValue }