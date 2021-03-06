﻿var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
		rejectUnauthorized : false
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TING',
												title1: 'Lab 2' });
});

router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

router.get('/db2', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table2');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db2', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
	
	router.get('/db2/accion', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table2 WHERE genre LIKE \'Acci¢n\'');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db2', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
	
router.get('/db2/drama', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table2 WHERE genre LIKE \'Drama\'');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db2', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
	
router.get('/db2/ficcion', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table2 WHERE genre LIKE \'Ciencia Ficci¢n\'');
      const results = { 'results': (result) ? result.rows : null};
      res.render('db2', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
module.exports = router;
