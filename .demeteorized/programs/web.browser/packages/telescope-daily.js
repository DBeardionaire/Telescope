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
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var FastRender = Package['meteorhacks:fast-render'].FastRender;
var __init_fast_render = Package['meteorhacks:fast-render'].__init_fast_render;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var getDigestURL = Package['telescope-singleday'].getDigestURL;
var PostsSingledayController = Package['telescope-singleday'].PostsSingledayController;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Iron = Package['iron:core'].Iron;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var PostsDailyController, __, registerI18nTemplate, registerTemplate, non_package_templates, daysPerPage, i, translations;

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
// define the package's templates registrar                                                                       // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-daily");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                  // 8
// Record the list of templates prior to package load                                                             // 9
var _ = Package.underscore._;                                                                                     // 10
non_package_templates = _.keys(Template);                                                                         // 11
                                                                                                                  // 12
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
// packages/telescope-daily/lib/client/templates/template.posts_daily.js                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("postsDaily");                                                                               // 2
Template["postsDaily"] = new Template("Template.postsDaily", (function() {                                        // 3
  var view = this;                                                                                                // 4
  return HTML.DIV({                                                                                               // 5
    "class": "grid"                                                                                               // 6
  }, "\n    ", Blaze.Each(function() {                                                                            // 7
    return Spacebars.call(view.lookup("days"));                                                                   // 8
  }, function() {                                                                                                 // 9
    return [ "\n      ", Blaze._TemplateWith(function() {                                                         // 10
      return {                                                                                                    // 11
        template: Spacebars.call(view.lookup("before_day"))                                                       // 12
      };                                                                                                          // 13
    }, function() {                                                                                               // 14
      return Spacebars.include(function() {                                                                       // 15
        return Spacebars.call(Template.__dynamic);                                                                // 16
      });                                                                                                         // 17
    }), "\n      ", HTML.H2({                                                                                     // 18
      "class": "posts-day-heading"                                                                                // 19
    }, Blaze.View("lookup:formatDate", function() {                                                               // 20
      return Spacebars.mustache(view.lookup("formatDate"), view.lookup("date"), "dddd, MMMM Do YYYY");            // 21
    })), "\n\n      ", Blaze._TemplateWith(function() {                                                           // 22
      return {                                                                                                    // 23
        template: Spacebars.call(view.lookup("singleDay")),                                                       // 24
        data: Spacebars.call(view.lookup("context"))                                                              // 25
      };                                                                                                          // 26
    }, function() {                                                                                               // 27
      return Spacebars.include(function() {                                                                       // 28
        return Spacebars.call(Template.__dynamic);                                                                // 29
      });                                                                                                         // 30
    }), "\n\n      ", Blaze._TemplateWith(function() {                                                            // 31
      return {                                                                                                    // 32
        template: Spacebars.call(view.lookup("after_day"))                                                        // 33
      };                                                                                                          // 34
    }, function() {                                                                                               // 35
      return Spacebars.include(function() {                                                                       // 36
        return Spacebars.call(Template.__dynamic);                                                                // 37
      });                                                                                                         // 38
    }), "\n    " ];                                                                                               // 39
  }), "\n    ", HTML.A({                                                                                          // 40
    "class": "load-more-days-button grid-module",                                                                 // 41
    href: function() {                                                                                            // 42
      return Spacebars.mustache(view.lookup("loadMoreDaysUrl"));                                                  // 43
    }                                                                                                             // 44
  }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 45
    return Spacebars.mustache(view.lookup("_"), "load_next_days");                                                // 46
  }))), "\n  ");                                                                                                  // 47
}));                                                                                                              // 48
                                                                                                                  // 49
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/client/templates/template.after_day.js                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("afterDay");                                                                                 // 2
Template["afterDay"] = new Template("Template.afterDay", (function() {                                            // 3
  var view = this;                                                                                                // 4
  return "";                                                                                                      // 5
}));                                                                                                              // 6
                                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/client/templates/template.before_day.js                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("beforeDay");                                                                                // 2
Template["beforeDay"] = new Template("Template.beforeDay", (function() {                                          // 3
  var view = this;                                                                                                // 4
  return "";                                                                                                      // 5
}));                                                                                                              // 6
                                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/client/templates/posts_daily.js                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.startup(function () {                                                                                      // 1
                                                                                                                  // 2
  Template[getTemplate('postsDaily')].helpers({                                                                   // 3
    days: function () {                                                                                           // 4
      var daysArray = [];                                                                                         // 5
      // var days = this.days;                                                                                    // 6
      var days = Session.get('postsDays');                                                                        // 7
      for (i = 0; i < days; i++) {                                                                                // 8
        daysArray.push({                                                                                          // 9
          date: moment().subtract(i, 'days').startOf('day').toDate(),                                             // 10
          index: i                                                                                                // 11
        });                                                                                                       // 12
      }                                                                                                           // 13
      return daysArray;                                                                                           // 14
    },                                                                                                            // 15
    before_day: function () {                                                                                     // 16
      return getTemplate('beforeDay');                                                                            // 17
    },                                                                                                            // 18
    singleDay: function () {                                                                                      // 19
      return getTemplate('singleDay');                                                                            // 20
    },                                                                                                            // 21
    context: function () {                                                                                        // 22
      var context = this;                                                                                         // 23
      context.showDateNav = false;                                                                                // 24
      return context;                                                                                             // 25
    },                                                                                                            // 26
    after_day: function () {                                                                                      // 27
      return getTemplate('afterDay');                                                                             // 28
    },                                                                                                            // 29
    loadMoreDaysUrl: function () {                                                                                // 30
      var count = parseInt(Session.get('postsDays')) + daysPerPage;                                               // 31
      return '/daily/' + count;                                                                                   // 32
    }                                                                                                             // 33
  });                                                                                                             // 34
                                                                                                                  // 35
});                                                                                                               // 36
                                                                                                                  // 37
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
var package_templates = _.difference(_.keys(Template), non_package_templates);                                    // 8
                                                                                                                  // 9
for (var i = 0; i < package_templates.length; i++) {                                                              // 10
  var package_template = package_templates[i];                                                                    // 11
                                                                                                                  // 12
  registerI18nTemplate(package_template);                                                                         // 13
}                                                                                                                 // 14
                                                                                                                  // 15
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
                                                                                                                  // 8
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
                                                                                                                  // 8
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
                                                                                                                  // 8
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
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-daily'] = {
  PostsDailyController: PostsDailyController
};

})();
