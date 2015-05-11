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
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

/* Package-scope variables */
var deepExtend, camelToDash, dashToCamel, camelCaseify, removeSetting, getThemeSetting, getSiteUrl, trimWords, can, _, capitalise, expString;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/telescope-lib/lib/lib.js                                                                    //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
getSiteUrl = function () {                                                                              // 1
  return Settings.get('siteUrl', Meteor.absoluteUrl());                                                 // 2
};                                                                                                      // 3
                                                                                                        // 4
removeSetting = function (setting) {                                                                    // 5
  var settings = Settings.find().fetch()[0];                                                            // 6
  console.log(settings._id)                                                                             // 7
  console.log(setting)                                                                                  // 8
  if(isAdmin(Meteor.user())) {                                                                          // 9
    var unsetObject = {};                                                                               // 10
    unsetObject[setting] = true;                                                                        // 11
    var update = Settings.update(settings._id, {$unset: unsetObject});                                  // 12
  }                                                                                                     // 13
};                                                                                                      // 14
                                                                                                        // 15
getThemeSetting = function(setting, defaultValue){                                                      // 16
  if(typeof themeSettings[setting] !== 'undefined'){                                                    // 17
    return themeSettings[setting];                                                                      // 18
  }else{                                                                                                // 19
    return typeof defaultValue === 'undefined' ? '' : defaultValue;                                     // 20
  }                                                                                                     // 21
};                                                                                                      // 22
                                                                                                        // 23
camelToDash = function (str) {                                                                          // 24
  return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();                  // 25
};                                                                                                      // 26
                                                                                                        // 27
camelCaseify = function(str) {                                                                          // 28
  return dashToCamel(str.replace(' ', '-'));                                                            // 29
};                                                                                                      // 30
                                                                                                        // 31
dashToCamel = function (str) {                                                                          // 32
  return str.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});             // 33
};                                                                                                      // 34
                                                                                                        // 35
trimWords = function(s, numWords) {                                                                     // 36
  expString = s.split(/\s+/,numWords);                                                                  // 37
  if(expString.length >= numWords)                                                                      // 38
    return expString.join(" ")+"…";                                                                     // 39
  return s;                                                                                             // 40
};                                                                                                      // 41
                                                                                                        // 42
capitalise = function (string) {                                                                        // 43
  return string.charAt(0).toUpperCase() + string.slice(1);                                              // 44
};                                                                                                      // 45
                                                                                                        // 46
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/telescope-lib/lib/deep.js                                                                   //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// see https://gist.github.com/furf/3208381                                                             // 1
                                                                                                        // 2
_.mixin({                                                                                               // 3
                                                                                                        // 4
  // Get/set the value of a nested property                                                             // 5
  deep: function (obj, key, value) {                                                                    // 6
                                                                                                        // 7
    var keys = key.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.'),            // 8
        root,                                                                                           // 9
        i = 0,                                                                                          // 10
        n = keys.length;                                                                                // 11
                                                                                                        // 12
    // Set deep value                                                                                   // 13
    if (arguments.length > 2) {                                                                         // 14
                                                                                                        // 15
      root = obj;                                                                                       // 16
      n--;                                                                                              // 17
                                                                                                        // 18
      while (i < n) {                                                                                   // 19
        key = keys[i++];                                                                                // 20
        obj = obj[key] = _.isObject(obj[key]) ? obj[key] : {};                                          // 21
      }                                                                                                 // 22
                                                                                                        // 23
      obj[keys[i]] = value;                                                                             // 24
                                                                                                        // 25
      value = root;                                                                                     // 26
                                                                                                        // 27
    // Get deep value                                                                                   // 28
    } else {                                                                                            // 29
      while ((obj = obj[keys[i++]]) != null && i < n) {};                                               // 30
      value = i < n ? void 0 : obj;                                                                     // 31
    }                                                                                                   // 32
                                                                                                        // 33
    return value;                                                                                       // 34
  }                                                                                                     // 35
                                                                                                        // 36
});                                                                                                     // 37
                                                                                                        // 38
