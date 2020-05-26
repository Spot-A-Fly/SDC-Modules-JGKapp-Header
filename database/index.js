const { Pool } = require('pg');

const pool = new Pool({
  database: 'artists',
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
