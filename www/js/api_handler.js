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

var testDB = function(params, successCB, errorCB){
    var data = JSON.parse(parms);
    var uniqueid = data.serial;
    var device = data.devicename;
};


function dummyAPI(data, successCB, errorCB){
    
    var uniqueid = data.serial;
    var mydevice = data.devicename;

    // timeout to simulate networking etc..
    setTimeout(function(){
        // just pretending these number in a database
        if (data.serial == 123){
            successCB(mydevice + String(uniqueid));
        } else if (data.serial == 456) {
            successCB(mydevice + String(uniqueid));
        } else {
            // handing when the numbers are not found
            errorCB()
        };

    },5000);

    // here is where we do things with the good data
    function successCB(res){
        console.log(res);
    }

    // this is where we yell about bad data
    function errorCB(){
        console.log("you did bad")
    }
}