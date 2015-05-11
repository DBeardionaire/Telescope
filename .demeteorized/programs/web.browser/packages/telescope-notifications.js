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
var Settings = Package['telescope-settings'].Settings;
var buildEmailTemplate = Package['telescope-email'].buildEmailTemplate;
var sendEmail = Package['telescope-email'].sendEmail;
var buildAndSendEmail = Package['telescope-email'].buildAndSendEmail;
var getEmailTemplate = Package['telescope-email'].getEmailTemplate;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Herald = Package['kestanous:herald'].Herald;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Iron = Package['iron:core'].Iron;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Herald, buildEmailNotification, getUnsubscribeLink, notificationEmail, __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/notifications.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// add new post notification callback on post submit                                                                   // 1
postAfterSubmitMethodCallbacks.push(function (post) {                                                                  // 2
                                                                                                                       // 3
  var adminIds = _.pluck(Meteor.users.find({'isAdmin': true}, {fields: {_id:1}}).fetch(), '_id');                      // 4
  var notifiedUserIds = _.pluck(Meteor.users.find({'profile.notifications.posts': 1}, {fields: {_id:1}}).fetch(), '_id');
                                                                                                                       // 6
  // remove post author ID from arrays                                                                                 // 7
  var adminIds = _.without(adminIds, post.userId);                                                                     // 8
  var notifiedUserIds = _.without(notifiedUserIds, post.userId);                                                       // 9
                                                                                                                       // 10
  if (post.status === STATUS_PENDING && !!adminIds.length) {                                                           // 11
    // if post is pending, only notify admins                                                                          // 12
    Herald.createNotification(adminIds, {courier: 'newPendingPost', data: post});                                      // 13
  } else if (!!notifiedUserIds.length) {                                                                               // 14
    // if post is approved, notify everybody                                                                           // 15
    Herald.createNotification(notifiedUserIds, {courier: 'newPost', data: post});                                      // 16
  }                                                                                                                    // 17
  return post;                                                                                                         // 18
                                                                                                                       // 19
});                                                                                                                    // 20
                                                                                                                       // 21
// notify users that their pending post has been approved                                                              // 22
postApproveCallbacks.push(function (post) {                                                                            // 23
  Herald.createNotification(post.userId, {courier: 'postApproved', data: post});                                       // 24
  return post;                                                                                                         // 25
});                                                                                                                    // 26
                                                                                                                       // 27
// add new comment notification callback on comment submit                                                             // 28
commentAfterSubmitMethodCallbacks.push(function (comment) {                                                            // 29
  if(Meteor.isServer && !comment.disableNotifications){                                                                // 30
                                                                                                                       // 31
    var post = Posts.findOne(comment.postId),                                                                          // 32
        notificationData = {                                                                                           // 33
          comment: _.pick(comment, '_id', 'userId', 'author', 'body'),                                                 // 34
          post: _.pick(post, '_id', 'userId', 'title', 'url')                                                          // 35
        },                                                                                                             // 36
        userIdsNotified = [];                                                                                          // 37
                                                                                                                       // 38
    // 1. Notify author of post                                                                                        // 39
    // do not notify author of post if they're the ones posting the comment                                            // 40
    if (comment.userId !== post.userId) {                                                                              // 41
                                                                                                                       // 42
      Herald.createNotification(post.userId, {courier: 'newComment', data: notificationData});                         // 43
      userIdsNotified.push(post.userId);                                                                               // 44
                                                                                                                       // 45
    }                                                                                                                  // 46
                                                                                                                       // 47
    // 2. Notify author of comment being replied to                                                                    // 48
    if (!!comment.parentCommentId) {                                                                                   // 49
                                                                                                                       // 50
      var parentComment = Comments.findOne(comment.parentCommentId);                                                   // 51
                                                                                                                       // 52
      // do not notify author of parent comment if they're also post author or comment author                          // 53
      // (someone could be replying to their own comment)                                                              // 54
      if (parentComment.userId !== post.userId && parentComment.userId !== comment.userId) {                           // 55
                                                                                                                       // 56
        // add parent comment to notification data                                                                     // 57
        notificationData.parentComment = _.pick(parentComment, '_id', 'userId', 'author');                             // 58
                                                                                                                       // 59
        Herald.createNotification(parentComment.userId, {courier: 'newReply', data: notificationData});                // 60
        userIdsNotified.push(parentComment.userId);                                                                    // 61
                                                                                                                       // 62
      }                                                                                                                // 63
                                                                                                                       // 64
    }                                                                                                                  // 65
                                                                                                                       // 66
    // 3. Notify users subscribed to the thread                                                                        // 67
    // TODO: ideally this would be injected from the telescope-subscribe-to-posts package                              // 68
    if (!!post.subscribers) {                                                                                          // 69
                                                                                                                       // 70
      // remove userIds of users that have already been notified                                                       // 71
      // and of comment author (they could be replying in a thread they're subscribed to)                              // 72
      var subscriberIdsToNotify = _.difference(post.subscribers, userIdsNotified, [comment.userId]);                   // 73
      Herald.createNotification(subscriberIdsToNotify, {courier: 'newCommentSubscribed', data: notificationData});     // 74
                                                                                                                       // 75
      userIdsNotified = userIdsNotified.concat(subscriberIdsToNotify);                                                 // 76
                                                                                                                       // 77
    }                                                                                                                  // 78
                                                                                                                       // 79
  }                                                                                                                    // 80
                                                                                                                       // 81
  return comment;                                                                                                      // 82
                                                                                                                       // 83
});                                                                                                                    // 84
                                                                                                                       // 85
