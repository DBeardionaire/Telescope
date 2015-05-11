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
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Iron = Package['iron:core'].Iron;

/* Package-scope variables */
var __coffeescriptShare;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/manuelschoebel:ms-seo/seo_collection.coffee.js                                                     //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.SeoCollection = new Mongo.Collection('seo');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/manuelschoebel:ms-seo/seo.coffee.js                                                                //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var SEO, escapeHtmlAttribute, getCurrentRouteName;

SEO = {
  settings: {
    title: '',
    rel_author: '',
    meta: [],
    og: [],
    twitter: [],
    ignore: {
      meta: ['fragment'],
      link: ['stylesheet', 'icon', 'apple-touch-icon']
    },
    auto: {
      twitter: true,
      og: true,
      set: ['description', 'url', 'title']
    }
  },
  ignore: function(type, value) {
    if (this.settings.ignore[type] && _.indexOf(this.settings.ignore[type], value) === -1) {
      return this.settings.ignore[type].push(value);
    }
  },
  config: function(settings) {
    return _.extend(this.settings, settings);
  },
  set: function(options, clearBefore) {
    var currentRouter, k, l, link, m, meta, o, og, twitter, url, v, _i, _j, _k, _l, _len, _len1, _len2, _len3;
    if (clearBefore == null) {
      clearBefore = true;
    }
    if (clearBefore) {
      this.clearAll();
    }
    currentRouter = Router.current();
    if (currentRouter) {
      url = Router.url(currentRouter.route.getName(), currentRouter.params);
    }
    meta = options.meta;
    og = options.og;
    link = options.link;
    twitter = options.twitter;
    if (options.title) {
      this.setTitle(options.title);
    }
    if (options.url) {
      this.setUrl(options.url);
    } else if (url) {
      this.setUrl(url);
    }
    if (meta && _.isArray(meta)) {
      for (_i = 0, _len = meta.length; _i < _len; _i++) {
        m = meta[_i];
        this.setMeta("name='" + m.key + "'", m.value);
      }
    } else if (meta && _.isObject(meta)) {
      for (k in meta) {
        v = meta[k];
        this.setMeta("name='" + k + "'", v);
      }
    }
    if (og && _.isArray(og)) {
      for (_j = 0, _len1 = og.length; _j < _len1; _j++) {
        o = og[_j];
        this.setMeta("property='og:" + o.key + "'", o.value);
      }
    } else if (og && _.isObject(og)) {
      for (k in og) {
        v = og[k];
        this.setMeta("property='og:" + k + "'", v);
      }
    }
    if (link && _.isArray(link)) {
      for (_k = 0, _len2 = link.length; _k < _len2; _k++) {
        l = link[_k];
        this.setLink(l.rel, l.href);
      }
    } else if (link && _.isObject(link)) {
      for (k in link) {
        v = link[k];
        this.setLink(k, v);
      }
    }
    if (twitter && _.isArray(twitter)) {
      for (_l = 0, _len3 = twitter.length; _l < _len3; _l++) {
        o = twitter[_l];
        this.setMeta("property='twitter:" + o.key + "'", o.value);
      }
    } else if (twitter && _.isObject(twitter)) {
      for (k in twitter) {
        v = twitter[k];
        this.setMeta("property='twitter:" + k + "'", v);
      }
    }
    if (options.rel_author) {
      return this.setLink('author', options.rel_author);
    }
  },
  clearAll: function() {
    var $l, $m, controlled, ignored, l, m, _i, _j, _len, _len1, _ref, _ref1;
    _ref = $("meta");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      m = _ref[_i];
      $m = $(m);
      controlled = $m.attr('name') || $m.attr('property');
      ignored = false;
      if ($m.attr('name') && _.indexOf(SEO.settings.ignore.meta, $m.attr('name')) > -1) {
        ignored = true;
      } else if ($m.attr('property') && _.indexOf(SEO.settings.ignore.meta, $m.attr('property')) > -1) {
        ignored = true;
      }
      if (!ignored && controlled) {
        $m.remove();
      }
    }
    _ref1 = $("link");
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      l = _ref1[_j];
      $l = $(l);
      controlled = $l.attr('rel');
      if (_.indexOf(SEO.settings.ignore.link, $l.attr('rel')) === -1 && controlled) {
        $l.remove();
      }
    }
    this.set(this.settings, false);
    return this.setTitle(this.settings.title);
  },
  setTitle: function(title) {
    document.title = title;
    if (_.indexOf(this.settings.auto.set, 'title') !== -1) {
      if (this.settings.auto.twitter) {
        this.setMeta('property="twitter:title"', title);
      }
      if (this.settings.auto.og) {
        return this.setMeta('property="og:title"', title);
      }
    }
  },
  setUrl: function(url) {
    if (_.indexOf(this.settings.auto.set, 'url') !== -1) {
      if (this.settings.auto.twitter) {
        this.setMeta('property="twitter:url"', url);
      }
      if (this.settings.auto.og) {
        return this.setMeta('property="og:url"', url);
      }
    }
  },
  setLink: function(rel, href, unique) {
    var h, _i, _len;
    if (unique == null) {
      unique = true;
    }
    if (unique) {
      this.removeLink(rel);
    }
    if (_.isArray(href)) {
      for (_i = 0, _len = href.length; _i < _len; _i++) {
        h = href[_i];
        this.setLink(rel, h, false);
      }
      return;
    }
    if (href) {
      return $('head').append("<link rel='" + rel + "' href='" + href + "'>");
    }
  },
  removeLink: function(rel) {
    return $("link[rel='" + rel + "']").remove();
  },
  setMeta: function(attr, content, unique) {
    var name, v, _i, _len;
    if (unique == null) {
      unique = true;
    }
    if (unique) {
      this.removeMeta(attr);
    }
    if (_.isArray(content)) {
      for (_i = 0, _len = content.length; _i < _len; _i++) {
        v = content[_i];
        this.setMeta(attr, v, false);
      }
      return;
    }
    if (!content) {
      return;
    }
    content = escapeHtmlAttribute(content);
    $('head').append("<meta " + attr + " content='" + content + "'>");
    name = attr.replace(/"|'/g, '').split('=')[1];
    if (_.indexOf(this.settings.auto.set, name) !== -1) {
      if (this.settings.auto.twitter) {
        this.setMeta("property='twitter:" + name + "'", content);
      }
      if (this.settings.auto.og) {
        return this.setMeta("property='og:" + name + "'", content);
      }
    }
  },
  removeMeta: function(attr) {
    return $("meta[" + attr + "]").remove();
  }
};

this.SEO = SEO;

escapeHtmlAttribute = function(string) {
  return ("" + string).replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};

getCurrentRouteName = function() {
  var routeName, router;
  router = Router.current();
  if (!router) {
    return;
  }
  routeName = router.route.getName();
  return routeName;
};

Deps.autorun(function() {
  var currentRouteName;
  currentRouteName = getCurrentRouteName();
  if (!currentRouteName) {
    return;
  }
  return Meteor.subscribe('seoByRouteName', currentRouteName);
});

Deps.autorun(function() {
  var currentRouteName, settings;
  if (!SEO) {
    return;
  }
  currentRouteName = getCurrentRouteName();
  settings = SeoCollection.findOne({
    route_name: currentRouteName
  }) || {};
  return SEO.set(settings);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['manuelschoebel:ms-seo'] = {};

})();
