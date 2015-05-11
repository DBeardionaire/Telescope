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
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var moment = Package['momentjs:moment'].moment;
var SyncedCron = Package['percolatestudio:synced-cron'].SyncedCron;

/* Package-scope variables */
var Feeds, fetchFeeds, translations;

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
// packages/telescope-post-by-feed/lib/server/fetch_feeds.js                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var toMarkdown = Npm.require('to-markdown').toMarkdown;                                                          // 1
var he = Npm.require('he');                                                                                      // 2
var FeedParser = Npm.require('feedparser');                                                                      // 3
var Readable = Npm.require('stream').Readable;                                                                   // 4
var iconv = Npm.require('iconv-lite');                                                                           // 5
                                                                                                                 // 6
var getFirstAdminUser = function() {                                                                             // 7
  return Meteor.users.findOne({isAdmin: true}, {sort: {createdAt: 1}});                                          // 8
};                                                                                                               // 9
                                                                                                                 // 10
var normalizeEncoding = function (contentBuffer) {                                                               // 11
  // got from https://github.com/szwacz/sputnik/                                                                 // 12
  var encoding;                                                                                                  // 13
  var content = contentBuffer.toString();                                                                        // 14
                                                                                                                 // 15
  var xmlDeclaration = content.match(/^<\?xml .*\?>/);                                                           // 16
  if (xmlDeclaration) {                                                                                          // 17
    var encodingDeclaration = xmlDeclaration[0].match(/encoding=("|').*?("|')/);                                 // 18
    if (encodingDeclaration) {                                                                                   // 19
      encoding = encodingDeclaration[0].substring(10, encodingDeclaration[0].length - 1);                        // 20
    }                                                                                                            // 21
  }                                                                                                              // 22
                                                                                                                 // 23
  if (encoding && encoding.toLowerCase() !== 'utf-8') {                                                          // 24
    try {                                                                                                        // 25
      content = iconv.decode(contentBuffer, encoding);                                                           // 26
    } catch (err) {                                                                                              // 27
      // detected encoding is not supported, leave it as it is                                                   // 28
    }                                                                                                            // 29
  }                                                                                                              // 30
                                                                                                                 // 31
  return content;                                                                                                // 32
};                                                                                                               // 33
                                                                                                                 // 34
var feedHandler = {                                                                                              // 35
  getStream: function(content) {                                                                                 // 36
    var stream = new Readable();                                                                                 // 37
    stream.push(content);                                                                                        // 38
    stream.push(null);                                                                                           // 39
                                                                                                                 // 40
    return stream;                                                                                               // 41
  },                                                                                                             // 42
                                                                                                                 // 43
  getItemCategories: function(item, feedCategories) {                                                            // 44
                                                                                                                 // 45
    var itemCategories = [];                                                                                     // 46
                                                                                                                 // 47
    // loop over RSS categories for the current item if it has any                                               // 48
    if (item.categories && item.categories.length > 0) {                                                         // 49
      item.categories.forEach(function(name) {                                                                   // 50
                                                                                                                 // 51
        // if the RSS category corresponds to a Telescope cateogry, add it                                       // 52
        var category = Categories.findOne({name: name}, {fields: {_id: 1}});                                     // 53
        if (category) {                                                                                          // 54
          itemCategories.push(category._id);                                                                     // 55
        }                                                                                                        // 56
                                                                                                                 // 57
      });                                                                                                        // 58
    }                                                                                                            // 59
                                                                                                                 // 60
    // add predefined feed categories if there are any and remove any duplicates                                 // 61
    if (!!feedCategories) {                                                                                      // 62
      itemCategories = _.uniq(itemCategories.concat(feedCategories));                                            // 63
    }                                                                                                            // 64
                                                                                                                 // 65
    return itemCategories;                                                                                       // 66
  },                                                                                                             // 67
                                                                                                                 // 68
  handle: function(contentBuffer, userId, feedCategories, feedId) {                                              // 69
    var content = normalizeEncoding(contentBuffer);                                                              // 70
    var stream = this.getStream(content),                                                                        // 71
    feedParser = new FeedParser(),                                                                               // 72
    newItemsCount = 0,                                                                                           // 73
    self = this;                                                                                                 // 74
                                                                                                                 // 75
    stream.pipe(feedParser);                                                                                     // 76
                                                                                                                 // 77
    feedParser.on('meta', Meteor.bindEnvironment(function(meta) {                                                // 78
      clog('// Parsing RSS feed: '+ meta.title);                                                                 // 79
    }));                                                                                                         // 80
                                                                                                                 // 81
    feedParser.on('error', Meteor.bindEnvironment(function(error) {                                              // 82
      clog(error);                                                                                               // 83
    }));                                                                                                         // 84
                                                                                                                 // 85
    feedParser.on('readable', Meteor.bindEnvironment(function() {                                                // 86
      var s = this, item;                                                                                        // 87
                                                                                                                 // 88
      while (item = s.read()) {                                                                                  // 89
        // if item has no guid, use the URL to give it one                                                       // 90
        if (!item.guid) {                                                                                        // 91
          item.guid = item.link;                                                                                 // 92
        }                                                                                                        // 93
                                                                                                                 // 94
        // check if post already exists                                                                          // 95
        if (!!Posts.findOne({feedItemId: item.guid})) {                                                          // 96
          clog('// Feed item already imported');                                                                 // 97
          continue;                                                                                              // 98
        }                                                                                                        // 99
                                                                                                                 // 100
        newItemsCount++;                                                                                         // 101
                                                                                                                 // 102
        var post = {                                                                                             // 103
          title: he.decode(item.title),                                                                          // 104
          url: item.link,                                                                                        // 105
          feedId: feedId,                                                                                        // 106
          feedItemId: item.guid,                                                                                 // 107
          userId: userId,                                                                                        // 108
          categories: self.getItemCategories(item, feedCategories)                                               // 109
        };                                                                                                       // 110
                                                                                                                 // 111
        if (item.description)                                                                                    // 112
          post.body = toMarkdown(he.decode(item.description));                                                   // 113
                                                                                                                 // 114
        // console.log(item)                                                                                     // 115
                                                                                                                 // 116
        // if RSS item link is a 301 or 302 redirect, follow the redirect                                        // 117
        var get = HTTP.get(item.link, {followRedirects: false});                                                 // 118
        if (!!get.statusCode && (get.statusCode === 301 || get.statusCode === 302) &&                            // 119
            !!get.headers && !!get.headers.location) {                                                           // 120
              post.url = get.headers.location;                                                                   // 121
            }                                                                                                    // 122
                                                                                                                 // 123
        // if RSS item has a date, use it                                                                        // 124
        if (item.pubdate)                                                                                        // 125
          post.postedAt = moment(item.pubdate).toDate();                                                         // 126
                                                                                                                 // 127
        try {                                                                                                    // 128
          submitPost(post);                                                                                      // 129
        } catch (error) {                                                                                        // 130
          // catch errors so they don't stop the loop                                                            // 131
          clog(error);                                                                                           // 132
        }                                                                                                        // 133
      }                                                                                                          // 134
                                                                                                                 // 135
      // clog('// Found ' + newItemsCount + ' new feed items');                                                  // 136
    }, function() {                                                                                              // 137
      clog('Failed to bind environment');                                                                        // 138
    }, feedParser));                                                                                             // 139
  }                                                                                                              // 140
};                                                                                                               // 141
                                                                                                                 // 142
fetchFeeds = function() {                                                                                        // 143
  var contentBuffer;                                                                                             // 144
                                                                                                                 // 145
  Feeds.find().forEach(function(feed) {                                                                          // 146
                                                                                                                 // 147
    // if feed doesn't specify a user, default to admin                                                          // 148
    var userId = !!feed.userId ? feed.userId : getFirstAdminUser()._id;                                          // 149
    var feedCategories = feed.categories;                                                                        // 150
    var feedId = feed._id;                                                                                       // 151
                                                                                                                 // 152
    try {                                                                                                        // 153
      contentBuffer = HTTP.get(feed.url, {responseType: 'buffer'}).content;                                      // 154
      feedHandler.handle(contentBuffer, userId, feedCategories, feedId);                                         // 155
    } catch (error) {                                                                                            // 156
      console.log(error);                                                                                        // 157
      return true; // just go to next feed URL                                                                   // 158
    }                                                                                                            // 159
  });                                                                                                            // 160
};                                                                                                               // 161
                                                                                                                 // 162
Meteor.methods({                                                                                                 // 163
  fetchFeeds: function () {                                                                                      // 164
    fetchFeeds();                                                                                                // 165
  },                                                                                                             // 166
  testEntities: function (text) {                                                                                // 167
    console.log(he.decode(text));                                                                                // 168
  },                                                                                                             // 169
  testToMarkdown: function (text) {                                                                              // 170
    console.log(toMarkdown(text));                                                                               // 171
  }                                                                                                              // 172
});                                                                                                              // 173
                                                                                                                 // 174
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/lib/server/cron.js                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
SyncedCron.options = {                                                                                           // 1
  log: false,                                                                                                    // 2
  collectionName: 'cronHistory',                                                                                 // 3
  utc: false,                                                                                                    // 4
  collectionTTL: 172800                                                                                          // 5
}                                                                                                                // 6
                                                                                                                 // 7
var addJob = function () {                                                                                       // 8
  SyncedCron.add({                                                                                               // 9
    name: 'Post by RSS feed',                                                                                    // 10
    schedule: function(parser) {                                                                                 // 11
      return parser.text('every 30 minutes');                                                                    // 12
    },                                                                                                           // 13
    job: function() {                                                                                            // 14
      if (Feeds.find().count()) {                                                                                // 15
        fetchFeeds();                                                                                            // 16
      }                                                                                                          // 17
    }                                                                                                            // 18
  });                                                                                                            // 19
}                                                                                                                // 20
                                                                                                                 // 21
Meteor.startup(function () {                                                                                     // 22
  addJob();                                                                                                      // 23
})                                                                                                               // 24
                                                                                                                 // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-post-by-feed/lib/server/publications.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.publish('feeds', function() {                                                                             // 1
  if(isAdminById(this.userId)){                                                                                  // 2
    return Feeds.find();                                                                                         // 3
  }                                                                                                              // 4
  return [];                                                                                                     // 5
});                                                                                                              // 6
                                                                                                                 // 7
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

//# sourceMappingURL=telescope-post-by-feed.js.map
