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


function dummyAPI(data, successCB, errorCB){
    
    // lets say the api should expect these things...
    // serial number or uniqueid
    // request type: get or put
    // 

    // seems that even though its json when defined, by the time its passed into here the data
    // is now just a plain old object, so we can do data.attribute
    var uniqueid = data.serial;
    var mydevice = data.devicename;
    console.log('dummyapi called')
    
    // timeout to simulate networking etc..
    setTimeout(function(){
        // just pretending these number in a database
        if (data.serial == 123){
            successCB(
                {
                    "uniqueid": uniqueid,
                    "company": "davey",
                    "form": {"q1": "passfail", "q2": "passfail"} // maybe we can return the form info this way?
                }
            );
        } else if (data.serial == 456) {
            successCB(
                {
                    "uniqueid": uniqueid,
                    "company": "buckingham",
                    "form": {"q1": "text", "q2": "passfail"}
                }
            );
        } else {
            // handing when the numbers are not found
            console.log('error state found');
            this.errorCB();
            
        };
    }, 5000); // 5 second delay from the call to the dummy api to it responding
    
}

successCB = function(res){
    return res;
}

// this is where we yell about bad data
function errorCB(){
    return 'you did bad'
}