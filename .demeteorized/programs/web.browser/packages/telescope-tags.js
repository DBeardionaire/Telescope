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
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Template = Package.templating.Template;
var Iron = Package['iron:core'].Iron;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var preloadSubscriptions, adminMenu, Categories, addToPostSchema, primaryNav, postModules, getPostCategories, categorySchema, getCategoryUrl, __, registerI18nTemplate, registerTemplate, non_package_templates, PostsCategoryController, translations;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/categories.js                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// category schema                                                                                               // 1
categorySchema = new SimpleSchema({                                                                              // 2
  name: {                                                                                                        // 3
    type: String                                                                                                 // 4
  },                                                                                                             // 5
  description: {                                                                                                 // 6
    type: String,                                                                                                // 7
    optional: true,                                                                                              // 8
    autoform: {                                                                                                  // 9
      rows: 3                                                                                                    // 10
    }                                                                                                            // 11
  },                                                                                                             // 12
  order: {                                                                                                       // 13
    type: Number,                                                                                                // 14
    optional: true                                                                                               // 15
  },                                                                                                             // 16
  slug: {                                                                                                        // 17
    type: String,                                                                                                // 18
    optional: true                                                                                               // 19
  },                                                                                                             // 20
  image: {                                                                                                       // 21
    type: String,                                                                                                // 22
    optional: true                                                                                               // 23
  }                                                                                                              // 24
});                                                                                                              // 25
                                                                                                                 // 26
Categories = new Meteor.Collection("categories");                                                                // 27
Categories.attachSchema(categorySchema);                                                                         // 28
                                                                                                                 // 29
Categories.before.insert(function (userId, doc) {                                                                // 30
  // if no slug has been provided, generate one                                                                  // 31
  if (!doc.slug)                                                                                                 // 32
    doc.slug = slugify(doc.name);                                                                                // 33
});                                                                                                              // 34
                                                                                                                 // 35
// category post list parameters                                                                                 // 36
viewParameters.category = function (terms) {                                                                     // 37
  var categoryId = Categories.findOne({slug: terms.category})._id;                                               // 38
  return {                                                                                                       // 39
    find: {'categories': {$in: [categoryId]}} ,                                                                  // 40
    options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view               // 41
  };                                                                                                             // 42
}                                                                                                                // 43
                                                                                                                 // 44
Meteor.startup(function () {                                                                                     // 45
  Categories.allow({                                                                                             // 46
    insert: isAdminById,                                                                                         // 47
    update: isAdminById,                                                                                         // 48
    remove: isAdminById                                                                                          // 49
  });                                                                                                            // 50
});                                                                                                              // 51
                                                                                                                 // 52
getPostCategories = function (post) {                                                                            // 53
  return !!post.categories ? Categories.find({_id: {$in: post.categories}}).fetch() : [];                        // 54
}                                                                                                                // 55
                                                                                                                 // 56
getCategoryUrl = function(slug){                                                                                 // 57
  return getSiteUrl()+'category/'+slug;                                                                          // 58
};                                                                                                               // 59
                                                                                                                 // 60
// add callback that adds categories CSS classes                                                                 // 61
postClassCallbacks.push(function (post, postClass){                                                              // 62
  var classArray = _.map(getPostCategories(post), function (category){return "category-"+category.slug});        // 63
  return postClass + " " + classArray.join(' ');                                                                 // 64
});                                                                                                              // 65
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/custom_fields.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
addToPostSchema.push(                                                                                            // 1
  {                                                                                                              // 2
    propertyName: 'categories',                                                                                  // 3
    propertySchema: {                                                                                            // 4
      type: [String],                                                                                            // 5
      optional: true,                                                                                            // 6
      editable: true,                                                                                            // 7
      autoform: {                                                                                                // 8
        editable: true,                                                                                          // 9
        noselect: true,                                                                                          // 10
        options: function () {                                                                                   // 11
          var categories = Categories.find().map(function (category) {                                           // 12
            return {                                                                                             // 13
              value: category._id,                                                                               // 14
              label: category.name                                                                               // 15
            }                                                                                                    // 16
          });                                                                                                    // 17
          return categories;                                                                                     // 18
        }                                                                                                        // 19
      }                                                                                                          // 20
    }                                                                                                            // 21
  }                                                                                                              // 22
);                                                                                                               // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/hooks.js                                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
adminMenu.push({                                                                                                 // 1
  route: 'categories',                                                                                           // 2
  label: 'Categories',                                                                                           // 3
  description: 'add_and_remove_categories'                                                                       // 4
});                                                                                                              // 5
                                                                                                                 // 6
