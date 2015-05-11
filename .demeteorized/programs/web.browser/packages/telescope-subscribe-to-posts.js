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
var Herald = Package['telescope-notifications'].Herald;
var buildEmailNotification = Package['telescope-notifications'].buildEmailNotification;
var getUnsubscribeLink = Package['telescope-notifications'].getUnsubscribeLink;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Messages = Package['telescope-messages'].Messages;
var Iron = Package['iron:core'].Iron;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var subscribeItem, unsubscribeItem, __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-subscribe-to-posts/package-i18n.js                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
TAPi18n.packages["telescope-subscribe-to-posts"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                              // 2
// define package's translation function (proxy to the i18next)                                               // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                              // 4
// define the package's templates registrar                                                                   // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-subscribe-to-posts");                      // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                              // 8
// Record the list of templates prior to package load                                                         // 9
var _ = Package.underscore._;                                                                                 // 10
non_package_templates = _.keys(Template);                                                                     // 11
                                                                                                              // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-subscribe-to-posts/lib/subscribe-to-posts.js                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
threadModules.push(                                                                                           // 1
  {                                                                                                           // 2
    template: 'postSubscribe',                                                                                // 3
    order: 10                                                                                                 // 4
  }                                                                                                           // 5
);                                                                                                            // 6
                                                                                                              // 7
addToPostSchema.push(                                                                                         // 8
  {                                                                                                           // 9
    propertyName: 'subscribers',                                                                              // 10
    propertySchema: {                                                                                         // 11
      type: [String],                                                                                         // 12
      optional: true,                                                                                         // 13
      autoform: {                                                                                             // 14
        omit: true                                                                                            // 15
      }                                                                                                       // 16
    }                                                                                                         // 17
  }                                                                                                           // 18
);                                                                                                            // 19
                                                                                                              // 20
addToPostSchema.push(                                                                                         // 21
  {                                                                                                           // 22
    propertyName: 'subscriberCount',                                                                          // 23
    propertySchema: {                                                                                         // 24
      type: Number,                                                                                           // 25
      optional: true,                                                                                         // 26
      autoform: {                                                                                             // 27
        omit: true                                                                                            // 28
      }                                                                                                       // 29
    }                                                                                                         // 30
  }                                                                                                           // 31
);                                                                                                            // 32
                                                                                                              // 33
userProfileEdit.push(                                                                                         // 34
  {                                                                                                           // 35
    template: 'userSubscribedPosts',                                                                          // 36
    order: 5                                                                                                  // 37
  }                                                                                                           // 38
);                                                                                                            // 39
                                                                                                              // 40
viewParameters.userSubscribedPosts = function (terms) {                                                       // 41
  var user = Meteor.users.findOne(terms.userId),                                                              // 42
      postsIds = [];                                                                                          // 43
                                                                                                              // 44
  if (user.subscribedItems && user.subscribedItems.Posts)                                                     // 45
    postsIds = _.pluck(user.subscribedItems.Posts, "itemId");                                                 // 46
                                                                                                              // 47
  return {                                                                                                    // 48
    find: {_id: {$in: postsIds}},                                                                             // 49
    options: {limit: 5, sort: {postedAt: -1}}                                                                 // 50
  };                                                                                                          // 51
}                                                                                                             // 52
                                                                                                              // 53
var hasSubscribedItem = function (item, user) {                                                               // 54
  return item.subscribers && item.subscribers.indexOf(user._id) != -1;                                        // 55
};                                                                                                            // 56
                                                                                                              // 57
var addSubscribedItem = function (userId, item, collection) {                                                 // 58
  var field = 'subscribedItems.' + collection;                                                                // 59
  var add = {};                                                                                               // 60
  add[field] = item;                                                                                          // 61
  Meteor.users.update({_id: userId}, {                                                                        // 62
    $addToSet: add                                                                                            // 63
  });                                                                                                         // 64
};                                                                                                            // 65
                                                                                                              // 66
var removeSubscribedItem = function (userId, itemId, collection) {                                            // 67
  var field = 'subscribedItems.' + collection;                                                                // 68
  var remove = {};                                                                                            // 69
  remove[field] = {itemId: itemId};                                                                           // 70
  Meteor.users.update({_id: userId}, {                                                                        // 71
    $pull: remove                                                                                             // 72
  });                                                                                                         // 73
};                                                                                                            // 74
                                                                                                              // 75
subscribeItem = function (collection, itemId, user) {                                                         // 76
  var item = collection.findOne(itemId),                                                                      // 77
      collectionName = collection._name.slice(0,1).toUpperCase() + collection._name.slice(1);                 // 78
                                                                                                              // 79
  if (!user || !item || hasSubscribedItem(item, user))                                                        // 80
    return false;                                                                                             // 81
                                                                                                              // 82
  // author can't subscribe item                                                                              // 83
  if (item.userId && item.userId === user._id)                                                                // 84
    return false                                                                                              // 85
                                                                                                              // 86
  // Subscribe                                                                                                // 87
  var result = collection.update({_id: itemId, subscribers: { $ne: user._id }}, {                             // 88
    $addToSet: {subscribers: user._id},                                                                       // 89
    $inc: {subscriberCount: 1}                                                                                // 90
  });                                                                                                         // 91
                                                                                                              // 92
  if (result > 0) {                                                                                           // 93
    // Add item to list of subscribed items                                                                   // 94
    var obj = {                                                                                               // 95
      itemId: item._id,                                                                                       // 96
      subscribedAt: new Date()                                                                                // 97
    };                                                                                                        // 98
    addSubscribedItem(user._id, obj, collectionName);                                                         // 99
  }                                                                                                           // 100
                                                                                                              // 101
  return true;                                                                                                // 102
};                                                                                                            // 103
                                                                                                              // 104
unsubscribeItem = function (collection, itemId, user) {                                                       // 105
  var user = Meteor.user(),                                                                                   // 106
      item = collection.findOne(itemId),                                                                      // 107
      collectionName = collection._name.slice(0,1).toUpperCase()+collection._name.slice(1);                   // 108
                                                                                                              // 109
  if (!user || !item  || !hasSubscribedItem(item, user))                                                      // 110
    return false;                                                                                             // 111
                                                                                                              // 112
  // Unsubscribe                                                                                              // 113
  var result = collection.update({_id: itemId, subscribers: user._id }, {                                     // 114
    $pull: {subscribers: user._id},                                                                           // 115
    $inc: {subscriberCount: -1}                                                                               // 116
  });                                                                                                         // 117
                                                                                                              // 118
  if (result > 0) {                                                                                           // 119
    // Remove item from list of subscribed items                                                              // 120
    removeSubscribedItem(user._id, itemId, collectionName);                                                   // 121
  }                                                                                                           // 122
  return true;                                                                                                // 123
};                                                                                                            // 124
                                                                                                              // 125
Meteor.methods({                                                                                              // 126
  subscribePost: function(postId) {                                                                           // 127
    return subscribeItem.call(this, Posts, postId, Meteor.user());                                            // 128
  },                                                                                                          // 129
  unsubscribePost: function(postId) {                                                                         // 130
    return unsubscribeItem.call(this, Posts, postId, Meteor.user());                                          // 131
  }                                                                                                           // 132
});                                                                                                           // 133
                                                                                                              // 134
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-subscribe-to-posts/lib/client/templates/template.post_subscribe.js                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("postSubscribe");                                                                        // 2
Template["postSubscribe"] = new Template("Template.postSubscribe", (function() {                              // 3
  var view = this;                                                                                            // 4
  return Blaze.If(function() {                                                                                // 5
    return Spacebars.call(view.lookup("canSubscribe"));                                                       // 6
  }, function() {                                                                                             // 7
    return [ "\n    ", HTML.DIV({                                                                             // 8
      "class": "post-subscribe module grid-block"                                                             // 9
    }, "\n      ", Blaze.If(function() {                                                                      // 10
      return Spacebars.call(view.lookup("subscribed"));                                                       // 11
    }, function() {                                                                                           // 12
      return [ "\n        ", HTML.A({                                                                         // 13
        "class": "unsubscribe-link",                                                                          // 14
        href: "#"                                                                                             // 15
      }, "\n          ", HTML.SPAN(Blaze.View("lookup:_", function() {                                        // 16
        return Spacebars.mustache(view.lookup("_"), "unsubscribe_from_thread");                               // 17
      })), "\n        "), "\n      " ];                                                                       // 18
    }, function() {                                                                                           // 19
      return [ "\n        ", HTML.A({                                                                         // 20
        "class": "subscribe-link",                                                                            // 21
        href: "#"                                                                                             // 22
      }, "\n          ", HTML.SPAN(Blaze.View("lookup:_", function() {                                        // 23
        return Spacebars.mustache(view.lookup("_"), "subscribe_to_thread");                                   // 24
      })), "\n        "), "\n      " ];                                                                       // 25
    }), "\n    "), "\n  " ];                                                                                  // 26
  });                                                                                                         // 27
}));                                                                                                          // 28
                                                                                                              // 29
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-subscribe-to-posts/lib/client/templates/post_subscribe.js                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template[getTemplate('postSubscribe')].helpers({                                                              // 1
  canSubscribe: function() {                                                                                  // 2
    // you cannot subscribe to your own posts                                                                 // 3
    return Meteor.userId() && this.userId !== Meteor.userId();                                                // 4
  },                                                                                                          // 5
  subscribed: function() {                                                                                    // 6
    var user = Meteor.user();                                                                                 // 7
    if (!user) return false;                                                                                  // 8
                                                                                                              // 9
    return _.include(this.subscribers, user._id);                                                             // 10
  }                                                                                                           // 11
});                                                                                                           // 12
                                                                                                              // 13
Template[getTemplate('postSubscribe')].events({                                                               // 14
  'click .subscribe-link': function(e, instance) {                                                            // 15
    e.preventDefault();                                                                                       // 16
    if (this.userId === Meteor.userId())                                                                      // 17
      return;                                                                                                 // 18
                                                                                                              // 19
    var post = this;                                                                                          // 20
                                                                                                              // 21
    if (!Meteor.user()) {                                                                                     // 22
      Router.go('atSignIn');                                                                                  // 23
      Messages.flash(i18n.t("please_log_in_first"), "info");                                                  // 24
    }                                                                                                         // 25
                                                                                                              // 26
    Meteor.call('subscribePost', post._id, function(error, result) {                                          // 27
      if (result)                                                                                             // 28
        trackEvent("post subscribed", {'_id': post._id});                                                     // 29
    });                                                                                                       // 30
  },                                                                                                          // 31
                                                                                                              // 32
  'click .unsubscribe-link': function(e, instance) {                                                          // 33
    e.preventDefault();                                                                                       // 34
    var post = this;                                                                                          // 35
                                                                                                              // 36
    if (!Meteor.user()) {                                                                                     // 37
      Router.go('atSignIn');                                                                                  // 38
      Messages.flash(i18n.t("please_log_in_first"), "info");                                                  // 39
    }                                                                                                         // 40
                                                                                                              // 41
    Meteor.call('unsubscribePost', post._id, function(error, result) {                                        // 42
      if (result)                                                                                             // 43
        trackEvent("post unsubscribed", {'_id': post._id});                                                   // 44
    });                                                                                                       // 45
  }                                                                                                           // 46
});                                                                                                           // 47
                                                                                                              // 48
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-subscribe-to-posts/lib/client/templates/template.user_subscribed_posts.js               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("userSubscribedPosts");                                                                  // 2
Template["userSubscribedPosts"] = new Template("Template.userSubscribedPosts", (function() {                  // 3
  var view = this;                                                                                            // 4
  return HTML.DIV({                                                                                           // 5
    "class": "grid-small grid-block dialog admin"                                                             // 6
  }, "\n    ", HTML.H3(Blaze.View("lookup:_", function() {                                                    // 7
    return Spacebars.mustache(view.lookup("_"), "subscribed_posts");                                          // 8
  })), "\n    ", HTML.TABLE("\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", HTML.TD("Post"), "\n        ", HTML.TD("Subscribed At"), "\n      "), "\n    "), "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("posts"));                                                              // 10
  }, function() {                                                                                             // 11
    return [ "\n      ", HTML.TR("\n        ", HTML.TD(HTML.A({                                               // 12
      href: function() {                                                                                      // 13
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 14
          route: "post_page",                                                                                 // 15
          _id: view.lookup("_id")                                                                             // 16
        }));                                                                                                  // 17
      }                                                                                                       // 18
    }, Blaze.View("lookup:title", function() {                                                                // 19
      return Spacebars.mustache(view.lookup("title"));                                                        // 20
    }))), "\n        ", HTML.TD(Blaze.View("lookup:formatDate", function() {                                  // 21
      return Spacebars.mustache(view.lookup("formatDate"), view.lookup("subscribedAt"), "MM/DD/YYYY, HH:mm"); // 22
    })), "\n      "), "\n    " ];                                                                             // 23
  }), "\n    ", Blaze.If(function() {                                                                         // 24
    return Spacebars.call(view.lookup("hasMorePosts"));                                                       // 25
  }, function() {                                                                                             // 26
    return [ "\n      ", HTML.TR("\n        ", HTML.TD({                                                      // 27
      colspan: "2"                                                                                            // 28
    }, "\n          ", HTML.A({                                                                               // 29
      "class": "subscribedposts-more more-button grid-module",                                                // 30
      href: "#"                                                                                               // 31
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                          // 32
      return Spacebars.mustache(view.lookup("_"), "load_more");                                               // 33
    }))), "\n        "), "\n      "), "\n    " ];                                                             // 34
  }), "\n    "), "\n  ");                                                                                     // 35
}));                                                                                                          // 36
                                                                                                              // 37
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-subscribe-to-posts/lib/client/templates/user_subscribed_posts.js                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template[getTemplate('userSubscribedPosts')].created = function () {                                          // 1
  var user = this.data,                                                                                       // 2
      instance = this;                                                                                        // 3
                                                                                                              // 4
  // initialize the terms and posts local reactive variables                                                  // 5
  instance.terms = new ReactiveVar({                                                                          // 6
    view: 'userSubscribedPosts',                                                                              // 7
    userId: user._id,                                                                                         // 8
    limit: 5                                                                                                  // 9
  });                                                                                                         // 10
  instance.posts = new ReactiveVar({});                                                                       // 11
                                                                                                              // 12
  // will re-run when the "terms" local reactive variable changes                                             // 13
  this.autorun(function () {                                                                                  // 14
                                                                                                              // 15
    // get the new terms and generate new parameters from them                                                // 16
    var terms = instance.terms.get();                                                                         // 17
    var parameters = getPostsParameters(terms);                                                               // 18
                                                                                                              // 19
    // subscribe to the userPosts publication                                                                 // 20
    instance.subscription = Meteor.subscribe('userSubscribedPosts', terms);                                   // 21
                                                                                                              // 22
    // update the instance's "posts" cursor                                                                   // 23
    instance.posts.set(Posts.find(parameters.find, parameters.options));                                      // 24
                                                                                                              // 25
  });                                                                                                         // 26
};                                                                                                            // 27
                                                                                                              // 28
