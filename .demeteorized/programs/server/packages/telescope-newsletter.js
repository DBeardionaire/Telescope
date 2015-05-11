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
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var MailChimp = Package['miro:mailchimp'].MailChimp;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var SyncedCron = Package['percolatestudio:synced-cron'].SyncedCron;
var Handlebars = Package['cmather:handlebars-server'].Handlebars;
var OriginalHandlebars = Package['cmather:handlebars-server'].OriginalHandlebars;
var Iron = Package['iron:core'].Iron;
var Async = Package['meteorhacks:async'].Async;

/* Package-scope variables */
var resetNewsletterSchedule, __, campaignSchema, Campaigns, defaultFrequency, defaultPosts, getCampaignPosts, buildCampaign, scheduleNextCampaign, defaultTime, scheduleCampaign, addToMailChimpList, Handlebars, translations;

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
                                                                                                                       // 5
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
// packages/telescope-newsletter/lib/server/campaign.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
defaultFrequency = 7;                                                                                                  // 1
defaultPosts = 5;                                                                                                      // 2
                                                                                                                       // 3
getCampaignPosts = function (postsCount) {                                                                             // 4
                                                                                                                       // 5
  var newsletterFrequency = Settings.get('newsletterFrequency', defaultFrequency);                                     // 6
                                                                                                                       // 7
  // look for last scheduled campaign in the database                                                                  // 8
  var lastCampaign = SyncedCron._collection.findOne({name: 'Schedule newsletter'}, {sort: {finishedAt: -1}, limit: 1});
                                                                                                                       // 10
  // if there is a last campaign use its date, else default to posts from the last 7 days                              // 11
  var lastWeek = moment().subtract(7, 'days').toDate();                                                                // 12
  var after = (typeof lastCampaign != 'undefined') ? lastCampaign.finishedAt : lastWeek                                // 13
                                                                                                                       // 14
  var params = getPostsParameters({                                                                                    // 15
    view: 'campaign',                                                                                                  // 16
    limit: postsCount,                                                                                                 // 17
    after: after                                                                                                       // 18
  });                                                                                                                  // 19
  return Posts.find(params.find, params.options).fetch();                                                              // 20
}                                                                                                                      // 21
                                                                                                                       // 22
buildCampaign = function (postsArray) {                                                                                // 23
  var postsHTML = '', subject = '';                                                                                    // 24
                                                                                                                       // 25
  // 1. Iterate through posts and pass each of them through a handlebars template                                      // 26
  postsArray.forEach(function (post, index) {                                                                          // 27
    if(index > 0)                                                                                                      // 28
      subject += ', ';                                                                                                 // 29
                                                                                                                       // 30
    subject += post.title;                                                                                             // 31
                                                                                                                       // 32
    var postUser = Meteor.users.findOne(post.userId);                                                                  // 33
                                                                                                                       // 34
    // the naked post object as stored in the database is missing a few properties, so let's add them                  // 35
    var properties = _.extend(post, {                                                                                  // 36
      authorName: getAuthorName(post),                                                                                 // 37
      postLink: getPostLink(post),                                                                                     // 38
      profileUrl: getProfileUrl(postUser),                                                                             // 39
      postPageLink: getPostPageUrl(post),                                                                              // 40
      date: moment(post.postedAt).format("MMMM D YYYY")                                                                // 41
    });                                                                                                                // 42
                                                                                                                       // 43
    if (post.body)                                                                                                     // 44
      properties.body = marked(trimWords(post.body, 20)).replace('<p>', '').replace('</p>', ''); // remove p tags      // 45
                                                                                                                       // 46
    if(post.url)                                                                                                       // 47
      properties.domain = getDomain(post.url)                                                                          // 48
                                                                                                                       // 49
    postsHTML += getEmailTemplate('emailPostItem')(properties);                                                        // 50
  });                                                                                                                  // 51
                                                                                                                       // 52
  // 2. Wrap posts HTML in digest template                                                                             // 53
  var digestHTML = getEmailTemplate('emailDigest')({                                                                   // 54
    siteName: Settings.get('title'),                                                                                   // 55
    date: moment().format("dddd, MMMM Do YYYY"),                                                                       // 56
    content: postsHTML                                                                                                 // 57
  });                                                                                                                  // 58
                                                                                                                       // 59
  // 3. wrap digest HTML in email wrapper template                                                                     // 60
  var emailHTML = buildEmailTemplate(digestHTML);                                                                      // 61
                                                                                                                       // 62
  var campaign = {                                                                                                     // 63
    postIds: _.pluck(postsArray, '_id'),                                                                               // 64
    subject: trimWords(subject, 15),                                                                                   // 65
    html: emailHTML                                                                                                    // 66
  }                                                                                                                    // 67
                                                                                                                       // 68
  return campaign                                                                                                      // 69
}                                                                                                                      // 70
                                                                                                                       // 71