// push "categories" modules to postHeading                                                                      // 7
postHeading.push({                                                                                               // 8
  template: 'postCategories',                                                                                    // 9
  order: 30                                                                                                      // 10
});                                                                                                              // 11
                                                                                                                 // 12
// push "categoriesMenu" template to primaryNav                                                                  // 13
primaryNav.push({                                                                                                // 14
  template: 'categoriesMenu',                                                                                    // 15
  order: 50                                                                                                      // 16
});                                                                                                              // 17
                                                                                                                 // 18
mobileNav.push({                                                                                                 // 19
  template: 'categoriesMenu',                                                                                    // 20
  order: 10                                                                                                      // 21
});                                                                                                              // 22
                                                                                                                 // 23
// we want to wait until categories are all loaded to load the rest of the app                                   // 24
preloadSubscriptions.push('categories');                                                                         // 25
                                                                                                                 // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/package-i18n.js                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
TAPi18n.packages["telescope-tags"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                 // 2
// define package's translation function (proxy to the i18next)                                                  // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                 // 4
// define the package's templates registrar                                                                      // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-tags");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                 // 8
// Record the list of templates prior to package load                                                            // 9
var _ = Package.underscore._;                                                                                    // 10
non_package_templates = _.keys(Template);                                                                        // 11
                                                                                                                 // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/routes.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
                                                                                                                 // 2
  Router.onBeforeAction(Router._filters.isAdmin, {only: ['categories']});                                        // 3
                                                                                                                 // 4
  PostsCategoryController = PostsListController.extend({                                                         // 5
                                                                                                                 // 6
    view: 'category',                                                                                            // 7
                                                                                                                 // 8
    showViewsNav: false,                                                                                         // 9
                                                                                                                 // 10
    onBeforeAction: function () {                                                                                // 11
      this.render(getTemplate('categoryTitle'), {to: 'postListTop'});                                            // 12
      this.next();                                                                                               // 13
    },                                                                                                           // 14
                                                                                                                 // 15
    getCurrentCategory: function () {                                                                            // 16
      return Categories.findOne({slug: this.params.slug});                                                       // 17
    },                                                                                                           // 18
                                                                                                                 // 19
    getTitle: function () {                                                                                      // 20
      return this.getCurrentCategory().name;                                                                     // 21
    },                                                                                                           // 22
                                                                                                                 // 23
    getDescription: function () {                                                                                // 24
      return this.getCurrentCategory().description;                                                              // 25
    }                                                                                                            // 26
                                                                                                                 // 27
  });                                                                                                            // 28
                                                                                                                 // 29
  // Categories                                                                                                  // 30
                                                                                                                 // 31
  Router.route('/category/:slug/:limit?', {                                                                      // 32
    name: 'posts_category',                                                                                      // 33
    controller: PostsCategoryController,                                                                         // 34
    onAfterAction: function() {                                                                                  // 35
      this.slug = this.params.slug;                                                                              // 36
      Session.set('categorySlug', this.params.slug);                                                             // 37
    }                                                                                                            // 38
  });                                                                                                            // 39
                                                                                                                 // 40
  // Categories Admin                                                                                            // 41
                                                                                                                 // 42
  Router.route('/categories', {                                                                                  // 43
    controller: AdminController,                                                                                 // 44
    name: 'categories'                                                                                           // 45
  });                                                                                                            // 46
                                                                                                                 // 47
                                                                                                                 // 48
});                                                                                                              // 49
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/template.categories.js                                           //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("categories");                                                                              // 2
Template["categories"] = new Template("Template.categories", (function() {                                       // 3
  var view = this;                                                                                               // 4
  return [ HTML.DIV({                                                                                            // 5
    "class": "form-well add-category"                                                                            // 6
  }, "\n    ", HTML.Raw("<h3>Add new category:</h3>"), "\n    ", Blaze._TemplateWith(function() {                // 7
    return {                                                                                                     // 8
      collection: Spacebars.call("Categories"),                                                                  // 9
      id: Spacebars.call("insertCategoryForm"),                                                                  // 10
      type: Spacebars.call("insert"),                                                                            // 11
      "label-class": Spacebars.call("control-label"),                                                            // 12
      "input-col-class": Spacebars.call("controls"),                                                             // 13
      template: Spacebars.call("telescope")                                                                      // 14
    };                                                                                                           // 15
  }, function() {                                                                                                // 16
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                  // 17
  }), "\n  "), "\n  ", Blaze.Each(function() {                                                                   // 18
    return Spacebars.call(view.lookup("categories"));                                                            // 19
  }, function() {                                                                                                // 20
    return [ "\n    ", Blaze._TemplateWith(function() {                                                          // 21
      return {                                                                                                   // 22
        template: Spacebars.call(view.lookup("categoryItem"))                                                    // 23
      };                                                                                                         // 24
    }, function() {                                                                                              // 25
      return Spacebars.include(function() {                                                                      // 26
        return Spacebars.call(Template.__dynamic);                                                               // 27
      });                                                                                                        // 28
    }), "\n  " ];                                                                                                // 29
  }) ];                                                                                                          // 30
}));                                                                                                             // 31
                                                                                                                 // 32
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/categories.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('categories')].helpers({                                                                  // 2
    categories: function(){                                                                                      // 3
      return Categories.find({}, {sort: {order: 1, name: 1}});                                                   // 4
    },                                                                                                           // 5
    categoryItem: function () {                                                                                  // 6
      return getTemplate('categoryItem');                                                                        // 7
    }                                                                                                            // 8
  });                                                                                                            // 9
});                                                                                                              // 10
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/template.category_item.js                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("categoryItem");                                                                            // 2
Template["categoryItem"] = new Template("Template.categoryItem", (function() {                                   // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "form-module"                                                                                       // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                  // 7
    return {                                                                                                     // 8
      collection: Spacebars.call("Categories"),                                                                  // 9
      id: Spacebars.call(view.lookup("formId")),                                                                 // 10
      type: Spacebars.call("update"),                                                                            // 11
      doc: Spacebars.call(view.lookup(".")),                                                                     // 12
      "label-class": Spacebars.call("control-label"),                                                            // 13
      "input-col-class": Spacebars.call("controls"),                                                             // 14
      template: Spacebars.call("telescope")                                                                      // 15
    };                                                                                                           // 16
  }, function() {                                                                                                // 17
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                  // 18
  }), HTML.Raw('\n    <a href="#" class="delete-link">Delete</a>\n  '));                                         // 19
}));                                                                                                             // 20
                                                                                                                 // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/category_item.js                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('categoryItem')].helpers({                                                                // 2
    formId: function () {                                                                                        // 3
      return 'updateCategory-'+ this._id                                                                         // 4
    }                                                                                                            // 5
  });                                                                                                            // 6
                                                                                                                 // 7
  Template[getTemplate('categoryItem')].events({                                                                 // 8
    'click .delete-link': function(e, instance){                                                                 // 9
      e.preventDefault();                                                                                        // 10
      if (confirm("Delete category?")) {                                                                         // 11
        Categories.remove(instance.data._id);                                                                    // 12
      }                                                                                                          // 13
    }                                                                                                            // 14
  });                                                                                                            // 15
});                                                                                                              // 16
                                                                                                                 // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/template.category_title.js                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("categoryTitle");                                                                           // 2
