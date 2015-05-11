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
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
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
var getDigestURL, PostsSingledayController, __, registerI18nTemplate, registerTemplate, non_package_templates, getDateURL, translations;

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
// define the package's templates registrar                                                                           // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-singleday");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                      // 8
// Record the list of templates prior to package load                                                                 // 9
var _ = Package.underscore._;                                                                                         // 10
non_package_templates = _.keys(Template);                                                                             // 11
                                                                                                                      // 12
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
// packages/telescope-singleday/lib/client/templates/template.single_day.js                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("singleDay");                                                                                    // 2
Template["singleDay"] = new Template("Template.singleDay", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return [ Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.lookup("showDateNav"));                                                                // 6
  }, function() {                                                                                                     // 7
    return [ "\n    ", Blaze._TemplateWith(function() {                                                               // 8
      return {                                                                                                        // 9
        template: Spacebars.call(view.lookup("singleDayNav"))                                                         // 10
      };                                                                                                              // 11
    }, function() {                                                                                                   // 12
      return Spacebars.include(function() {                                                                           // 13
        return Spacebars.call(Template.__dynamic);                                                                    // 14
      });                                                                                                             // 15
    }), "\n  " ];                                                                                                     // 16
  }), "\n  ", Blaze._TemplateWith(function() {                                                                        // 17
    return {                                                                                                          // 18
      template: Spacebars.call(view.lookup("posts_list")),                                                            // 19
      data: Spacebars.call(view.lookup("context"))                                                                    // 20
    };                                                                                                                // 21
  }, function() {                                                                                                     // 22
    return Spacebars.include(function() {                                                                             // 23
      return Spacebars.call(Template.__dynamic);                                                                      // 24
    });                                                                                                               // 25
  }) ];                                                                                                               // 26
}));                                                                                                                  // 27
                                                                                                                      // 28
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/lib/client/templates/single_day.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// see https://www.discovermeteor.com/blog/template-level-subscriptions/                                              // 1
                                                                                                                      // 2
// this template acts as the controller that sets and                                                                 // 3
// manages the reactive context for the embedded postsList template                                                   // 4
                                                                                                                      // 5
Template[getTemplate('singleDay')].created = function () {                                                            // 6
                                                                                                                      // 7
  // 1. Initialization                                                                                                // 8
                                                                                                                      // 9
  var instance = this;                                                                                                // 10
                                                                                                                      // 11
  // initialize the reactive variables                                                                                // 12
  instance.postsLoaded = new ReactiveVar(0);                                                                          // 13
  instance.postsLimit = new ReactiveVar(Settings.get('postsPerPage', 10));                                            // 14
  instance.postsReady = new ReactiveVar(false);                                                                       // 15
                                                                                                                      // 16
  instance.getTerms = function () {                                                                                   // 17
    // if instance has a set date use this, else depend on Session variable                                           // 18
    var currentDate = (!!instance.data && !!instance.data.date) ? instance.data.date: Session.get('currentDate');     // 19
    return {                                                                                                          // 20
      view: 'singleday',                                                                                              // 21
      after: moment(currentDate).startOf('day').toDate(),                                                             // 22
      before: moment(currentDate).endOf('day').toDate()                                                               // 23
    };                                                                                                                // 24
  };                                                                                                                  // 25
                                                                                                                      // 26
  // 2. Autorun                                                                                                       // 27
                                                                                                                      // 28
  // this autorun is there just to reset the post limit                                                               // 29
  // when current date changes (i.e. we're switching page)                                                            // 30
  instance.autorun(function () {                                                                                      // 31
    // just by including this session variable in the autorun, we automatically make it depend on it                  // 32
    var currentDate = Session.get('currentDate');                                                                     // 33
    instance.postsLimit.set(Settings.get('postsPerPage', 10));                                                        // 34
  });                                                                                                                 // 35
                                                                                                                      // 36
  // will re-run when postsLimit or currentDate change                                                                // 37
  instance.autorun(function () {                                                                                      // 38
                                                                                                                      // 39
    var terms = instance.getTerms();                                                                                  // 40
                                                                                                                      // 41
    // get the postsLimit                                                                                             // 42
    terms.limit = instance.postsLimit.get();                                                                          // 43
                                                                                                                      // 44
    // console.log("Asking for " + terms.limit + " posts…")                                                           // 45
                                                                                                                      // 46
    // subscribe                                                                                                      // 47
    var postsSubscription = Meteor.subscribe('postsList', terms);                                                     // 48
    var usersSubscription = Meteor.subscribe('postsListUsers', terms);                                                // 49
                                                                                                                      // 50
    // if subscriptions are ready, set limit to newLimit                                                              // 51
    if (postsSubscription.ready() && usersSubscription.ready()) {                                                     // 52
                                                                                                                      // 53
      // console.log("> Received "+terms.limit+" posts. \n\n")                                                        // 54
      instance.postsLoaded.set(terms.limit);                                                                          // 55
      instance.postsReady.set(true);                                                                                  // 56
                                                                                                                      // 57
    } else {                                                                                                          // 58
                                                                                                                      // 59
      instance.postsReady.set(false);                                                                                 // 60
      // console.log("> Subscription is not ready yet. \n\n");                                                        // 61
                                                                                                                      // 62
    }                                                                                                                 // 63
  });                                                                                                                 // 64
                                                                                                                      // 65
  // 3. Cursor                                                                                                        // 66
                                                                                                                      // 67
  instance.getPostsCursor = function() {                                                                              // 68
    // console.log('loaded ' + instance.postsLoaded.get() + ' posts')                                                 // 69
    var termsLoaded = _.extend(instance.getTerms(), {limit: instance.postsLoaded.get()});                             // 70
    var parameters = getPostsParameters(termsLoaded);                                                                 // 71
    return Posts.find(parameters.find, parameters.options);                                                           // 72
  };                                                                                                                  // 73
                                                                                                                      // 74
};                                                                                                                    // 75
                                                                                                                      // 76
