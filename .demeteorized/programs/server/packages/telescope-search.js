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
var _ = Package['telescope-lib']._;
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
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

/* Package-scope variables */
var adminMenu, viewParameters, Searches;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-search/lib/search.js                                             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
// push "search" template to primaryNav                                                // 1
primaryNav.push({                                                                      // 2
  template: 'search',                                                                  // 3
  order: 100                                                                           // 4
});                                                                                    // 5
                                                                                       // 6
mobileNav.push({                                                                       // 7
  template: 'search',                                                                  // 8
  order: 1                                                                             // 9
});                                                                                    // 10
                                                                                       // 11
adminMenu.push({                                                                       // 12
  route: 'searchLogs',                                                                 // 13
  label: 'search_logs',                                                                // 14
  description: 'see_what_people_are_searching_for'                                     // 15
});                                                                                    // 16
                                                                                       // 17
registerElementColor('.search-field', 'secondaryContrastColor');                       // 18
                                                                                       // 19
Searches = new Meteor.Collection("searches", {                                         // 20
  schema: new SimpleSchema({                                                           // 21
    _id: {                                                                             // 22
      type: String,                                                                    // 23
      optional: true                                                                   // 24
    },                                                                                 // 25
    timestamp: {                                                                       // 26
      type: Date                                                                       // 27
    },                                                                                 // 28
    keyword: {                                                                         // 29
      type: String                                                                     // 30
    }                                                                                  // 31
  })                                                                                   // 32
});                                                                                    // 33
                                                                                       // 34
Meteor.startup(function() {                                                            // 35
  Searches.allow({                                                                     // 36
    update: isAdminById                                                                // 37
  , remove: isAdminById                                                                // 38
  });                                                                                  // 39
});                                                                                    // 40
                                                                                       // 41
// search post list parameters                                                         // 42
viewParameters.search = function (terms, baseParameters) {                             // 43
  // if query is empty, just return parameters that will result in an empty collection // 44
  if(typeof terms.query === 'undefined' || !terms.query)                               // 45
    return {find:{_id: 0}}                                                             // 46
                                                                                       // 47
  var parameters = deepExtend(true, baseParameters, {                                  // 48
    find: {                                                                            // 49
      $or: [                                                                           // 50
        {title: {$regex: terms.query, $options: 'i'}},                                 // 51
        {url: {$regex: terms.query, $options: 'i'}},                                   // 52
        {body: {$regex: terms.query, $options: 'i'}}                                   // 53
      ]                                                                                // 54
    }                                                                                  // 55
  });                                                                                  // 56
  return parameters;                                                                   // 57
}                                                                                      // 58
                                                                                       // 59
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-search/lib/server/log_search.js                                  //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
var logSearch = function (keyword) {                                                   // 1
  Searches.insert({                                                                    // 2
    timestamp: new Date(),                                                             // 3
    keyword: keyword                                                                   // 4
  });                                                                                  // 5
};                                                                                     // 6
                                                                                       // 7
Meteor.methods({                                                                       // 8
  logSearch: function (keyword) {                                                      // 9
    logSearch.call(this, keyword);                                                     // 10
  }                                                                                    // 11
});                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-search/lib/server/publications.js                                //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
Meteor.publish('searches', function(limit) {                                           // 1
  var limit = typeof limit === undefined ? 20 : limit;                                 // 2
  if(isAdminById(this.userId)){                                                        // 3
   return Searches.find({}, {limit: limit, sort: {timestamp: -1}});                    // 4
  }                                                                                    // 5
  return [];                                                                           // 6
});                                                                                    // 7
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-search'] = {
  adminMenu: adminMenu,
  viewParameters: viewParameters
};

})();

//# sourceMappingURL=telescope-search.js.map
