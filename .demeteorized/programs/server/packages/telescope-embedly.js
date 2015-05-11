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
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

/* Package-scope variables */
var __, getEmbedlyData, translations;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/package-i18n.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
TAPi18n.packages["telescope-embedly"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                    // 2
// define package's translation function (proxy to the i18next)                                                     // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                    // 4
                                                                                                                    // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/lib/embedly.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var thumbnailProperty = {                                                                                           // 1
  propertyName: 'thumbnailUrl',                                                                                     // 2
  propertySchema: {                                                                                                 // 3
    type: String,                                                                                                   // 4
    optional: true,                                                                                                 // 5
    autoform: {                                                                                                     // 6
      editable: true,                                                                                               // 7
      type: 'bootstrap-postthumbnail'                                                                               // 8
    }                                                                                                               // 9
  }                                                                                                                 // 10
}                                                                                                                   // 11
addToPostSchema.push(thumbnailProperty);                                                                            // 12
                                                                                                                    // 13
var mediaProperty = {                                                                                               // 14
  propertyName: 'media',                                                                                            // 15
  propertySchema: {                                                                                                 // 16
    type: Object,                                                                                                   // 17
    optional: true,                                                                                                 // 18
    blackbox: true,                                                                                                 // 19
    hidden: true,                                                                                                   // 20
    autoform: {                                                                                                     // 21
      omit: true                                                                                                    // 22
    }                                                                                                               // 23
  }                                                                                                                 // 24
}                                                                                                                   // 25
addToPostSchema.push(mediaProperty);                                                                                // 26
                                                                                                                    // 27
postThumbnail.push({                                                                                                // 28
  template: 'postThumbnail',                                                                                        // 29
  order: 15                                                                                                         // 30
});                                                                                                                 // 31
                                                                                                                    // 32
var embedlyKeyProperty = {                                                                                          // 33
  propertyName: 'embedlyKey',                                                                                       // 34
  propertySchema: {                                                                                                 // 35
    type: String,                                                                                                   // 36
    optional: true,                                                                                                 // 37
    autoform: {                                                                                                     // 38
      group: 'embedly',                                                                                             // 39
      private: true                                                                                                 // 40
    }                                                                                                               // 41
  }                                                                                                                 // 42
}                                                                                                                   // 43
Settings.addToSchema(embedlyKeyProperty);                                                                           // 44
                                                                                                                    // 45
var thumbnailWidthProperty = {                                                                                      // 46
  propertyName: 'thumbnailWidth',                                                                                   // 47
  propertySchema: {                                                                                                 // 48
    type: Number,                                                                                                   // 49
    optional: true,                                                                                                 // 50
    autoform: {                                                                                                     // 51
      group: 'embedly'                                                                                              // 52
    }                                                                                                               // 53
  }                                                                                                                 // 54
}                                                                                                                   // 55
Settings.addToSchema(thumbnailWidthProperty);                                                                       // 56
                                                                                                                    // 57
var thumbnailHeightProperty = {                                                                                     // 58
  propertyName: 'thumbnailHeight',                                                                                  // 59
  propertySchema: {                                                                                                 // 60
    type: Number,                                                                                                   // 61
    optional: true,                                                                                                 // 62
    autoform: {                                                                                                     // 63
      group: 'embedly'                                                                                              // 64
    }                                                                                                               // 65
  }                                                                                                                 // 66
}                                                                                                                   // 67
Settings.addToSchema(thumbnailHeightProperty);                                                                      // 68
                                                                                                                    // 69
