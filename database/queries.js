const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'uozonedb',
  password: 'admin',
  port: 5432,
})

module.exports = pool