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
      "id": "cordova-sqlite-legacy-build-support.SQLitePlugin",
      "file": "plugins/cordova-sqlite-legacy-build-support/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-legacy-build-support",
      "clobbers": [
        "SQLitePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "phonegap-plugin-barcodescanner": "8.1.0",
    "phonegap-nfc": "1.0.3",
    "cordova-sqlite-legacy-build-support": "1.3.5"
  };
});