// add callback that adds "has-thumbnail" or "no-thumbnail" CSS classes                                             // 70
postClassCallbacks.push(function (post, postClass){                                                                 // 71
  var thumbnailClass = !!post.thumbnailUrl ? "has-thumbnail" : "no-thumbnail";                                      // 72
  return postClass + " " + thumbnailClass;                                                                          // 73
});                                                                                                                 // 74
                                                                                                                    // 75
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/lib/server/get_embedly_data.js                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
getEmbedlyData = function (url) {                                                                                   // 1
  var data = {}                                                                                                     // 2
  var extractBase = 'http://api.embed.ly/1/extract';                                                                // 3
  var embedlyKey = Settings.get('embedlyKey');                                                                      // 4
  var thumbnailWidth = Settings.get('thumbnailWidth', 200);                                                         // 5
  var thumbnailHeight = Settings.get('thumbnailHeight', 125);                                                       // 6
                                                                                                                    // 7
  if(!embedlyKey) {                                                                                                 // 8
    // fail silently to still let the post be submitted as usual                                                    // 9
    console.log("Couldn't find an Embedly API key! Please add it to your Telescope settings or remove the Embedly module.");
    return null;                                                                                                    // 11
  }                                                                                                                 // 12
                                                                                                                    // 13
  try {                                                                                                             // 14
                                                                                                                    // 15
    var result = Meteor.http.get(extractBase, {                                                                     // 16
      params: {                                                                                                     // 17
        key: embedlyKey,                                                                                            // 18
        url: url,                                                                                                   // 19
        image_width: thumbnailWidth,                                                                                // 20
        image_height: thumbnailHeight,                                                                              // 21
        image_method: 'crop'                                                                                        // 22
      }                                                                                                             // 23
    });                                                                                                             // 24
                                                                                                                    // 25
    // console.log(result)                                                                                          // 26
                                                                                                                    // 27
    if (!!result.data.images && !!result.data.images.length) // there may not always be an image                    // 28
      result.data.thumbnailUrl = result.data.images[0].url.replace("http:", ""); // add thumbnailUrl as its own property and remove "http"
                                                                                                                    // 30
    return _.pick(result.data, 'title', 'media', 'description', 'thumbnailUrl');                                    // 31
                                                                                                                    // 32
  } catch (error) {                                                                                                 // 33
    console.log(error)                                                                                              // 34
    // the first 13 characters of the Embedly errors are "failed [400] ", so remove them and parse the rest         // 35
    var errorObject = JSON.parse(error.message.substring(13));                                                      // 36
    throw new Meteor.Error(errorObject.error_code, errorObject.error_message);                                      // 37
    return null;                                                                                                    // 38
  }                                                                                                                 // 39
}                                                                                                                   // 40
                                                                                                                    // 41
// For security reason, we use a separate server-side API call to set the media object,                             // 42
// and the thumbnail object if it hasn't already been set                                                           // 43
                                                                                                                    // 44
// note: the following function is not used because it would hold up the post submission, use next one instead      // 45
// var addMediaOnSubmit = function (post) {                                                                         // 46
//   if(post.url){                                                                                                  // 47
//     var data = getEmbedlyData(post.url);                                                                         // 48
//     if (!!data) {                                                                                                // 49
//       // only add a thumbnailUrl if there isn't one already                                                      // 50
//       if(!post.thumbnailUrl && !!data.thumbnailUrl)                                                              // 51
//         post.thumbnailUrl = data.thumbnailUrl                                                                    // 52
//       // add media if necessary                                                                                  // 53
//       if(!!data.media.html)                                                                                      // 54
//         post.media = data.media                                                                                  // 55
//     }                                                                                                            // 56
//   }                                                                                                              // 57
//   return post;                                                                                                   // 58
// }                                                                                                                // 59
// postSubmitMethodCallbacks.push(addMediaOnSubmit);                                                                // 60
                                                                                                                    // 61
