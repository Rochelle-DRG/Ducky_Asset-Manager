cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScannerProxy",
        "pluginId": "phonegap-plugin-barcodescanner",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-legacy-build-support/www/SQLitePlugin.js",
        "id": "cordova-sqlite-legacy-build-support.SQLitePlugin",
        "pluginId": "cordova-sqlite-legacy-build-support",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "phonegap-plugin-barcodescanner": "8.1.0",
    "phonegap-nfc": "1.0.3",
    "cordova-sqlite-legacy-build-support": "1.3.5"
}
// BOTTOM OF METADATA
});