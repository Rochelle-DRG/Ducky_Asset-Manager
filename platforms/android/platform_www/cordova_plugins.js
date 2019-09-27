cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
      "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
      "pluginId": "phonegap-plugin-barcodescanner",
      "clobbers": [
        "cordova.plugins.barcodeScanner"
      ]
    },
    {
      "id": "phonegap-nfc.NFC",
      "file": "plugins/phonegap-nfc/www/phonegap-nfc.js",
      "pluginId": "phonegap-nfc",
      "runs": true
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "phonegap-plugin-barcodescanner": "8.1.0",
    "phonegap-nfc": "1.0.3",
    "cordova-plugin-device": "2.0.3"
  };
});