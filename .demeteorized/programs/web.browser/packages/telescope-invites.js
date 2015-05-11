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
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
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
var Settings = Package['telescope-settings'].Settings;
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
var i18n = Package['telescope-i18n'].i18n;
var setLanguage = Package['telescope-i18n'].setLanguage;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Messages = Package['telescope-messages'].Messages;
var Iron = Package['iron:core'].Iron;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __, registerI18nTemplate, registerTemplate, non_package_templates, InviteSchema, Invites, translations;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/package-i18n.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
TAPi18n.packages["telescope-invites"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                    // 2
// define package's translation function (proxy to the i18next)                                                     // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                    // 4
// define the package's templates registrar                                                                         // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-invites");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                    // 8
// Record the list of templates prior to package load                                                               // 9
var _ = Package.underscore._;                                                                                       // 10
non_package_templates = _.keys(Template);                                                                           // 11
                                                                                                                    // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/lib/invites.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
InviteSchema = new SimpleSchema({                                                                                   // 1
  _id: {                                                                                                            // 2
    type: String,                                                                                                   // 3
    optional: true                                                                                                  // 4
  },                                                                                                                // 5
  invitingUserId: {                                                                                                 // 6
    type: String,                                                                                                   // 7
    optional: true                                                                                                  // 8
  },                                                                                                                // 9
  invitedUserEmail: {                                                                                               // 10
    type: String,                                                                                                   // 11
    regEx: SimpleSchema.RegEx.Email                                                                                 // 12
  },                                                                                                                // 13
  accepted: {                                                                                                       // 14
    type: Boolean,                                                                                                  // 15
    optional: true                                                                                                  // 16
  }                                                                                                                 // 17
});                                                                                                                 // 18
                                                                                                                    // 19
Invites = new Meteor.Collection("invites");                                                                         // 20
Invites.attachSchema(InviteSchema);                                                                                 // 21
                                                                                                                    // 22
// invites are managed through Meteor method                                                                        // 23
                                                                                                                    // 24
Invites.deny({                                                                                                      // 25
  insert: function(){ return true; },                                                                               // 26
  update: function(){ return true; },                                                                               // 27
  remove: function(){ return true; }                                                                                // 28
});                                                                                                                 // 29
                                                                                                                    // 30
userProfileEdit.push({                                                                                              // 31
  template: 'userInvites',                                                                                          // 32
  order: 2                                                                                                          // 33
});                                                                                                                 // 34
                                                                                                                    // 35
 function setStartingInvites (user) {                                                                               // 36
  // give new users a few invites (default to 3)                                                                    // 37
  user.inviteCount = Settings.get('startInvitesCount', 3);                                                          // 38
  return user;                                                                                                      // 39
}                                                                                                                   // 40
userCreatedCallbacks.push(setStartingInvites);                                                                      // 41
                                                                                                                    // 42
function checkIfInvited (user) {                                                                                    // 43
  // if the new user has been invited                                                                               // 44
  // set her status accordingly and update invitation info                                                          // 45
  if(invitesEnabled() && getEmail(user)){                                                                           // 46
    var invite = Invites.findOne({ invitedUserEmail : getEmail(user) });                                            // 47
    if(invite){                                                                                                     // 48
      var invitedBy = Meteor.users.findOne({ _id : invite.invitingUserId });                                        // 49
                                                                                                                    // 50
      user = _.extend(user, {                                                                                       // 51
        isInvited: true,                                                                                            // 52
        invitedBy: invitedBy._id,                                                                                   // 53
        invitedByName: getDisplayName(invitedBy)                                                                    // 54
      });                                                                                                           // 55
                                                                                                                    // 56
      Invites.update(invite._id, {$set : {                                                                          // 57
        accepted : true                                                                                             // 58
      }});                                                                                                          // 59
    }                                                                                                               // 60
  }                                                                                                                 // 61
  return user;                                                                                                      // 62
}                                                                                                                   // 63
userCreatedCallbacks.push(checkIfInvited);                                                                          // 64
                                                                                                                    // 65
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/lib/client/templates/template.user_invites.js                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("userInvites");                                                                                // 2
Template["userInvites"] = new Template("Template.userInvites", (function() {                                        // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "grid-small grid-block dialog admin"                                                                   // 6
  }, HTML.Raw("\n    <h2>Invites</h2>\n    \n    "), Blaze.If(function() {                                          // 7
    return Spacebars.call(view.lookup("canCurrentUserInvite"));                                                     // 8
  }, function() {                                                                                                   // 9
    return [ "\n      ", Blaze._TemplateWith(function() {                                                           // 10
      return {                                                                                                      // 11
        schema: Spacebars.call(view.lookup("invitesSchema")),                                                       // 12
        id: Spacebars.call("inviteForm"),                                                                           // 13
        "class": Spacebars.call("form-block"),                                                                      // 14
        type: Spacebars.call("method"),                                                                             // 15
        meteormethod: Spacebars.call("inviteUser")                                                                  // 16
      };                                                                                                            // 17
    }, function() {                                                                                                 // 18
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                        // 19
        return [ "\n        ", HTML.H3("Invite someone"), "\n        ", HTML.DIV({                                  // 20
          "class": "control-group"                                                                                  // 21
        }, "\n          ", HTML.LABEL("Email"), "\n          ", HTML.DIV({                                          // 22
          "class": "controls"                                                                                       // 23
        }, "\n            ", Blaze._TemplateWith(function() {                                                       // 24
          return {                                                                                                  // 25
            name: Spacebars.call("invitedUserEmail")                                                                // 26
          };                                                                                                        // 27
        }, function() {                                                                                             // 28
          return Spacebars.include(view.lookupTemplate("afFieldInput"));                                            // 29
        }), "\n          "), "\n        "), "\n        ", HTML.DIV({                                                // 30
          "class": "form-actions"                                                                                   // 31
        }, "\n          ", Blaze.If(function() {                                                                    // 32
          return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                             // 33
            name: "invitedUserEmail"                                                                                // 34
          }));                                                                                                      // 35
        }, function() {                                                                                             // 36
          return "\n            This is not a valid email\n          ";                                             // 37
        }), "\n          ", HTML.INPUT({                                                                            // 38
          type: "submit",                                                                                           // 39
          "class": "button",                                                                                        // 40
          value: "Invite"                                                                                           // 41
        }), "\n        "), "\n      " ];                                                                            // 42
      });                                                                                                           // 43
    }), "\n    " ];                                                                                                 // 44
  }), "\n\n    ", HTML.TABLE("\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", HTML.TD("Email"), "\n          ", HTML.TD("Accepted"), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n          ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("invites"));                                                                  // 46
  }, function() {                                                                                                   // 47
    return [ "\n          ", HTML.TR("\n            ", HTML.TD(Blaze.View("lookup:invitedUserEmail", function() {   // 48
      return Spacebars.mustache(view.lookup("invitedUserEmail"));                                                   // 49
    })), "\n            ", HTML.TD(Blaze.If(function() {                                                            // 50
      return Spacebars.call(view.lookup("accepted"));                                                               // 51
    }, function() {                                                                                                 // 52
      return HTML.I({                                                                                               // 53
        "class": "icon-check"                                                                                       // 54
      });                                                                                                           // 55
    })), "\n          "), "\n          " ];                                                                         // 56
  }), "\n      "), "\n    "), "\n\n  ");                                                                            // 57
}));                                                                                                                // 58
                                                                                                                    // 59
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/lib/client/templates/user_invites.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template[getTemplate('userInvites')].created = function () {                                                        // 1
                                                                                                                    // 2
  var user = this.data;                                                                                             // 3
  var instance = this;                                                                                              // 4
                                                                                                                    // 5
  instance.invites = new ReactiveVar({});                                                                           // 6
                                                                                                                    // 7
  Meteor.autorun(function () {                                                                                      // 8
    coreSubscriptions.subscribe('invites', user._id);                                                               // 9
    var invites = Invites.find({invitingUserId: user._id});                                                         // 10
    instance.invites.set(invites);                                                                                  // 11
  });                                                                                                               // 12
};                                                                                                                  // 13
                                                                                                                    // 14