// Usage:                                                                                               // 39
//                                                                                                      // 40
// var obj = {                                                                                          // 41
//   a: {                                                                                               // 42
//     b: {                                                                                             // 43
//       c: {                                                                                           // 44
//         d: ['e', 'f', 'g']                                                                           // 45
//       }                                                                                              // 46
//     }                                                                                                // 47
//   }                                                                                                  // 48
// };                                                                                                   // 49
//                                                                                                      // 50
// Get deep value                                                                                       // 51
// _.deep(obj, 'a.b.c.d[2]'); // 'g'                                                                    // 52
//                                                                                                      // 53
// Set deep value                                                                                       // 54
// _.deep(obj, 'a.b.c.d[2]', 'george');                                                                 // 55
//                                                                                                      // 56
// _.deep(obj, 'a.b.c.d[2]'); // 'george'                                                               // 57
                                                                                                        // 58
                                                                                                        // 59
_.mixin({                                                                                               // 60
  pluckDeep: function (obj, key) {                                                                      // 61
    return _.map(obj, function (value) { return _.deep(value, key); });                                 // 62
  }                                                                                                     // 63
});                                                                                                     // 64
                                                                                                        // 65
                                                                                                        // 66
_.mixin({                                                                                               // 67
                                                                                                        // 68
 // Return a copy of an object containing all but the blacklisted properties.                           // 69
  unpick: function (obj) {                                                                              // 70
    obj || (obj = {});                                                                                  // 71
    return _.pick(obj, _.difference(_.keys(obj), _.flatten(Array.prototype.slice.call(arguments, 1)))); // 72
  }                                                                                                     // 73
                                                                                                        // 74
});                                                                                                     // 75
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/telescope-lib/lib/deep_extend.js                                                            //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// see: http://stackoverflow.com/questions/9399365/deep-extend-like-jquerys-for-nodejs                  // 1
deepExtend = function () {                                                                              // 2
  var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},                        // 3
      i = 1,                                                                                            // 4
      length = arguments.length,                                                                        // 5
      deep = false,                                                                                     // 6
      toString = Object.prototype.toString,                                                             // 7
      hasOwn = Object.prototype.hasOwnProperty,                                                         // 8
      push = Array.prototype.push,                                                                      // 9
      slice = Array.prototype.slice,                                                                    // 10
      trim = String.prototype.trim,                                                                     // 11
      indexOf = Array.prototype.indexOf,                                                                // 12
      class2type = {                                                                                    // 13
        "[object Boolean]": "boolean",                                                                  // 14
        "[object Number]": "number",                                                                    // 15
        "[object String]": "string",                                                                    // 16
        "[object Function]": "function",                                                                // 17
        "[object Array]": "array",                                                                      // 18
        "[object Date]": "date",                                                                        // 19
        "[object RegExp]": "regexp",                                                                    // 20
        "[object Object]": "object"                                                                     // 21
      },                                                                                                // 22
      jQuery = {                                                                                        // 23
        isFunction: function (obj) {                                                                    // 24
          return jQuery.type(obj) === "function";                                                       // 25
        },                                                                                              // 26
        isArray: Array.isArray ||                                                                       // 27
        function (obj) {                                                                                // 28
          return jQuery.type(obj) === "array";                                                          // 29
        },                                                                                              // 30
        isWindow: function (obj) {                                                                      // 31
          return obj != null && obj == obj.window;                                                      // 32
        },                                                                                              // 33
        isNumeric: function (obj) {                                                                     // 34
          return !isNaN(parseFloat(obj)) && isFinite(obj);                                              // 35
        },                                                                                              // 36
        type: function (obj) {                                                                          // 37
          return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";                // 38
        },                                                                                              // 39
        isPlainObject: function (obj) {                                                                 // 40
          if (!obj || jQuery.type(obj) !== "object" || obj.nodeType) {                                  // 41
            return false;                                                                               // 42
          }                                                                                             // 43
          try {                                                                                         // 44
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
              return false;                                                                             // 46
            }                                                                                           // 47
          } catch (e) {                                                                                 // 48
            return false;                                                                               // 49
          }                                                                                             // 50
          var key;                                                                                      // 51
          for (key in obj) {}                                                                           // 52
          return key === undefined || hasOwn.call(obj, key);                                            // 53
        }                                                                                               // 54
      };                                                                                                // 55
    if (typeof target === "boolean") {                                                                  // 56
      deep = target;                                                                                    // 57
      target = arguments[1] || {};                                                                      // 58
      i = 2;                                                                                            // 59
    }                                                                                                   // 60
    if (typeof target !== "object" && !jQuery.isFunction(target)) {                                     // 61
      target = {};                                                                                      // 62
    }                                                                                                   // 63
    if (length === i) {                                                                                 // 64
      target = this;                                                                                    // 65
      --i;                                                                                              // 66
    }                                                                                                   // 67
    for (i; i < length; i++) {                                                                          // 68
      if ((options = arguments[i]) != null) {                                                           // 69
        for (name in options) {                                                                         // 70
          src = target[name];                                                                           // 71
          copy = options[name];                                                                         // 72
          if (target === copy) {                                                                        // 73
            continue;                                                                                   // 74
          }                                                                                             // 75
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {   // 76
            if (copyIsArray) {                                                                          // 77
              copyIsArray = false;                                                                      // 78
              clone = src && jQuery.isArray(src) ? src : [];                                            // 79
            } else {                                                                                    // 80
              clone = src && jQuery.isPlainObject(src) ? src : {};                                      // 81
            }                                                                                           // 82
            // WARNING: RECURSION                                                                       // 83
            target[name] = deepExtend(deep, clone, copy);                                               // 84
          } else if (copy !== undefined) {                                                              // 85
            target[name] = copy;                                                                        // 86
          }                                                                                             // 87
        }                                                                                               // 88
      }                                                                                                 // 89
    }                                                                                                   // 90
    return target;                                                                                      // 91
  };                                                                                                    // 92
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/telescope-lib/lib/autolink.js                                                               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
//https://github.com/bryanwoods/autolink-js                                                             // 1
(function(){var a,b=[].slice;a=function(){var j,i,d,f,e,c,g,h;c=1<=arguments.length?b.call(arguments,0):[];g=/(^|\s)(\b(https?):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|]\b)/ig;if(c.length>0){e=c[0];i=e.callback;if((i!=null)&&typeof i==="function"){j=i;delete e.callback;}f="";for(d in e){h=e[d];f+=" "+d+"='"+h+"'";}return this.replace(g,function(l,o,k){var n,m;m=j&&j(k);n=m||("<a href='"+k+"'"+f+">"+k+"</a>");return""+o+n;});}else{return this.replace(g,"$1<a href='$2'>$2</a>");}};String.prototype.autoLink=a;}).call(this);
                                                                                                        // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/telescope-lib/lib/permissions.js                                                            //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
