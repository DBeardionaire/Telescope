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
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var MailChimp = Package['miro:mailchimp'].MailChimp;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Messages = Package['telescope-messages'].Messages;
var Cookie = Package['mrt:cookies'].Cookie;
var Iron = Package['iron:core'].Iron;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var resetNewsletterSchedule, __, registerI18nTemplate, registerTemplate, non_package_templates, campaignSchema, Campaigns, translations;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/package-i18n.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
TAPi18n.packages["telescope-newsletter"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                       // 2
// define package's translation function (proxy to the i18next)                                                        // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                       // 4
// define the package's templates registrar                                                                            // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-newsletter");                                       // 6
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
// packages/telescope-newsletter/lib/newsletter.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
campaignSchema = new SimpleSchema({                                                                                    // 1
 _id: {                                                                                                                // 2
    type: String,                                                                                                      // 3
    optional: true                                                                                                     // 4
  },                                                                                                                   // 5
  createdAt: {                                                                                                         // 6
    type: Date,                                                                                                        // 7
    optional: true                                                                                                     // 8
  },                                                                                                                   // 9
  sentAt: {                                                                                                            // 10
    type: String,                                                                                                      // 11
    optional: true                                                                                                     // 12
  },                                                                                                                   // 13
  status: {                                                                                                            // 14
    type: String,                                                                                                      // 15
    optional: true                                                                                                     // 16
  },                                                                                                                   // 17
  posts: {                                                                                                             // 18
    type: [String],                                                                                                    // 19
    optional: true                                                                                                     // 20
  },                                                                                                                   // 21
  webHits: {                                                                                                           // 22
    type: Number,                                                                                                      // 23
    optional: true                                                                                                     // 24
  },                                                                                                                   // 25
});                                                                                                                    // 26
                                                                                                                       // 27
Campaigns = new Meteor.Collection("campaigns", {                                                                       // 28
  schema: campaignSchema                                                                                               // 29
});                                                                                                                    // 30
                                                                                                                       // 31
addToPostSchema.push(                                                                                                  // 32
  {                                                                                                                    // 33
    propertyName: 'scheduledAt',                                                                                       // 34
    propertySchema: {                                                                                                  // 35
      type: Date,                                                                                                      // 36
      optional: true,                                                                                                  // 37
      autoform: {                                                                                                      // 38
        omit: true                                                                                                     // 39
      }                                                                                                                // 40
    }                                                                                                                  // 41
  }                                                                                                                    // 42
);                                                                                                                     // 43
                                                                                                                       // 44
// Settings                                                                                                            // 45
                                                                                                                       // 46
var enableNewsletter = {                                                                                               // 47
  propertyName: 'enableNewsletter',                                                                                    // 48
  propertySchema: {                                                                                                    // 49
    type: Boolean,                                                                                                     // 50
    optional: true,                                                                                                    // 51
    autoform: {                                                                                                        // 52
      group: 'newsletter',                                                                                             // 53
      instructions: 'Enable newsletter (requires restart).'                                                            // 54
    }                                                                                                                  // 55
  }                                                                                                                    // 56
}                                                                                                                      // 57
Settings.addToSchema(enableNewsletter);                                                                                // 58
                                                                                                                       // 59
var showBanner = {                                                                                                     // 60
  propertyName: 'showBanner',                                                                                          // 61
  propertySchema: {                                                                                                    // 62
    type: Boolean,                                                                                                     // 63
    optional: true,                                                                                                    // 64
    label: 'Newsletter banner',                                                                                        // 65
    autoform: {                                                                                                        // 66
      group: 'newsletter',                                                                                             // 67
      instructions: 'Show newsletter sign-up form on the front page.'                                                  // 68
    }                                                                                                                  // 69
  }                                                                                                                    // 70
}                                                                                                                      // 71
Settings.addToSchema(showBanner);                                                                                      // 72
                                                                                                                       // 73
var mailChimpAPIKey = {                                                                                                // 74
  propertyName: 'mailChimpAPIKey',                                                                                     // 75
  propertySchema: {                                                                                                    // 76
    type: String,                                                                                                      // 77
    optional: true,                                                                                                    // 78
    autoform: {                                                                                                        // 79
      group: 'newsletter',                                                                                             // 80
      private: true                                                                                                    // 81
    }                                                                                                                  // 82
  }                                                                                                                    // 83
}                                                                                                                      // 84
Settings.addToSchema(mailChimpAPIKey);                                                                                 // 85
                                                                                                                       // 86
var mailChimpListId = {                                                                                                // 87
  propertyName: 'mailChimpListId',                                                                                     // 88
  propertySchema: {                                                                                                    // 89
    type: String,                                                                                                      // 90
    optional: true,                                                                                                    // 91
    autoform: {                                                                                                        // 92
      group: 'newsletter',                                                                                             // 93
      instructions: 'The ID of the list you want to send to.',                                                         // 94
      private: true                                                                                                    // 95
    }                                                                                                                  // 96
  }                                                                                                                    // 97
}                                                                                                                      // 98
Settings.addToSchema(mailChimpListId);                                                                                 // 99
                                                                                                                       // 100
var postsPerNewsletter = {                                                                                             // 101
  propertyName: 'postsPerNewsletter',                                                                                  // 102
  propertySchema: {                                                                                                    // 103
    type: Number,                                                                                                      // 104
    optional: true,                                                                                                    // 105
    autoform: {                                                                                                        // 106
      group: 'newsletter'                                                                                              // 107
    }                                                                                                                  // 108
  }                                                                                                                    // 109
}                                                                                                                      // 110
Settings.addToSchema(postsPerNewsletter);                                                                              // 111
                                                                                                                       // 112
var newsletterFrequency = {                                                                                            // 113
  propertyName: 'newsletterFrequency',                                                                                 // 114
  propertySchema: {                                                                                                    // 115
    type: Number,                                                                                                      // 116
    optional: true,                                                                                                    // 117
    autoform: {                                                                                                        // 118
      group: 'newsletter',                                                                                             // 119
      instructions: 'Defaults to once a week. Changes require restarting your app to take effect.',                    // 120
      options: [                                                                                                       // 121
        {                                                                                                              // 122
          value: 1,                                                                                                    // 123
          label: 'Every Day'                                                                                           // 124
        },                                                                                                             // 125
        {                                                                                                              // 126
          value: 2,                                                                                                    // 127
          label: 'Mondays, Wednesdays, Fridays'                                                                        // 128
        },                                                                                                             // 129
        {                                                                                                              // 130
          value: 3,                                                                                                    // 131
          label: 'Mondays & Thursdays'                                                                                 // 132
        },                                                                                                             // 133
        {                                                                                                              // 134
          value: 7,                                                                                                    // 135
          label: 'Once a week (Mondays)'                                                                               // 136
        }                                                                                                              // 137
      ]                                                                                                                // 138
    }                                                                                                                  // 139
  }                                                                                                                    // 140
}                                                                                                                      // 141
Settings.addToSchema(newsletterFrequency);                                                                             // 142
                                                                                                                       // 143
var newsletterTime = {                                                                                                 // 144
  propertyName: 'newsletterTime',                                                                                      // 145
  propertySchema: {                                                                                                    // 146
    type: String,                                                                                                      // 147
    optional: true,                                                                                                    // 148
    defaultValue: '00:00',                                                                                             // 149
    autoform: {                                                                                                        // 150
      group: 'newsletter',                                                                                             // 151
      instructions: 'Defaults to 00:00/12:00 AM. Time to send out newsletter if enabled.',                             // 152
      type: 'time'                                                                                                     // 153
    }                                                                                                                  // 154
  }                                                                                                                    // 155
}                                                                                                                      // 156
Settings.addToSchema(newsletterTime);                                                                                  // 157
                                                                                                                       // 158
var autoSubscribe = {                                                                                                  // 159
  propertyName: 'autoSubscribe',                                                                                       // 160
  propertySchema: {                                                                                                    // 161
    type: Boolean,                                                                                                     // 162
    optional: true,                                                                                                    // 163
    autoform: {                                                                                                        // 164
      group: 'newsletter',                                                                                             // 165
      instructions: 'Automatically subscribe new users on sign-up.'                                                    // 166
    }                                                                                                                  // 167
  }                                                                                                                    // 168
}                                                                                                                      // 169
Settings.addToSchema(autoSubscribe);                                                                                   // 170
                                                                                                                       // 171
// create new "campaign" lens for all posts from the past X days that haven't been scheduled yet                       // 172
viewParameters.campaign = function (terms) {                                                                           // 173
  return {                                                                                                             // 174
    find: {                                                                                                            // 175
      scheduledAt: {$exists: false},                                                                                   // 176
      postedAt: {                                                                                                      // 177
        $gte: terms.after                                                                                              // 178
      }                                                                                                                // 179
    },                                                                                                                 // 180
    options: {sort: {sticky: -1, score: -1}}                                                                           // 181
  };                                                                                                                   // 182
}                                                                                                                      // 183
                                                                                                                       // 184
heroModules.push({                                                                                                     // 185
  template: 'newsletterBanner',                                                                                        // 186
  order: 10                                                                                                            // 187
});                                                                                                                    // 188
                                                                                                                       // 189
 function subscribeUserOnCreation (user) {                                                                             // 190
  if (!!Settings.get('autoSubscribe') && !!getEmail(user)) {                                                           // 191
    addToMailChimpList(user, false, function (error, result) {                                                         // 192
      console.log(error)                                                                                               // 193
      console.log(result)                                                                                              // 194
    });                                                                                                                // 195
  }                                                                                                                    // 196
  return user;                                                                                                         // 197
}                                                                                                                      // 198
userCreatedCallbacks.push(subscribeUserOnCreation);                                                                    // 199
                                                                                                                       // 200
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/lib/client/templates/template.newsletter_banner.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("newsletterBanner");                                                                              // 2
Template["newsletterBanner"] = new Template("Template.newsletterBanner", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("showBanner"));                                                                  // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      "class": "newsletter-banner grid-module grid banner"                                                             // 9
    }, "\n      ", HTML.FORM("\n        ", HTML.H4({                                                                   // 10
      "class": "newsletter-tagline"                                                                                    // 11
    }, Blaze.View("lookup:_", function() {                                                                             // 12
      return Spacebars.mustache(view.lookup("_"), "receive_the_best_of");                                              // 13
    }), " ", Blaze.View("lookup:siteName", function() {                                                                // 14
      return Spacebars.mustache(view.lookup("siteName"));                                                              // 15
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 16
      return Spacebars.mustache(view.lookup("_"), "right_in_your_inbox");                                              // 17
    })), "\n        ", Blaze.If(function() {                                                                           // 18
      return Spacebars.call(view.lookup("isNotConnected"));                                                            // 19
    }, function() {                                                                                                    // 20
      return [ "\n          ", HTML.INPUT({                                                                            // 21
        "class": "newsletter-email",                                                                                   // 22
        type: "email",                                                                                                 // 23
        placeholder: "Your Email"                                                                                      // 24
      }), "\n        " ];                                                                                              // 25
    }), "\n        ", HTML.BUTTON({                                                                                    // 26
      "class": "button newsletter-button btn btn-primary"                                                              // 27
    }, Blaze.View("lookup:_", function() {                                                                             // 28
      return Spacebars.mustache(view.lookup("_"), "get_newsletter");                                                   // 29
    }), HTML.SPAN({                                                                                                    // 30
      "class": "button-loader"                                                                                         // 31
    }, HTML.IMG({                                                                                                      // 32
      src: "/img/loading-balls.svg"                                                                                    // 33
    }))), "\n      "), "\n      ", HTML.H4({                                                                           // 34
      "class": "newsletter-subscribed"                                                                                 // 35
    }, Blaze.View("lookup:_", function() {                                                                             // 36
      return Spacebars.mustache(view.lookup("_"), "thanks_for_subscribing");                                           // 37
    })), "\n      ", HTML.A({                                                                                          // 38
      href: "#",                                                                                                       // 39
      "class": "newsletter-dismiss banner-dismiss"                                                                     // 40
    }, "×"), "\n    "), "\n  " ];                                                                                      // 41
  });                                                                                                                  // 42
}));                                                                                                                   // 43
                                                                                                                       // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/lib/client/templates/newsletter_banner.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var confirmSubscription = function () {                                                                                // 1
  $('.newsletter-banner form').css('opacity', 0);                                                                      // 2
  $('.newsletter-banner .newsletter-subscribed').css('display', 'block').css('opacity', 1);                            // 3
  Meteor.setInterval(function () {                                                                                     // 4
    // required because otherwise banner disappears immediately after confirmation                                     // 5
    dismissBanner();                                                                                                   // 6
  }, 2000)                                                                                                             // 7
}                                                                                                                      // 8
                                                                                                                       // 9
