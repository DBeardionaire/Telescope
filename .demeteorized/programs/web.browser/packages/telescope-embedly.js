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
var AutoForm = Package['aldeed:autoform'].AutoForm;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Template = Package.templating.Template;
var HTTP = Package.http.HTTP;
var Messages = Package['telescope-messages'].Messages;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

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
// define the package's templates registrar                                                                         // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-embedly");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                    // 8
// Record the list of templates prior to package load                                                               // 9
var _ = Package.underscore._;                                                                                       // 10
non_package_templates = _.keys(Template);                                                                           // 11
                                                                                                                    // 12
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
// packages/telescope-embedly/lib/client/template.autoform-postthumbnail.js                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("afPostThumbnail");                                                                            // 2
Template["afPostThumbnail"] = new Template("Template.afPostThumbnail", (function() {                                // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.lookup("embedlyKeyExists"));                                                         // 6
  }, function() {                                                                                                   // 7
    return [ "\n  ", HTML.DIV({                                                                                     // 8
      "class": "post-thumbnail-container",                                                                          // 9
      style: function() {                                                                                           // 10
        return Spacebars.mustache(view.lookup("style"));                                                            // 11
      }                                                                                                             // 12
    }, "\n    ", HTML.IMG({                                                                                         // 13
      src: function() {                                                                                             // 14
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                        // 15
      },                                                                                                            // 16
      "class": "post-thumbnail-preview",                                                                            // 17
      style: function() {                                                                                           // 18
        return Spacebars.mustache(view.lookup("style"));                                                            // 19
      }                                                                                                             // 20
    }), "\n    ", HTML.DIV({                                                                                        // 21
      "class": "post-thumbnail-loading"                                                                             // 22
    }, Spacebars.include(view.lookupTemplate("spinner"))), "\n  "), "\n  ", HTML.INPUT(HTML.Attrs({                 // 23
      type: "hidden",                                                                                               // 24
      value: function() {                                                                                           // 25
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                        // 26
      }                                                                                                             // 27
    }, function() {                                                                                                 // 28
      return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                       // 29
    })), "\n  ", HTML.A({                                                                                           // 30
      href: "#",                                                                                                    // 31
      "class": "regenerate-thumbnail-link"                                                                          // 32
    }, Blaze.View("lookup:_", function() {                                                                          // 33
      return Spacebars.mustache(view.lookup("_"), "regenerate_thumbnail");                                          // 34
    })), "\n  ", HTML.A({                                                                                           // 35
      href: "#",                                                                                                    // 36
      "class": "remove-thumbnail-link"                                                                              // 37
    }, Blaze.View("lookup:_", function() {                                                                          // 38
      return Spacebars.mustache(view.lookup("_"), "clear_thumbnail");                                               // 39
    })), "\n  " ];                                                                                                  // 40
  }, function() {                                                                                                   // 41
    return [ "\n    ", Blaze.If(function() {                                                                        // 42
      return Spacebars.call(view.lookup("isAdmin"));                                                                // 43
    }, function() {                                                                                                 // 44
      return [ "\n      ", HTML.P(Blaze.View("lookup:_", function() {                                               // 45
        return Spacebars.mustache(view.lookup("_"), "please_fill_in_embedly_key");                                  // 46
      })), "\n    " ];                                                                                              // 47
    }, function() {                                                                                                 // 48
      return [ "\n      ", HTML.P(Blaze.View("lookup:_", function() {                                               // 49
        return Spacebars.mustache(view.lookup("_"), "please_ask_your_admin_to_fill_in_embedly_key");                // 50
      })), "\n    " ];                                                                                              // 51
    }), "\n  " ];                                                                                                   // 52
  });                                                                                                               // 53
}));                                                                                                                // 54
                                                                                                                    // 55
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/lib/client/autoform-postthumbnail.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
AutoForm.addInputType("bootstrap-postthumbnail", {                                                                  // 1
  template: "afPostThumbnail"                                                                                       // 2
});                                                                                                                 // 3
                                                                                                                    // 4
