const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgres://yrjykrrwaygxcv:8e4f3d66ae34cc59cbb9f91953bdd2a8be7a7271c19df48cd72b01fc20eaca63@ec2-34-192-173-173.compute-1.amazonaws.com:5432/dca2jbt8d07jeh',
  ssl: {
    rejectUnauthorized: false
  }
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
module.exports = router;