Template["categoryTitle"] = new Template("Template.categoryTitle", (function() {                                 // 3
  var view = this;                                                                                               // 4
  return HTML.H2({                                                                                               // 5
    "class": "category-title post-list-title"                                                                    // 6
  }, Blaze.View("lookup:title", function() {                                                                     // 7
    return Spacebars.mustache(view.lookup("title"));                                                             // 8
  }));                                                                                                           // 9
}));                                                                                                             // 10
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/category_title.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/template.categories_menu.js                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("categoriesMenu");                                                                          // 2
Template["categoriesMenu"] = new Template("Template.categoriesMenu", (function() {                               // 3
  var view = this;                                                                                               // 4
  return Blaze._TemplateWith(function() {                                                                        // 5
    return {                                                                                                     // 6
      menuName: Spacebars.call("categories"),                                                                    // 7
      menuItems: Spacebars.call(view.lookup("menuItems")),                                                       // 8
      menuClass: Spacebars.call("header-submodule"),                                                             // 9
      menuMode: Spacebars.call(view.lookup("menuMode"))                                                          // 10
    };                                                                                                           // 11
  }, function() {                                                                                                // 12
    return Spacebars.include(view.lookupTemplate("menuComponent"));                                              // 13
  });                                                                                                            // 14
}));                                                                                                             // 15
                                                                                                                 // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/categories_menu.js                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('categoriesMenu')].helpers({                                                              // 2
    menuItems: function () {                                                                                     // 3
      var defaultItem = [{                                                                                       // 4
        route: 'posts_default',                                                                                  // 5
        label: 'all_categories',                                                                                 // 6
        itemClass: 'item-never-active'                                                                           // 7
      }];                                                                                                        // 8
      var menuItems = _.map(Categories.find({}, {sort: {order: 1, name: 1}}).fetch(), function (category) {      // 9
        return {                                                                                                 // 10
          route: function () {                                                                                   // 11
            return getCategoryUrl(category.slug);                                                                // 12
          },                                                                                                     // 13
          label: category.name                                                                                   // 14
        }                                                                                                        // 15
      });                                                                                                        // 16
      return defaultItem.concat(menuItems);                                                                      // 17
    },                                                                                                           // 18
    menuMode: function () {                                                                                      // 19
      if (!!this.mobile) {                                                                                       // 20
        return 'list';                                                                                           // 21
      } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {                                           // 22
        return 'dropdown';                                                                                       // 23
      } else {                                                                                                   // 24
        return 'accordion';                                                                                      // 25
      }                                                                                                          // 26
    }                                                                                                            // 27
  });                                                                                                            // 28
});                                                                                                              // 29
                                                                                                                 // 30
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/template.post_categories.js                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("postCategories");                                                                          // 2
Template["postCategories"] = new Template("Template.postCategories", (function() {                               // 3
  var view = this;                                                                                               // 4
  return Blaze.Each(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("categoriesArray"));                                                       // 6
  }, function() {                                                                                                // 7
    return [ "\n    ", HTML.A({                                                                                  // 8
      href: function() {                                                                                         // 9
        return Spacebars.mustache(view.lookup("categoryLink"));                                                  // 10
      },                                                                                                         // 11
      "class": function() {                                                                                      // 12
        return [ "post-category category-", Spacebars.mustache(view.lookup("slug")) ];                           // 13
      }                                                                                                          // 14
    }, Blaze.View("lookup:name", function() {                                                                    // 15
      return Spacebars.mustache(view.lookup("name"));                                                            // 16
    })), "\n  " ];                                                                                               // 17
  });                                                                                                            // 18
}));                                                                                                             // 19
                                                                                                                 // 20
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/client/templates/post_categories.js                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('postCategories')].helpers({                                                              // 2
    categoriesArray: function(){                                                                                 // 3
      return _.map(this.categories, function (categoryId) { // note: this.categories maybe be undefined          // 4
        return Categories.findOne(categoryId);                                                                   // 5
      });                                                                                                        // 6
    },                                                                                                           // 7
    categoryLink: function(){                                                                                    // 8
      return getCategoryUrl(this.slug);                                                                          // 9
    }                                                                                                            // 10
  });                                                                                                            // 11
});                                                                                                              // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/C:/$AppDev/Telescope/packages/telescope-tags/i18n/bg.i18n.js                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope-tags",                                                                             // 2
    namespace = "telescope-tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                   // 8
                                                                                                                 // 9