scheduleNextCampaign = function (isTest) {                                                                             // 72
  var isTest = typeof isTest === 'undefined' ? false : isTest;                                                         // 73
  var posts = getCampaignPosts(Settings.get('postsPerNewsletter', defaultPosts));                                      // 74
  if(!!posts.length){                                                                                                  // 75
    return scheduleCampaign(buildCampaign(posts), isTest);                                                             // 76
  }else{                                                                                                               // 77
    var result = 'No posts to schedule today…';                                                                        // 78
    return result                                                                                                      // 79
  }                                                                                                                    // 80
}                                                                                                                      // 81
                                                                                                                       // 82
Meteor.methods({                                                                                                       // 83
  sendCampaign: function () {                                                                                          // 84
    if(isAdminById(this.userId))                                                                                       // 85
      return scheduleNextCampaign(false);                                                                              // 86
  },                                                                                                                   // 87
  testCampaign: function () {                                                                                          // 88
    if(isAdminById(this.userId))                                                                                       // 89
      return scheduleNextCampaign(true);                                                                               // 90
  }                                                                                                                    // 91
});                                                                                                                    // 92
                                                                                                                       // 93
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/lib/server/cron.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
SyncedCron.options = {                                                                                                 // 1
  log: false,                                                                                                          // 2
  collectionName: 'cronHistory',                                                                                       // 3
  utc: false,                                                                                                          // 4
  collectionTTL: 172800                                                                                                // 5
}                                                                                                                      // 6
                                                                                                                       // 7
defaultFrequency = 7; // once a week                                                                                   // 8
defaultTime = '00:00';                                                                                                 // 9
                                                                                                                       // 10
var getSchedule = function (parser) {                                                                                  // 11
  var frequency = Settings.get('newsletterFrequency', defaultFrequency);                                               // 12
  var recur = parser.recur();                                                                                          // 13
  var schedule;                                                                                                        // 14
  switch (frequency) {                                                                                                 // 15
    case 1: // every day                                                                                               // 16
      // sched = {schedules: [{dw: [1,2,3,4,5,6,0]}]};                                                                 // 17
      schedule = recur.on(1,2,3,4,5,6,0).dayOfWeek();                                                                  // 18
                                                                                                                       // 19
    case 2: // Mondays, Wednesdays, Fridays                                                                            // 20
      // sched = {schedules: [{dw: [2,4,6]}]};                                                                         // 21
      schedule = recur.on(2,4,6).dayOfWeek();                                                                          // 22
                                                                                                                       // 23
    case 3: // Mondays, Thursdays                                                                                      // 24
      // sched = {schedules: [{dw: [2,5]}]};                                                                           // 25
      schedule = recur.on(2,5).dayOfWeek();                                                                            // 26
                                                                                                                       // 27
    case 7: // Once a week (Mondays)                                                                                   // 28
      // sched = {schedules: [{dw: [2]}]};                                                                             // 29
      schedule = recur.on(2).dayOfWeek();                                                                              // 30
                                                                                                                       // 31
    default: // Once a week (Mondays)                                                                                  // 32
      schedule = recur.on(2).dayOfWeek();                                                                              // 33
  }                                                                                                                    // 34
  return schedule.on(Settings.get('newsletterTime', defaultTime)).time();                                              // 35
}                                                                                                                      // 36
                                                                                                                       // 37
