// this module should take in the data acquiured from the scan
// and send it over to the rowkeeper api or whatever
// then return the api response
// so something like
var apiComms = function(inputdata) {
    // parse input
    // package input for sending to the world
    var parsedData = dataParser(inputdata);

    // send the stuff out to the server
    // whatever request apicoms needs to wait for the response
    // promises or callbacks will be needed.
    var apiResults = somekindaserverrequest(parsedData);

    // return the results 
    return apiResults;
};

// const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./model_database/test_database.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to a database!');
});

db.close();