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

var testdb = function(){
    var db = window.openDatabase("testDB", "1.0", "Demo DB", 5000);
    db.transaction(populateDB, errorCB, successCB);

    function populateDB(tx){
        tx.executeSql('DROP TABLE IF EXIST sample');
        tx.executeSql('CREATE TABLE IF NOT EXISTS sample (formattr_id unique, formattr_formid)');

    };

    function errorCB(tx, err){
        console.log("SQL error :(  " + err);
    }

    function successCB() {
        console.log("SQL was sucess");
    }
};