var emailNotifications = {                                                                                             // 86
  propertyName: 'emailNotifications',                                                                                  // 87
  propertySchema: {                                                                                                    // 88
    type: Boolean,                                                                                                     // 89
    optional: true,                                                                                                    // 90
    defaultValue: true,                                                                                                // 91
    autoform: {                                                                                                        // 92
      group: 'notifications_fieldset',                                                                                 // 93
      instructions: 'Enable email notifications for new posts and new comments (requires restart).'                    // 94
    }                                                                                                                  // 95
  }                                                                                                                    // 96
};                                                                                                                     // 97
Settings.addToSchema(emailNotifications);                                                                              // 98
                                                                                                                       // 99
// make it possible to disable notifications on a per-comment basis                                                    // 100
addToCommentsSchema.push(                                                                                              // 101
  {                                                                                                                    // 102
    propertyName: 'disableNotifications',                                                                              // 103
    propertySchema: {                                                                                                  // 104
      type: Boolean,                                                                                                   // 105
      optional: true,                                                                                                  // 106
      autoform: {                                                                                                      // 107
        omit: true                                                                                                     // 108
      }                                                                                                                // 109
    }                                                                                                                  // 110
  }                                                                                                                    // 111
);                                                                                                                     // 112
                                                                                                                       // 113
function setNotificationDefaults (user) {                                                                              // 114
  // set notifications default preferences                                                                             // 115
  user.profile.notifications = {                                                                                       // 116
    users: false,                                                                                                      // 117
    posts: false,                                                                                                      // 118
    comments: true,                                                                                                    // 119
    replies: true                                                                                                      // 120
  };                                                                                                                   // 121
  return user;                                                                                                         // 122
}                                                                                                                      // 123
userCreatedCallbacks.push(setNotificationDefaults);                                                                    // 124
                                                                                                                       // 125
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/herald.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
// send emails every second when in dev environment                                                                    // 2
if (Meteor.absoluteUrl().indexOf('localhost') !== -1)                                                                  // 3
  Herald.settings.queueTimer = 1000;                                                                                   // 4
                                                                                                                       // 5
Meteor.startup(function () {                                                                                           // 6
                                                                                                                       // 7
  Herald.collection.deny({                                                                                             // 8
    update: !can.editById,                                                                                             // 9
    remove: !can.editById                                                                                              // 10
  });                                                                                                                  // 11
                                                                                                                       // 12
  // disable all email notifications when "emailNotifications" is set to false                                         // 13
  Herald.settings.overrides.email = !Settings.get('emailNotifications', true);                                         // 14
                                                                                                                       // 15
});                                                                                                                    // 16
                                                                                                                       // 17
var commentEmail = function (userToNotify) {                                                                           // 18
  var notification = this;                                                                                             // 19
  // put in setTimeout so it doesn't hold up the rest of the method                                                    // 20
  Meteor.setTimeout(function () {                                                                                      // 21
    notificationEmail = buildEmailNotification(notification);                                                          // 22
    sendEmail(getEmail(userToNotify), notificationEmail.subject, notificationEmail.html);                              // 23
  }, 1);                                                                                                               // 24
}                                                                                                                      // 25
                                                                                                                       // 26