// Async variant that directly modifies the post object with update()                                               // 62
var addMediaAfterSubmit = function (post) {                                                                         // 63
  var set = {};                                                                                                     // 64
  if(post.url){                                                                                                     // 65
    var data = getEmbedlyData(post.url);                                                                            // 66
    if (!!data) {                                                                                                   // 67
      // only add a thumbnailUrl if there isn't one already                                                         // 68
      if (!post.thumbnailUrl && !!data.thumbnailUrl) {                                                              // 69
        post.thumbnailUrl = data.thumbnailUrl;                                                                      // 70
        set.thumbnailUrl = data.thumbnailUrl;                                                                       // 71
      }                                                                                                             // 72
      // add media if necessary                                                                                     // 73
      if (!!data.media.html) {                                                                                      // 74
        post.media = data.media;                                                                                    // 75
        set.media = data.media;                                                                                     // 76
      }                                                                                                             // 77
    }                                                                                                               // 78
    // make sure set object is not empty (Embedly call could have failed)                                           // 79
    if(!_.isEmpty(set)) {                                                                                           // 80
      Posts.update(post._id, {$set: set});                                                                          // 81
    }                                                                                                               // 82
  }                                                                                                                 // 83
  return post;                                                                                                      // 84
}                                                                                                                   // 85
postAfterSubmitMethodCallbacks.push(addMediaAfterSubmit);                                                           // 86
                                                                                                                    // 87
// TODO: find a way to only do this is URL has actually changed?                                                    // 88
var updateMediaOnEdit = function (updateObject) {                                                                   // 89
  var post = updateObject.$set                                                                                      // 90
  if(post.url){                                                                                                     // 91
    var data = getEmbedlyData(post.url);                                                                            // 92
    if(!!data && !!data.media.html)                                                                                 // 93
      updateObject.$set.media = data.media                                                                          // 94
  }                                                                                                                 // 95
  return updateObject;                                                                                              // 96
}                                                                                                                   // 97
postEditMethodCallbacks.push(updateMediaOnEdit);                                                                    // 98
                                                                                                                    // 99
                                                                                                                    // 100
Meteor.methods({                                                                                                    // 101
  testGetEmbedlyData: function (url) {                                                                              // 102
    console.log(getEmbedlyData(url))                                                                                // 103
  },                                                                                                                // 104
  getEmbedlyData: function (url) {                                                                                  // 105
    return getEmbedlyData(url);                                                                                     // 106
  },                                                                                                                // 107
  embedlyKeyExists: function () {                                                                                   // 108
    return !!Settings.get('embedlyKey');                                                                            // 109
  },                                                                                                                // 110
  regenerateEmbedlyData: function (post) {                                                                          // 111
    if (can.edit(Meteor.user(), post)) {                                                                            // 112
      addMediaAfterSubmit(post);                                                                                    // 113
    }                                                                                                               // 114
  }                                                                                                                 // 115
});                                                                                                                 // 116
                                                                                                                    // 117
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/C:/$AppDev/Telescope/packages/telescope-embedly/i18n/en.i18n.js                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope-embedly",                                                                             // 2
    namespace = "telescope-embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
// integrate the fallback language translations                                                                     // 8
translations = {};                                                                                                  // 9
translations[namespace] = {"thumbnail":"Thumbnail","thumbnailUrl":"Thumbnail","regenerate_thumbnail":"Regenerate Thumbnail","clear_thumbnail":"Clear Thumbnail","please_fill_in_embedly_key":"Please fill in your Embedly API key to enable thumbnails.","please_ask_your_admin_to_fill_in_embedly_key":"Please ask your site admin to fill in an Embedly API key to enable thumbnails.","embedlyKey":"Embedly API Key","thumbnailWidth":"Thumbnail Width","thumbnailHeight":"Thumbnail Height"};
TAPi18n._loadLangFileObject("en", translations);                                                                    // 11
                                                                                                                    // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/C:/$AppDev/Telescope/packages/telescope-embedly/i18n/fr.i18n.js                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope-embedly",                                                                             // 2
    namespace = "telescope-embedly";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                     // 8
  TAPi18n.translations["fr"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                          // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["fr"][namespace], {"thumbnail":"Aperçu","thumbnailUrl":"Aperçu","regenerate_thumbnail":"Regenerer l'aperçu","clear_thumbnail":"Effacer l'aperçu","please_fill_in_embedly_key":"Veuillez fournir une clé API Embedly pour activer les aperçus."});
                                                                                                                    // 17
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-embedly'] = {};

})();

//# sourceMappingURL=telescope-embedly.js.map
