(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package['telescope-lib']._;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
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
var sitemaps = Package['gadicohen:sitemaps'].sitemaps;
var Iron = Package['iron:core'].Iron;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/telescope-sitemap/lib/server/sitemaps.js                                              //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
Meteor.startup(function() {                                                                       // 1
  /*                                                                                              // 2
   * Sitemap                                                                                      // 3
   */                                                                                             // 4
  sitemaps.add("/sitemap.xml", function() {                                                       // 5
    var _getLatest = function(viewParamKey, terms) {                                              // 6
      var params = getPostsParameters(                                                            // 7
        viewParameters[viewParamKey.toLowerCase()](terms)                                         // 8
      );                                                                                          // 9
      var post = Posts.findOne(params.find, {                                                     // 10
        'fields': {'postedAt': 1},                                                                // 11
        'sort': params.options.sort                                                               // 12
      });                                                                                         // 13
      return post ? post.postedAt : null;                                                         // 14
    };                                                                                            // 15
                                                                                                  // 16
    // Posts list pages                                                                           // 17
    var paths = [                                                                                 // 18
      {page: "/", lastmod: _getLatest(Settings.get("defaultView", "top")), changefreq: "hourly"}, // 19
      {page: "/top", lastmod: _getLatest("top"), changefreq: "hourly"},                           // 20
      {page: "/new", lastmod: _getLatest("new"), changefreq: "hourly"},                           // 21
      {page: "/best", lastmod: _getLatest("best"), changefreq: "daily"},                          // 22
    ];                                                                                            // 23
                                                                                                  // 24
    // Categories (if telescope-tags is included)                                                 // 25
    if (typeof Categories !== "undefined") {                                                      // 26
      Categories.find({}, {fields: {"slug": 1}}).forEach(function(category) {                     // 27
        var lastMod = _getLatest("category", {category: category.slug});                          // 28
        if (lastMod) {                                                                            // 29
          paths.push({                                                                            // 30
            page: "/category/" + category.slug,                                                   // 31
            lastmod: lastMod,                                                                     // 32
            changefreq: "hourly"                                                                  // 33
          })                                                                                      // 34
        }                                                                                         // 35
      });                                                                                         // 36
    }                                                                                             // 37
                                                                                                  // 38
    // Individual post pages: include 100 latest in each of "top", "new", and                     // 39
    // "best". Aggregate them to avoid duplication.                                               // 40
    var postPages = {};                                                                           // 41
    _.each(["top", "new", "best"], function(key) {                                                // 42
      var siteUrl = getSiteUrl();                                                                 // 43
      var params = getPostsParameters(viewParameters[key]());                                     // 44
      var posts = Posts.find(params.find, {                                                       // 45
        fields: {postedAt: 1, title: 1, _id: 1},                                                  // 46
        limit: 100,                                                                               // 47
        sort: params.options.sort                                                                 // 48
      });                                                                                         // 49
      posts.forEach(function(post) {                                                              // 50
        var url = getPostPageUrl(post).replace(siteUrl, "");                                      // 51
        postPages[url] = {page: url, lastmod: post.postedAt, changefreq: "daily"};                // 52
      });                                                                                         // 53
    });                                                                                           // 54
                                                                                                  // 55
    paths = paths.concat(_.values(postPages));                                                    // 56
    paths = _.reject(paths, function(p) { return p.lastmod === null });                           // 57
    return paths;                                                                                 // 58
  });                                                                                             // 59
});                                                                                               // 60
                                                                                                  // 61
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-sitemap'] = {};

})();

//# sourceMappingURL=telescope-sitemap.js.map