var getCommenterProfileUrl = function (comment) {                                                                      // 27
  var user = Meteor.users.findOne(comment.userId);                                                                     // 28
  if (user) {                                                                                                          // 29
    return getProfileUrl(user);                                                                                        // 30
  } else {                                                                                                             // 31
    return getProfileUrlBySlugOrId(comment.userId);                                                                    // 32
  }                                                                                                                    // 33
}                                                                                                                      // 34
                                                                                                                       // 35
var getAuthor = function (comment) {                                                                                   // 36
  var user = Meteor.users.findOne(comment.userId);                                                                     // 37
  if (user) {                                                                                                          // 38
    return getUserName(user);                                                                                          // 39
  } else {                                                                                                             // 40
    return comment.author;                                                                                             // 41
  }                                                                                                                    // 42
}                                                                                                                      // 43
                                                                                                                       // 44
// ------------------------------------------------------------------------------------------- //                      // 45
// -----------------------------------------  Posts ------------------------------------------ //                      // 46
// ------------------------------------------------------------------------------------------- //                      // 47
                                                                                                                       // 48
Herald.addCourier('newPost', {                                                                                         // 49
  media: {                                                                                                             // 50
    email: {                                                                                                           // 51
      emailRunner: function (user) {                                                                                   // 52
        var p = getPostProperties(this.data);                                                                          // 53
        var subject = p.postAuthorName+' has created a new post: '+p.postTitle;                                        // 54
        var html = buildEmailTemplate(getEmailTemplate('emailNewPost')(p));                                            // 55
        sendEmail(getEmail(user), subject, html);                                                                      // 56
      }                                                                                                                // 57
    }                                                                                                                  // 58
  }                                                                                                                    // 59
  // message: function (user) { return 'email template?' }                                                             // 60
});                                                                                                                    // 61
                                                                                                                       // 62
Herald.addCourier('newPendingPost', {                                                                                  // 63
  media: {                                                                                                             // 64
    email: {                                                                                                           // 65
      emailRunner: function (user) {                                                                                   // 66
        var p = getPostProperties(this.data);                                                                          // 67
        var subject = p.postAuthorName+' has a new post pending approval: '+p.postTitle;                               // 68
        var html = buildEmailTemplate(getEmailTemplate('emailNewPendingPost')(p));                                     // 69
        sendEmail(getEmail(user), subject, html);                                                                      // 70
      }                                                                                                                // 71
    }                                                                                                                  // 72
  }                                                                                                                    // 73
});                                                                                                                    // 74
                                                                                                                       // 75
Herald.addCourier('postApproved', {                                                                                    // 76
  media: {                                                                                                             // 77
    onsite: {},                                                                                                        // 78
    email: {                                                                                                           // 79
      emailRunner: function (user) {                                                                                   // 80
        var p = getPostProperties(this.data);                                                                          // 81
        var subject = 'Your post “'+p.postTitle+'” has been approved';                                                 // 82
        var html = buildEmailTemplate(getEmailTemplate('emailPostApproved')(p));                                       // 83
        sendEmail(getEmail(user), subject, html);                                                                      // 84
      }                                                                                                                // 85
    }                                                                                                                  // 86
  },                                                                                                                   // 87
  message: {                                                                                                           // 88
    default: function (user) {                                                                                         // 89
      return Blaze.toHTML(Blaze.With(this, function () {                                                               // 90
        return Template[getTemplate('notificationPostApproved')];                                                      // 91
      }));                                                                                                             // 92
    }                                                                                                                  // 93
  },                                                                                                                   // 94
  transform: {                                                                                                         // 95
    postUrl: function () {                                                                                             // 96
      var p = getPostProperties(this.data);                                                                            // 97
      return p.postUrl;                                                                                                // 98
    },                                                                                                                 // 99
    postTitle: function () {                                                                                           // 100
      var p = getPostProperties(this.data);                                                                            // 101
      return p.postTitle;                                                                                              // 102
    }                                                                                                                  // 103
  }                                                                                                                    // 104
});                                                                                                                    // 105
                                                                                                                       // 106
