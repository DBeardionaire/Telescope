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
var deepExtend = Package['telescope-lib'].deepExtend;
var camelToDash = Package['telescope-lib'].camelToDash;
var dashToCamel = Package['telescope-lib'].dashToCamel;
var camelCaseify = Package['telescope-lib'].camelCaseify;
var removeSetting = Package['telescope-lib'].removeSetting;
var getThemeSetting = Package['telescope-lib'].getThemeSetting;
var getSiteUrl = Package['telescope-lib'].getSiteUrl;
var trimWords = Package['telescope-lib'].trimWords;
var can = Package['telescope-lib'].can;
var _ = Package.underscore._;
var capitalise = Package['telescope-lib'].capitalise;
var postStatuses = Package['telescope-base'].postStatuses;
var STATUS_PENDING = Package['telescope-base'].STATUS_PENDING;
var STATUS_APPROVED = Package['telescope-base'].STATUS_APPROVED;
var STATUS_REJECTED = Package['telescope-base'].STATUS_REJECTED;
var adminMenu = Package['telescope-base'].adminMenu;
var viewsMenu = Package['telescope-base'].viewsMenu;
var userMenu = Package['telescope-base'].userMenu;
var addToPostSchema = Package['telescope-base'].addToPostSchema;
var addToCommentsSchema = Package['telescope-base'].addToCommentsSchema;
var addToSettingsSchema = Package['telescope-base'].addToSettingsSchema;
var addToUserSchema = Package['telescope-base'].addToUserSchema;
var registerPostProperty = Package['telescope-base'].registerPostProperty;
var registerCommentProperty = Package['telescope-base'].registerCommentProperty;
var registerSetting = Package['telescope-base'].registerSetting;
var registerUserProperty = Package['telescope-base'].registerUserProperty;
var preloadSubscriptions = Package['telescope-base'].preloadSubscriptions;
var primaryNav = Package['telescope-base'].primaryNav;
var secondaryNav = Package['telescope-base'].secondaryNav;
var mobileNav = Package['telescope-base'].mobileNav;
var viewParameters = Package['telescope-base'].viewParameters;
var footerModules = Package['telescope-base'].footerModules;
var heroModules = Package['telescope-base'].heroModules;
var threadModules = Package['telescope-base'].threadModules;
var postListTopModules = Package['telescope-base'].postListTopModules;
var postModules = Package['telescope-base'].postModules;
var postThumbnail = Package['telescope-base'].postThumbnail;
var postHeading = Package['telescope-base'].postHeading;
var postMeta = Package['telescope-base'].postMeta;
var postClassCallbacks = Package['telescope-base'].postClassCallbacks;
var postSubmitRenderedCallbacks = Package['telescope-base'].postSubmitRenderedCallbacks;
var postSubmitClientCallbacks = Package['telescope-base'].postSubmitClientCallbacks;
var postSubmitMethodCallbacks = Package['telescope-base'].postSubmitMethodCallbacks;
var postAfterSubmitMethodCallbacks = Package['telescope-base'].postAfterSubmitMethodCallbacks;
var postApproveCallbacks = Package['telescope-base'].postApproveCallbacks;
var postEditRenderedCallbacks = Package['telescope-base'].postEditRenderedCallbacks;
var postEditClientCallbacks = Package['telescope-base'].postEditClientCallbacks;
var postEditMethodCallbacks = Package['telescope-base'].postEditMethodCallbacks;
var postAfterEditMethodCallbacks = Package['telescope-base'].postAfterEditMethodCallbacks;
var commentClassCallbacks = Package['telescope-base'].commentClassCallbacks;
var commentSubmitRenderedCallbacks = Package['telescope-base'].commentSubmitRenderedCallbacks;
var commentSubmitClientCallbacks = Package['telescope-base'].commentSubmitClientCallbacks;
var commentSubmitMethodCallbacks = Package['telescope-base'].commentSubmitMethodCallbacks;
var commentAfterSubmitMethodCallbacks = Package['telescope-base'].commentAfterSubmitMethodCallbacks;
var commentEditRenderedCallbacks = Package['telescope-base'].commentEditRenderedCallbacks;
var commentEditClientCallbacks = Package['telescope-base'].commentEditClientCallbacks;
var commentEditMethodCallbacks = Package['telescope-base'].commentEditMethodCallbacks;
var commentAfterEditMethodCallbacks = Package['telescope-base'].commentAfterEditMethodCallbacks;
var upvoteCallbacks = Package['telescope-base'].upvoteCallbacks;
var downvoteCallbacks = Package['telescope-base'].downvoteCallbacks;
var cancelUpvoteCallbacks = Package['telescope-base'].cancelUpvoteCallbacks;
var cancelDownvoteCallbacks = Package['telescope-base'].cancelDownvoteCallbacks;
var upvoteMethodCallbacks = Package['telescope-base'].upvoteMethodCallbacks;
var downvoteMethodCallbacks = Package['telescope-base'].downvoteMethodCallbacks;
var cancelUpvoteMethodCallbacks = Package['telescope-base'].cancelUpvoteMethodCallbacks;
var cancelDownvoteMethodCallbacks = Package['telescope-base'].cancelDownvoteMethodCallbacks;
var userEditRenderedCallbacks = Package['telescope-base'].userEditRenderedCallbacks;
var userEditClientCallbacks = Package['telescope-base'].userEditClientCallbacks;
var userProfileCompleteChecks = Package['telescope-base'].userProfileCompleteChecks;
var userProfileDisplay = Package['telescope-base'].userProfileDisplay;
var userProfileEdit = Package['telescope-base'].userProfileEdit;
var userCreatedCallbacks = Package['telescope-base'].userCreatedCallbacks;
var getTemplate = Package['telescope-base'].getTemplate;
var templates = Package['telescope-base'].templates;
var getIcon = Package['telescope-base'].getIcon;
var icons = Package['telescope-base'].icons;
var colorTable = Package['telescope-base'].colorTable;
var registerElementColor = Package['telescope-base'].registerElementColor;
var themeSettings = Package['telescope-base'].themeSettings;
var getVotePower = Package['telescope-base'].getVotePower;
var HTTP = Package.http.HTTP;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Template = Package.templating.Template;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Iron = Package['iron:core'].Iron;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var compareVersions;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-update-prompt/lib/client/update.js                               //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
compareVersions = function (v1, v2) { // return true if v2 is newer than v1            // 1
  var v1Array = v1.split('.');                                                         // 2
  var v2Array = v2.split('.');                                                         // 3
  var isGreater = false;                                                               // 4
  // go through each segment of v2 and stop if we find one that's higher               // 5
  // than the equivalent segment of v1; else return false                              // 6
  v2Array.some( function (value, index) {                                              // 7
    if (parseInt(value) > parseInt(v1Array[index])) {                                  // 8
      // v2 segment > v1 segment                                                       // 9
      isGreater = true;                                                                // 10
      return true; // stop comparison                                                  // 11
    } else if (parseInt(value) < parseInt(v1Array[index])) {                           // 12
      // v2 segment < v1 segment                                                       // 13
      isGreater = false;                                                               // 14
      return true; // stop comparison                                                  // 15
    }                                                                                  // 16
    return false; // continue comparison as long as both values are equal              // 17
  });                                                                                  // 18
  return isGreater;                                                                    // 19
}                                                                                      // 20
                                                                                       // 21
