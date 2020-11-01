const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
		rejectUnauthorized : false
	}
});

var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/db2/ficcion', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table2 WHERE genre LIKE \'Ficción\'');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db2', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
	
module.exports = router;