// ------------------------------------------------------------------------------------------- //                      // 107
// ---------------------------------------- Comments ----------------------------------------- //                      // 108
// ------------------------------------------------------------------------------------------- //                      // 109
                                                                                                                       // 110
// specify how to get properties used in template from comment data                                                    // 111
var commentCourierTransform = {                                                                                        // 112
  profileUrl: function () {                                                                                            // 113
    return getCommenterProfileUrl(this.data.comment);                                                                  // 114
  },                                                                                                                   // 115
  postCommentUrl: function () {                                                                                        // 116
    return Router.path('post_page', {_id: this.data.post._id});                                                        // 117
  },                                                                                                                   // 118
  author: function () {                                                                                                // 119
    return getAuthor(this.data.comment);                                                                               // 120
  },                                                                                                                   // 121
  postTitle: function () {                                                                                             // 122
    return this.data.post.title;                                                                                       // 123
  },                                                                                                                   // 124
  url: function () {                                                                                                   // 125
    return Router.path('comment_reply', {_id: this.parentComment._id});                                                // 126
  }                                                                                                                    // 127
};                                                                                                                     // 128
                                                                                                                       // 129
Herald.addCourier('newComment', {                                                                                      // 130
  media: {                                                                                                             // 131
    onsite: {},                                                                                                        // 132
    email: {                                                                                                           // 133
      emailRunner: commentEmail                                                                                        // 134
    }                                                                                                                  // 135
  },                                                                                                                   // 136
  message: {                                                                                                           // 137
    default: function (user) {                                                                                         // 138
      return Blaze.toHTML(Blaze.With(this, function () {                                                               // 139
        return Template[getTemplate('notificationNewComment')];                                                        // 140
      }));                                                                                                             // 141
    }                                                                                                                  // 142
  },                                                                                                                   // 143
  transform: commentCourierTransform                                                                                   // 144
});                                                                                                                    // 145
                                                                                                                       // 146
Herald.addCourier('newReply', {                                                                                        // 147
  media: {                                                                                                             // 148
    onsite: {},                                                                                                        // 149
    email: {                                                                                                           // 150
      emailRunner: commentEmail                                                                                        // 151
    }                                                                                                                  // 152
  },                                                                                                                   // 153
  message: {                                                                                                           // 154
    default: function (user) {                                                                                         // 155
      return Blaze.toHTML(Blaze.With(this, function () {                                                               // 156
        return Template[getTemplate('notificationNewReply')];                                                          // 157
      }));                                                                                                             // 158
    }                                                                                                                  // 159
  },                                                                                                                   // 160
  transform: commentCourierTransform                                                                                   // 161
});                                                                                                                    // 162
                                                                                                                       // 163
Herald.addCourier('newCommentSubscribed', {                                                                            // 164
  media: {                                                                                                             // 165
    onsite: {},                                                                                                        // 166
    email: {                                                                                                           // 167
      emailRunner: commentEmail                                                                                        // 168
    }                                                                                                                  // 169
  },                                                                                                                   // 170
  message: {                                                                                                           // 171
    default: function (user) {                                                                                         // 172
      return Blaze.toHTML(Blaze.With(this, function () {                                                               // 173
        return Template[getTemplate('notificationNewReply')];                                                          // 174
      }));                                                                                                             // 175
    }                                                                                                                  // 176
  },                                                                                                                   // 177
  transform: commentCourierTransform                                                                                   // 178
});                                                                                                                    // 179
                                                                                                                       // 180
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/package-i18n.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
TAPi18n.packages["telescope-notifications"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                       // 2
// define package's translation function (proxy to the i18next)                                                        // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                       // 4
// define the package's templates registrar                                                                            // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-notifications");                                    // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                       // 8
// Record the list of templates prior to package load                                                                  // 9
var _ = Package.underscore._;                                                                                          // 10
non_package_templates = _.keys(Template);                                                                              // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/template.notification_item.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notificationItem");                                                                              // 2
Template["notificationItem"] = new Template("Template.notificationItem", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.LI({                                                                                                     // 5
    "class": function() {                                                                                              // 6
      return [ "dropdown-item notification-item ", Blaze.If(function() {                                               // 7
        return Spacebars.call(view.lookup("read"));                                                                    // 8
      }, function() {                                                                                                  // 9
        return "read";                                                                                                 // 10
      }) ];                                                                                                            // 11
    }                                                                                                                  // 12
  }, "\n    ", HTML.SPAN({                                                                                             // 13
    "class": "notification-timestamp"                                                                                  // 14
  }, Blaze.View("lookup:timeAgo", function() {                                                                         // 15
    return Spacebars.mustache(view.lookup("timeAgo"), view.lookup("timestamp"));                                       // 16
  })), "\n    ", HTML.DIV({                                                                                            // 17
    "class": "notification-html"                                                                                       // 18
  }, "\n      ", Blaze.View("lookup:notificationHTML", function() {                                                    // 19
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("notificationHTML")));                                     // 20
  }), "\n    "), "\n  ");                                                                                              // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/notification_item.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template[getTemplate('notificationItem')].helpers({                                                                    // 1
  properties: function(){                                                                                              // 2
    return this.data;                                                                                                  // 3
  },                                                                                                                   // 4
  notificationHTML: function(){                                                                                        // 5
    return this.message();                                                                                             // 6
  }                                                                                                                    // 7
});                                                                                                                    // 8
                                                                                                                       // 9
