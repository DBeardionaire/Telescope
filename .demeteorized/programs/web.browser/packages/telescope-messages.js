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
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Template = Package.templating.Template;
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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Messages;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/messages.js                                    //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Messages = {                                                                             // 1
  // Local (client-only) collection                                                      // 2
  collection: new Meteor.Collection(null),                                               // 3
                                                                                         // 4
  flash: function(message, type) {                                                       // 5
    type = (typeof type === 'undefined') ? 'error': type;                                // 6
    // Store errors in the local collection                                              // 7
    this.collection.insert({message:message, type:type, seen: false, show:true});        // 8
  },                                                                                     // 9
                                                                                         // 10
  clearSeen: function() {                                                                // 11
    this.collection.update({seen:true}, {$set: {show:false}}, {multi:true});             // 12
  }                                                                                      // 13
};                                                                                       // 14
                                                                                         // 15
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/templates/template.messages.js                 //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("messages");                                                        // 2
Template["messages"] = new Template("Template.messages", (function() {                   // 3
  var view = this;                                                                       // 4
  return Blaze.Each(function() {                                                         // 5
    return Spacebars.call(view.lookup("messages"));                                      // 6
  }, function() {                                                                        // 7
    return [ "\n		", Blaze._TemplateWith(function() {                                    // 8
      return {                                                                           // 9
        template: Spacebars.call(view.lookup("message_item"))                            // 10
      };                                                                                 // 11
    }, function() {                                                                      // 12
      return Spacebars.include(function() {                                              // 13
        return Spacebars.call(Template.__dynamic);                                       // 14
      });                                                                                // 15
    }), "\n	" ];                                                                         // 16
  });                                                                                    // 17
}));                                                                                     // 18
                                                                                         // 19
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/templates/messages.js                          //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Template[getTemplate('messages')].helpers({                                              // 1
  message_item: function () {                                                            // 2
    return getTemplate('message_item');                                                  // 3
  },                                                                                     // 4
  messages: function(){                                                                  // 5
    return Messages.collection.find({show: true});                                       // 6
  }                                                                                      // 7
});                                                                                      // 8
                                                                                         // 9
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/templates/template.message_item.js             //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("message_item");                                                    // 2
Template["message_item"] = new Template("Template.message_item", (function() {           // 3
  var view = this;                                                                       // 4
  return Blaze.If(function() {                                                           // 5
    return Spacebars.call(view.lookup("show"));                                          // 6
  }, function() {                                                                        // 7
    return [ "\n    ", HTML.DIV({                                                        // 8
      "class": "grid"                                                                    // 9
    }, "\n      ", HTML.DIV({                                                            // 10
      "class": function() {                                                              // 11
        return [ "error ", Spacebars.mustache(view.lookup("type")), "-message module" ]; // 12
      }                                                                                  // 13
    }, "\n        ", Blaze.View("lookup:message", function() {                           // 14
      return Spacebars.mustache(view.lookup("message"));                                 // 15
    }), "\n      "), "\n    "), "\n  " ];                                                // 16
  });                                                                                    // 17
}));                                                                                     // 18
                                                                                         // 19
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/templates/message_item.js                      //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Template[getTemplate('message_item')].onCreated(function(){                              // 1
	var messageId=this.data._id;                                                            // 2
                                                                                         // 3
	Meteor.setTimeout(function(){                                                           // 4
		Messages.collection.update(messageId, {$set: {seen:true}});                            // 5
	}, 100);                                                                                // 6
});                                                                                      // 7
                                                                                         // 8
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-messages'] = {
  Messages: Messages
};

})();
