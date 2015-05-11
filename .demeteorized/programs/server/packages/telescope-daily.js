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
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var FastRender = Package['meteorhacks:fast-render'].FastRender;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var getDigestURL = Package['telescope-singleday'].getDigestURL;
var PostsSingledayController = Package['telescope-singleday'].PostsSingledayController;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Iron = Package['iron:core'].Iron;

/* Package-scope variables */
var PostsDailyController, __, daysPerPage, translations;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/package-i18n.js                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
TAPi18n.packages["telescope-daily"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                  // 2
// define package's translation function (proxy to the i18next)                                                   // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                  // 4
                                                                                                                  // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/daily.js                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
daysPerPage = 5;                                                                                                  // 1
                                                                                                                  // 2
viewsMenu.push({                                                                                                  // 3
  route: 'postsDaily',                                                                                            // 4
  label: 'daily',                                                                                                 // 5
  description: 'day_by_day_view'                                                                                  // 6
});                                                                                                               // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/routes.js                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var coreSubscriptions = new SubsManager({                                                                         // 1
  // cache recent 50 subscriptions                                                                                // 2
  cacheLimit: 50,                                                                                                 // 3
  // expire any subscription after 30 minutes                                                                     // 4
  expireIn: 30                                                                                                    // 5
});                                                                                                               // 6
                                                                                                                  // 7
PostsDailyController = RouteController.extend({                                                                   // 8
                                                                                                                  // 9
  onBeforeAction: function () {                                                                                   // 10
    this.render(getTemplate('postListTop'), {to: 'postListTop'});                                                 // 11
    this.next();                                                                                                  // 12
  },                                                                                                              // 13
                                                                                                                  // 14
  template: function() {                                                                                          // 15
    // use a function to make sure the template is evaluated *after* any template overrides                       // 16
    return getTemplate('postsDaily');                                                                             // 17
  },                                                                                                              // 18
                                                                                                                  // 19
  subscriptions: function () {                                                                                    // 20
    // this.days = this.params.days ? this.params.days : daysPerPage;                                             // 21
    // TODO: find a way to preload the first n posts of the first 5 days?                                         // 22
  },                                                                                                              // 23
                                                                                                                  // 24
  data: function () {                                                                                             // 25
    this.days = this.params.days ? this.params.days : daysPerPage;                                                // 26
    Session.set('postsDays', this.days);                                                                          // 27
    return {                                                                                                      // 28
      days: this.days                                                                                             // 29
    };                                                                                                            // 30
  },                                                                                                              // 31
                                                                                                                  // 32
  getTitle: function () {                                                                                         // 33
    return i18n.t('daily');                                                                                       // 34
  },                                                                                                              // 35
                                                                                                                  // 36
  getDescription: function () {                                                                                   // 37
    return i18n.t('day_by_day_view');                                                                             // 38
  },                                                                                                              // 39
                                                                                                                  // 40
  fastRender: true                                                                                                // 41
});                                                                                                               // 42
                                                                                                                  // 43
Meteor.startup(function () {                                                                                      // 44
                                                                                                                  // 45
  Router.route('/daily/:days?', {                                                                                 // 46
    name: 'postsDaily',                                                                                           // 47
    controller: PostsDailyController                                                                              // 48
  });                                                                                                             // 49
                                                                                                                  // 50
});                                                                                                               // 51
                                                                                                                  // 52
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/C:/$AppDev/Telescope/packages/telescope-daily/i18n/de.i18n.js                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                   // 8
  TAPi18n.translations["de"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                        // 12
  TAPi18n.translations["de"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["de"][namespace], {"daily":"Daily"});                                               // 16
                                                                                                                  // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/C:/$AppDev/Telescope/packages/telescope-daily/i18n/en.i18n.js                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
// integrate the fallback language translations                                                                   // 8
translations = {};                                                                                                // 9
translations[namespace] = {"daily":"Daily","day_by_day_view":"The most popular posts of each day.","load_next_days":"Load Next Days"};
TAPi18n._loadLangFileObject("en", translations);                                                                  // 11
                                                                                                                  // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/C:/$AppDev/Telescope/packages/telescope-daily/i18n/es.i18n.js                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                   // 8
  TAPi18n.translations["es"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                        // 12
  TAPi18n.translations["es"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["es"][namespace], {"daily":"Diario","day_by_day_view":"Los post mas populares de cada día.","load_next_days":"Cargar días siguientes"});
                                                                                                                  // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/C:/$AppDev/Telescope/packages/telescope-daily/i18n/fr.i18n.js                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                   // 8
  TAPi18n.translations["fr"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                        // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["fr"][namespace], {"daily":"Jour par jour"});                                       // 16
                                                                                                                  // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/C:/$AppDev/Telescope/packages/telescope-daily/i18n/it.i18n.js                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                   // 8
  TAPi18n.translations["it"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                        // 12
  TAPi18n.translations["it"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["it"][namespace], {"daily":"Daily"});                                               // 16
                                                                                                                  // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/C:/$AppDev/Telescope/packages/telescope-daily/i18n/zh-CN.i18n.js                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                // 8
  TAPi18n.translations["zh-CN"] = {};                                                                             // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                     // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                  // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"daily":"Daily"});                                            // 16
                                                                                                                  // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-daily'] = {
  PostsDailyController: PostsDailyController
};

})();

//# sourceMappingURL=telescope-daily.js.map