Template[getTemplate('notificationItem')].events({                                                                     // 10
  'click .action-link': function(event, instance){                                                                     // 11
    var notificationId=instance.data._id;                                                                              // 12
    Herald.collection.update(                                                                                          // 13
    {_id: notificationId},                                                                                             // 14
    {                                                                                                                  // 15
      $set:{                                                                                                           // 16
        read: true                                                                                                     // 17
      }                                                                                                                // 18
    },                                                                                                                 // 19
    function(error, result){                                                                                           // 20
      if(error){                                                                                                       // 21
        console.log(error);                                                                                            // 22
      }                                                                                                                // 23
    }                                                                                                                  // 24
  );                                                                                                                   // 25
  }                                                                                                                    // 26
});                                                                                                                    // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/template.notifications_mark_as_read.js                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notificationsMarkAsRead");                                                                       // 2
Template["notificationsMarkAsRead"] = new Template("Template.notificationsMarkAsRead", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.LI({                                                                                                     // 5
    "class": "dropdown-item"                                                                                           // 6
  }, HTML.A({                                                                                                          // 7
    href: "#",                                                                                                         // 8
    "class": "button mark-as-read btn btn-primary"                                                                     // 9
  }, Blaze.View("lookup:_", function() {                                                                               // 10
    return Spacebars.mustache(view.lookup("_"), "mark_as_read");                                                       // 11
  })));                                                                                                                // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/notifications_mark_as_read.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template[getTemplate('notificationsMarkAsRead')].events({                                                              // 1
  'click .mark-as-read': function(e, t){                                                                               // 2
    e.preventDefault();                                                                                                // 3
    t.$('li').parents('.dropdown').removeClass('dropdown-open');                                                       // 4
    Meteor.call('heraldMarkAllAsRead',                                                                                 // 5
      function(error, result){                                                                                         // 6
        error && console.log(error);                                                                                   // 7
      }                                                                                                                // 8
    );                                                                                                                 // 9
  }                                                                                                                    // 10
});                                                                                                                    // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/template.notification_new_comment.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notificationNewComment");                                                                        // 2
Template["notificationNewComment"] = new Template("Template.notificationNewComment", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.P("\n    ", HTML.A({                                                                                     // 5
    href: function() {                                                                                                 // 6
      return Spacebars.mustache(view.lookup("profileUrl"));                                                            // 7
    }                                                                                                                  // 8
  }, Blaze.View("lookup:author", function() {                                                                          // 9
    return Spacebars.mustache(view.lookup("author"));                                                                  // 10
  })), " \n    ", Blaze.View("lookup:_", function() {                                                                  // 11
    return Spacebars.mustache(view.lookup("_"), "left_a_new_comment_on");                                              // 12
  }), "  \n    ", HTML.A({                                                                                             // 13
    href: function() {                                                                                                 // 14
      return Spacebars.mustache(view.lookup("postCommentUrl"));                                                        // 15
    },                                                                                                                 // 16
    "class": "action-link"                                                                                             // 17
  }, Blaze.View("lookup:postTitle", function() {                                                                       // 18
    return Spacebars.mustache(view.lookup("postTitle"));                                                               // 19
  })), "\n  ");                                                                                                        // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/template.notification_new_reply.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notificationNewReply");                                                                          // 2
Template["notificationNewReply"] = new Template("Template.notificationNewReply", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return HTML.P("\n    ", HTML.A({                                                                                     // 5
    href: function() {                                                                                                 // 6
      return Spacebars.mustache(view.lookup("profileUrl"));                                                            // 7
    }                                                                                                                  // 8
  }, Blaze.View("lookup:author", function() {                                                                          // 9
    return Spacebars.mustache(view.lookup("author"));                                                                  // 10
  })), "\n    ", Blaze.View("lookup:_", function() {                                                                   // 11
    return Spacebars.mustache(view.lookup("_"), "has_replied_to_your_comment_on");                                     // 12
  }), " \n    ", HTML.A({                                                                                              // 13
    href: function() {                                                                                                 // 14
      return Spacebars.mustache(view.lookup("postCommentUrl"));                                                        // 15
    },                                                                                                                 // 16
    "class": "action-link"                                                                                             // 17
  }, Blaze.View("lookup:postTitle", function() {                                                                       // 18
    return Spacebars.mustache(view.lookup("postTitle"));                                                               // 19
  })), "\n  ");                                                                                                        // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/template.notification_post_approved.js                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notificationPostApproved");                                                                      // 2
Template["notificationPostApproved"] = new Template("Template.notificationPostApproved", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.P("\n    ", Blaze.View("lookup:_", function() {                                                          // 5
    return Spacebars.mustache(view.lookup("_"), "your_post");                                                          // 6
  }), " \n    ", HTML.A({                                                                                              // 7
    href: function() {                                                                                                 // 8
      return Spacebars.mustache(view.lookup("postUrl"));                                                               // 9
    },                                                                                                                 // 10
    "class": "action-link"                                                                                             // 11
  }, Blaze.View("lookup:postTitle", function() {                                                                       // 12
    return Spacebars.mustache(view.lookup("postTitle"));                                                               // 13
  })), "\n    ", Blaze.View("lookup:_", function() {                                                                   // 14
    return Spacebars.mustache(view.lookup("_"), "has_been_approved");                                                  // 15
  }), " \n  ");                                                                                                        // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/template.notifications_menu.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notificationsMenu");                                                                             // 2
Template["notificationsMenu"] = new Template("Template.notificationsMenu", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("isLoggedIn"));                                                                  // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 8
      return {                                                                                                         // 9
        menuName: Spacebars.call("notifications"),                                                                     // 10
        menuLabel: Spacebars.call(view.lookup("menuLabel")),                                                           // 11
        menuItems: Spacebars.call(view.lookup("menuItems")),                                                           // 12
        menuClass: Spacebars.call("header-submodule"),                                                                 // 13
        menuMode: Spacebars.call(view.lookup("menuMode")),                                                             // 14
        menuCollapsed: Spacebars.call(true)                                                                            // 15
      };                                                                                                               // 16
    }, function() {                                                                                                    // 17
      return Spacebars.include(view.lookupTemplate("menuComponent"));                                                  // 18
    }), "\n  " ];                                                                                                      // 19
  });                                                                                                                  // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/notifications_menu.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template[getTemplate('notificationsMenu')].helpers({                                                                   // 1
  menuLabel: function () {                                                                                             // 2
    var notificationsCount;                                                                                            // 3
    var notifications=Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}}).fetch(); // 4
                                                                                                                       // 5
    if(notifications.length==0){                                                                                       // 6
      notificationsCount = __('no_notifications');                                                                     // 7
    }else if(notifications.length==1){                                                                                 // 8
      notificationsCount = __('1_notification');                                                                       // 9
    }else{                                                                                                             // 10
      notificationsCount = notifications.length+' '+__('notifications');                                               // 11
    }                                                                                                                  // 12
                                                                                                                       // 13
    return notificationsCount;                                                                                         // 14
  },                                                                                                                   // 15
  menuItems: function () {                                                                                             // 16
    var notifications=Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}}).fetch(); // 17
    var markAllAsRead = [{                                                                                             // 18
      template: 'notificationsMarkAsRead'                                                                              // 19
    }];                                                                                                                // 20
    if (notifications.length) {                                                                                        // 21
      var menuItems = markAllAsRead.concat(_.map(notifications, function (notification) {                              // 22
        return {                                                                                                       // 23
          template: "notificationItem",                                                                                // 24
          data: notification                                                                                           // 25
        }                                                                                                              // 26
      }));                                                                                                             // 27
    } else {                                                                                                           // 28
      var menuItems = [];                                                                                              // 29
    }                                                                                                                  // 30
    return menuItems;                                                                                                  // 31
  },                                                                                                                   // 32
  menuMode: function () {                                                                                              // 33
    if (!!this.mobile) {                                                                                               // 34
      return 'list';                                                                                                   // 35
    } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {                                                   // 36
      return 'dropdown';                                                                                               // 37
    } else {                                                                                                           // 38
      return 'accordion';                                                                                              // 39
    }                                                                                                                  // 40
  }                                                                                                                    // 41
});                                                                                                                    // 42
                                                                                                                       // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/template.unsubscribe.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("unsubscribe");                                                                                   // 2
