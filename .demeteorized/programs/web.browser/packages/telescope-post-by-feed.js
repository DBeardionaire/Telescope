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
var postStatuses = Package['telescope-base'].postStatuses;
var STATUS_PENDING = Package['telescope-base'].STATUS_PENDING;
var STATUS_APPROVED = Package['telescope-base'].STATUS_APPROVED;
var STATUS_REJECTED = Package['telescope-base'].STATUS_REJECTED;
var adminMenu = Package['telescope-tags'].adminMenu;
var viewsMenu = Package['telescope-base'].viewsMenu;
var userMenu = Package['telescope-base'].userMenu;
var addToPostSchema = Package['telescope-tags'].addToPostSchema;
var addToCommentsSchema = Package['telescope-base'].addToCommentsSchema;
var addToSettingsSchema = Package['telescope-base'].addToSettingsSchema;
var addToUserSchema = Package['telescope-base'].addToUserSchema;
var registerPostProperty = Package['telescope-base'].registerPostProperty;
var registerCommentProperty = Package['telescope-base'].registerCommentProperty;
var registerSetting = Package['telescope-base'].registerSetting;
var registerUserProperty = Package['telescope-base'].registerUserProperty;
var preloadSubscriptions = Package['telescope-tags'].preloadSubscriptions;
var primaryNav = Package['telescope-tags'].primaryNav;
var secondaryNav = Package['telescope-base'].secondaryNav;
var mobileNav = Package['telescope-base'].mobileNav;
var viewParameters = Package['telescope-base'].viewParameters;
var footerModules = Package['telescope-base'].footerModules;
var heroModules = Package['telescope-base'].heroModules;
var threadModules = Package['telescope-base'].threadModules;
var postListTopModules = Package['telescope-base'].postListTopModules;
var postModules = Package['telescope-tags'].postModules;
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
var Categories = Package['telescope-tags'].Categories;
var getPostCategories = Package['telescope-tags'].getPostCategories;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Template = Package.templating.Template;
var Messages = Package['telescope-messages'].Messages;
var Iron = Package['iron:core'].Iron;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Feeds, translations;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/lib/feeds.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var feedSchema = new SimpleSchema({                                                                              // 1
  url: {                                                                                                         // 2
    type: String,                                                                                                // 3
    regEx: SimpleSchema.RegEx.Url                                                                                // 4
  },                                                                                                             // 5
  userId: {                                                                                                      // 6
    type: String,                                                                                                // 7
    label: 'feedUser',                                                                                           // 8
    autoform: {                                                                                                  // 9
      instructions: 'Posts will be assigned to this user.',                                                      // 10
      options: function () {                                                                                     // 11
        var users = Meteor.users.find().map(function (user) {                                                    // 12
          return {                                                                                               // 13
            value: user._id,                                                                                     // 14
            label: getDisplayName(user)                                                                          // 15
          };                                                                                                     // 16
        });                                                                                                      // 17
        return users;                                                                                            // 18
      }                                                                                                          // 19
    }                                                                                                            // 20
  },                                                                                                             // 21
  categories: {                                                                                                  // 22
    type: [String],                                                                                              // 23
    label: 'categories',                                                                                         // 24
    optional: true,                                                                                              // 25
    autoform: {                                                                                                  // 26
      instructions: 'Posts will be assigned to this category.',                                                  // 27
      noselect: true,                                                                                            // 28
      editable: true,                                                                                            // 29
      options: function () {                                                                                     // 30
        var categories = Categories.find().map(function (category) {                                             // 31
          return {                                                                                               // 32
            value: category._id,                                                                                 // 33
            label: category.name                                                                                 // 34
          };                                                                                                     // 35
        });                                                                                                      // 36
        return categories;                                                                                       // 37
      }                                                                                                          // 38
    }                                                                                                            // 39
  }                                                                                                              // 40
});                                                                                                              // 41
                                                                                                                 // 42
Feeds = new Meteor.Collection('feeds');                                                                          // 43
Feeds.attachSchema(feedSchema);                                                                                  // 44
                                                                                                                 // 45