Meteor.startup(function () {                                                           // 22
  Session.set('updateVersion', null);                                                  // 23
                                                                                       // 24
  Meteor.call('phoneHome', function (error, result) {                                  // 25
    // console.log(error)                                                              // 26
    // console.log(result)                                                             // 27
    if(result){                                                                        // 28
      var currentVersion = telescopeVersion;                                           // 29
      var newVersion = result.content;                                                 // 30
      var message = "";                                                                // 31
      if (compareVersions(currentVersion, newVersion)){                                // 32
        Session.set('updateVersion', newVersion);                                      // 33
      }                                                                                // 34
    }                                                                                  // 35
  });                                                                                  // 36
});                                                                                    // 37
                                                                                       // 38
heroModules.push({                                                                     // 39
  template: 'updateBanner'                                                             // 40
});                                                                                    // 41
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-update-prompt/lib/client/templates/template.update_banner.js     //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
                                                                                       // 1
Template.__checkName("updateBanner");                                                  // 2
Template["updateBanner"] = new Template("Template.updateBanner", (function() {         // 3
  var view = this;                                                                     // 4
  return Blaze.If(function() {                                                         // 5
    return Spacebars.call(view.lookup("showBanner"));                                  // 6
  }, function() {                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                      // 8
      "class": "update-banner grid-module grid banner"                                 // 9
    }, "\n      ", HTML.H3({                                                           // 10
      "class": "update-version"                                                        // 11
    }, Blaze.View("lookup:version", function() {                                       // 12
      return Spacebars.mustache(view.lookup("version"));                               // 13
    })), "\n      ", HTML.DIV({                                                        // 14
      "class": "update-content"                                                        // 15
    }, "\n        ", HTML.H4({                                                         // 16
      "class": "update-prompt"                                                         // 17
    }, "A new version of Telescope is available."), "\n        ", HTML.P({             // 18
      "class": "update-message"                                                        // 19
    }, "\n          You have: ", Blaze.View("lookup:currentVersion", function() {      // 20
      return Spacebars.mustache(view.lookup("currentVersion"));                        // 21
    }), ". Note: this message is only displayed to admins. \n          ", HTML.A({     // 22
      href: "https://github.com/TelescopeJS/Telescope/blob/master/History.md",         // 23
      target: "_blank"                                                                 // 24
    }, "View changelog"), " | \n          ", HTML.A({                                  // 25
      href: "http://www.telesc.pe/docs/getting-started/updating/",                     // 26
      target: "_blank"                                                                 // 27
    }, "View update instructions"), "\n          "), "\n      "), "\n    "), "\n  " ]; // 28
  });                                                                                  // 29
}));                                                                                   // 30
                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-update-prompt/lib/client/templates/update_banner.js              //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
Template[getTemplate('updateBanner')].helpers({                                        // 1
  showBanner: function () {                                                            // 2
    return Session.get('updateVersion');                                               // 3
  },                                                                                   // 4
  version: function () {                                                               // 5
    return Session.get('updateVersion');                                               // 6
  },                                                                                   // 7
  currentVersion: function () {                                                        // 8
    return telescopeVersion;                                                           // 9
  },                                                                                   // 10
  message: function () {                                                               // 11
    return Session.get('updateMessage');                                               // 12
  }                                                                                    // 13
});                                                                                    // 14
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-update-prompt'] = {
  compareVersions: compareVersions
};

})();