Meteor.methods({                                                                                                       // 38
  getNextJob: function () {                                                                                            // 39
    var nextJob = SyncedCron.nextScheduledAtDate('scheduleNewsletter');                                                // 40
    console.log(nextJob);                                                                                              // 41
    return nextJob;                                                                                                    // 42
  }                                                                                                                    // 43
});                                                                                                                    // 44
                                                                                                                       // 45
var addJob = function () {                                                                                             // 46
  SyncedCron.add({                                                                                                     // 47
    name: 'scheduleNewsletter',                                                                                        // 48
    schedule: function(parser) {                                                                                       // 49
      // parser is a later.parse object                                                                                // 50
      return getSchedule(parser);                                                                                      // 51
    },                                                                                                                 // 52
    job: function() {                                                                                                  // 53
      scheduleNextCampaign();                                                                                          // 54
    }                                                                                                                  // 55
  });                                                                                                                  // 56
}                                                                                                                      // 57
Meteor.startup(function () {                                                                                           // 58
  if (Settings.get('enableNewsletter', false)) {                                                                       // 59
    addJob();                                                                                                          // 60
  }                                                                                                                    // 61
});                                                                                                                    // 62
                                                                                                                       // 63
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/lib/server/mailchimp.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var htmlToText = Npm.require('html-to-text');                                                                          // 1
                                                                                                                       // 2
scheduleCampaign = function (campaign, isTest) {                                                                       // 3
  var isTest = typeof isTest === 'undefined' ? false : isTest;                                                         // 4
                                                                                                                       // 5
  var apiKey = Settings.get('mailChimpAPIKey');                                                                        // 6
  var listId = Settings.get('mailChimpListId');                                                                        // 7
                                                                                                                       // 8
  if(!!apiKey && !!listId){                                                                                            // 9
                                                                                                                       // 10
		var wordCount = 15;                                                                                                  // 11
		var subject = campaign.subject;                                                                                      // 12
		while (subject.length >= 150){                                                                                       // 13
			subject = trimWords(subject, wordCount);                                                                            // 14
			wordCount--;                                                                                                        // 15
		}                                                                                                                    // 16
                                                                                                                       // 17
    try {                                                                                                              // 18
                                                                                                                       // 19
      var api = new MailChimp(apiKey);                                                                                 // 20
      var text = htmlToText.fromString(campaign.html, {wordwrap: 130});                                                // 21
      var defaultEmail = Settings.get('defaultEmail');                                                                 // 22
      var campaignOptions = {                                                                                          // 23
        type: 'regular',                                                                                               // 24
        options: {                                                                                                     // 25
          list_id: listId,                                                                                             // 26
          subject: subject,                                                                                            // 27
          from_email: defaultEmail,                                                                                    // 28
          from_name: Settings.get('title')+ ' Top Posts',                                                              // 29
        },                                                                                                             // 30
        content: {                                                                                                     // 31
          html: campaign.html,                                                                                         // 32
          text: text                                                                                                   // 33
        }                                                                                                              // 34
      };                                                                                                               // 35
                                                                                                                       // 36
      console.log( '// Creating campaign…');                                                                           // 37
                                                                                                                       // 38
      // create campaign                                                                                               // 39
      var mailchimpCampaign = api.call( 'campaigns', 'create', campaignOptions);                                       // 40
                                                                                                                       // 41
      console.log( '// Campaign created');                                                                             // 42
      // console.log(campaign)                                                                                         // 43
                                                                                                                       // 44
      var scheduledTime = moment().utcOffset(0).add(1, 'hours').format("YYYY-MM-DD HH:mm:ss");                         // 45
                                                                                                                       // 46
      var scheduleOptions = {                                                                                          // 47
        cid: mailchimpCampaign.id,                                                                                     // 48
        schedule_time: scheduledTime                                                                                   // 49
      };                                                                                                               // 50
                                                                                                                       // 51
      // schedule campaign                                                                                             // 52
      var schedule = api.call('campaigns', 'schedule', scheduleOptions);                                               // 53
                                                                                                                       // 54
      console.log('// Campaign scheduled for '+scheduledTime);                                                         // 55
      // console.log(schedule)                                                                                         // 56
                                                                                                                       // 57
      // if this is not a test, mark posts as sent                                                                     // 58
      if (!isTest)                                                                                                     // 59
        var updated = Posts.update({_id: {$in: campaign.postIds}}, {$set: {scheduledAt: new Date()}}, {multi: true})   // 60
                                                                                                                       // 61
      // send confirmation email                                                                                       // 62
      var confirmationHtml = getEmailTemplate('emailDigestConfirmation')({                                             // 63
        time: scheduledTime,                                                                                           // 64
        newsletterLink: mailchimpCampaign.archive_url,                                                                 // 65
        subject: subject                                                                                               // 66
      });                                                                                                              // 67
      sendEmail(defaultEmail, 'Newsletter scheduled', buildEmailTemplate(confirmationHtml));                           // 68
                                                                                                                       // 69
    } catch (error) {                                                                                                  // 70
      console.log(error);                                                                                              // 71
    }                                                                                                                  // 72
    return subject;                                                                                                    // 73
  }                                                                                                                    // 74
}                                                                                                                      // 75
                                                                                                                       // 76