// used to keep track of which feed a post was imported from                                                     // 46
var feedIdProperty = {                                                                                           // 47
  propertyName: 'feedId',                                                                                        // 48
  propertySchema: {                                                                                              // 49
    type: String,                                                                                                // 50
    label: 'feedId',                                                                                             // 51
    optional: true,                                                                                              // 52
    autoform: {                                                                                                  // 53
      omit: true                                                                                                 // 54
    }                                                                                                            // 55
  }                                                                                                              // 56
}                                                                                                                // 57
addToPostSchema.push(feedIdProperty);                                                                            // 58
                                                                                                                 // 59
// the RSS ID of the post in its original feed                                                                   // 60
var feedItemIdProperty = {                                                                                       // 61
  propertyName: 'feedItemId',                                                                                    // 62
  propertySchema: {                                                                                              // 63
    type: String,                                                                                                // 64
    label: 'feedItemId',                                                                                         // 65
    optional: true,                                                                                              // 66
    autoform: {                                                                                                  // 67
      omit: true                                                                                                 // 68
    }                                                                                                            // 69
  }                                                                                                              // 70
}                                                                                                                // 71
addToPostSchema.push(feedItemIdProperty);                                                                        // 72
                                                                                                                 // 73
Meteor.startup(function () {                                                                                     // 74
  Feeds.allow({                                                                                                  // 75
    insert: isAdminById,                                                                                         // 76
    update: isAdminById,                                                                                         // 77
    remove: isAdminById                                                                                          // 78
  });                                                                                                            // 79
                                                                                                                 // 80
  Meteor.methods({                                                                                               // 81
    insertFeed: function(feedUrl){                                                                               // 82
      check(feedUrl, feedSchema);                                                                                // 83
                                                                                                                 // 84
      if (Feeds.findOne({url: feedSchema.url}))                                                                  // 85
        throw new Meteor.Error('already-exists', i18n.t('feed_already_exists'));                                 // 86
                                                                                                                 // 87
      if (!Meteor.user() || !isAdmin(Meteor.user()))                                                             // 88
        throw new Meteor.Error('login-required', i18n.t('you_need_to_login_and_be_an_admin_to_add_a_new_feed')); // 89
                                                                                                                 // 90
      return Feeds.insert(feedUrl);                                                                              // 91
    }                                                                                                            // 92
  });                                                                                                            // 93
});                                                                                                              // 94
                                                                                                                 // 95
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/lib/client/routes.js                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
adminMenu.push({                                                                                                 // 1
  route: 'feeds',                                                                                                // 2
  label: 'Feeds',                                                                                                // 3
  description: 'import_new_posts_from_feeds'                                                                     // 4
});                                                                                                              // 5
                                                                                                                 // 6