var fillEmbedlyData = function (instance) {                                                                         // 5
                                                                                                                    // 6
  // note: the following fields are *not* in the current template                                                   // 7
  var $urlField = $('[name="url"]');                                                                                // 8
  var $titleField = $('[name="title"]');                                                                            // 9
  var $bodyField = $('[name="body"]');                                                                              // 10
  var url = $urlField.val();                                                                                        // 11
                                                                                                                    // 12
  var $thumbnailContainer = instance.$('.post-thumbnail-container');                                                // 13
  var $img = instance.$('.post-thumbnail-preview');                                                                 // 14
  var $thumbnailUrlField = instance.$('[name="thumbnailUrl"]');                                                     // 15
                                                                                                                    // 16
  if (!!url) {                                                                                                      // 17
    $thumbnailContainer.addClass('loading');                                                                        // 18
    Messages.clearSeen();                                                                                           // 19
    console.log('getting embedly data for '+url);                                                                   // 20
    Meteor.call('getEmbedlyData', url, function (error, data) {                                                     // 21
      if (error) {                                                                                                  // 22
        console.log(error)                                                                                          // 23
        Messages.flash(error.message, 'error');                                                                     // 24
        $thumbnailContainer.removeClass('loading');                                                                 // 25
        return                                                                                                      // 26
      }                                                                                                             // 27
      if (data) {                                                                                                   // 28
        // set thumbnail and fill in thumbnailUrl field                                                             // 29
        $img.attr('src', data.thumbnailUrl);                                                                        // 30
        $thumbnailUrlField.val(data.thumbnailUrl);                                                                  // 31
                                                                                                                    // 32
        // remove loading class                                                                                     // 33
        $thumbnailContainer.removeClass('loading');                                                                 // 34
                                                                                                                    // 35
        if (!$titleField.val()) // if title field is empty, fill in title                                           // 36
          $titleField.val(data.title);                                                                              // 37
        if (!$bodyField.val()) // if body field is empty, fill in body                                              // 38
          $bodyField.val(data.description);                                                                         // 39
                                                                                                                    // 40
      }                                                                                                             // 41
    });                                                                                                             // 42
  }                                                                                                                 // 43
}                                                                                                                   // 44
                                                                                                                    // 45
Template.afPostThumbnail.created = function () {                                                                    // 46
  var instance = this;                                                                                              // 47
  instance.embedlyKeyExists = new ReactiveVar(false);                                                               // 48
  // embedly key is not published to client, so we need a method to test if it has been provided or not             // 49
  Meteor.call('embedlyKeyExists', function (error, result) {                                                        // 50
    if (result)                                                                                                     // 51
      instance.embedlyKeyExists.set(result);                                                                        // 52
  });                                                                                                               // 53
}                                                                                                                   // 54
                                                                                                                    // 55
Template.afPostThumbnail.helpers({                                                                                  // 56
  atts: function addFormControlAtts() {                                                                             // 57
    var atts = _.clone(this.atts);                                                                                  // 58
    // Add bootstrap class                                                                                          // 59
    atts = AutoForm.Utility.addClass(atts, "form-control");                                                         // 60
    return atts;                                                                                                    // 61
  },                                                                                                                // 62
  style: function () {                                                                                              // 63
    var thumbnailWidth = Settings.get('thumbnailWidth', 200);                                                       // 64
    var thumbnailHeight = Settings.get('thumbnailHeight', 125);                                                     // 65
    return "width: "+thumbnailWidth+"px; height: "+thumbnailHeight+"px;"                                            // 66
  },                                                                                                                // 67
  embedlyKeyExists: function () {                                                                                   // 68
    // haven't found a better way to do this yet…                                                                   // 69
    return Template.instance().embedlyKeyExists.get();                                                              // 70
  }                                                                                                                 // 71
});                                                                                                                 // 72
                                                                                                                    // 73
Template.afPostThumbnail.rendered = function () {                                                                   // 74
                                                                                                                    // 75
  var instance = this;                                                                                              // 76
  var $urlField = $('[name="url"]');                                                                                // 77
                                                                                                                    // 78
  $urlField.change(function (e) {                                                                                   // 79
    fillEmbedlyData(instance);                                                                                      // 80
  });                                                                                                               // 81
                                                                                                                    // 82
}                                                                                                                   // 83
                                                                                                                    // 84
