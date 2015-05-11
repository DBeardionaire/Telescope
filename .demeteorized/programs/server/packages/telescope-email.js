(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
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
var _ = Package['telescope-lib']._;
var capitalise = Package['telescope-lib'].capitalise;
var i18n = Package['telescope-i18n'].i18n;
var setLanguage = Package['telescope-i18n'].setLanguage;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Handlebars = Package['cmather:handlebars-server'].Handlebars;
var OriginalHandlebars = Package['cmather:handlebars-server'].OriginalHandlebars;
var Iron = Package['iron:core'].Iron;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

/* Package-scope variables */
var buildEmailTemplate, sendEmail, buildAndSendEmail, getEmailTemplate, html, Handlebars, translations;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/email.js                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
var htmlToText = Npm.require('html-to-text');                                                                   // 2
                                                                                                                // 3
// check if server-side template has been customized, and return the correct template                           // 4
getEmailTemplate = function (template) {                                                                        // 5
  var emailTemplate = Handlebars.templates[getTemplate(template)];                                              // 6
  if(typeof emailTemplate === 'function'){                                                                      // 7
    return Handlebars.templates[getTemplate(template)];                                                         // 8
  } else {                                                                                                      // 9
    console.log('Cannot find template '+getTemplate(template)+', defaulting to '+template);                     // 10
    return Handlebars.templates[template];                                                                      // 11
  }                                                                                                             // 12
}                                                                                                               // 13
                                                                                                                // 14
buildEmailTemplate = function (htmlContent) {                                                                   // 15
                                                                                                                // 16
  var emailProperties = {                                                                                       // 17
    headerColor: Settings.get('headerColor', '#444444'),                                                        // 18
    buttonColor: Settings.get('buttonColor', '#DD3416'),                                                        // 19
    siteName: Settings.get('title'),                                                                            // 20
    tagline: Settings.get('tagline'),                                                                           // 21
    siteUrl: getSiteUrl(),                                                                                      // 22
    body: htmlContent,                                                                                          // 23
    unsubscribe: '',                                                                                            // 24
    accountLink: getSiteUrl()+'account',                                                                        // 25
    footer: Settings.get('emailFooter'),                                                                        // 26
    logoUrl: Settings.get('logoUrl'),                                                                           // 27
    logoHeight: Settings.get('logoHeight'),                                                                     // 28
    logoWidth: Settings.get('logoWidth')                                                                        // 29
  }                                                                                                             // 30
                                                                                                                // 31
  var emailHTML = Handlebars.templates[getTemplate('emailWrapper')](emailProperties);                           // 32
                                                                                                                // 33
  var inlinedHTML = juice(emailHTML);                                                                           // 34
                                                                                                                // 35
  var doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">'
                                                                                                                // 37
  return doctype+inlinedHTML;                                                                                   // 38
}                                                                                                               // 39
                                                                                                                // 40
sendEmail = function(to, subject, html, text){                                                                  // 41
                                                                                                                // 42
  // TODO: limit who can send emails                                                                            // 43
  // TODO: fix this error: Error: getaddrinfo ENOTFOUND                                                         // 44
                                                                                                                // 45
  var from = Settings.get('defaultEmail', 'noreply@example.com');                                               // 46
  var siteName = Settings.get('title', 'Telescope');                                                            // 47
  var subject = '['+siteName+'] '+subject;                                                                      // 48
                                                                                                                // 49
  if (typeof text == 'undefined'){                                                                              // 50
    // Auto-generate text version if it doesn't exist. Has bugs, but should be good enough.                     // 51
    var text = htmlToText.fromString(html, {                                                                    // 52
        wordwrap: 130                                                                                           // 53
    });                                                                                                         // 54
  }                                                                                                             // 55
                                                                                                                // 56
  console.log('//////// sending email…');                                                                       // 57
  console.log('from: '+from);                                                                                   // 58
  console.log('to: '+to);                                                                                       // 59
  console.log('subject: '+subject);                                                                             // 60
  // console.log('html: '+html);                                                                                // 61
  // console.log('text: '+text);                                                                                // 62
                                                                                                                // 63
  var email = {                                                                                                 // 64
    from: from,                                                                                                 // 65
    to: to,                                                                                                     // 66
    subject: subject,                                                                                           // 67
    text: text,                                                                                                 // 68
    html: html                                                                                                  // 69
  }                                                                                                             // 70
                                                                                                                // 71
  Email.send(email);                                                                                            // 72
                                                                                                                // 73
  return email;                                                                                                 // 74
};                                                                                                              // 75
                                                                                                                // 76
buildAndSendEmail = function (to, subject, template, properties) {                                              // 77
  var html = buildEmailTemplate(getEmailTemplate(template)(properties));                                        // 78
  return sendEmail (to, subject, html);                                                                         // 79
}                                                                                                               // 80
                                                                                                                // 81
Meteor.methods({                                                                                                // 82
  testEmail: function () {                                                                                      // 83
    if(isAdminById(this.userId)){                                                                               // 84
      var email = buildAndSendEmail (Settings.get('defaultEmail'), 'Telescope email test', 'emailTest', {date: new Date()});
    }                                                                                                           // 86
  }                                                                                                             // 87
})                                                                                                              // 88
                                                                                                                // 89
function adminUserCreationNotification (user) {                                                                 // 90
  // send notifications to admins                                                                               // 91
  var admins = adminUsers();                                                                                    // 92
  admins.forEach(function(admin){                                                                               // 93
    if(getUserSetting('notifications.users', false, admin)){                                                    // 94
      var emailProperties = {                                                                                   // 95
        profileUrl: getProfileUrl(user),                                                                        // 96
        username: getUserName(user)                                                                             // 97
      };                                                                                                        // 98
      var html = getEmailTemplate('emailNewUser')(emailProperties);                                             // 99
      sendEmail(getEmail(admin), 'New user account: '+getUserName(user), buildEmailTemplate(html));             // 100
    }                                                                                                           // 101
  });                                                                                                           // 102
  return user;                                                                                                  // 103
}                                                                                                               // 104
userCreatedCallbacks.push(adminUserCreationNotification);                                                       // 105
                                                                                                                // 106
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/routes.js                                                                //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Meteor.startup(function () {                                                                                    // 1
                                                                                                                // 2
  // New user email                                                                                             // 3
                                                                                                                // 4
  Router.route('/email/new-user/:id?', {                                                                        // 5
    name: 'newUser',                                                                                            // 6
    where: 'server',                                                                                            // 7
    action: function() {                                                                                        // 8
      var user = Meteor.users.findOne(this.params.id);                                                          // 9
      var emailProperties = {                                                                                   // 10
        profileUrl: getProfileUrl(user),                                                                        // 11
        username: getUserName(user)                                                                             // 12
      };                                                                                                        // 13
      html = getEmailTemplate('emailNewUser')(emailProperties);                                                 // 14
      this.response.write(buildEmailTemplate(html));                                                            // 15
      this.response.end();                                                                                      // 16
    }                                                                                                           // 17
  });                                                                                                           // 18
                                                                                                                // 19
  // New post email                                                                                             // 20
                                                                                                                // 21
  Router.route('/email/new-post/:id?', {                                                                        // 22
    name: 'newPost',                                                                                            // 23
    where: 'server',                                                                                            // 24
    action: function() {                                                                                        // 25
      var post = Posts.findOne(this.params.id);                                                                 // 26
      if (!!post) {                                                                                             // 27
        html = getEmailTemplate('emailNewPost')(getPostProperties(post));                                       // 28
      } else {                                                                                                  // 29
        html = "<h3>No post found.</h3>"                                                                        // 30
      }                                                                                                         // 31
      this.response.write(buildEmailTemplate(html));                                                            // 32
      this.response.end();                                                                                      // 33
    }                                                                                                           // 34
  });                                                                                                           // 35
                                                                                                                // 36
                                                                                                                // 37
});                                                                                                             // 38
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailAccountApproved.js                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">{{username}}, welcome to {{siteTitle}}!</span><br><br>\r\n\r\nYou've just been invited. <a href=\"{{siteUrl}}\">Start posting</a>.<br><br>");Handlebars.templates["emailAccountApproved"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailAccountApproved"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailInvite.js                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\r\n<a href=\"{{profileUrl}}\">{{invitedBy}}</a>\r\ninvited you to join {{communityName}}\r\n</span><br><br>\r\n\r\n{{#if newUser}}\r\n<a href=\"{{actionLink}}\">Join {{communityName}}</a>\r\n{{else}}\r\n<a href=\"{{actionLink}}\">Sign in to {{communityName}}</a>\r\n{{/if}}\r\n<br><br>\r\n");Handlebars.templates["emailInvite"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailInvite"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailNewComment.js                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\r\n<a href=\"{{profileUrl}}\">{{comment.author}}</a>\r\nleft a new comment on \r\n<a href=\"{{postLink}}\" class=\"action-link\">{{post.title}}</a>:\r\n</span>\r\n<br/><br/>\r\n\r\n<div class=\"comment-body\">\r\n{{{body}}}\r\n</div>\r\n<br>\r\n\r\n<a href=\"{{postCommentUrl}}\" class=\"action-link\">Discuss</a><br/><br/>");Handlebars.templates["emailNewComment"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewComment"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailNewPost.js                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\r\n<a href=\"{{profileUrl}}\">{{postAuthorName}}</a>\r\nhas created a new post:\r\n{{#if url}}\r\n  <a href=\"{{linkUrl}}\" class=\"action-link\">{{postTitle}}}</a>\r\n{{else}}\r\n  {{postTitle}}}\r\n{{/if}}\r\n</span><br><br>\r\n\r\n{{#if htmlBody}}\r\n  <div class=\"post-body\">\r\n  {{{htmlBody}}}\r\n  </div>\r\n  <br>\r\n{{/if}}\r\n\r\n<a href=\"{{postUrl}}\">Discuss</a><br><br>\r\n");Handlebars.templates["emailNewPost"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewPost"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailNewPendingPost.js                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\r\n<a href=\"{{profileUrl}}\">{{postAuthorName}}</a>\r\nhas a new post pending approval:\r\n{{#if url}}\r\n  <a href=\"{{linkUrl}}\" class=\"action-link\">{{postTitle}}}</a>\r\n{{else}}\r\n  {{postTitle}}}\r\n{{/if}}\r\n</span><br><br>\r\n\r\n{{#if htmlBody}}\r\n  <div class=\"post-body\">\r\n  {{{htmlBody}}}\r\n  </div>\r\n  <br>\r\n{{/if}}\r\n\r\n<a href=\"{{postUrl}}\">Go to post</a><br><br>\r\n");Handlebars.templates["emailNewPendingPost"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewPendingPost"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailPostApproved.js                                //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\r\nCongratulations, your post has been approved:\r\n</span>\r\n<br><br>\r\n<a href=\"{{postUrl}}\" class=\"action-link\">{{postTitle}}}</a>\r\n<br><br>");Handlebars.templates["emailPostApproved"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailPostApproved"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailNewReply.js                                    //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\"><a href=\"{{profileUrl}}\">{{comment.author}}</a>\r\nhas replied to your comment on\r\n<a href=\"{{postLink}}\" class=\"action-link\">{{post.title}}</a>:\r\n</span>\r\n<br/><br/>\r\n\r\n<div class=\"comment-body\">\r\n{{{body}}}\r\n</div>\r\n<br>\r\n\r\n<a href=\"{{postCommentUrl}}\" class=\"action-link\">Discuss</a><br/><br/>");Handlebars.templates["emailNewReply"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewReply"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailNewUser.js                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">A new user account has been created: <a href=\"{{profileUrl}}\">{{username}}</a></span><br><br>");Handlebars.templates["emailNewUser"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewUser"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailTest.js                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">This is just a test</span><br><br>\r\n\r\nSent at {{date}}.<br><br>");Handlebars.templates["emailTest"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailTest"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/lib/server/templates/handlebars.emailWrapper.js                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<html lang=\"en\">\r\n<head>\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">    <!-- So that mobile webkit will display zoomed in -->\r\n    <meta name=\"format-detection\" content=\"telephone=no\"> <!-- disable auto telephone linking in iOS -->\r\n\r\n    <title>{{siteName}}</title>\r\n    <style type=\"text/css\">\r\n\r\n        /* Resets: see reset.css for details */\r\n        .ReadMsgBody { width: 100%; background-color: #ebebeb;}\r\n        .ExternalClass {width: 100%; background-color: #ebebeb;}\r\n        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height:100%;}\r\n        body {-webkit-text-size-adjust:none; -ms-text-size-adjust:none;}\r\n        body {margin:0; padding:0;}\r\n        table {border-spacing:0;}\r\n        table td {border-collapse:collapse;}\r\n        .yshortcuts a {border-bottom: none !important;}\r\n\r\n\r\n        /* Constrain email width for small screens */\r\n        @media screen and (max-width: 600px) {\r\n            table[class=\"container\"] {\r\n                width: 95% !important;\r\n            }\r\n            .main-container{\r\n              font-size: 14px !important;\r\n            }\r\n        }\r\n\r\n        /* Give content more room on mobile */\r\n        @media screen and (max-width: 480px) {\r\n            td[class=\"container-padding\"] {\r\n                padding-left: 12px !important;\r\n                padding-right: 12px !important;\r\n            }\r\n        }\r\n        a{\r\n          color: {{buttonColor}};\r\n          font-weight: bold;\r\n          text-decoration: none;\r\n        }\r\n        .wrapper{\r\n          padding: 20px 0;\r\n        }\r\n        .container{\r\n          border-radius: 3px;\r\n        }\r\n        .heading-container{\r\n          background: {{headerColor}};\r\n          padding: 15px;\r\n          text-align: center;\r\n          border-radius: 3px 3px 0px 0px;\r\n        }\r\n        .heading-container, .logo{\r\n          text-align: center;\r\n          color: white;\r\n          font-family: Helvetica, sans-serif;\r\n          font-weight: bold;\r\n          font-size: 20px;\r\n        }\r\n        .main-container{\r\n          line-height: 1.7;\r\n          background: white;\r\n          padding: 0 30px;\r\n          font-size: 15px;\r\n          font-family: Helvetica, sans-serif;\r\n          color: #555;\r\n        }\r\n        .heading{\r\n          font-weight: bold;\r\n          font-size: 18px;\r\n          line-height: 1.5;\r\n          margin: 0;\r\n        }\r\n        .footer-container{\r\n          background: #ddd;\r\n          font-family: Helvetica, sans-serif;\r\n          padding: 30px;\r\n          color: #777;\r\n          border-radius: 0px 0px 3px 3px;\r\n          font-size: 13px;\r\n        }\r\n        .post-thumbnail{\r\n          height: 28px;\r\n          width: 37px;\r\n          vertical-align: top;\r\n        }\r\n        .post-body, .comment-body{\r\n          border-top: 1px solid #ddd;\r\n          border-bottom: 1px solid #ddd;\r\n          padding: 10px 0;\r\n        }\r\n    </style>\r\n</head>\r\n<body style=\"margin:0; padding:10px 0;\" bgcolor=\"#ebebeb\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\">\r\n\r\n<br>\r\n\r\n<!-- 100% wrapper (grey background) -->\r\n<table border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ebebeb\">\r\n  <tr>\r\n    <td class=\"wrapper\" align=\"center\" valign=\"top\" bgcolor=\"#ebebeb\" style=\"background-color: #ebebeb;\">\r\n\r\n      <!-- 600px container (white background) -->\r\n      <table border=\"0\" width=\"600\" cellpadding=\"0\" cellspacing=\"0\" class=\"container\" bgcolor=\"#ffffff\">\r\n        <tr>\r\n          <td class=\"heading-container\">\r\n            <a href=\"{{siteUrl}}\">\r\n              {{#if logoUrl}}\r\n                <img class=\"logo\" src=\"{{logoUrl}}\" height=\"{{logoHeight}}\" width=\"{{logoWidth}}\" alt=\"{{siteName}}\"/>\r\n              {{else}}\r\n                {{siteName}}\r\n              {{/if}}\r\n            </a>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"main-container container-padding\" bgcolor=\"#ffffff\">\r\n            <br>\r\n\r\n            {{{body}}}\r\n\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"footer-container\">\r\n            <a href=\"{{accountLink}}\">Change your notifications settings</a><br/><br/>\r\n            {{{footer}}}\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <!--/600px container -->\r\n\r\n    </td>\r\n  </tr>\r\n</table>\r\n<!--/100% wrapper-->\r\n<br>\r\n<br>\r\n</body>\r\n</html>\r\n");Handlebars.templates["emailWrapper"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailWrapper"});};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/C:/$AppDev/Telescope/packages/telescope-email/i18n/de.i18n.js                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                                           // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","cdn_path":null}); // 9
TAPi18n.languages_names["en"] = ["English","English"];                                                          // 10
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                 // 11
  TAPi18n.translations["de"] = {};                                                                              // 12
}                                                                                                               // 13
                                                                                                                // 14
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                      // 15
  TAPi18n.translations["de"][namespace] = {};                                                                   // 16
}                                                                                                               // 17
                                                                                                                // 18