for (var i = 0; i < package_templates.length; i++) {                                                             // 10
  var package_template = package_templates[i];                                                                   // 11
                                                                                                                 // 12
  registerI18nTemplate(package_template);                                                                        // 13
}                                                                                                                // 14
                                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/C:/$AppDev/Telescope/packages/telescope-tags/i18n/de.i18n.js                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope-tags",                                                                             // 2
    namespace = "telescope-tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/C:/$AppDev/Telescope/packages/telescope-tags/i18n/en.i18n.js                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope-tags",                                                                             // 2
    namespace = "telescope-tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
// integrate the fallback language translations                                                                  // 8
translations = {};                                                                                               // 9
translations[namespace] = {"categories":"Categories","add_and_remove_categories":"Add and remove categories.","all_categories":"All","invalid_category":"Sorry, this is not a valid category"};
TAPi18n._loadLangFileObject("en", translations);                                                                 // 11
                                                                                                                 // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/C:/$AppDev/Telescope/packages/telescope-tags/i18n/es.i18n.js                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope-tags",                                                                             // 2
    namespace = "telescope-tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/C:/$AppDev/Telescope/packages/telescope-tags/i18n/fr.i18n.js                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope-tags",                                                                             // 2
    namespace = "telescope-tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/C:/$AppDev/Telescope/packages/telescope-tags/i18n/it.i18n.js                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope-tags",                                                                             // 2
    namespace = "telescope-tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/C:/$AppDev/Telescope/packages/telescope-tags/i18n/zh-CN.i18n.js                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope-tags",                                                                             // 2
    namespace = "telescope-tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
                                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-tags'] = {
  preloadSubscriptions: preloadSubscriptions,
  adminMenu: adminMenu,
  Categories: Categories,
  addToPostSchema: addToPostSchema,
  primaryNav: primaryNav,
  postModules: postModules,
  getPostCategories: getPostCategories
};

})();