var dismissBanner = function () {                                                                                      // 10
  $('.newsletter-banner').fadeOut('fast', function () {                                                                // 11
    if(Meteor.user()){                                                                                                 // 12
      // if user is connected, change setting in their account                                                         // 13
      setUserSetting('showBanner', false);                                                                             // 14
    }else{                                                                                                             // 15
      // set cookie                                                                                                    // 16
      Cookie.set('showBanner', "no");                                                                                  // 17
    }                                                                                                                  // 18
  });                                                                                                                  // 19
}                                                                                                                      // 20
                                                                                                                       // 21
Meteor.startup(function () {                                                                                           // 22
  Template[getTemplate('newsletterBanner')].helpers({                                                                  // 23
    siteName: function () {                                                                                            // 24
      return Settings.get('title');                                                                                    // 25
    },                                                                                                                 // 26
    isNotConnected: function () {                                                                                      // 27
      return !Meteor.user()                                                                                            // 28
    },                                                                                                                 // 29
    showBanner: function () {                                                                                          // 30
      // note: should not be reactive                                                                                  // 31
      if(                                                                                                              // 32
            Settings.get('showBanner', false) == false                                                                 // 33
        ||  !can.view(Meteor.user())                                                                                   // 34
        ||  Router.current().location.get().path != '/'                                                                // 35
        ||  Cookie.get('showBanner') == "no"                                                                           // 36
        ||  (Meteor.user() && getUserSetting('showBanner', true) == false)                                             // 37
        ||  (Meteor.user() && getUserSetting('subscribedToNewsletter', false) == true)                                 // 38
      ){                                                                                                               // 39
        return false;                                                                                                  // 40
      }else{                                                                                                           // 41
        return true;                                                                                                   // 42
      }                                                                                                                // 43
    }                                                                                                                  // 44
  });                                                                                                                  // 45
                                                                                                                       // 46
  Template[getTemplate('newsletterBanner')].events({                                                                   // 47
    'click .newsletter-button': function (e) {                                                                         // 48
      e.preventDefault();                                                                                              // 49
      var $banner = $('.newsletter-banner');                                                                           // 50
      if(Meteor.user()){                                                                                               // 51
        $banner.addClass('show-loader');                                                                               // 52
        Meteor.call('addCurrentUserToMailChimpList', function (error, result) {                                        // 53
          $banner.removeClass('show-loader');                                                                          // 54
          if(error){                                                                                                   // 55
            console.log(error);                                                                                        // 56
            Messages.flash(error.message, "error");                                                                    // 57
          }else{                                                                                                       // 58
            console.log(result);                                                                                       // 59
            confirmSubscription();                                                                                     // 60
          }                                                                                                            // 61
        });                                                                                                            // 62
      }else{                                                                                                           // 63
        var email = $('.newsletter-email').val();                                                                      // 64
        if(!email){                                                                                                    // 65
          alert('Please fill in your email.');                                                                         // 66
          return                                                                                                       // 67
        }                                                                                                              // 68
        $banner.addClass('show-loader');                                                                               // 69
        Meteor.call('addEmailToMailChimpList', email, function (error, result) {                                       // 70
          $banner.removeClass('show-loader');                                                                          // 71
          if(error){                                                                                                   // 72
            console.log(error);                                                                                        // 73
            Messages.flash(error.reason, "error");                                                                     // 74
          }else{                                                                                                       // 75
            Messages.clearSeen();                                                                                      // 76
            console.log(result);                                                                                       // 77
            confirmSubscription();                                                                                     // 78
          }                                                                                                            // 79
        });                                                                                                            // 80
      }                                                                                                                // 81
      // $('body').addClass('showing-lightbox');                                                                       // 82
      // $(e.target).parents('.post').find('.post-video-lightbox').fadeIn('fast');                                     // 83
    },                                                                                                                 // 84
    'click .newsletter-dismiss': function (e) {                                                                        // 85
      $('.newsletter-banner').fadeOut('fast');                                                                         // 86
      dismissBanner();                                                                                                 // 87
      e.preventDefault();                                                                                              // 88
    }                                                                                                                  // 89
  });                                                                                                                  // 90
});                                                                                                                    // 91
                                                                                                                       // 92
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/C:/$AppDev/Telescope/packages/telescope-newsletter/i18n/de.i18n.js                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-newsletter",                                                                             // 2
    namespace = "telescope-newsletter";                                                                                // 3
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
// packages/telescope-newsletter/C:/$AppDev/Telescope/packages/telescope-newsletter/i18n/en.i18n.js                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-newsletter",                                                                             // 2
    namespace = "telescope-newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!","newsletter":"newsletter","showBanner":"Show Banner","mailChimpAPIKey":"MailChimp API Key","mailChimpListId":"MailChimp List ID","postsPerNewsletter":"Posts per Newsletter","newsletterFrequency":"Newsletter Frequency","newsletterTime":"Newsletter Time","enableNewsletter":"Enable Newsletter","autoSubscribe":"Auto Subscribe"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/C:/$AppDev/Telescope/packages/telescope-newsletter/i18n/es.i18n.js                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-newsletter",                                                                             // 2
    namespace = "telescope-newsletter";                                                                                // 3
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
// packages/telescope-newsletter/C:/$AppDev/Telescope/packages/telescope-newsletter/i18n/fr.i18n.js                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-newsletter",                                                                             // 2
    namespace = "telescope-newsletter";                                                                                // 3
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
// packages/telescope-newsletter/C:/$AppDev/Telescope/packages/telescope-newsletter/i18n/it.i18n.js                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-newsletter",                                                                             // 2
    namespace = "telescope-newsletter";                                                                                // 3
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
// packages/telescope-newsletter/C:/$AppDev/Telescope/packages/telescope-newsletter/i18n/zh-CN.i18n.js                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-newsletter",                                                                             // 2
    namespace = "telescope-newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-newsletter'] = {
  resetNewsletterSchedule: resetNewsletterSchedule
};

})();