Template[getTemplate('userInvites')].helpers({                                                                      // 15
  canCurrentUserInvite: function () {                                                                               // 16
    var currentUser = Meteor.user();                                                                                // 17
    return currentUser && (currentUser.inviteCount > 0 && can.invite(currentUser));                                 // 18
  },                                                                                                                // 19
  invitesLeft: function () {                                                                                        // 20
    var currentUser = Meteor.user();                                                                                // 21
    return currentUser ? currentUser.inviteCount : 0;                                                               // 22
  },                                                                                                                // 23
  invitesSchema: function () {                                                                                      // 24
    // expose schema for Invites (used by AutoForm)                                                                 // 25
    return InviteSchema;                                                                                            // 26
  },                                                                                                                // 27
  invites: function () {                                                                                            // 28
    return Template.instance().invites.get();                                                                       // 29
  }                                                                                                                 // 30
});                                                                                                                 // 31
                                                                                                                    // 32
var scrollUp = function(){                                                                                          // 33
  Deps.afterFlush(function() {                                                                                      // 34
    var element = $('.grid > .error');                                                                              // 35
    $('html, body').animate({scrollTop: element.offset().top});                                                     // 36
  });                                                                                                               // 37
};                                                                                                                  // 38
                                                                                                                    // 39
AutoForm.hooks({                                                                                                    // 40
  inviteForm: {                                                                                                     // 41
    onSuccess: function(operation, result, template) {                                                              // 42
      Messages.clearSeen();                                                                                         // 43
                                                                                                                    // 44
      if(result && result.newUser){                                                                                 // 45
        Messages.flash('An invite has been sent out. Thank you!', "success");                                       // 46
      } else {                                                                                                      // 47
        Messages.flash('Thank you!', "info");                                                                       // 48
      }                                                                                                             // 49
      scrollUp();                                                                                                   // 50
    },                                                                                                              // 51
                                                                                                                    // 52
    onError: function(operation, error, template) {                                                                 // 53
      Messages.clearSeen();                                                                                         // 54
                                                                                                                    // 55
      if(error && error.reason){                                                                                    // 56
        Messages.flash(error.reason, "error");                                                                      // 57
        scrollUp();                                                                                                 // 58
      }                                                                                                             // 59
    }                                                                                                               // 60
  }                                                                                                                 // 61
});                                                                                                                 // 62
                                                                                                                    // 63
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/C:/$AppDev/Telescope/packages/telescope-invites/i18n/de.i18n.js                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope-invites",                                                                             // 2
    namespace = "telescope-invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                      // 8
                                                                                                                    // 9