addToMailChimpList = function(userOrEmail, confirm, done){                                                             // 77
                                                                                                                       // 78
  var user, email;                                                                                                     // 79
                                                                                                                       // 80
  var confirm = (typeof confirm === 'undefined') ? false : confirm // default to no confirmation                       // 81
                                                                                                                       // 82
  // not sure if it's really necessary that the function take both user and email?                                     // 83
  if (typeof userOrEmail == "string") {                                                                                // 84
    user = null;                                                                                                       // 85
    email = userOrEmail;                                                                                               // 86
  } else if (typeof userOrEmail == "object") {                                                                         // 87
    user = userOrEmail;                                                                                                // 88
    email = getEmail(user);                                                                                            // 89
    if (!email)                                                                                                        // 90
      throw 'User must have an email address';                                                                         // 91
  }                                                                                                                    // 92
                                                                                                                       // 93
  var apiKey = Settings.get('mailChimpAPIKey');                                                                        // 94
  var listId = Settings.get('mailChimpListId');                                                                        // 95
                                                                                                                       // 96
  // add a user to a MailChimp list.                                                                                   // 97
  // called when a new user is created, or when an existing user fills in their email                                  // 98
  if(!!apiKey && !!listId){                                                                                            // 99
                                                                                                                       // 100
    try {                                                                                                              // 101
                                                                                                                       // 102
      console.log('// Adding "'+email+'" to MailChimp list…');                                                         // 103
                                                                                                                       // 104
      var api = new MailChimp(apiKey);                                                                                 // 105
      var subscribeOptions = {                                                                                         // 106
        id: listId,                                                                                                    // 107
        email: {"email": email},                                                                                       // 108
        double_optin: confirm                                                                                          // 109
      };                                                                                                               // 110
                                                                                                                       // 111
      // subscribe user                                                                                                // 112
      var subscribe = api.call('lists', 'subscribe', subscribeOptions);                                                // 113
                                                                                                                       // 114
      // mark user as subscribed                                                                                       // 115
      if(!!user)                                                                                                       // 116
        setUserSetting('subscribedToNewsletter', true, user);                                                          // 117
                                                                                                                       // 118
      console.log("// User subscribed");                                                                               // 119
                                                                                                                       // 120
      return subscribe;                                                                                                // 121
                                                                                                                       // 122
    } catch (error) {                                                                                                  // 123
      throw new Meteor.Error("subscription-failed", error.message);                                                    // 124
      console.log( error.message );                                                                                    // 125
    }                                                                                                                  // 126
  }                                                                                                                    // 127
};                                                                                                                     // 128
                                                                                                                       // 129