Template.afPostThumbnail.events({                                                                                   // 85
  'click .remove-thumbnail-link': function (e, t) {                                                                 // 86
    e.preventDefault();                                                                                             // 87
    t.$('.post-thumbnail-preview').attr('src', '');                                                                 // 88
    t.$('input').val('');                                                                                           // 89
  },                                                                                                                // 90
  'click .regenerate-thumbnail-link': function (e, instance) {                                                      // 91
    e.preventDefault();                                                                                             // 92
    fillEmbedlyData(instance);                                                                                      // 93
  }                                                                                                                 // 94
})                                                                                                                  // 95
                                                                                                                    // 96
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/lib/client/template.post_thumbnail.js                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("postThumbnail");                                                                              // 2
Template["postThumbnail"] = new Template("Template.postThumbnail", (function() {                                    // 3
  var view = this;                                                                                                  // 4
  return [ Blaze.If(function() {                                                                                    // 5
    return Spacebars.call(view.lookup("thumbnailUrl"));                                                             // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.DIV({                                                                                   // 8
      "class": "post-thumbnail",                                                                                    // 9
      "aria-hidden": "true"                                                                                         // 10
    }, "\n      ", HTML.A({                                                                                         // 11
      "class": function() {                                                                                         // 12
        return [ "post-thumbnail-link ", Spacebars.mustache(view.lookup("playVideoClass")) ];                       // 13
      },                                                                                                            // 14
      href: function() {                                                                                            // 15
        return Spacebars.mustache(view.lookup("postLink"));                                                         // 16
      },                                                                                                            // 17
      target: "_blank"                                                                                              // 18
    }, "\n        ", HTML.IMG({                                                                                     // 19
      "class": "post-thumbnail-image",                                                                              // 20
      src: function() {                                                                                             // 21
        return Spacebars.mustache(view.lookup("thumbnailUrl"));                                                     // 22
      },                                                                                                            // 23
      onerror: "this.style.display='none';",                                                                        // 24
      "aria-hidden": "true"                                                                                         // 25
    }), "\n      "), "\n    "), "\n  " ];                                                                           // 26
  }, function() {                                                                                                   // 27
    return [ "\n    ", HTML.DIV({                                                                                   // 28
      "class": "post-thumbnail-empty"                                                                               // 29
    }), "\n  " ];                                                                                                   // 30
  }), "\n  ", Blaze.If(function() {                                                                                 // 31
    return Spacebars.call(view.lookup("media"));                                                                    // 32
  }, function() {                                                                                                   // 33
    return [ "\n    ", Blaze._TemplateWith(function() {                                                             // 34
      return {                                                                                                      // 35
        template: Spacebars.call(view.lookup("videoTemplate")),                                                     // 36
        data: Spacebars.call(view.lookup("."))                                                                      // 37
      };                                                                                                            // 38
    }, function() {                                                                                                 // 39
      return Spacebars.include(function() {                                                                         // 40
        return Spacebars.call(Template.__dynamic);                                                                  // 41
      });                                                                                                           // 42
    }), "\n  " ];                                                                                                   // 43
  }) ];                                                                                                             // 44
}));                                                                                                                // 45
                                                                                                                    // 46
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/lib/client/post_thumbnail.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template[getTemplate('postThumbnail')].helpers({                                                                    // 1
  postLink: function () {                                                                                           // 2
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;                                              // 3
  },                                                                                                                // 4
  playVideoClass: function () {                                                                                     // 5
    return !!this.media ? 'post-thumbnail-has-video': '';                                                           // 6
  },                                                                                                                // 7
  videoTemplate: function () {                                                                                      // 8
    return getTemplate('postVideo');                                                                                // 9
  }                                                                                                                 // 10
});                                                                                                                 // 11
                                                                                                                    // 12
Template[getTemplate('postThumbnail')].events({                                                                     // 13
  'click .post-thumbnail-has-video': function (e) {                                                                 // 14
    e.preventDefault();                                                                                             // 15
    $('body').addClass('showing-lightbox');                                                                         // 16
    $(e.target).parents('.post').find('.post-video-lightbox').fadeIn('fast');                                       // 17
  }                                                                                                                 // 18
})                                                                                                                  // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/lib/client/template.post_video.js                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("postVideo");                                                                                  // 2
Template["postVideo"] = new Template("Template.postVideo", (function() {                                            // 3
  var view = this;                                                                                                  // 4
  return Spacebars.With(function() {                                                                                // 5
    return Spacebars.call(view.lookup("media"));                                                                    // 6
  }, function() {                                                                                                   // 7
    return [ "\n    ", HTML.DIV({                                                                                   // 8
      "class": "post-video-lightbox hidden"                                                                         // 9
    }, "\n      ", HTML.A({                                                                                         // 10
      "class": "post-video-lightbox-hide",                                                                          // 11
      href: "#"                                                                                                     // 12
    }, "×"), "\n      ", HTML.DIV({                                                                                 // 13
      "class": "post-video-lightbox-inner"                                                                          // 14
    }, "\n        ", Blaze.View("lookup:html", function() {                                                         // 15
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("html")));                                            // 16
    }), "\n      "), "\n    "), "\n  " ];                                                                           // 17
  });                                                                                                               // 18
}));                                                                                                                // 19
                                                                                                                    // 20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope-embedly/lib/client/post_video.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template[getTemplate('postVideo')].events({                                                                         // 1
  'click .post-video-lightbox-hide, click .post-video-lightbox': function (e) {                                     // 2
    e.preventDefault();                                                                                             // 3
    $(e.target).parents('.post').find('.post-video-lightbox').fadeOut('fast');                                      // 4
    $('body').removeClass('showing-lightbox');                                                                      // 5
  }                                                                                                                 // 6
})                                                                                                                  // 7
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
var package_templates = _.difference(_.keys(Template), non_package_templates);                                      // 12
                                                                                                                    // 13
for (var i = 0; i < package_templates.length; i++) {                                                                // 14
  var package_template = package_templates[i];                                                                      // 15
                                                                                                                    // 16
  registerI18nTemplate(package_template);                                                                           // 17
}                                                                                                                   // 18
                                                                                                                    // 19
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
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-embedly'] = {};

})();