Template[getTemplate('singleDay')].helpers({                                                                          // 77
  showDateNav: function () {                                                                                          // 78
    return (typeof this.showDateNav === 'undefined') ? true : this.showDateNav;                                       // 79
  },                                                                                                                  // 80
  singleDayNav: function () {                                                                                         // 81
    return getTemplate('singleDayNav');                                                                               // 82
  },                                                                                                                  // 83
  posts_list: function () {                                                                                           // 84
    return getTemplate('posts_list');                                                                                 // 85
  },                                                                                                                  // 86
  context: function () {                                                                                              // 87
    // create context for postsList module                                                                            // 88
    var instance = Template.instance();                                                                               // 89
    var postsCursor = instance.getPostsCursor();                                                                      // 90
                                                                                                                      // 91
    var context = {                                                                                                   // 92
                                                                                                                      // 93
      // posts cursor                                                                                                 // 94
      postsCursor: postsCursor,                                                                                       // 95
                                                                                                                      // 96
      // posts subscription readiness, used to show spinner                                                           // 97
      postsReady: instance.postsReady.get(),                                                                          // 98
                                                                                                                      // 99
      // whether to show the load more button or not                                                                  // 100
      hasMorePosts: postsCursor.count() >= instance.postsLimit.get(),                                                 // 101
                                                                                                                      // 102
      // what to do when user clicks "load more"                                                                      // 103
      loadMoreHandler: function (instance) {                                                                          // 104
        event.preventDefault();                                                                                       // 105
                                                                                                                      // 106
        // get current value for limit, i.e. how many posts are currently displayed                                   // 107
        var limit = instance.postsLimit.get();                                                                        // 108
        // increase limit by 5 and update it                                                                          // 109
        limit += Settings.get('postsPerPage', 10);                                                                    // 110
        instance.postsLimit.set(limit);                                                                               // 111
      },                                                                                                              // 112
                                                                                                                      // 113
      // the current instance                                                                                         // 114
      controllerInstance: instance                                                                                    // 115
                                                                                                                      // 116
    };                                                                                                                // 117
                                                                                                                      // 118
    return context;                                                                                                   // 119
  }                                                                                                                   // 120
});                                                                                                                   // 121
                                                                                                                      // 122
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/lib/client/templates/template.single_day_nav.js                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("singleDayNav");                                                                                 // 2
Template["singleDayNav"] = new Template("Template.singleDayNav", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "grid"                                                                                                   // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    "class": "grid-block"                                                                                             // 8
  }, "\n    ", Blaze.If(function() {                                                                                  // 9
    return Spacebars.call(view.lookup("showPreviousDate"));                                                           // 10
  }, function() {                                                                                                     // 11
    return [ "\n    ", HTML.A({                                                                                       // 12
      href: function() {                                                                                              // 13
        return Spacebars.mustache(view.lookup("previousDateURL"));                                                    // 14
      },                                                                                                              // 15
      "class": "prev-link"                                                                                            // 16
    }, Blaze.View("lookup:_", function() {                                                                            // 17
      return Spacebars.mustache(view.lookup("_"), "previous_day");                                                    // 18
    })), " |\n    " ];                                                                                                // 19
  }), "\n    ", Blaze.View("lookup:currentDate", function() {                                                         // 20
    return Spacebars.mustache(view.lookup("currentDate"));                                                            // 21
  }), " |\n    ", Blaze.If(function() {                                                                               // 22
    return Spacebars.call(view.lookup("showNextDate"));                                                               // 23
  }, function() {                                                                                                     // 24
    return [ "\n    ", HTML.A({                                                                                       // 25
      href: function() {                                                                                              // 26
        return Spacebars.mustache(view.lookup("nextDateURL"));                                                        // 27
      },                                                                                                              // 28
      "class": "next-link"                                                                                            // 29
    }, Blaze.View("lookup:_", function() {                                                                            // 30
      return Spacebars.mustache(view.lookup("_"), "next_day");                                                        // 31
    })), "\n    " ];                                                                                                  // 32
  }), "\n    "), "\n  ");                                                                                             // 33
}));                                                                                                                  // 34
                                                                                                                      // 35
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope-singleday/lib/client/templates/single_day_nav.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template[getTemplate('singleDayNav')].created = function(){                                                           // 1
                                                                                                                      // 2
  $(document).unbind('keyup'); //remove any potential existing bindings to avoid duplicates                           // 3
                                                                                                                      // 4
  var currentDate = moment(Session.get('currentDate')).startOf('day');                                                // 5
  var today = moment(new Date()).startOf('day');                                                                      // 6
                                                                                                                      // 7
  $(document).bind('keyup', 'left', function(){                                                                       // 8
    Router.go($('.prev-link').attr('href'));                                                                          // 9
  });                                                                                                                 // 10
                                                                                                                      // 11
  $(document).bind('keyup', 'right', function(){                                                                      // 12
    if(isAdmin(Meteor.user()) || today.diff(currentDate, 'days') > 0)                                                 // 13
      Router.go($('.next-link').attr('href'));                                                                        // 14
  });                                                                                                                 // 15
                                                                                                                      // 16
};                                                                                                                    // 17
                                                                                                                      // 18
