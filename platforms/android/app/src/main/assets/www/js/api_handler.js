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

//var db = window.openDatabase(name, version, displayName, estimatedSize);
var db = window.openDatabase('test.sqlite', '1.0', 'testdb', 1024 * 1024);
db.transaction(function (tx) { 
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")'); 
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")'); 
 });  
 
 db.transaction(function (tx) { 
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) { 
       var len = results.rows.length, i; 
       msg = "<p>Found rows: " + len + "</p>"; 
       console.log(msg); 
   
       for (i = 0; i < len; i++) { 
          alert(results.rows.item(i).log ); 
       } 
   
    }, null); 
 });