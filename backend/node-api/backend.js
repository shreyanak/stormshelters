// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
// https://www.w3schools.com/nodejs/nodejs_mysql.asp
// author: John Smith

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// MySQL connection
const mysql = require('mysql');
const con = mysql.createConnection({
    host:  "stormshelters-db.clwbujmk0ylk.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "StormShelters2023",
    database: "models"
});

// The following code is not for the faint of heart. Viewer discretion is advised.
con.connect(function(err) {
    if (err) throw err;
    
    app.get("/pharmacies/:id", (request, response) => {
        id = request.params;
        console.log(request.params)
        if (id.id > 0) {
            con.query("SELECT * from pharmacies_new WHERE id = " + id.id, function(err, myResult) {
                if (err) throw err;
                response.json(myResult);
            }); 
        } else {
            con.query("SELECT * from pharmacies_new", function(err, myResult) {
                if (err) throw err;
                response.json(myResult);
            }); 
        }
        // console.log(id);
    });
    
    app.get("/cities/:id", (request, response) => {
        id = request.params;
        console.log(request.params)
        if (id.id > 0) {
            con.query("SELECT * from cities_new WHERE id = " + id.id, function(err, myResult) {
                if (err) throw err;
                response.json(myResult);
            }); 
        } else {
            con.query("SELECT * from cities_new", function(err, myResult) {
                if (err) throw err;
                response.json(myResult);
            }); 
        }
        // console.log(id);
    });

    app.get("/shelters/:id", (request, response) => {
        id = request.params;
        console.log(request.params)
        if (id.id > 0) {
            con.query("SELECT * from shelters_new WHERE id = " + id.id, function(err, myResult) {
                if (err) throw err;
                response.json(myResult);
            }); 
        } else {
            con.query("SELECT * from shelters_new", function(err, myResult) {
                if (err) throw err;
                response.json(myResult);
            }); 
        }
        // console.log(id);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