for (var i = 0; i < package_templates.length; i++) {                                                                // 10
  var package_template = package_templates[i];                                                                      // 11
                                                                                                                    // 12
  registerI18nTemplate(package_template);                                                                           // 13
}                                                                                                                   // 14
                                                                                                                    // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/C:/$AppDev/Telescope/packages/telescope-invites/i18n/en.i18n.js                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope-invites",                                                                             // 2
    namespace = "telescope-invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
// integrate the fallback language translations                                                                     // 8
translations = {};                                                                                                  // 9
translations[namespace] = {"translation_key":"translation string"};                                                 // 10
TAPi18n._loadLangFileObject("en", translations);                                                                    // 11
                                                                                                                    // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/C:/$AppDev/Telescope/packages/telescope-invites/i18n/es.i18n.js                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope-invites",                                                                             // 2
    namespace = "telescope-invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/C:/$AppDev/Telescope/packages/telescope-invites/i18n/fr.i18n.js                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope-invites",                                                                             // 2
    namespace = "telescope-invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/C:/$AppDev/Telescope/packages/telescope-invites/i18n/it.i18n.js                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope-invites",                                                                             // 2
    namespace = "telescope-invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-invites/C:/$AppDev/Telescope/packages/telescope-invites/i18n/zh-CN.i18n.js                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope-invites",                                                                             // 2
    namespace = "telescope-invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-invites'] = {};

})();