Template[getTemplate('userSubscribedPosts')].helpers({                                                        // 29
  posts: function () {                                                                                        // 30
    var user = this,                                                                                          // 31
        posts = Template.instance().posts.get().fetch();                                                      // 32
    posts = _.map(posts, function (post) {                                                                    // 33
      var item = _.findWhere(user.subscribedItems.Posts, {itemId: post._id});                                 // 34
      post.subscribedAt = item.subscribedAt;                                                                  // 35
      return post;                                                                                            // 36
    });                                                                                                       // 37
    return posts;                                                                                             // 38
  },                                                                                                          // 39
  hasMorePosts: function () {                                                                                 // 40
    return Template.instance().posts.get().count() >= Template.instance().terms.get().limit;                  // 41
  }                                                                                                           // 42
});                                                                                                           // 43
                                                                                                              // 44
Template[getTemplate('userSubscribedPosts')].events({                                                         // 45
  'click .subscribedposts-more': function (e) {                                                               // 46
    e.preventDefault();                                                                                       // 47
    var terms = Template.instance().terms.get();                                                              // 48
    terms.limit += 5;                                                                                         // 49
    Template.instance().terms.set(terms)                                                                      // 50
  }                                                                                                           // 51
});                                                                                                           // 52
                                                                                                              // 53
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/telescope-subscribe-to-posts/C:/$AppDev/Telescope/packages/telescope-subscribe-to-posts/i18n/en.i //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _ = Package.underscore._,                                                                                 // 1
    package_name = "telescope-subscribe-to-posts",                                                            // 2
    namespace = "telescope-subscribe-to-posts";                                                               // 3
                                                                                                              // 4
if (package_name != "project") {                                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                     // 6
}                                                                                                             // 7
// integrate the fallback language translations                                                               // 8
translations = {};                                                                                            // 9
translations[namespace] = {"subscribed_posts":"Subscribed Posts","subscribe_to_thread":"Subscribe to comment thread","unsubscribe_from_thread":"Unsubscribe from comment thread"};
TAPi18n._loadLangFileObject("en", translations);                                                              // 11
var package_templates = _.difference(_.keys(Template), non_package_templates);                                // 12
                                                                                                              // 13
for (var i = 0; i < package_templates.length; i++) {                                                          // 14
  var package_template = package_templates[i];                                                                // 15
                                                                                                              // 16
  registerI18nTemplate(package_template);                                                                     // 17
}                                                                                                             // 18
                                                                                                              // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-subscribe-to-posts'] = {
  subscribeItem: subscribeItem,
  unsubscribeItem: unsubscribeItem
};

})();