Meteor.methods({                                                                                                       // 130
  addCurrentUserToMailChimpList: function(){                                                                           // 131
    var currentUser = Meteor.users.findOne(this.userId);                                                               // 132
    try {                                                                                                              // 133
      return addToMailChimpList(currentUser, false);                                                                   // 134
    } catch (error) {                                                                                                  // 135
      throw new Meteor.Error(500, error.message);                                                                      // 136
    }                                                                                                                  // 137
  },                                                                                                                   // 138
  addEmailToMailChimpList: function (email) {                                                                          // 139
    try {                                                                                                              // 140
      return addToMailChimpList(email, true);                                                                          // 141
    } catch (error) {                                                                                                  // 142
      throw new Meteor.Error(500, error.message);                                                                      // 143
    }                                                                                                                  // 144
  }                                                                                                                    // 145
});                                                                                                                    // 146
                                                                                                                       // 147
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/lib/server/routes.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
                                                                                                                       // 2
  Router.route('/email/campaign', {                                                                                    // 3
    name: 'campaign',                                                                                                  // 4
    where: 'server',                                                                                                   // 5
    action: function() {                                                                                               // 6
      var campaign = buildCampaign(getCampaignPosts(Settings.get('postsPerNewsletter', 5)));                           // 7
      var campaignSubject = '<div class="campaign-subject"><strong>Subject:</strong> '+campaign.subject+' (note: contents might change)</div>';
      var campaignSchedule = '<div class="campaign-schedule"><strong>Scheduled for:</strong> '+ Meteor.call('getNextJob') +'</div>';
                                                                                                                       // 10
      this.response.write(campaignSubject+campaignSchedule+campaign.html);                                             // 11
      this.response.end();                                                                                             // 12
    }                                                                                                                  // 13
  });                                                                                                                  // 14
                                                                                                                       // 15
  Router.route('/email/digest-confirmation', {                                                                         // 16
    name: 'digestConfirmation',                                                                                        // 17
    where: 'server',                                                                                                   // 18
    action: function() {                                                                                               // 19
      var confirmationHtml = getEmailTemplate('emailDigestConfirmation')({                                             // 20
        time: 'January 1st, 1901',                                                                                     // 21
        newsletterLink: 'http://example.com',                                                                          // 22
        subject: 'Lorem ipsum dolor sit amet'                                                                          // 23
      });                                                                                                              // 24
      this.response.write(buildEmailTemplate(confirmationHtml));                                                       // 25
      this.response.end();                                                                                             // 26
    }                                                                                                                  // 27
  });                                                                                                                  // 28
                                                                                                                       // 29
});                                                                                                                    // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/lib/server/templates/handlebars.emailDigest.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<style type=\"text/css\">\r\n  .email-digest{\r\n  }\r\n  .digest-date{\r\n    color: #999;\r\n    font-weight: normal;\r\n    font-size: 16px;\r\n  }\r\n  .post-item{\r\n    border-top: 1px solid #ddd;\r\n  }\r\n  .post-date{\r\n    font-size: 13px;\r\n    color: #999;\r\n  }\r\n  .post-title{\r\n    font-size: 18px;\r\n    line-height: 1.6;\r\n  }\r\n  .post-thumbnail{\r\n  }\r\n  .post-meta{\r\n    font-size: 13px;\r\n    color: #999;\r\n    margin: 5px 0;\r\n  }\r\n  .post-meta a{\r\n    color: #333;\r\n  }  \r\n  .post-domain{\r\n    font-weight: bold;\r\n  }\r\n  .post-body-excerpt{\r\n    font-size: 14px;\r\n  }\r\n  .post-body-excerpt p{\r\n    margin: 0;\r\n  }\r\n</style>\r\n\r\n<span class=\"heading\">Recently on {{siteName}}</span>\r\n<span class=\"digest-date\">– {{date}}</span>\r\n<br><br>\r\n\r\n<div class=\"email-digest\">\r\n  {{{content}}}\r\n</div>\r\n<br>");Handlebars.templates["emailDigest"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailDigest"});};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/lib/server/templates/handlebars.emailDigestConfirmation.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">Newsletter scheduled for {{time}}</span><br><br>\r\n\r\n<a href=\"{{newsletterLink}}\">{{subject}}</a><br><br>");Handlebars.templates["emailDigestConfirmation"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailDigestConfirmation"});};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-newsletter/lib/server/templates/handlebars.emailPostItem.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<div class=\"post-item\">\r\n<br >\r\n\r\n<span class=\"post-title\">\r\n  {{#if thumbnailUrl}}\r\n    <img class=\"post-thumbnail\" src=\"http:{{thumbnailUrl}}\"/>&nbsp;\r\n  {{/if}}\r\n\r\n  <a href=\"{{postLink}}\" target=\"_blank\">{{title}}</a>\r\n</span>\r\n\r\n<div class=\"post-meta\">\r\n  {{#if domain}}\r\n    <a class=\"post-domain\" href=\"\">{{domain}}</a>\r\n    | \r\n  {{/if}}\r\n  <span class=\"post-submitted\">Submitted by <a href=\"{{profileUrl}}\" class=\"comment-link\" target=\"_blank\">{{authorName}}</a></span>\r\n  <span class=\"post-date\">on {{date}}</span>\r\n  |\r\n  <a href=\"{{postPageLink}}\" class=\"comment-link\" target=\"_blank\">{{commentCount}} Comments</a>\r\n</div>\r\n\r\n\r\n{{#if body}}\r\n  <div class=\"post-body-excerpt\">\r\n    {{{htmlBody}}}\r\n    <a href=\"{{postPageLink}}\" class=\"comment-link\" target=\"_blank\">Read more</a>\r\n  </div>\r\n{{/if}}\r\n\r\n\r\n<br>\r\n</div>\r\n\r\n");Handlebars.templates["emailPostItem"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailPostItem"});};
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
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                        // 8
  TAPi18n.translations["de"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                             // 12
  TAPi18n.translations["de"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["de"][namespace], {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!"});
                                                                                                                       // 17
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
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                        // 8
  TAPi18n.translations["es"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                             // 12
  TAPi18n.translations["es"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["es"][namespace], {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!"});
                                                                                                                       // 17
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
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                        // 8
  TAPi18n.translations["fr"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                             // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["fr"][namespace], {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!","newsletter":"newsletter","showBanner":"Afficher la Bannière","mailChimpAPIKey":"Clé API MailChimp","mailChimpListId":"ID Liste MailChimp","postsPerNewsletter":"Posts par Newsletter","newsletterFrequency":"Fréquence de la Newsletter"});
                                                                                                                       // 17
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
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                        // 8
  TAPi18n.translations["it"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                             // 12
  TAPi18n.translations["it"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["it"][namespace], {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!"});
                                                                                                                       // 17
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
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                     // 8
  TAPi18n.translations["zh-CN"] = {};                                                                                  // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                          // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                       // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!"});
                                                                                                                       // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-newsletter'] = {
  resetNewsletterSchedule: resetNewsletterSchedule
};

})();

//# sourceMappingURL=telescope-newsletter.js.map