Template[getTemplate('singleDayNav')].helpers({                                                                       // 19
  currentDate: function(){                                                                                            // 20
    var currentDate = moment(Session.get('currentDate'));                                                             // 21
    var today = moment(new Date());                                                                                   // 22
    var diff = today.diff(currentDate, 'days');                                                                       // 23
    if (diff === 0) {                                                                                                 // 24
      return i18n.t("today");                                                                                         // 25
    }                                                                                                                 // 26
    if (diff === 1) {                                                                                                 // 27
      return i18n.t("yesterday");                                                                                     // 28
    }                                                                                                                 // 29
    return currentDate.format("dddd, MMMM Do YYYY");                                                                  // 30
  },                                                                                                                  // 31
  previousDateURL: function(){                                                                                        // 32
    var currentDate = moment(Session.get('currentDate'));                                                             // 33
    var newDate = currentDate.subtract(1, 'days');                                                                    // 34
    return getDateURL(newDate);                                                                                       // 35
  },                                                                                                                  // 36
  showPreviousDate: function(){                                                                                       // 37
    // TODO                                                                                                           // 38
    return true;                                                                                                      // 39
  },                                                                                                                  // 40
  nextDateURL: function(){                                                                                            // 41
    var currentDate = moment(Session.get('currentDate'));                                                             // 42
    var newDate = currentDate.add(1, 'days');                                                                         // 43
    return getDateURL(newDate);                                                                                       // 44
  },                                                                                                                  // 45
  showNextDate: function(){                                                                                           // 46
    var currentDate = moment(Session.get('currentDate')).startOf('day');                                              // 47
    var today = moment(new Date()).startOf('day');                                                                    // 48
    return isAdmin(Meteor.user()) || (today.diff(currentDate, 'days') > 0);                                           // 49
  }                                                                                                                   // 50
})                                                                                                                    // 51
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
var package_templates = _.difference(_.keys(Template), non_package_templates);                                        // 8
                                                                                                                      // 9
for (var i = 0; i < package_templates.length; i++) {                                                                  // 10
  var package_template = package_templates[i];                                                                        // 11
                                                                                                                      // 12
  registerI18nTemplate(package_template);                                                                             // 13
}                                                                                                                     // 14
                                                                                                                      // 15
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-singleday'] = {
  getDigestURL: getDigestURL,
  PostsSingledayController: PostsSingledayController
};

})();
