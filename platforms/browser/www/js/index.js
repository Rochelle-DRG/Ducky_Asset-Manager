/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        console.log("onDeviceReady has fired");
        
        // ran when dummy api is successfull
        function apiSuccess(thisres){
            console.log(thisres);
        }

        // ran when dummy api fails
        function apiFail(thisres){
            console.log(thisres);
        }

        // here is an example of pass the scan results to the api, then get the api results back.
        // like with everythign else cordova, needs to be anywhere inside the device ready function
        var testinput =  {"serial": 123, "devicename": "android"}
        dummyAPI(testinput, apiSuccess, apiFail);

          
        
        document.getElementById('scanIt').addEventListener('click', function () {
            console.log("barcode button has been clicked");
            document.getElementById('main').classList.toggle('hide');
            document.getElementById('scanWait').classList.toggle('hide');

            /** Barcode Scanner **/
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    alert("We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled);

                    resPackage = {"serial": result.text, "devicename": device.devicename}
                    dummyAPI(resPackage, apiSuccessQR, apiFail);

                    function apiSuccessQR(ap_result){
                        alert('database responded with: ' + ap_result.uniqueid + ap_result.company);
                    };


                },
                function (error) {
                    alert("Scanning failed: " + error);
                },
                {
                    preferFrontCamera: false, // iOS and Android
                    showFlipCameraButton: true, // iOS and Android
                    showTorchButton: true, // iOS and Android
                    torchOn: false, // Android, launch with the torch switched on (if available)
                    saveHistory: true, // Android, save scan history (default false)
                    prompt: "Place a barcode inside the scan area", // Android
                    resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                    formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                    orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                    disableAnimations: true, // iOS
                    disableSuccessBeep: false // iOS and Android
                }
            ); //end barcode scanner
        });//end when barcode button is clicked



    /** NFC Scanner **/
        document.getElementById('scanNFC').addEventListener('click', function () {
            console.log("NFC button has been clicked");
            document.getElementById('main').classList.toggle('hide');
            document.getElementById('scanWaitNFC').classList.toggle('hide');
            // Listen for NFC tag to be read
            nfc.addNdefListener (
                function (nfcevent) {
                    var tag = nfcevent.tag,
                        ndefMessage = tag.ndefMessage;
                    // dump the raw JSON of the message
                    alert(JSON.stringify(ndefMessage));
                    // convert the payload into a string
                    alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));
                },
                function () {
                    alert("Waiting for NDEF tag");
                },
                function (error) {
                    alert("Error adding NDEF listener " + JSON.stringify(error));
                }
            );
        });//end when NFC button is clicked
    },//end onDeviceReady

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    }//end receivedEvent
};//end var app

app.initialize();