Meteor.startup(function () {                                                                                     // 7
                                                                                                                 // 8
  Router.onBeforeAction(Router._filters.isAdmin, {only: ['feeds']});                                             // 9
                                                                                                                 // 10
  // RSS Urls Admin                                                                                              // 11
                                                                                                                 // 12
  Router.route('/feeds', {                                                                                       // 13
    name: 'feeds',                                                                                               // 14
    controller: AdminController,                                                                                 // 15
    waitOn: function() {                                                                                         // 16
      return [                                                                                                   // 17
        Meteor.subscribe('feeds'),                                                                               // 18
        Meteor.subscribe('allUsersAdmin'),                                                                       // 19
        Meteor.subscribe('categories')                                                                           // 20
      ];                                                                                                         // 21
    },                                                                                                           // 22
    // template: getTemplate('feeds')                                                                            // 23
  });                                                                                                            // 24
                                                                                                                 // 25
});                                                                                                              // 26
                                                                                                                 // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/lib/client/templates/feeds.js                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('feeds')].helpers({                                                                       // 2
    feeds: function(){                                                                                           // 3
      return Feeds.find({}, {sort: {url: 1}});                                                                   // 4
    },                                                                                                           // 5
    feedItem: function () {                                                                                      // 6
      return getTemplate('feedItem');                                                                            // 7
    }                                                                                                            // 8
  });                                                                                                            // 9
});                                                                                                              // 10
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/lib/client/templates/template.feeds.js                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("feeds");                                                                                   // 2
Template["feeds"] = new Template("Template.feeds", (function() {                                                 // 3
  var view = this;                                                                                               // 4
  return [ HTML.DIV({                                                                                            // 5
    "class": "form-well add-feed"                                                                                // 6
  }, "\n    ", HTML.Raw("<h3>Add new feed:</h3>"), "\n    ", Blaze._TemplateWith(function() {                    // 7
    return {                                                                                                     // 8
      collection: Spacebars.call("Feeds"),                                                                       // 9
      id: Spacebars.call("insertFeedForm"),                                                                      // 10
      type: Spacebars.call("insert"),                                                                            // 11
      "label-class": Spacebars.call("control-label"),                                                            // 12
      "input-col-class": Spacebars.call("controls"),                                                             // 13
      template: Spacebars.call("telescope")                                                                      // 14
    };                                                                                                           // 15
  }, function() {                                                                                                // 16
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                  // 17
  }), "\n  "), "\n  ", Blaze.Each(function() {                                                                   // 18
    return Spacebars.call(view.lookup("feeds"));                                                                 // 19
  }, function() {                                                                                                // 20
    return [ "\n    ", Blaze._TemplateWith(function() {                                                          // 21
      return {                                                                                                   // 22
        template: Spacebars.call(view.lookup("feedItem"))                                                        // 23
      };                                                                                                         // 24
    }, function() {                                                                                              // 25
      return Spacebars.include(function() {                                                                      // 26
        return Spacebars.call(Template.__dynamic);                                                               // 27
      });                                                                                                        // 28
    }), "\n  " ];                                                                                                // 29
  }) ];                                                                                                          // 30
}));                                                                                                             // 31
                                                                                                                 // 32
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/lib/client/templates/feed_item.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('feedItem')].helpers({                                                                    // 2
    formId: function () {                                                                                        // 3
      return 'updateFeed-'+ this._id                                                                             // 4
    }                                                                                                            // 5
  });                                                                                                            // 6
                                                                                                                 // 7
  Template[getTemplate('feedItem')].events({                                                                     // 8
    'click .delete-link': function(e, instance){                                                                 // 9
      e.preventDefault();                                                                                        // 10
      if (confirm("Delete feed?")) {                                                                             // 11
        Feeds.remove(instance.data._id);                                                                         // 12
      }                                                                                                          // 13
    }                                                                                                            // 14
  });                                                                                                            // 15
});                                                                                                              // 16
                                                                                                                 // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/lib/client/templates/template.feed_item.js                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("feedItem");                                                                                // 2
Template["feedItem"] = new Template("Template.feedItem", (function() {                                           // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "form-module"                                                                                       // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                  // 7
    return {                                                                                                     // 8
      collection: Spacebars.call("Feeds"),                                                                       // 9
      id: Spacebars.call(view.lookup("formId")),                                                                 // 10
      type: Spacebars.call("update"),                                                                            // 11
      doc: Spacebars.call(view.lookup(".")),                                                                     // 12
      "label-class": Spacebars.call("control-label"),                                                            // 13
      "input-col-class": Spacebars.call("controls"),                                                             // 14
      template: Spacebars.call("telescope")                                                                      // 15
    };                                                                                                           // 16
  }, function() {                                                                                                // 17
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                  // 18
  }), HTML.Raw('\n    <a href="#" class="delete-link">Delete</a>\n  '));                                         // 19
}));                                                                                                             // 20
                                                                                                                 // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/C:/$AppDev/Telescope/packages/telescope-post-by-feed/i18n/en.i18n.js          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "project",                                                                                    // 2
    namespace = "project";                                                                                       // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","cdn_path":null});  // 8
TAPi18n.languages_names["en"] = ["English","English"];                                                           // 9
// integrate the fallback language translations                                                                  // 10
translations = {};                                                                                               // 11
translations[namespace] = {"feed_already_exists":"A feed with the same URL already exists.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"You need to log in and be an admin to add a new feed.","import_new_posts_from_feeds":"Import new posts from feeds."};
TAPi18n._loadLangFileObject("en", translations);                                                                 // 13
                                                                                                                 // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-post-by-feed'] = {
  Feeds: Feeds
};

})();
