//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;

/* Package-scope variables */
var InjectData;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteorhacks:inject-data/lib/namespace.js                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
InjectData = {};                                                     // 1
///////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteorhacks:inject-data/lib/utils.js                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
InjectData._encode = function(ejson) {                               // 1
  var ejsonString = EJSON.stringify(ejson);                          // 2
  return encodeURIComponent(ejsonString);                            // 3
};                                                                   // 4
                                                                     // 5
InjectData._decode = function(encodedEjson) {                        // 6
  var decodedEjsonString = decodeURIComponent(encodedEjson);         // 7
  if(!decodedEjsonString) return null;                               // 8
                                                                     // 9
  return EJSON.fromJSONValue(JSON.parse(decodedEjsonString));        // 10
};                                                                   // 11
                                                                     // 12
///////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteorhacks:inject-data/lib/client.js                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.startup(function() {                                          // 1
  var dom = $('script[type="text/inject-data"]', document.head);     // 2
  var injectedDataString = dom.text().trim();                        // 3
  InjectData._data = InjectData._decode(injectedDataString) || {};   // 4
});                                                                  // 5
                                                                     // 6
InjectData.getData = function(key, callback) {                       // 7
  Meteor.startup(function() {                                        // 8
    callback(InjectData._data[key]);                                 // 9
  });                                                                // 10
};                                                                   // 11
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteorhacks:inject-data'] = {
  InjectData: InjectData
};

})();