_.extend(TAPi18n.translations["de"][namespace], {"has_created_a_new_post":"has created a new post"});           // 19
                                                                                                                // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/C:/$AppDev/Telescope/packages/telescope-email/i18n/en.i18n.js                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
// integrate the fallback language translations                                                                 // 8
translations = {};                                                                                              // 9
translations[namespace] = {"has_created_a_new_post":"has created a new post"};                                  // 10
TAPi18n._loadLangFileObject("en", translations);                                                                // 11
                                                                                                                // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/C:/$AppDev/Telescope/packages/telescope-email/i18n/es.i18n.js                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                                  // 8
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                 // 9
  TAPi18n.translations["es"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                      // 13
  TAPi18n.translations["es"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["es"][namespace], {"has_created_a_new_post":"has created a new post"});           // 17
                                                                                                                // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/C:/$AppDev/Telescope/packages/telescope-email/i18n/fr.i18n.js                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                 // 8
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                 // 9
  TAPi18n.translations["fr"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                      // 13
  TAPi18n.translations["fr"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["fr"][namespace], {"has_created_a_new_post":"a créé un nouveau post"});           // 17
                                                                                                                // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/C:/$AppDev/Telescope/packages/telescope-email/i18n/it.i18n.js                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                                         // 8
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                 // 9
  TAPi18n.translations["it"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                      // 13
  TAPi18n.translations["it"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["it"][namespace], {"has_created_a_new_post":"has created a new post"});           // 17
                                                                                                                // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-email/C:/$AppDev/Telescope/packages/telescope-email/i18n/zh-CN.i18n.js                    //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","中文"];                                                    // 8
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                              // 9
  TAPi18n.translations["zh-CN"] = {};                                                                           // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                   // 13
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["zh-CN"][namespace], {"has_created_a_new_post":"has created a new post"});        // 17
                                                                                                                // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-email'] = {
  buildEmailTemplate: buildEmailTemplate,
  sendEmail: sendEmail,
  buildAndSendEmail: buildAndSendEmail,
  getEmailTemplate: getEmailTemplate
};

})();

//# sourceMappingURL=telescope-email.js.map
