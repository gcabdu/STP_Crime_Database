//curl -X PUT "http://localhost:8000/new-incident" -H "Content-Type: application/json" -d "{\"case_number\": 1234, \"date\": \"2023-11-13\", \"incident\": \"student mischieft\"}"

import * as path from 'node:path';
import * as url from 'node:url';

import { default as express } from 'express';
import { default as sqlite3 } from 'sqlite3';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const db_filename = path.join(__dirname, 'db', 'stpaul_crime.sqlite3');

const port = 8000;

let app = express();
app.use(express.json());

/********************************************************************
 ***   DATABASE FUNCTIONS                                         *** 
 ********************************************************************/
// Open SQLite3 database (in read-write mode)
let db = new sqlite3.Database(db_filename, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log('Error opening ' + path.basename(db_filename));
    }
    else {
        console.log('Now connected to ' + path.basename(db_filename));
    }
});

// Create Promise for SQLite3 database SELECT query 
function dbSelect(query, params) {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
}

// Create Promise for SQLite3 database INSERT or DELETE query
function dbRun(query, params) {
    return new Promise((resolve, reject) => {
        db.run(query, params, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}

/********************************************************************
 ***   REST REQUEST HANDLERS                                      *** 
 ********************************************************************/
// GET request handler for crime codes
app.get('/codes', (req, res) => {
    console.log(req.query);

    let sql = 'Select * FROM Codes ORDER BY CODE';

    let params = [];

    //need to figure if the user entered a code value or not
    

    dbSelect(sql, params)
    .then((rows) =>{
        res.status(200).type('json').send(rows);
        console.log(rows);

    })
    .catch((error) =>{
        res.status(500).type('txt').send(error);

    })
});

// GET request handler for neighborhoods
app.get('/neighborhoods', (req, res) => {
    console.log(req.query);

    let query = 'SELECT * FROM neighborhoods';
    let params = [];

    // Check if 'neighborhood' is present in the query parameters
    if (req.query.hasOwnProperty('neighborhood')) {
        query += ' WHERE neighborhood_name = ?';
        params.push(req.query.neighborhood);
    }

    // Query the database for neighborhoods
    dbSelect(query, params)
        .then((rows) => {
            res.status(200).type('json').send(rows);
            console.log(rows);
        })
        .catch((error) => {
            res.status(500).type('txt').send(error);
        });
});



// GET request handler for crime incidents
app.get('/incidents', (req, res) => {
    console.log(req.query); // query object (key-value pairs after the ? in the URL)

    let query = 'SELECT * FROM incidents';
    let params = [];

    let count = 0;
    let limitCount = 0;

    if (req.query.hasOwnProperty('start_date')) {
        query += " WHERE date_time >= '?' ";
        params.push(req.query.date_time);
        count++;
    }

    if (req.query.hasOwnProperty('end_date')) {
        if (count > 0) {
            query += ' AND';
        } else {
            query += ' WHERE';
        }
        query += ' date_time <= ?';
        params.push(req.query.date_time);
        count++;
    }

    //BETWEEN {ts '2008-12-20 00:00:00'} AND {ts '2008-12-20 23:59:59'}

    if (req.query.hasOwnProperty('code')) {
        if (count > 0) {
            query += ' AND';
        } else {
            query += ' WHERE';
        }
        query += ' code = ?';
        params.push(req.query.code);
        count++;
    }

    if (req.query.hasOwnProperty('police_grid')) {
        if (count > 0) {
            query += ' AND';
        } else {
            query += ' WHERE';
        }
        query += ' police_grid = ?';
        params.push(req.query.police_grid);
        count++;
    }

    if (req.query.hasOwnProperty('neighborhood')) {
        if (count > 0) {
            query += ' AND';
        } else {
            query += ' WHERE';
        }
        query += ' neighborhood = ?';
        params.push(req.query.neighborhood);
        count++;
    }

    if (req.query.hasOwnProperty('limit')) {
        limitCount++;
        query += ' LIMIT ?';
        params.push(parseInt(req.query.limit)); 
    }

    if (limitCount === 0) {
        query += ' LIMIT 1000';
    }

    // Query the database for incidents
    dbSelect(query, params)
        .then((rows) => {
            res.status(200).type('json').send(rows);
            console.log(rows);
        })
        .catch((error) => {
            res.status(500).type('txt').send(error);
        });
});



// PUT request handler for new crime incident
app.put('/new-incident', (req, res) => {
    console.log(req.body); // uploaded data
    
    res.status(200).type('txt').send('OK'); // <-- you may need to change this
});

// DELETE request handler for new crime incident
app.delete('/remove-incident', (req, res) => {
    console.log(req.body); // uploaded data
    
    res.status(200).type('txt').send('OK'); // <-- you may need to change this
});

/********************************************************************
 ***   START SERVER                                               *** 
 ********************************************************************/
// Start server - listen for client connections
app.listen(port, () => {
    console.log('Now listening on port ' + port);
});