'use strict';                                                                                           // 1
                                                                                                        // 2
can = {};                                                                                               // 3
                                                                                                        // 4
// Permissions                                                                                          // 5
                                                                                                        // 6
// user:                Defaults to Meteor.user()                                                       // 7
//                                                                                                      // 8
// return true if all is well, false                                                                    // 9
can.view = function (user) {                                                                            // 10
  if (Settings.get('requireViewInvite', false)) {                                                       // 11
                                                                                                        // 12
    if (Meteor.isClient) {                                                                              // 13
      // on client only, default to the current user                                                    // 14
      user = (typeof user === 'undefined') ? Meteor.user() : user;                                      // 15
    }                                                                                                   // 16
                                                                                                        // 17
    return (!!user && (isAdmin(user) || isInvited(user)));                                              // 18
  }                                                                                                     // 19
  return true;                                                                                          // 20
};                                                                                                      // 21
                                                                                                        // 22
can.viewPendingPosts = function (user) {                                                                // 23
  user = (typeof user === 'undefined') ? Meteor.user() : user;                                          // 24
  return isAdmin(user);                                                                                 // 25
};                                                                                                      // 26
                                                                                                        // 27
can.viewRejectedPosts = function (user) {                                                               // 28
  user = (typeof user === 'undefined') ? Meteor.user() : user;                                          // 29
  return isAdmin(user);                                                                                 // 30
};                                                                                                      // 31
                                                                                                        // 32
