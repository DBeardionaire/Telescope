(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var robots = Package['gadicohen:robots-txt'].robots;

/* Package-scope variables */
var sitemaps;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/gadicohen:sitemaps/sitemaps.js                                             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
/*                                                                                     // 1
 * http://en.wikipedia.org/wiki/Site_map                                               // 2
 * http://www.sitemaps.org/index.html                                                  // 3
 */                                                                                    // 4
                                                                                       // 5
sitemaps = {                                                                           // 6
  list: {}                                                                             // 7
};                                                                                     // 8
                                                                                       // 9
if (typeof Number.lpad === "undefined") {                                              // 10
  Number.prototype.lpad = function(length) {                                           // 11
    "use strict";                                                                      // 12
    var str = this.toString();                                                         // 13
    while (str.length < length) {                                                      // 14
      str = "0" + str;                                                                 // 15
    }                                                                                  // 16
    return str;                                                                        // 17
  };                                                                                   // 18
}                                                                                      // 19
                                                                                       // 20
var urlStart = Meteor.absoluteUrl();                                                   // 21
function prepareUrl(url) {                                                             // 22
  return urlStart + escape(url.replace(/^\//, ''));                                    // 23
}                                                                                      // 24
                                                                                       // 25
// TODO: 1) gzip, 2) sitemap index + other types + sitemap for old content             // 26
var Fiber = Npm.require('fibers');                                                     // 27
WebApp.connectHandlers.use(function(req, res, next) {                                  // 28
  new Fiber(function() {                                                               // 29
    "use strict";                                                                      // 30
    var out, pages, urls;                                                              // 31
                                                                                       // 32
    urls = _.keys(sitemaps.list);                                                      // 33
    if (!_.contains(urls, req.url))                                                    // 34
      return next();                                                                   // 35
                                                                                       // 36
    pages = sitemaps.list[req.url];                                                    // 37
    if (_.isFunction(pages))                                                           // 38
      pages = pages();                                                                 // 39
    else if (!_.isArray(pages))                                                        // 40
      throw new TypeError("sitemaps.add() expects an array or function");              // 41
                                                                                       // 42
    // The header is added later once we know which namespaces we need                 // 43
    out = '';                                                                          // 44
    var namespaces = {};                                                               // 45
                                                                                       // 46
    var w3cDateTimeTS, date;                                                           // 47
    _.each(pages, function(page) {                                                     // 48
                                                                                       // 49
      out += '  <url>\n'                                                               // 50
        + '    <loc>' + prepareUrl(page.page) + '</loc>\n';                            // 51
                                                                                       // 52
      if (page.lastmod) {                                                              // 53
        date = new Date(page.lastmod);                                                 // 54
        w3cDateTimeTS = date.getUTCFullYear() + '-'                                    // 55
          + (date.getUTCMonth()+1).lpad(2) + '-'                                       // 56
          + date.getUTCDate().lpad(2) + 'T'                                            // 57
          + date.getUTCHours().lpad(2) + ':'                                           // 58
          + date.getUTCMinutes().lpad(2) + ':'                                         // 59
          + date.getUTCSeconds().lpad(2) + '+00:00';                                   // 60
        out += '    <lastmod>' + w3cDateTimeTS + '</lastmod>\n';                       // 61
      }                                                                                // 62
                                                                                       // 63
      if (page.changefreq)                                                             // 64
        out += '    <changefreq>' + page.changefreq + '</changefreq>\n';               // 65
                                                                                       // 66
      if (page.priority)                                                               // 67
        out += '    <priority>' + page.priority + '</priority>\n';                     // 68
                                                                                       // 69
      if (page.xhtmlLinks) {                                                           // 70
        namespaces.xhtml = true;                                                       // 71
        if (!_.isArray(page.xhtmlLinks))                                               // 72
          page.xhtmlLinks = [page.xhtmlLinks];                                         // 73
        _.each(page.xhtmlLinks, function(link) {                                       // 74
          out += '    <xhtml:link \n';                                                 // 75
          if (link.href)                                                               // 76
            link.href = prepareUrl(link.href);                                         // 77
          for (var key in link)                                                        // 78
            out += '      ' + key + '="' + link[key] + '"\n';                          // 79
          out += '      />\n';                                                         // 80
        });                                                                            // 81
      }                                                                                // 82
                                                                                       // 83
      _.each(['image', 'video'], function(tag) {                                       // 84
        var tagS = tag+'s';                                                            // 85
        if (page[tagS]) {                                                              // 86
          namespaces[tag] = true;                                                      // 87
          if (!_.isArray(page[tagS]))                                                  // 88
            page[tagS] = [page[tagS]];                                                 // 89
                                                                                       // 90
          _.each(page[tagS], function(data) {                                          // 91
            out += '      <'+tag+':'+tag+'> \n';                                       // 92
                                                                                       // 93
            for (var key in data) {                                                    // 94
              if (key == 'loc' || key.match(/_loc$/))                                  // 95
                data[key] = prepareUrl(data[key]);                                     // 96
              out += '        <'+tag+':'+key+'>' + data[key] + '</'+tag+':'+key+'>\n'; // 97
            }                                                                          // 98
                                                                                       // 99
            out += '      </'+tag+':'+tag+'> \n';                                      // 100
          });                                                                          // 101
        }                                                                              // 102
      });                                                                              // 103
                                                                                       // 104
      out  += '   </url>\n\n';                                                         // 105
    });                                                                                // 106
                                                                                       // 107
    out += '</urlset>\n';                                                              // 108
                                                                                       // 109
    // We do this last so we know which namesapces to add                              // 110
    var header = '<?xml version="1.0" encoding="UTF-8"?>\n'                            // 111
      + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';                 // 112
                                                                                       // 113
    if (namespaces.xhtml)                                                              // 114
      header += '\n  xmlns:xhtml="http://www.w3.org/1999/xhtml"';                      // 115
    if (namespaces.image)                                                              // 116
      header += '\n  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';   // 117
    if (namespaces.video)                                                              // 118
      header += '\n  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"';   // 119
    header += '>\n';                                                                   // 120
                                                                                       // 121
    out = header + out;                                                                // 122
                                                                                       // 123
    res.writeHead(200, {'Content-Type': 'application/xml'});                           // 124
    res.end(out, 'utf8');                                                              // 125
    return;                                                                            // 126
  }).run();                                                                            // 127
});                                                                                    // 128
                                                                                       // 129
sitemaps.add = function(url, func) {                                                   // 130
  "use strict";                                                                        // 131
  check(url, String);                                                                  // 132
                                                                                       // 133
  sitemaps.list[url] = func;                                                           // 134
  robots.addLine('Sitemap: ' + prepareUrl(url));                                       // 135
};                                                                                     // 136
                                                                                       // 137
/*                                                                                     // 138
sitemaps.add('/sitemap.xml', function() {                                              // 139
  // 'page' is reqired                                                                 // 140
  // 'lastmod', 'changefreq', 'priority' are optional.                                 // 141
  return [                                                                             // 142
    { page: 'x', lastmod: new Date().getTime() },                                      // 143
    { page: 'y', lastmod: new Date().getTime(), changefreq: 'monthly' },               // 144
    { page: 'z', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 } // 145
  ];                                                                                   // 146
});                                                                                    // 147
*/                                                                                     // 148
                                                                                       // 149
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['gadicohen:sitemaps'] = {
  sitemaps: sitemaps
};

})();

//# sourceMappingURL=gadicohen_sitemaps.js.map