Template["unsubscribe"] = new Template("Template.unsubscribe", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "grid-small grid-block dialog admin"                                                                      // 6
  }, "\n    ", HTML.P(Blaze.View("lookup:unsubscribed", function() {                                                   // 7
    return Spacebars.mustache(view.lookup("unsubscribed"));                                                            // 8
  })), "\n  ");                                                                                                        // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/lib/client/templates/unsubscribe.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template[getTemplate('unsubscribe')].created = function(){                                                             // 1
  var hash = this.data.hash;                                                                                           // 2
  Meteor.call('unsubscribeUser', hash, function(error, result){                                                        // 3
    if(result){                                                                                                        // 4
      Session.set('unsubscribedMessage', __('you_have_been_unsubscribed_from_all_notifications'));                     // 5
    }else{                                                                                                             // 6
      Session.set('unsubscribedMessage', __('user_not_found'));                                                        // 7
    }                                                                                                                  // 8
  });                                                                                                                  // 9
  trackEvent('notificationsUnsubcribe', {hash: hash});                                                                 // 10
};                                                                                                                     // 11
                                                                                                                       // 12
Template[getTemplate('unsubscribe')].helpers({                                                                         // 13
  unsubscribed : function(){                                                                                           // 14
    // we have to use a session variable because the string we want to display                                         // 15
    // depends on the return value of an asynchronous callback (unsubscribeUser)                                       // 16
    return Session.get('unsubscribedMessage');                                                                         // 17
  }                                                                                                                    // 18
});                                                                                                                    // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/C:/$AppDev/Telescope/packages/telescope-notifications/i18n/de.i18n.js              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-notifications",                                                                          // 2
    namespace = "telescope-notifications";                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                         // 8
                                                                                                                       // 9