can.viewById = function (userId) {                                                                      // 33
  // if an invite is required to view, run permission check, else return true                           // 34
  if (Settings.get('requireViewInvite', false)) {                                                       // 35
    return !!userId ? can.view(Meteor.users.findOne(userId)) : false;                                   // 36
  }                                                                                                     // 37
  return true;                                                                                          // 38
};                                                                                                      // 39
can.post = function (user, returnError) {                                                               // 40
  user = (typeof user === 'undefined') ? Meteor.user() : user;                                          // 41
                                                                                                        // 42
  if (!user) {                                                                                          // 43
    return returnError ? "no_account" : false;                                                          // 44
  } else if (isAdmin(user)) {                                                                           // 45
    return true;                                                                                        // 46
  } else if (Settings.get('requirePostInvite')) {                                                       // 47
    if (user.isInvited) {                                                                               // 48
      return true;                                                                                      // 49
    } else {                                                                                            // 50
      return returnError ? "no_invite" : false;                                                         // 51
    }                                                                                                   // 52
  } else {                                                                                              // 53
    return true;                                                                                        // 54
  }                                                                                                     // 55
};                                                                                                      // 56
can.comment = function (user, returnError) {                                                            // 57
  return can.post(user, returnError);                                                                   // 58
};                                                                                                      // 59
can.vote = function (user, returnError) {                                                               // 60
  return can.post(user, returnError);                                                                   // 61
};                                                                                                      // 62
can.edit = function (user, item, returnError) {                                                         // 63
  user = (typeof user === 'undefined') ? Meteor.user() : user;                                          // 64
                                                                                                        // 65
  if (!user || !item || (user._id !== item.userId &&                                                    // 66
                         user._id !== item._id &&                                                       // 67
                         !isAdmin(user))) {                                                             // 68
    return returnError ? "no_rights" : false;                                                           // 69
  } else {                                                                                              // 70
    return true;                                                                                        // 71
  }                                                                                                     // 72
};                                                                                                      // 73
can.editById = function (userId, item) {                                                                // 74
  var user = Meteor.users.findOne(userId);                                                              // 75
  return can.edit(user, item);                                                                          // 76
};                                                                                                      // 77
can.currentUserEdit = function (item) {                                                                 // 78
  return can.edit(Meteor.user(), item);                                                                 // 79
};                                                                                                      // 80
can.invite = function (user) {                                                                          // 81
  return isInvited(user) || isAdmin(user);                                                              // 82
};                                                                                                      // 83
                                                                                                        // 84
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/telescope-lib/lib/client/jquery.exists.js                                                   //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
$.fn.exists = function () {                                                                             // 1
  return this.length !== 0;                                                                             // 2
}                                                                                                       // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-lib'] = {
  deepExtend: deepExtend,
  camelToDash: camelToDash,
  dashToCamel: dashToCamel,
  camelCaseify: camelCaseify,
  removeSetting: removeSetting,
  getThemeSetting: getThemeSetting,
  getSiteUrl: getSiteUrl,
  trimWords: trimWords,
  can: can,
  _: _,
  capitalise: capitalise
};

})();
