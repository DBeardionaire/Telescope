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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package['telescope-lib']._;
var Template = Package.templating.Template;
var deepExtend = Package['telescope-lib'].deepExtend;
var camelToDash = Package['telescope-lib'].camelToDash;
var dashToCamel = Package['telescope-lib'].dashToCamel;
var camelCaseify = Package['telescope-lib'].camelCaseify;
var removeSetting = Package['telescope-lib'].removeSetting;
var getThemeSetting = Package['telescope-lib'].getThemeSetting;
var getSiteUrl = Package['telescope-lib'].getSiteUrl;
var trimWords = Package['telescope-lib'].trimWords;
var can = Package['telescope-lib'].can;
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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/share.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
postModules.push({                                                                                               // 1
  template: 'postShare',                                                                                         // 2
  order: 25                                                                                                      // 3
});                                                                                                              // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/client/template.post_share.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("postShare");                                                                               // 2
Template["postShare"] = new Template("Template.postShare", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return [ HTML.A({                                                                                              // 5
    href: "#",                                                                                                   // 6
    "class": "share-link action",                                                                                // 7
    title: function() {                                                                                          // 8
      return Spacebars.mustache(view.lookup("_"), "share");                                                      // 9
    }                                                                                                            // 10
  }, "\n    ", Blaze.View("lookup:icon", function() {                                                            // 11
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "share"));                                  // 12
  }), "\n  "), "\n  ", HTML.DIV({                                                                                // 13
    "class": "share-options hidden"                                                                              // 14
  }, "\n    ", HTML.A({                                                                                          // 15
    "class": "mt-facebook mt-share-inline-square-sm",                                                            // 16
    href: function() {                                                                                           // 17
      return [ "https://www.facebook.com/sharer/sharer.php?u=", Spacebars.mustache(view.lookup("sourceLink")) ]; // 18
    },                                                                                                           // 19
    target: "_blank"                                                                                             // 20
  }, Blaze.View("lookup:icon", function() {                                                                      // 21
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "facebook"));                               // 22
  })), "\n    ", HTML.A({                                                                                        // 23
    "class": "mt-twitter mt-share-inline-square-sm",                                                             // 24
    href: function() {                                                                                           // 25
      return [ "//twitter.com/intent/tweet?text=", Spacebars.mustache(view.lookup("title")), "&url=", Spacebars.mustache(view.lookup("sourceLink")), "&", Spacebars.mustache(view.lookup("viaTwitter")) ];
    },                                                                                                           // 27
    target: "_blank"                                                                                             // 28
  }, Blaze.View("lookup:icon", function() {                                                                      // 29
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "twitter"));                                // 30
  })), "\n    ", HTML.A({                                                                                        // 31
    "class": "mt-linkedin mt-share-inline-square-sm",                                                            // 32
    href: function() {                                                                                           // 33
      return [ "//www.linkedin.com/shareArticle?mini=true&url=", Spacebars.mustache(view.lookup("sourceLink")), HTML.CharRef({
        html: "&amp;",                                                                                           // 35
        str: "&"                                                                                                 // 36
      }), "summary=", Spacebars.mustache(view.lookup("title")) ];                                                // 37
    },                                                                                                           // 38
    target: "_blank"                                                                                             // 39
  }, Blaze.View("lookup:icon", function() {                                                                      // 40
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "linkedin"));                               // 41
  })), "\n    ", HTML.A({                                                                                        // 42
    "class": "mt-google mt-share-inline-square-sm",                                                              // 43
    href: function() {                                                                                           // 44
      return [ "https://plus.google.com/share?url=", Spacebars.mustache(view.lookup("sourceLink")) ];            // 45
    },                                                                                                           // 46
    target: "_blank"                                                                                             // 47
  }, Blaze.View("lookup:icon", function() {                                                                      // 48
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "googleplus"));                             // 49
  })), "\n  ") ];                                                                                                // 50
}));                                                                                                             // 51
                                                                                                                 // 52
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/client/post_share.js                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('postShare')].helpers({                                                                   // 2
    sourceLink: function(){                                                                                      // 3
      return !!this.url ? this.url : getSiteUrl() + "posts/"+this._id;                                           // 4
    },                                                                                                           // 5
    viaTwitter: function () {                                                                                    // 6
      return !!Settings.get('twitterAccount') ? 'via='+Settings.get('twitterAccount') : '';                      // 7
    }                                                                                                            // 8
  });                                                                                                            // 9
                                                                                                                 // 10
  Template[getTemplate('postShare')].events({                                                                    // 11
    'click .share-link': function(e){                                                                            // 12
      var $this = $(e.target).parents('.post-share').find('.share-link');                                        // 13
      var $share = $this.parents('.post-share').find('.share-options');                                          // 14
      e.preventDefault();                                                                                        // 15
      $('.share-link').not($this).removeClass("active");                                                         // 16
      $(".share-options").not($share).addClass("hidden");                                                        // 17
      $this.toggleClass("active");                                                                               // 18
      $share.toggleClass("hidden");                                                                              // 19
    }                                                                                                            // 20
  });                                                                                                            // 21
});                                                                                                              // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-module-share'] = {};

})();
