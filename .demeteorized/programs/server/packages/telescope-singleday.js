(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
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
var _ = Package['telescope-lib']._;
var capitalise = Package['telescope-lib'].capitalise;
var i18n = Package['telescope-i18n'].i18n;
var setLanguage = Package['telescope-i18n'].setLanguage;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Iron = Package['iron:core'].Iron;

/* Package-scope variables */
var getDigestURL, PostsSingledayController, __, getDateURL, translations;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/package-i18n.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
TAPi18n.packages["telescope-singleday"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                      // 2
// define package's translation function (proxy to the i18next)                                                       // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                      // 4
                                                                                                                      // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/lib/routes.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Controller for post digest                                                                                         // 1
                                                                                                                      // 2
PostsSingledayController = RouteController.extend({                                                                   // 3
                                                                                                                      // 4
  template: getTemplate('singleDay'),                                                                                 // 5
                                                                                                                      // 6
  onBeforeAction: function () {                                                                                       // 7
    this.render(getTemplate('postListTop'), {to: 'postListTop'});                                                     // 8
    this.next();                                                                                                      // 9
  },                                                                                                                  // 10
                                                                                                                      // 11
  data: function() {                                                                                                  // 12
    var currentDate = this.params.day ? new Date(this.params.year, this.params.month-1, this.params.day) : Session.get('today');
    Session.set('currentDate', currentDate);                                                                          // 14
  },                                                                                                                  // 15
                                                                                                                      // 16
  getTitle: function () {                                                                                             // 17
    return i18n.t('single_day');                                                                                      // 18
  },                                                                                                                  // 19
                                                                                                                      // 20
  getDescription: function () {                                                                                       // 21
    return i18n.t('posts_of_a_single_day');                                                                           // 22
  },                                                                                                                  // 23
                                                                                                                      // 24
  fastRender: true                                                                                                    // 25
                                                                                                                      // 26
});                                                                                                                   // 27
                                                                                                                      // 28
Meteor.startup(function () {                                                                                          // 29
                                                                                                                      // 30
  // Digest                                                                                                           // 31
                                                                                                                      // 32
  Router.route('/day/:year/:month/:day', {                                                                            // 33
    name: 'postsSingleDay',                                                                                           // 34
    controller: PostsSingledayController                                                                              // 35
  });                                                                                                                 // 36
                                                                                                                      // 37
  Router.route('/day', {                                                                                              // 38
    name: 'postsSingleDayDefault',                                                                                    // 39
    controller: PostsSingledayController                                                                              // 40
  });                                                                                                                 // 41
                                                                                                                      // 42
});                                                                                                                   // 43
                                                                                                                      // 44
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/lib/singleday.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
viewsMenu.push({                                                                                                      // 1
  route: 'postsSingleDayDefault',                                                                                     // 2
  label: 'singleday',                                                                                                 // 3
  description: 'posts_of_a_single_day'                                                                                // 4
});                                                                                                                   // 5
                                                                                                                      // 6
viewParameters.singleday = function (terms) {                                                                         // 7
  return {                                                                                                            // 8
    find: {                                                                                                           // 9
      postedAt: {                                                                                                     // 10
        $gte: terms.after,                                                                                            // 11
        $lt: terms.before                                                                                             // 12
      }                                                                                                               // 13
    },                                                                                                                // 14
    options: {                                                                                                        // 15
      sort: {sticky: -1, score: -1}                                                                                   // 16
    }                                                                                                                 // 17
  };                                                                                                                  // 18
};                                                                                                                    // 19
                                                                                                                      // 20
getDateURL = function(moment){                                                                                        // 21
  return Router.path('postsSingleDay', {                                                                              // 22
    year: moment.year(),                                                                                              // 23
    month: moment.month() + 1,                                                                                        // 24
    day: moment.date()                                                                                                // 25
  });                                                                                                                 // 26
};                                                                                                                    // 27
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/C:/$AppDev/Telescope/packages/telescope-singleday/i18n/bg.i18n.js                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope-singleday",                                                                             // 2
    namespace = "telescope-singleday";                                                                                // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                       // 8
  TAPi18n.translations["bg"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                            // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["bg"][namespace], {"the_top_5_posts_of_each_day":"Топ 5 публикации от всеки ден","previous_day":"Предишен ден","next_day":"Следващ ден","sorry_no_posts_for_today":"Няма публикации за днес","sorry_no_posts_for":"Няма публикации за","today":"Днес","yesterday":"Вчера","single_day":"определен ден.","posts_of_a_single_day":"Публикации за определен ден.","singleday":"Определен ден"});
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/C:/$AppDev/Telescope/packages/telescope-singleday/i18n/de.i18n.js                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope-singleday",                                                                             // 2
    namespace = "telescope-singleday";                                                                                // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                       // 8
  TAPi18n.translations["de"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                            // 12
  TAPi18n.translations["de"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["de"][namespace], {"the_top_5_posts_of_each_day":"Die Top-5-Links eines jeden Tages.","previous_day":"Einen Tag zurück","next_day":"Einen Tag vor","sorry_no_posts_for_today":"Heute gibt es keine Links.","sorry_no_posts_for":"Keine Links für","today":"Heute","yesterday":"Gestern"});
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/C:/$AppDev/Telescope/packages/telescope-singleday/i18n/en.i18n.js                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope-singleday",                                                                             // 2
    namespace = "telescope-singleday";                                                                                // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
// integrate the fallback language translations                                                                       // 8
translations = {};                                                                                                    // 9
translations[namespace] = {"the_top_5_posts_of_each_day":"The top 5 posts of each day.","previous_day":"Previous Day","next_day":"Next Day","sorry_no_posts_for_today":"Sorry, no posts for today","sorry_no_posts_for":"Sorry, no posts for","today":"Today","yesterday":"Yesterday","single_day":"Single Day","singleday":"Single Day","posts_of_a_single_day":"The posts of a single day."};
TAPi18n._loadLangFileObject("en", translations);                                                                      // 11
                                                                                                                      // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/C:/$AppDev/Telescope/packages/telescope-singleday/i18n/es.i18n.js                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope-singleday",                                                                             // 2
    namespace = "telescope-singleday";                                                                                // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                       // 8
  TAPi18n.translations["es"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                            // 12
  TAPi18n.translations["es"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["es"][namespace], {"the_top_5_posts_of_each_day":"Los 5 mejores posts de cada día","previous_day":"Dia anterior","next_day":"Dia siguiente","sorry_no_posts_for_today":"Lo sentimos, no hay post para hoy","today":"Hoy","yesterday":"Ayer"});
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/C:/$AppDev/Telescope/packages/telescope-singleday/i18n/fr.i18n.js                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope-singleday",                                                                             // 2
    namespace = "telescope-singleday";                                                                                // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                       // 8
  TAPi18n.translations["fr"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                            // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["fr"][namespace], {"the_top_5_posts_of_each_day":"5 meilleurs post par jours","previous_day":"Jour précédent","next_day":"Jour suivant","sorry_no_posts_for_today":"Désolé, aucun post aujourd'hui","sorry_no_posts_for":"Désolé, aucun post pour","today":"Aujourd'hui","yesterday":"Hier"});
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/C:/$AppDev/Telescope/packages/telescope-singleday/i18n/it.i18n.js                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope-singleday",                                                                             // 2
    namespace = "telescope-singleday";                                                                                // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                       // 8
  TAPi18n.translations["it"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                            // 12
  TAPi18n.translations["it"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["it"][namespace], {"the_top_5_posts_of_each_day":"I 5 migliori post di ogni giorno.","previous_day":"Giorno Precedente","next_day":"Giorno Successivo","sorry_no_posts_for_today":"Ci spiace, non ci sono post per oggi","sorry_no_posts_for":"Ci spiace, non ci sono post per","today":"Oggi","yesterday":"Ieri"});
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/C:/$AppDev/Telescope/packages/telescope-singleday/i18n/tr.i18n.js                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope-singleday",                                                                             // 2
    namespace = "telescope-singleday";                                                                                // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                       // 8
  TAPi18n.translations["tr"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                            // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["tr"][namespace], {"the_top_5_posts_of_each_day":"Her günün en üst 5 paylaşımı","previous_day":"Önceki gün","next_day":"Sonraki gün","Sorry, no posts for today":"Özür dileriz, bugün bir paylaşım yok","sorry_no_posts_for_today":"Özür dileriz, paylaşım yok","today":"Bugün","yesterday":"Dün"});
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/C:/$AppDev/Telescope/packages/telescope-singleday/i18n/zh-CN.i18n.js                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope-singleday",                                                                             // 2
    namespace = "telescope-singleday";                                                                                // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                    // 8
  TAPi18n.translations["zh-CN"] = {};                                                                                 // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                         // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                      // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"the_top_5_posts_of_each_day":"每天前5名的帖子","previous_day":"前一天","next_day":"后一天","sorry_no_posts_for_today":"抱歉今天没有新的帖子","today":"今天","yesterday":"昨天"});
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-singleday'] = {
  getDigestURL: getDigestURL,
  PostsSingledayController: PostsSingledayController
};

})();

//# sourceMappingURL=telescope-singleday.js.map