for (var i = 0; i < package_templates.length; i++) {                                                                   // 10
  var package_template = package_templates[i];                                                                         // 11
                                                                                                                       // 12
  registerI18nTemplate(package_template);                                                                              // 13
}                                                                                                                      // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/C:/$AppDev/Telescope/packages/telescope-notifications/i18n/en.i18n.js              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-notifications",                                                                          // 2
    namespace = "telescope-notifications";                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"left_a_new_comment_on":"left a new comment on","has_replied_to_your_comment_on":"has replied to your comment on","mark_as_read":"Mark as read","no_notifications":"No notifications","you_have_been_unsubscribed_from_all_notifications":"You have been unsubscribed from all notifications.","user_not_found":"User not found","1_notification":"1 notification","notifications":"notifications","notifications_fieldset":"Notifications","emailNotifications":"Email Notifications","your_post":"Your post","has_been_approved":"has been approved"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/C:/$AppDev/Telescope/packages/telescope-notifications/i18n/es.i18n.js              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-notifications",                                                                          // 2
    namespace = "telescope-notifications";                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/C:/$AppDev/Telescope/packages/telescope-notifications/i18n/fr.i18n.js              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-notifications",                                                                          // 2
    namespace = "telescope-notifications";                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/C:/$AppDev/Telescope/packages/telescope-notifications/i18n/it.i18n.js              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-notifications",                                                                          // 2
    namespace = "telescope-notifications";                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-notifications/C:/$AppDev/Telescope/packages/telescope-notifications/i18n/zh-CN.i18n.js           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-notifications",                                                                          // 2
    namespace = "telescope-notifications";                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-notifications'] = {
  Herald: Herald,
  buildEmailNotification: buildEmailNotification,
  getUnsubscribeLink: getUnsubscribeLink
};

})();
