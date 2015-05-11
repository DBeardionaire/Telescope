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

/* Package-scope variables */
var moment;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs:moment/moment.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//! moment.js                                                                                                          // 1
//! version : 2.10.0                                                                                                   // 2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors                                                         // 3
//! license : MIT                                                                                                      // 4
//! momentjs.com                                                                                                       // 5
                                                                                                                       // 6
(function (global, factory) {                                                                                          // 7
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :                        // 8
    typeof define === 'function' && define.amd ? define(factory) :                                                     // 9
    global.moment = factory()                                                                                          // 10
}(this, function () { 'use strict';                                                                                    // 11
                                                                                                                       // 12
    var hookCallback;                                                                                                  // 13
                                                                                                                       // 14
    function hooks__hooks () {                                                                                         // 15
        return hookCallback.apply(null, arguments);                                                                    // 16
    }                                                                                                                  // 17
                                                                                                                       // 18
    // This is done to register the method called with moment()                                                        // 19
    // without creating circular dependencies.                                                                         // 20
    function setHookCallback (callback) {                                                                              // 21
        hookCallback = callback;                                                                                       // 22
    }                                                                                                                  // 23
                                                                                                                       // 24
    function defaultParsingFlags() {                                                                                   // 25
        // We need to deep clone this object.                                                                          // 26
        return {                                                                                                       // 27
            empty           : false,                                                                                   // 28
            unusedTokens    : [],                                                                                      // 29
            unusedInput     : [],                                                                                      // 30
            overflow        : -2,                                                                                      // 31
            charsLeftOver   : 0,                                                                                       // 32
            nullInput       : false,                                                                                   // 33
            invalidMonth    : null,                                                                                    // 34
            invalidFormat   : false,                                                                                   // 35
            userInvalidated : false,                                                                                   // 36
            iso             : false                                                                                    // 37
        };                                                                                                             // 38
    }                                                                                                                  // 39
                                                                                                                       // 40
    function isArray(input) {                                                                                          // 41
        return Object.prototype.toString.call(input) === '[object Array]';                                             // 42
    }                                                                                                                  // 43
                                                                                                                       // 44
    function isDate(input) {                                                                                           // 45
        return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;                     // 46
    }                                                                                                                  // 47
                                                                                                                       // 48
    function map(arr, fn) {                                                                                            // 49
        var res = [], i;                                                                                               // 50
        for (i = 0; i < arr.length; ++i) {                                                                             // 51
            res.push(fn(arr[i], i));                                                                                   // 52
        }                                                                                                              // 53
        return res;                                                                                                    // 54
    }                                                                                                                  // 55
                                                                                                                       // 56
    function hasOwnProp(a, b) {                                                                                        // 57
        return Object.prototype.hasOwnProperty.call(a, b);                                                             // 58
    }                                                                                                                  // 59
                                                                                                                       // 60
    function extend(a, b) {                                                                                            // 61
        for (var i in b) {                                                                                             // 62
            if (hasOwnProp(b, i)) {                                                                                    // 63
                a[i] = b[i];                                                                                           // 64
            }                                                                                                          // 65
        }                                                                                                              // 66
                                                                                                                       // 67
        if (hasOwnProp(b, 'toString')) {                                                                               // 68
            a.toString = b.toString;                                                                                   // 69
        }                                                                                                              // 70
                                                                                                                       // 71
        if (hasOwnProp(b, 'valueOf')) {                                                                                // 72
            a.valueOf = b.valueOf;                                                                                     // 73
        }                                                                                                              // 74
                                                                                                                       // 75
        return a;                                                                                                      // 76
    }                                                                                                                  // 77
                                                                                                                       // 78
    function utc__createUTC (input, format, locale, strict) {                                                          // 79
        return createLocalOrUTC(input, format, locale, strict, true).utc();                                            // 80
    }                                                                                                                  // 81
                                                                                                                       // 82
    function valid__isValid(m) {                                                                                       // 83
        if (m._isValid == null) {                                                                                      // 84
            m._isValid = !isNaN(m._d.getTime()) &&                                                                     // 85
                m._pf.overflow < 0 &&                                                                                  // 86
                !m._pf.empty &&                                                                                        // 87
                !m._pf.invalidMonth &&                                                                                 // 88
                !m._pf.nullInput &&                                                                                    // 89
                !m._pf.invalidFormat &&                                                                                // 90
                !m._pf.userInvalidated;                                                                                // 91
                                                                                                                       // 92
            if (m._strict) {                                                                                           // 93
                m._isValid = m._isValid &&                                                                             // 94
                    m._pf.charsLeftOver === 0 &&                                                                       // 95
                    m._pf.unusedTokens.length === 0 &&                                                                 // 96
                    m._pf.bigHour === undefined;                                                                       // 97
            }                                                                                                          // 98
        }                                                                                                              // 99
        return m._isValid;                                                                                             // 100
    }                                                                                                                  // 101
                                                                                                                       // 102
    function valid__createInvalid (flags) {                                                                            // 103
        var m = utc__createUTC(NaN);                                                                                   // 104
        if (flags != null) {                                                                                           // 105
            extend(m._pf, flags);                                                                                      // 106
        }                                                                                                              // 107
        else {                                                                                                         // 108
            m._pf.userInvalidated = true;                                                                              // 109
        }                                                                                                              // 110
                                                                                                                       // 111
        return m;                                                                                                      // 112
    }                                                                                                                  // 113
                                                                                                                       // 114
    var momentProperties = hooks__hooks.momentProperties = [];                                                         // 115
                                                                                                                       // 116
    function copyConfig(to, from) {                                                                                    // 117
        var i, prop, val;                                                                                              // 118
                                                                                                                       // 119
        if (typeof from._isAMomentObject !== 'undefined') {                                                            // 120
            to._isAMomentObject = from._isAMomentObject;                                                               // 121
        }                                                                                                              // 122
        if (typeof from._i !== 'undefined') {                                                                          // 123
            to._i = from._i;                                                                                           // 124
        }                                                                                                              // 125
        if (typeof from._f !== 'undefined') {                                                                          // 126
            to._f = from._f;                                                                                           // 127
        }                                                                                                              // 128
        if (typeof from._l !== 'undefined') {                                                                          // 129
            to._l = from._l;                                                                                           // 130
        }                                                                                                              // 131
        if (typeof from._strict !== 'undefined') {                                                                     // 132
            to._strict = from._strict;                                                                                 // 133
        }                                                                                                              // 134
        if (typeof from._tzm !== 'undefined') {                                                                        // 135
            to._tzm = from._tzm;                                                                                       // 136
        }                                                                                                              // 137
        if (typeof from._isUTC !== 'undefined') {                                                                      // 138
            to._isUTC = from._isUTC;                                                                                   // 139
        }                                                                                                              // 140
        if (typeof from._offset !== 'undefined') {                                                                     // 141
            to._offset = from._offset;                                                                                 // 142
        }                                                                                                              // 143
        if (typeof from._pf !== 'undefined') {                                                                         // 144
            to._pf = from._pf;                                                                                         // 145
        }                                                                                                              // 146
        if (typeof from._locale !== 'undefined') {                                                                     // 147
            to._locale = from._locale;                                                                                 // 148
        }                                                                                                              // 149
                                                                                                                       // 150
        if (momentProperties.length > 0) {                                                                             // 151
            for (i in momentProperties) {                                                                              // 152
                prop = momentProperties[i];                                                                            // 153
                val = from[prop];                                                                                      // 154
                if (typeof val !== 'undefined') {                                                                      // 155
                    to[prop] = val;                                                                                    // 156
                }                                                                                                      // 157
            }                                                                                                          // 158
        }                                                                                                              // 159
                                                                                                                       // 160
        return to;                                                                                                     // 161
    }                                                                                                                  // 162
                                                                                                                       // 163
    var updateInProgress = false;                                                                                      // 164
                                                                                                                       // 165
    // Moment prototype object                                                                                         // 166
    function Moment(config) {                                                                                          // 167
        copyConfig(this, config);                                                                                      // 168
        this._d = new Date(+config._d);                                                                                // 169
        // Prevent infinite loop in case updateOffset creates new moment                                               // 170
        // objects.                                                                                                    // 171
        if (updateInProgress === false) {                                                                              // 172
            updateInProgress = true;                                                                                   // 173
            hooks__hooks.updateOffset(this);                                                                           // 174
            updateInProgress = false;                                                                                  // 175
        }                                                                                                              // 176
    }                                                                                                                  // 177
                                                                                                                       // 178
    function isMoment (obj) {                                                                                          // 179
        return obj instanceof Moment || (obj != null && hasOwnProp(obj, '_isAMomentObject'));                          // 180
    }                                                                                                                  // 181
                                                                                                                       // 182
    function toInt(argumentForCoercion) {                                                                              // 183
        var coercedNumber = +argumentForCoercion,                                                                      // 184
            value = 0;                                                                                                 // 185
                                                                                                                       // 186
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {                                                          // 187
            if (coercedNumber >= 0) {                                                                                  // 188
                value = Math.floor(coercedNumber);                                                                     // 189
            } else {                                                                                                   // 190
                value = Math.ceil(coercedNumber);                                                                      // 191
            }                                                                                                          // 192
        }                                                                                                              // 193
                                                                                                                       // 194
        return value;                                                                                                  // 195
    }                                                                                                                  // 196
                                                                                                                       // 197
    function compareArrays(array1, array2, dontConvert) {                                                              // 198
        var len = Math.min(array1.length, array2.length),                                                              // 199
            lengthDiff = Math.abs(array1.length - array2.length),                                                      // 200
            diffs = 0,                                                                                                 // 201
            i;                                                                                                         // 202
        for (i = 0; i < len; i++) {                                                                                    // 203
            if ((dontConvert && array1[i] !== array2[i]) ||                                                            // 204
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {                                             // 205
                diffs++;                                                                                               // 206
            }                                                                                                          // 207
        }                                                                                                              // 208
        return diffs + lengthDiff;                                                                                     // 209
    }                                                                                                                  // 210
                                                                                                                       // 211
    function Locale() {                                                                                                // 212
    }                                                                                                                  // 213
                                                                                                                       // 214
    var locales = {};                                                                                                  // 215
    var globalLocale;                                                                                                  // 216
                                                                                                                       // 217
    function normalizeLocale(key) {                                                                                    // 218
        return key ? key.toLowerCase().replace('_', '-') : key;                                                        // 219
    }                                                                                                                  // 220
                                                                                                                       // 221
    // pick the locale from the array                                                                                  // 222
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each                       // 223
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {                                                                                     // 225
        var i = 0, j, next, locale, split;                                                                             // 226
                                                                                                                       // 227
        while (i < names.length) {                                                                                     // 228
            split = normalizeLocale(names[i]).split('-');                                                              // 229
            j = split.length;                                                                                          // 230
            next = normalizeLocale(names[i + 1]);                                                                      // 231
            next = next ? next.split('-') : null;                                                                      // 232
            while (j > 0) {                                                                                            // 233
                locale = loadLocale(split.slice(0, j).join('-'));                                                      // 234
                if (locale) {                                                                                          // 235
                    return locale;                                                                                     // 236
                }                                                                                                      // 237
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {                           // 238
                    //the next array item is better than a shallower substring of this one                             // 239
                    break;                                                                                             // 240
                }                                                                                                      // 241
                j--;                                                                                                   // 242
            }                                                                                                          // 243
            i++;                                                                                                       // 244
        }                                                                                                              // 245
        return null;                                                                                                   // 246
    }                                                                                                                  // 247
                                                                                                                       // 248
    function loadLocale(name) {                                                                                        // 249
        var oldLocale = null;                                                                                          // 250
        // TODO: Find a better way to register and load all the locales in Node                                        // 251
        if (!locales[name] && typeof module !== 'undefined' &&                                                         // 252
                module && module.exports) {                                                                            // 253
            try {                                                                                                      // 254
                oldLocale = globalLocale._abbr;                                                                        // 255
                require('./locale/' + name);                                                                           // 256
                // because defineLocale currently also sets the global locale, we                                      // 257
                // want to undo that for lazy loaded locales                                                           // 258
                locales__getSetGlobalLocale(oldLocale);                                                                // 259
            } catch (e) { }                                                                                            // 260
        }                                                                                                              // 261
        return locales[name];                                                                                          // 262
    }                                                                                                                  // 263
                                                                                                                       // 264
    // This function will load locale and then set the global locale.  If                                              // 265
    // no arguments are passed in, it will simply return the current global                                            // 266
    // locale key.                                                                                                     // 267
    function locales__getSetGlobalLocale (key, values) {                                                               // 268
        var data;                                                                                                      // 269
        if (key) {                                                                                                     // 270
            if (typeof values === 'undefined') {                                                                       // 271
                data = locales__getLocale(key);                                                                        // 272
            }                                                                                                          // 273
            else {                                                                                                     // 274
                data = defineLocale(key, values);                                                                      // 275
            }                                                                                                          // 276
                                                                                                                       // 277
            if (data) {                                                                                                // 278
                // moment.duration._locale = moment._locale = data;                                                    // 279
                globalLocale = data;                                                                                   // 280
            }                                                                                                          // 281
        }                                                                                                              // 282
                                                                                                                       // 283
        return globalLocale._abbr;                                                                                     // 284
    }                                                                                                                  // 285
                                                                                                                       // 286
    function defineLocale (name, values) {                                                                             // 287
        if (values !== null) {                                                                                         // 288
            values.abbr = name;                                                                                        // 289
            if (!locales[name]) {                                                                                      // 290
                locales[name] = new Locale();                                                                          // 291
            }                                                                                                          // 292
            locales[name].set(values);                                                                                 // 293
                                                                                                                       // 294
            // backwards compat for now: also set the locale                                                           // 295
            locales__getSetGlobalLocale(name);                                                                         // 296
                                                                                                                       // 297
            return locales[name];                                                                                      // 298
        } else {                                                                                                       // 299
            // useful for testing                                                                                      // 300
            delete locales[name];                                                                                      // 301
            return null;                                                                                               // 302
        }                                                                                                              // 303
    }                                                                                                                  // 304
                                                                                                                       // 305
    // returns locale data                                                                                             // 306
    function locales__getLocale (key) {                                                                                // 307
        var locale;                                                                                                    // 308
                                                                                                                       // 309
        if (key && key._locale && key._locale._abbr) {                                                                 // 310
            key = key._locale._abbr;                                                                                   // 311
        }                                                                                                              // 312
                                                                                                                       // 313
        if (!key) {                                                                                                    // 314
            return globalLocale;                                                                                       // 315
        }                                                                                                              // 316
                                                                                                                       // 317
        if (!isArray(key)) {                                                                                           // 318
            //short-circuit everything else                                                                            // 319
            locale = loadLocale(key);                                                                                  // 320
            if (locale) {                                                                                              // 321
                return locale;                                                                                         // 322
            }                                                                                                          // 323
            key = [key];                                                                                               // 324
        }                                                                                                              // 325
                                                                                                                       // 326
        return chooseLocale(key);                                                                                      // 327
    }                                                                                                                  // 328
                                                                                                                       // 329
    var aliases = {};                                                                                                  // 330
                                                                                                                       // 331
    function addUnitAlias (unit, shorthand) {                                                                          // 332
        var lowerCase = unit.toLowerCase();                                                                            // 333
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;                                     // 334
    }                                                                                                                  // 335
                                                                                                                       // 336
    function normalizeUnits(units) {                                                                                   // 337
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;                 // 338
    }                                                                                                                  // 339
                                                                                                                       // 340
    function normalizeObjectUnits(inputObject) {                                                                       // 341
        var normalizedInput = {},                                                                                      // 342
            normalizedProp,                                                                                            // 343
            prop;                                                                                                      // 344
                                                                                                                       // 345
        for (prop in inputObject) {                                                                                    // 346
            if (hasOwnProp(inputObject, prop)) {                                                                       // 347
                normalizedProp = normalizeUnits(prop);                                                                 // 348
                if (normalizedProp) {                                                                                  // 349
                    normalizedInput[normalizedProp] = inputObject[prop];                                               // 350
                }                                                                                                      // 351
            }                                                                                                          // 352
        }                                                                                                              // 353
                                                                                                                       // 354
        return normalizedInput;                                                                                        // 355
    }                                                                                                                  // 356
                                                                                                                       // 357
    function makeGetSet (unit, keepTime) {                                                                             // 358
        return function (value) {                                                                                      // 359
            if (value != null) {                                                                                       // 360
                get_set__set(this, unit, value);                                                                       // 361
                hooks__hooks.updateOffset(this, keepTime);                                                             // 362
                return this;                                                                                           // 363
            } else {                                                                                                   // 364
                return get_set__get(this, unit);                                                                       // 365
            }                                                                                                          // 366
        };                                                                                                             // 367
    }                                                                                                                  // 368
                                                                                                                       // 369
    function get_set__get (mom, unit) {                                                                                // 370
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();                                                     // 371
    }                                                                                                                  // 372
                                                                                                                       // 373
    function get_set__set (mom, unit, value) {                                                                         // 374
        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);                                                // 375
    }                                                                                                                  // 376
                                                                                                                       // 377
    // MOMENTS                                                                                                         // 378
                                                                                                                       // 379
    function getSet (units, value) {                                                                                   // 380
        var unit;                                                                                                      // 381
        if (typeof units === 'object') {                                                                               // 382
            for (unit in units) {                                                                                      // 383
                this.set(unit, units[unit]);                                                                           // 384
            }                                                                                                          // 385
        } else {                                                                                                       // 386
            units = normalizeUnits(units);                                                                             // 387
            if (typeof this[units] === 'function') {                                                                   // 388
                return this[units](value);                                                                             // 389
            }                                                                                                          // 390
        }                                                                                                              // 391
        return this;                                                                                                   // 392
    }                                                                                                                  // 393
                                                                                                                       // 394
    function zeroFill(number, targetLength, forceSign) {                                                               // 395
        var output = '' + Math.abs(number),                                                                            // 396
            sign = number >= 0;                                                                                        // 397
                                                                                                                       // 398
        while (output.length < targetLength) {                                                                         // 399
            output = '0' + output;                                                                                     // 400
        }                                                                                                              // 401
        return (sign ? (forceSign ? '+' : '') : '-') + output;                                                         // 402
    }                                                                                                                  // 403
                                                                                                                       // 404
    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g;
                                                                                                                       // 406
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;                                          // 407
                                                                                                                       // 408
    var formatFunctions = {};                                                                                          // 409
                                                                                                                       // 410
    var formatTokenFunctions = {};                                                                                     // 411
                                                                                                                       // 412
    // token:    'M'                                                                                                   // 413
    // padded:   ['MM', 2]                                                                                             // 414
    // ordinal:  'Mo'                                                                                                  // 415
    // callback: function () { this.month() + 1 }                                                                      // 416
    function addFormatToken (token, padded, ordinal, callback) {                                                       // 417
        var func = callback;                                                                                           // 418
        if (typeof callback === 'string') {                                                                            // 419
            func = function () {                                                                                       // 420
                return this[callback]();                                                                               // 421
            };                                                                                                         // 422
        }                                                                                                              // 423
        if (token) {                                                                                                   // 424
            formatTokenFunctions[token] = func;                                                                        // 425
        }                                                                                                              // 426
        if (padded) {                                                                                                  // 427
            formatTokenFunctions[padded[0]] = function () {                                                            // 428
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);                                    // 429
            };                                                                                                         // 430
        }                                                                                                              // 431
        if (ordinal) {                                                                                                 // 432
            formatTokenFunctions[ordinal] = function () {                                                              // 433
                return this.localeData().ordinal(func.apply(this, arguments), token);                                  // 434
            };                                                                                                         // 435
        }                                                                                                              // 436
    }                                                                                                                  // 437
                                                                                                                       // 438
    function removeFormattingTokens(input) {                                                                           // 439
        if (input.match(/\[[\s\S]/)) {                                                                                 // 440
            return input.replace(/^\[|\]$/g, '');                                                                      // 441
        }                                                                                                              // 442
        return input.replace(/\\/g, '');                                                                               // 443
    }                                                                                                                  // 444
                                                                                                                       // 445
    function makeFormatFunction(format) {                                                                              // 446
        var array = format.match(formattingTokens), i, length;                                                         // 447
                                                                                                                       // 448
        for (i = 0, length = array.length; i < length; i++) {                                                          // 449
            if (formatTokenFunctions[array[i]]) {                                                                      // 450
                array[i] = formatTokenFunctions[array[i]];                                                             // 451
            } else {                                                                                                   // 452
                array[i] = removeFormattingTokens(array[i]);                                                           // 453
            }                                                                                                          // 454
        }                                                                                                              // 455
                                                                                                                       // 456
        return function (mom) {                                                                                        // 457
            var output = '';                                                                                           // 458
            for (i = 0; i < length; i++) {                                                                             // 459
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];                        // 460
            }                                                                                                          // 461
            return output;                                                                                             // 462
        };                                                                                                             // 463
    }                                                                                                                  // 464
                                                                                                                       // 465
    // format date using native date object                                                                            // 466
    function formatMoment(m, format) {                                                                                 // 467
        if (!m.isValid()) {                                                                                            // 468
            return m.localeData().invalidDate();                                                                       // 469
        }                                                                                                              // 470
                                                                                                                       // 471
        format = expandFormat(format, m.localeData());                                                                 // 472
                                                                                                                       // 473
        if (!formatFunctions[format]) {                                                                                // 474
            formatFunctions[format] = makeFormatFunction(format);                                                      // 475
        }                                                                                                              // 476
                                                                                                                       // 477
        return formatFunctions[format](m);                                                                             // 478
    }                                                                                                                  // 479
                                                                                                                       // 480
    function expandFormat(format, locale) {                                                                            // 481
        var i = 5;                                                                                                     // 482
                                                                                                                       // 483
        function replaceLongDateFormatTokens(input) {                                                                  // 484
            return locale.longDateFormat(input) || input;                                                              // 485
        }                                                                                                              // 486
                                                                                                                       // 487
        localFormattingTokens.lastIndex = 0;                                                                           // 488
        while (i >= 0 && localFormattingTokens.test(format)) {                                                         // 489
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);                               // 490
            localFormattingTokens.lastIndex = 0;                                                                       // 491
            i -= 1;                                                                                                    // 492
        }                                                                                                              // 493
                                                                                                                       // 494
        return format;                                                                                                 // 495
    }                                                                                                                  // 496
                                                                                                                       // 497
    var match1         = /\d/;            //       0 - 9                                                               // 498
    var match2         = /\d\d/;          //      00 - 99                                                              // 499
    var match3         = /\d{3}/;         //     000 - 999                                                             // 500
    var match4         = /\d{4}/;         //    0000 - 9999                                                            // 501
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999                                                          // 502
    var match1to2      = /\d\d?/;         //       0 - 99                                                              // 503
    var match1to3      = /\d{1,3}/;       //       0 - 999                                                             // 504
    var match1to4      = /\d{1,4}/;       //       0 - 9999                                                            // 505
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999                                                          // 506
                                                                                                                       // 507
    var matchUnsigned  = /\d+/;           //       0 - inf                                                             // 508
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf                                                             // 509
                                                                                                                       // 510
    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z                                       // 511
                                                                                                                       // 512
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123                                            // 513
                                                                                                                       // 514
    // any word (or two) characters or numbers including two/three word month in arabic.                               // 515
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
                                                                                                                       // 517
    var regexes = {};                                                                                                  // 518
                                                                                                                       // 519
    function addRegexToken (token, regex, strictRegex) {                                                               // 520
        regexes[token] = typeof regex === 'function' ? regex : function (isStrict) {                                   // 521
            return (isStrict && strictRegex) ? strictRegex : regex;                                                    // 522
        };                                                                                                             // 523
    }                                                                                                                  // 524
                                                                                                                       // 525
    function getParseRegexForToken (token, config) {                                                                   // 526
        if (!hasOwnProp(regexes, token)) {                                                                             // 527
            return new RegExp(unescapeFormat(token));                                                                  // 528
        }                                                                                                              // 529
                                                                                                                       // 530
        return regexes[token](config._strict, config._locale);                                                         // 531
    }                                                                                                                  // 532
                                                                                                                       // 533
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript            // 534
    function unescapeFormat(s) {                                                                                       // 535
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { // 536
            return p1 || p2 || p3 || p4;                                                                               // 537
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                                  // 538
    }                                                                                                                  // 539
                                                                                                                       // 540
    var tokens = {};                                                                                                   // 541
                                                                                                                       // 542
    function addParseToken (token, callback) {                                                                         // 543
        var i, func = callback;                                                                                        // 544
        if (typeof token === 'string') {                                                                               // 545
            token = [token];                                                                                           // 546
        }                                                                                                              // 547
        if (typeof callback === 'number') {                                                                            // 548
            func = function (input, array) {                                                                           // 549
                array[callback] = toInt(input);                                                                        // 550
            };                                                                                                         // 551
        }                                                                                                              // 552
        for (i = 0; i < token.length; i++) {                                                                           // 553
            tokens[token[i]] = func;                                                                                   // 554
        }                                                                                                              // 555
    }                                                                                                                  // 556
                                                                                                                       // 557
    function addWeekParseToken (token, callback) {                                                                     // 558
        addParseToken(token, function (input, array, config, token) {                                                  // 559
            config._w = config._w || {};                                                                               // 560
            callback(input, config._w, config, token);                                                                 // 561
        });                                                                                                            // 562
    }                                                                                                                  // 563
                                                                                                                       // 564
    function addTimeToArrayFromToken(token, input, config) {                                                           // 565
        if (input != null && hasOwnProp(tokens, token)) {                                                              // 566
            tokens[token](input, config._a, config, token);                                                            // 567
        }                                                                                                              // 568
    }                                                                                                                  // 569
                                                                                                                       // 570
    var YEAR = 0;                                                                                                      // 571
    var MONTH = 1;                                                                                                     // 572
    var DATE = 2;                                                                                                      // 573
    var HOUR = 3;                                                                                                      // 574
    var MINUTE = 4;                                                                                                    // 575
    var SECOND = 5;                                                                                                    // 576
    var MILLISECOND = 6;                                                                                               // 577
                                                                                                                       // 578
    function daysInMonth(year, month) {                                                                                // 579
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();                                                    // 580
    }                                                                                                                  // 581
                                                                                                                       // 582
    // FORMATTING                                                                                                      // 583
                                                                                                                       // 584
    addFormatToken('M', ['MM', 2], 'Mo', function () {                                                                 // 585
        return this.month() + 1;                                                                                       // 586
    });                                                                                                                // 587
                                                                                                                       // 588
    addFormatToken('MMM', 0, 0, function (format) {                                                                    // 589
        return this.localeData().monthsShort(this, format);                                                            // 590
    });                                                                                                                // 591
                                                                                                                       // 592
    addFormatToken('MMMM', 0, 0, function (format) {                                                                   // 593
        return this.localeData().months(this, format);                                                                 // 594
    });                                                                                                                // 595
                                                                                                                       // 596
    // ALIASES                                                                                                         // 597
                                                                                                                       // 598
    addUnitAlias('month', 'M');                                                                                        // 599
                                                                                                                       // 600
    // PARSING                                                                                                         // 601
                                                                                                                       // 602
    addRegexToken('M',    match1to2);                                                                                  // 603
    addRegexToken('MM',   match1to2, match2);                                                                          // 604
    addRegexToken('MMM',  matchWord);                                                                                  // 605
    addRegexToken('MMMM', matchWord);                                                                                  // 606
                                                                                                                       // 607
    addParseToken(['M', 'MM'], function (input, array) {                                                               // 608
        array[MONTH] = toInt(input) - 1;                                                                               // 609
    });                                                                                                                // 610
                                                                                                                       // 611
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {                                            // 612
        var month = config._locale.monthsParse(input, token, config._strict);                                          // 613
        // if we didn't find a month name, mark the date as invalid.                                                   // 614
        if (month != null) {                                                                                           // 615
            array[MONTH] = month;                                                                                      // 616
        } else {                                                                                                       // 617
            config._pf.invalidMonth = input;                                                                           // 618
        }                                                                                                              // 619
    });                                                                                                                // 620
                                                                                                                       // 621
    // LOCALES                                                                                                         // 622
                                                                                                                       // 623
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m) {                                                                                        // 625
        return this._months[m.month()];                                                                                // 626
    }                                                                                                                  // 627
                                                                                                                       // 628
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');                       // 629
    function localeMonthsShort (m) {                                                                                   // 630
        return this._monthsShort[m.month()];                                                                           // 631
    }                                                                                                                  // 632
                                                                                                                       // 633
    function localeMonthsParse (monthName, format, strict) {                                                           // 634
        var i, mom, regex;                                                                                             // 635
                                                                                                                       // 636
        if (!this._monthsParse) {                                                                                      // 637
            this._monthsParse = [];                                                                                    // 638
            this._longMonthsParse = [];                                                                                // 639
            this._shortMonthsParse = [];                                                                               // 640
        }                                                                                                              // 641
                                                                                                                       // 642
        for (i = 0; i < 12; i++) {                                                                                     // 643
            // make the regex if we don't have it already                                                              // 644
            mom = utc__createUTC([2000, i]);                                                                           // 645
            if (strict && !this._longMonthsParse[i]) {                                                                 // 646
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');         // 647
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');   // 648
            }                                                                                                          // 649
            if (!strict && !this._monthsParse[i]) {                                                                    // 650
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');                                 // 651
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');                                        // 652
            }                                                                                                          // 653
            // test the regex                                                                                          // 654
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {                             // 655
                return i;                                                                                              // 656
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {                      // 657
                return i;                                                                                              // 658
            } else if (!strict && this._monthsParse[i].test(monthName)) {                                              // 659
                return i;                                                                                              // 660
            }                                                                                                          // 661
        }                                                                                                              // 662
    }                                                                                                                  // 663
                                                                                                                       // 664
    // MOMENTS                                                                                                         // 665
                                                                                                                       // 666
    function setMonth (mom, value) {                                                                                   // 667
        var dayOfMonth;                                                                                                // 668
                                                                                                                       // 669
        // TODO: Move this out of here!                                                                                // 670
        if (typeof value === 'string') {                                                                               // 671
            value = mom.localeData().monthsParse(value);                                                               // 672
            // TODO: Another silent failure?                                                                           // 673
            if (typeof value !== 'number') {                                                                           // 674
                return mom;                                                                                            // 675
            }                                                                                                          // 676
        }                                                                                                              // 677
                                                                                                                       // 678
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));                                             // 679
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);                                        // 680
        return mom;                                                                                                    // 681
    }                                                                                                                  // 682
                                                                                                                       // 683
    function getSetMonth (value) {                                                                                     // 684
        if (value != null) {                                                                                           // 685
            setMonth(this, value);                                                                                     // 686
            hooks__hooks.updateOffset(this, true);                                                                     // 687
            return this;                                                                                               // 688
        } else {                                                                                                       // 689
            return get_set__get(this, 'Month');                                                                        // 690
        }                                                                                                              // 691
    }                                                                                                                  // 692
                                                                                                                       // 693
    function getDaysInMonth () {                                                                                       // 694
        return daysInMonth(this.year(), this.month());                                                                 // 695
    }                                                                                                                  // 696
                                                                                                                       // 697
    function checkOverflow (m) {                                                                                       // 698
        var overflow;                                                                                                  // 699
        var a = m._a;                                                                                                  // 700
                                                                                                                       // 701
        if (a && m._pf.overflow === -2) {                                                                              // 702
            overflow =                                                                                                 // 703
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :                                                   // 704
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :                         // 705
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :                                                  // 707
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :                                                  // 708
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :                                             // 709
                -1;                                                                                                    // 710
                                                                                                                       // 711
            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {                                    // 712
                overflow = DATE;                                                                                       // 713
            }                                                                                                          // 714
                                                                                                                       // 715
            m._pf.overflow = overflow;                                                                                 // 716
        }                                                                                                              // 717
                                                                                                                       // 718
        return m;                                                                                                      // 719
    }                                                                                                                  // 720
                                                                                                                       // 721
    function warn(msg) {                                                                                               // 722
        if (hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {    // 723
            console.warn('Deprecation warning: ' + msg);                                                               // 724
        }                                                                                                              // 725
    }                                                                                                                  // 726
                                                                                                                       // 727
    function deprecate(msg, fn) {                                                                                      // 728
        var firstTime = true;                                                                                          // 729
        return extend(function () {                                                                                    // 730
            if (firstTime) {                                                                                           // 731
                warn(msg);                                                                                             // 732
                firstTime = false;                                                                                     // 733
            }                                                                                                          // 734
            return fn.apply(this, arguments);                                                                          // 735
        }, fn);                                                                                                        // 736
    }                                                                                                                  // 737
                                                                                                                       // 738
    var deprecations = {};                                                                                             // 739
                                                                                                                       // 740
    function deprecateSimple(name, msg) {                                                                              // 741
        if (!deprecations[name]) {                                                                                     // 742
            warn(msg);                                                                                                 // 743
            deprecations[name] = true;                                                                                 // 744
        }                                                                                                              // 745
    }                                                                                                                  // 746
                                                                                                                       // 747
    hooks__hooks.suppressDeprecationWarnings = false;                                                                  // 748
                                                                                                                       // 749
    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
                                                                                                                       // 751
    var isoDates = [                                                                                                   // 752
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],                                                                     // 753
        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],                                                                           // 754
        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],                                                                           // 755
        ['GGGG-[W]WW', /\d{4}-W\d{2}/],                                                                                // 756
        ['YYYY-DDD', /\d{4}-\d{3}/]                                                                                    // 757
    ];                                                                                                                 // 758
                                                                                                                       // 759
    // iso time formats and regexes                                                                                    // 760
    var isoTimes = [                                                                                                   // 761
        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],                                                                 // 762
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],                                                                           // 763
        ['HH:mm', /(T| )\d\d:\d\d/],                                                                                   // 764
        ['HH', /(T| )\d\d/]                                                                                            // 765
    ];                                                                                                                 // 766
                                                                                                                       // 767
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;                                                                       // 768
                                                                                                                       // 769
    // date from iso format                                                                                            // 770
    function configFromISO(config) {                                                                                   // 771
        var i, l,                                                                                                      // 772
            string = config._i,                                                                                        // 773
            match = from_string__isoRegex.exec(string);                                                                // 774
                                                                                                                       // 775
        if (match) {                                                                                                   // 776
            config._pf.iso = true;                                                                                     // 777
            for (i = 0, l = isoDates.length; i < l; i++) {                                                             // 778
                if (isoDates[i][1].exec(string)) {                                                                     // 779
                    // match[5] should be 'T' or undefined                                                             // 780
                    config._f = isoDates[i][0] + (match[6] || ' ');                                                    // 781
                    break;                                                                                             // 782
                }                                                                                                      // 783
            }                                                                                                          // 784
            for (i = 0, l = isoTimes.length; i < l; i++) {                                                             // 785
                if (isoTimes[i][1].exec(string)) {                                                                     // 786
                    config._f += isoTimes[i][0];                                                                       // 787
                    break;                                                                                             // 788
                }                                                                                                      // 789
            }                                                                                                          // 790
            if (string.match(matchOffset)) {                                                                           // 791
                config._f += 'Z';                                                                                      // 792
            }                                                                                                          // 793
            configFromStringAndFormat(config);                                                                         // 794
        } else {                                                                                                       // 795
            config._isValid = false;                                                                                   // 796
        }                                                                                                              // 797
    }                                                                                                                  // 798
                                                                                                                       // 799
    // date from iso format or fallback                                                                                // 800
    function configFromString(config) {                                                                                // 801
        var matched = aspNetJsonRegex.exec(config._i);                                                                 // 802
                                                                                                                       // 803
        if (matched !== null) {                                                                                        // 804
            config._d = new Date(+matched[1]);                                                                         // 805
            return;                                                                                                    // 806
        }                                                                                                              // 807
                                                                                                                       // 808
        configFromISO(config);                                                                                         // 809
        if (config._isValid === false) {                                                                               // 810
            delete config._isValid;                                                                                    // 811
            hooks__hooks.createFromInputFallback(config);                                                              // 812
        }                                                                                                              // 813
    }                                                                                                                  // 814
                                                                                                                       // 815
    hooks__hooks.createFromInputFallback = deprecate(                                                                  // 816
        'moment construction falls back to js Date. This is ' +                                                        // 817
        'discouraged and will be removed in upcoming major ' +                                                         // 818
        'release. Please refer to ' +                                                                                  // 819
        'https://github.com/moment/moment/issues/1407 for more info.',                                                 // 820
        function (config) {                                                                                            // 821
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));                                          // 822
        }                                                                                                              // 823
    );                                                                                                                 // 824
                                                                                                                       // 825
    function createDate (y, m, d, h, M, s, ms) {                                                                       // 826
        //can't just apply() to create a date:                                                                         // 827
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);                                                                     // 829
                                                                                                                       // 830
        //the date constructor doesn't accept years < 1970                                                             // 831
        if (y < 1970) {                                                                                                // 832
            date.setFullYear(y);                                                                                       // 833
        }                                                                                                              // 834
        return date;                                                                                                   // 835
    }                                                                                                                  // 836
                                                                                                                       // 837
    function createUTCDate (y) {                                                                                       // 838
        var date = new Date(Date.UTC.apply(null, arguments));                                                          // 839
        if (y < 1970) {                                                                                                // 840
            date.setUTCFullYear(y);                                                                                    // 841
        }                                                                                                              // 842
        return date;                                                                                                   // 843
    }                                                                                                                  // 844
                                                                                                                       // 845
    addFormatToken(0, ['YY', 2], 0, function () {                                                                      // 846
        return this.year() % 100;                                                                                      // 847
    });                                                                                                                // 848
                                                                                                                       // 849
    addFormatToken(0, ['YYYY',   4],       0, 'year');                                                                 // 850
    addFormatToken(0, ['YYYYY',  5],       0, 'year');                                                                 // 851
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');                                                                 // 852
                                                                                                                       // 853
    // ALIASES                                                                                                         // 854
                                                                                                                       // 855
    addUnitAlias('year', 'y');                                                                                         // 856
                                                                                                                       // 857
    // PARSING                                                                                                         // 858
                                                                                                                       // 859
    addRegexToken('Y',      matchSigned);                                                                              // 860
    addRegexToken('YY',     match1to2, match2);                                                                        // 861
    addRegexToken('YYYY',   match1to4, match4);                                                                        // 862
    addRegexToken('YYYYY',  match1to6, match6);                                                                        // 863
    addRegexToken('YYYYYY', match1to6, match6);                                                                        // 864
                                                                                                                       // 865
    addParseToken(['YYYY', 'YYYYY', 'YYYYYY'], YEAR);                                                                  // 866
    addParseToken('YY', function (input, array) {                                                                      // 867
        array[YEAR] = hooks__hooks.parseTwoDigitYear(input);                                                           // 868
    });                                                                                                                // 869
                                                                                                                       // 870
    // HELPERS                                                                                                         // 871
                                                                                                                       // 872
    function daysInYear(year) {                                                                                        // 873
        return isLeapYear(year) ? 366 : 365;                                                                           // 874
    }                                                                                                                  // 875
                                                                                                                       // 876
    function isLeapYear(year) {                                                                                        // 877
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;                                               // 878
    }                                                                                                                  // 879
                                                                                                                       // 880
    // HOOKS                                                                                                           // 881
                                                                                                                       // 882
    hooks__hooks.parseTwoDigitYear = function (input) {                                                                // 883
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);                                                       // 884
    };                                                                                                                 // 885
                                                                                                                       // 886
    // MOMENTS                                                                                                         // 887
                                                                                                                       // 888
    var getSetYear = makeGetSet('FullYear', false);                                                                    // 889
                                                                                                                       // 890
    function getIsLeapYear () {                                                                                        // 891
        return isLeapYear(this.year());                                                                                // 892
    }                                                                                                                  // 893
                                                                                                                       // 894
    addFormatToken('w', ['ww', 2], 'wo', 'week');                                                                      // 895
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');                                                                   // 896
                                                                                                                       // 897
    // ALIASES                                                                                                         // 898
                                                                                                                       // 899
    addUnitAlias('week', 'w');                                                                                         // 900
    addUnitAlias('isoWeek', 'W');                                                                                      // 901
                                                                                                                       // 902
    // PARSING                                                                                                         // 903
                                                                                                                       // 904
    addRegexToken('w',  match1to2);                                                                                    // 905
    addRegexToken('ww', match1to2, match2);                                                                            // 906
    addRegexToken('W',  match1to2);                                                                                    // 907
    addRegexToken('WW', match1to2, match2);                                                                            // 908
                                                                                                                       // 909
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {                                  // 910
        week[token.substr(0, 1)] = toInt(input);                                                                       // 911
    });                                                                                                                // 912
                                                                                                                       // 913
    // HELPERS                                                                                                         // 914
                                                                                                                       // 915
    // firstDayOfWeek       0 = sun, 6 = sat                                                                           // 916
    //                      the day of the week that starts the week                                                   // 917
    //                      (usually sunday or monday)                                                                 // 918
    // firstDayOfWeekOfYear 0 = sun, 6 = sat                                                                           // 919
    //                      the first week is the week that contains the first                                         // 920
    //                      of this day of the week                                                                    // 921
    //                      (eg. ISO weeks use thursday (4))                                                           // 922
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {                                                   // 923
        var end = firstDayOfWeekOfYear - firstDayOfWeek,                                                               // 924
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),                                                        // 925
            adjustedMoment;                                                                                            // 926
                                                                                                                       // 927
                                                                                                                       // 928
        if (daysToDayOfWeek > end) {                                                                                   // 929
            daysToDayOfWeek -= 7;                                                                                      // 930
        }                                                                                                              // 931
                                                                                                                       // 932
        if (daysToDayOfWeek < end - 7) {                                                                               // 933
            daysToDayOfWeek += 7;                                                                                      // 934
        }                                                                                                              // 935
                                                                                                                       // 936
        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');                                            // 937
        return {                                                                                                       // 938
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),                                                           // 939
            year: adjustedMoment.year()                                                                                // 940
        };                                                                                                             // 941
    }                                                                                                                  // 942
                                                                                                                       // 943
    // LOCALES                                                                                                         // 944
                                                                                                                       // 945
    function localeWeek (mom) {                                                                                        // 946
        return weekOfYear(mom, this._week.dow, this._week.doy).week;                                                   // 947
    }                                                                                                                  // 948
                                                                                                                       // 949
    var defaultLocaleWeek = {                                                                                          // 950
        dow : 0, // Sunday is the first day of the week.                                                               // 951
        doy : 6  // The week that contains Jan 1st is the first week of the year.                                      // 952
    };                                                                                                                 // 953
                                                                                                                       // 954
    function localeFirstDayOfWeek () {                                                                                 // 955
        return this._week.dow;                                                                                         // 956
    }                                                                                                                  // 957
                                                                                                                       // 958
    function localeFirstDayOfYear () {                                                                                 // 959
        return this._week.doy;                                                                                         // 960
    }                                                                                                                  // 961
                                                                                                                       // 962
    // MOMENTS                                                                                                         // 963
                                                                                                                       // 964
    function getSetWeek (input) {                                                                                      // 965
        var week = this.localeData().week(this);                                                                       // 966
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 967
    }                                                                                                                  // 968
                                                                                                                       // 969
    function getSetISOWeek (input) {                                                                                   // 970
        var week = weekOfYear(this, 1, 4).week;                                                                        // 971
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 972
    }                                                                                                                  // 973
                                                                                                                       // 974
    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');                                                           // 975
                                                                                                                       // 976
    // ALIASES                                                                                                         // 977
                                                                                                                       // 978
    addUnitAlias('dayOfYear', 'DDD');                                                                                  // 979
                                                                                                                       // 980
    // PARSING                                                                                                         // 981
                                                                                                                       // 982
    addRegexToken('DDD',  match1to3);                                                                                  // 983
    addRegexToken('DDDD', match3);                                                                                     // 984
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {                                                   // 985
        config._dayOfYear = toInt(input);                                                                              // 986
    });                                                                                                                // 987
                                                                                                                       // 988
    // HELPERS                                                                                                         // 989
                                                                                                                       // 990
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday          // 991
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {                           // 992
        var d = createUTCDate(year, 0, 1).getUTCDay();                                                                 // 993
        var daysToAdd;                                                                                                 // 994
        var dayOfYear;                                                                                                 // 995
                                                                                                                       // 996
        d = d === 0 ? 7 : d;                                                                                           // 997
        weekday = weekday != null ? weekday : firstDayOfWeek;                                                          // 998
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);            // 999
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;                                       // 1000
                                                                                                                       // 1001
        return {                                                                                                       // 1002
            year      : dayOfYear > 0 ? year      : year - 1,                                                          // 1003
            dayOfYear : dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear                                   // 1004
        };                                                                                                             // 1005
    }                                                                                                                  // 1006
                                                                                                                       // 1007
    // MOMENTS                                                                                                         // 1008
                                                                                                                       // 1009
    function getSetDayOfYear (input) {                                                                                 // 1010
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;          // 1011
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');                                         // 1012
    }                                                                                                                  // 1013
                                                                                                                       // 1014
    // Pick the first defined of two or three arguments.                                                               // 1015
    function defaults(a, b, c) {                                                                                       // 1016
        if (a != null) {                                                                                               // 1017
            return a;                                                                                                  // 1018
        }                                                                                                              // 1019
        if (b != null) {                                                                                               // 1020
            return b;                                                                                                  // 1021
        }                                                                                                              // 1022
        return c;                                                                                                      // 1023
    }                                                                                                                  // 1024
                                                                                                                       // 1025
    function currentDateArray(config) {                                                                                // 1026
        var now = new Date();                                                                                          // 1027
        if (config._useUTC) {                                                                                          // 1028
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];                                        // 1029
        }                                                                                                              // 1030
        return [now.getFullYear(), now.getMonth(), now.getDate()];                                                     // 1031
    }                                                                                                                  // 1032
                                                                                                                       // 1033
    // convert an array to a date.                                                                                     // 1034
    // the array should mirror the parameters below                                                                    // 1035
    // note: all values past the year are optional and will default to the lowest possible value.                      // 1036
    // [year, month, day , hour, minute, second, millisecond]                                                          // 1037
    function configFromArray (config) {                                                                                // 1038
        var i, date, input = [], currentDate, yearToUse;                                                               // 1039
                                                                                                                       // 1040
        if (config._d) {                                                                                               // 1041
            return;                                                                                                    // 1042
        }                                                                                                              // 1043
                                                                                                                       // 1044
        currentDate = currentDateArray(config);                                                                        // 1045
                                                                                                                       // 1046
        //compute day of the year from weeks and weekdays                                                              // 1047
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {                                        // 1048
            dayOfYearFromWeekInfo(config);                                                                             // 1049
        }                                                                                                              // 1050
                                                                                                                       // 1051
        //if the day of the year is set, figure out what it is                                                         // 1052
        if (config._dayOfYear) {                                                                                       // 1053
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);                                                  // 1054
                                                                                                                       // 1055
            if (config._dayOfYear > daysInYear(yearToUse)) {                                                           // 1056
                config._pf._overflowDayOfYear = true;                                                                  // 1057
            }                                                                                                          // 1058
                                                                                                                       // 1059
            date = createUTCDate(yearToUse, 0, config._dayOfYear);                                                     // 1060
            config._a[MONTH] = date.getUTCMonth();                                                                     // 1061
            config._a[DATE] = date.getUTCDate();                                                                       // 1062
        }                                                                                                              // 1063
                                                                                                                       // 1064
        // Default to current date.                                                                                    // 1065
        // * if no year, month, day of month are given, default to today                                               // 1066
        // * if day of month is given, default month and year                                                          // 1067
        // * if month is given, default only year                                                                      // 1068
        // * if year is given, don't default anything                                                                  // 1069
        for (i = 0; i < 3 && config._a[i] == null; ++i) {                                                              // 1070
            config._a[i] = input[i] = currentDate[i];                                                                  // 1071
        }                                                                                                              // 1072
                                                                                                                       // 1073
        // Zero out whatever was not defaulted, including time                                                         // 1074
        for (; i < 7; i++) {                                                                                           // 1075
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];                       // 1076
        }                                                                                                              // 1077
                                                                                                                       // 1078
        // Check for 24:00:00.000                                                                                      // 1079
        if (config._a[HOUR] === 24 &&                                                                                  // 1080
                config._a[MINUTE] === 0 &&                                                                             // 1081
                config._a[SECOND] === 0 &&                                                                             // 1082
                config._a[MILLISECOND] === 0) {                                                                        // 1083
            config._nextDay = true;                                                                                    // 1084
            config._a[HOUR] = 0;                                                                                       // 1085
        }                                                                                                              // 1086
                                                                                                                       // 1087
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);                                  // 1088
        // Apply timezone offset from input. The actual utcOffset can be changed                                       // 1089
        // with parseZone.                                                                                             // 1090
        if (config._tzm != null) {                                                                                     // 1091
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                          // 1092
        }                                                                                                              // 1093
                                                                                                                       // 1094
        if (config._nextDay) {                                                                                         // 1095
            config._a[HOUR] = 24;                                                                                      // 1096
        }                                                                                                              // 1097
    }                                                                                                                  // 1098
                                                                                                                       // 1099
    function dayOfYearFromWeekInfo(config) {                                                                           // 1100
        var w, weekYear, week, weekday, dow, doy, temp;                                                                // 1101
                                                                                                                       // 1102
        w = config._w;                                                                                                 // 1103
        if (w.GG != null || w.W != null || w.E != null) {                                                              // 1104
            dow = 1;                                                                                                   // 1105
            doy = 4;                                                                                                   // 1106
                                                                                                                       // 1107
            // TODO: We need to take the current isoWeekYear, but that depends on                                      // 1108
            // how we interpret now (local, utc, fixed offset). So create                                              // 1109
            // a now version of current config (take local/utc/offset flags, and                                       // 1110
            // create now).                                                                                            // 1111
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);                   // 1112
            week = defaults(w.W, 1);                                                                                   // 1113
            weekday = defaults(w.E, 1);                                                                                // 1114
        } else {                                                                                                       // 1115
            dow = config._locale._week.dow;                                                                            // 1116
            doy = config._locale._week.doy;                                                                            // 1117
                                                                                                                       // 1118
            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);               // 1119
            week = defaults(w.w, 1);                                                                                   // 1120
                                                                                                                       // 1121
            if (w.d != null) {                                                                                         // 1122
                // weekday -- low day numbers are considered next week                                                 // 1123
                weekday = w.d;                                                                                         // 1124
                if (weekday < dow) {                                                                                   // 1125
                    ++week;                                                                                            // 1126
                }                                                                                                      // 1127
            } else if (w.e != null) {                                                                                  // 1128
                // local weekday -- counting starts from begining of week                                              // 1129
                weekday = w.e + dow;                                                                                   // 1130
            } else {                                                                                                   // 1131
                // default to begining of week                                                                         // 1132
                weekday = dow;                                                                                         // 1133
            }                                                                                                          // 1134
        }                                                                                                              // 1135
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);                                                  // 1136
                                                                                                                       // 1137
        config._a[YEAR] = temp.year;                                                                                   // 1138
        config._dayOfYear = temp.dayOfYear;                                                                            // 1139
    }                                                                                                                  // 1140
                                                                                                                       // 1141
    hooks__hooks.ISO_8601 = function () {};                                                                            // 1142
                                                                                                                       // 1143
    // date from string and format string                                                                              // 1144
    function configFromStringAndFormat(config) {                                                                       // 1145
        // TODO: Move this to another part of the creation flow to prevent circular deps                               // 1146
        if (config._f === hooks__hooks.ISO_8601) {                                                                     // 1147
            configFromISO(config);                                                                                     // 1148
            return;                                                                                                    // 1149
        }                                                                                                              // 1150
                                                                                                                       // 1151
        config._a = [];                                                                                                // 1152
        config._pf.empty = true;                                                                                       // 1153
                                                                                                                       // 1154
        // This array is used to make a Date, either with `new Date` or `Date.UTC`                                     // 1155
        var string = '' + config._i,                                                                                   // 1156
            i, parsedInput, tokens, token, skipped,                                                                    // 1157
            stringLength = string.length,                                                                              // 1158
            totalParsedInputLength = 0;                                                                                // 1159
                                                                                                                       // 1160
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];                                // 1161
                                                                                                                       // 1162
        for (i = 0; i < tokens.length; i++) {                                                                          // 1163
            token = tokens[i];                                                                                         // 1164
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];                               // 1165
            if (parsedInput) {                                                                                         // 1166
                skipped = string.substr(0, string.indexOf(parsedInput));                                               // 1167
                if (skipped.length > 0) {                                                                              // 1168
                    config._pf.unusedInput.push(skipped);                                                              // 1169
                }                                                                                                      // 1170
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);                               // 1171
                totalParsedInputLength += parsedInput.length;                                                          // 1172
            }                                                                                                          // 1173
            // don't parse if it's not a known token                                                                   // 1174
            if (formatTokenFunctions[token]) {                                                                         // 1175
                if (parsedInput) {                                                                                     // 1176
                    config._pf.empty = false;                                                                          // 1177
                }                                                                                                      // 1178
                else {                                                                                                 // 1179
                    config._pf.unusedTokens.push(token);                                                               // 1180
                }                                                                                                      // 1181
                addTimeToArrayFromToken(token, parsedInput, config);                                                   // 1182
            }                                                                                                          // 1183
            else if (config._strict && !parsedInput) {                                                                 // 1184
                config._pf.unusedTokens.push(token);                                                                   // 1185
            }                                                                                                          // 1186
        }                                                                                                              // 1187
                                                                                                                       // 1188
        // add remaining unparsed input length to the string                                                           // 1189
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;                                              // 1190
        if (string.length > 0) {                                                                                       // 1191
            config._pf.unusedInput.push(string);                                                                       // 1192
        }                                                                                                              // 1193
                                                                                                                       // 1194
        // clear _12h flag if hour is <= 12                                                                            // 1195
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {                                                    // 1196
            config._pf.bigHour = undefined;                                                                            // 1197
        }                                                                                                              // 1198
        // handle meridiem                                                                                             // 1199
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);                          // 1200
                                                                                                                       // 1201
        configFromArray(config);                                                                                       // 1202
        checkOverflow(config);                                                                                         // 1203
    }                                                                                                                  // 1204
                                                                                                                       // 1205
                                                                                                                       // 1206
    function meridiemFixWrap (locale, hour, meridiem) {                                                                // 1207
        var isPm;                                                                                                      // 1208
                                                                                                                       // 1209
        if (meridiem == null) {                                                                                        // 1210
            // nothing to do                                                                                           // 1211
            return hour;                                                                                               // 1212
        }                                                                                                              // 1213
        if (locale.meridiemHour != null) {                                                                             // 1214
            return locale.meridiemHour(hour, meridiem);                                                                // 1215
        } else if (locale.isPM != null) {                                                                              // 1216
            // Fallback                                                                                                // 1217
            isPm = locale.isPM(meridiem);                                                                              // 1218
            if (isPm && hour < 12) {                                                                                   // 1219
                hour += 12;                                                                                            // 1220
            }                                                                                                          // 1221
            if (!isPm && hour === 12) {                                                                                // 1222
                hour = 0;                                                                                              // 1223
            }                                                                                                          // 1224
            return hour;                                                                                               // 1225
        } else {                                                                                                       // 1226
            // this is not supposed to happen                                                                          // 1227
            return hour;                                                                                               // 1228
        }                                                                                                              // 1229
    }                                                                                                                  // 1230
                                                                                                                       // 1231
    function configFromStringAndArray(config) {                                                                        // 1232
        var tempConfig,                                                                                                // 1233
            bestMoment,                                                                                                // 1234
                                                                                                                       // 1235
            scoreToBeat,                                                                                               // 1236
            i,                                                                                                         // 1237
            currentScore;                                                                                              // 1238
                                                                                                                       // 1239
        if (config._f.length === 0) {                                                                                  // 1240
            config._pf.invalidFormat = true;                                                                           // 1241
            config._d = new Date(NaN);                                                                                 // 1242
            return;                                                                                                    // 1243
        }                                                                                                              // 1244
                                                                                                                       // 1245
        for (i = 0; i < config._f.length; i++) {                                                                       // 1246
            currentScore = 0;                                                                                          // 1247
            tempConfig = copyConfig({}, config);                                                                       // 1248
            if (config._useUTC != null) {                                                                              // 1249
                tempConfig._useUTC = config._useUTC;                                                                   // 1250
            }                                                                                                          // 1251
            tempConfig._pf = defaultParsingFlags();                                                                    // 1252
            tempConfig._f = config._f[i];                                                                              // 1253
            configFromStringAndFormat(tempConfig);                                                                     // 1254
                                                                                                                       // 1255
            if (!valid__isValid(tempConfig)) {                                                                         // 1256
                continue;                                                                                              // 1257
            }                                                                                                          // 1258
                                                                                                                       // 1259
            // if there is any input that was not parsed add a penalty for that format                                 // 1260
            currentScore += tempConfig._pf.charsLeftOver;                                                              // 1261
                                                                                                                       // 1262
            //or tokens                                                                                                // 1263
            currentScore += tempConfig._pf.unusedTokens.length * 10;                                                   // 1264
                                                                                                                       // 1265
            tempConfig._pf.score = currentScore;                                                                       // 1266
                                                                                                                       // 1267
            if (scoreToBeat == null || currentScore < scoreToBeat) {                                                   // 1268
                scoreToBeat = currentScore;                                                                            // 1269
                bestMoment = tempConfig;                                                                               // 1270
            }                                                                                                          // 1271
        }                                                                                                              // 1272
                                                                                                                       // 1273
        extend(config, bestMoment || tempConfig);                                                                      // 1274
    }                                                                                                                  // 1275
                                                                                                                       // 1276
    function configFromObject(config) {                                                                                // 1277
        if (config._d) {                                                                                               // 1278
            return;                                                                                                    // 1279
        }                                                                                                              // 1280
                                                                                                                       // 1281
        var i = normalizeObjectUnits(config._i);                                                                       // 1282
        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];                     // 1283
                                                                                                                       // 1284
        configFromArray(config);                                                                                       // 1285
    }                                                                                                                  // 1286
                                                                                                                       // 1287
    function createFromConfig (config) {                                                                               // 1288
        var input = config._i,                                                                                         // 1289
            format = config._f,                                                                                        // 1290
            res;                                                                                                       // 1291
                                                                                                                       // 1292
        config._locale = config._locale || locales__getLocale(config._l);                                              // 1293
                                                                                                                       // 1294
        if (input === null || (format === undefined && input === '')) {                                                // 1295
            return valid__createInvalid({nullInput: true});                                                            // 1296
        }                                                                                                              // 1297
                                                                                                                       // 1298
        if (typeof input === 'string') {                                                                               // 1299
            config._i = input = config._locale.preparse(input);                                                        // 1300
        }                                                                                                              // 1301
                                                                                                                       // 1302
        if (isMoment(input)) {                                                                                         // 1303
            return new Moment(checkOverflow(input));                                                                   // 1304
        } else if (isArray(format)) {                                                                                  // 1305
            configFromStringAndArray(config);                                                                          // 1306
        } else if (format) {                                                                                           // 1307
            configFromStringAndFormat(config);                                                                         // 1308
        } else {                                                                                                       // 1309
            configFromInput(config);                                                                                   // 1310
        }                                                                                                              // 1311
                                                                                                                       // 1312
        res = new Moment(checkOverflow(config));                                                                       // 1313
        if (res._nextDay) {                                                                                            // 1314
            // Adding is smart enough around DST                                                                       // 1315
            res.add(1, 'd');                                                                                           // 1316
            res._nextDay = undefined;                                                                                  // 1317
        }                                                                                                              // 1318
                                                                                                                       // 1319
        return res;                                                                                                    // 1320
    }                                                                                                                  // 1321
                                                                                                                       // 1322
    function configFromInput(config) {                                                                                 // 1323
        var input = config._i;                                                                                         // 1324
        if (input === undefined) {                                                                                     // 1325
            config._d = new Date();                                                                                    // 1326
        } else if (isDate(input)) {                                                                                    // 1327
            config._d = new Date(+input);                                                                              // 1328
        } else if (typeof input === 'string') {                                                                        // 1329
            configFromString(config);                                                                                  // 1330
        } else if (isArray(input)) {                                                                                   // 1331
            config._a = map(input.slice(0), function (obj) {                                                           // 1332
                return parseInt(obj, 10);                                                                              // 1333
            });                                                                                                        // 1334
            configFromArray(config);                                                                                   // 1335
        } else if (typeof(input) === 'object') {                                                                       // 1336
            configFromObject(config);                                                                                  // 1337
        } else if (typeof(input) === 'number') {                                                                       // 1338
            // from milliseconds                                                                                       // 1339
            config._d = new Date(input);                                                                               // 1340
        } else {                                                                                                       // 1341
            hooks__hooks.createFromInputFallback(config);                                                              // 1342
        }                                                                                                              // 1343
    }                                                                                                                  // 1344
                                                                                                                       // 1345
    function createLocalOrUTC (input, format, locale, strict, isUTC) {                                                 // 1346
        var c = {};                                                                                                    // 1347
                                                                                                                       // 1348
        if (typeof(locale) === 'boolean') {                                                                            // 1349
            strict = locale;                                                                                           // 1350
            locale = undefined;                                                                                        // 1351
        }                                                                                                              // 1352
        // object construction must be done this way.                                                                  // 1353
        // https://github.com/moment/moment/issues/1423                                                                // 1354
        c._isAMomentObject = true;                                                                                     // 1355
        c._useUTC = c._isUTC = isUTC;                                                                                  // 1356
        c._l = locale;                                                                                                 // 1357
        c._i = input;                                                                                                  // 1358
        c._f = format;                                                                                                 // 1359
        c._strict = strict;                                                                                            // 1360
        c._pf = defaultParsingFlags();                                                                                 // 1361
                                                                                                                       // 1362
        return createFromConfig(c);                                                                                    // 1363
    }                                                                                                                  // 1364
                                                                                                                       // 1365
    function local__createLocal (input, format, locale, strict) {                                                      // 1366
        return createLocalOrUTC(input, format, locale, strict, false);                                                 // 1367
    }                                                                                                                  // 1368
                                                                                                                       // 1369
    var prototypeMin = deprecate(                                                                                      // 1370
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',           // 1371
         function () {                                                                                                 // 1372
             var other = local__createLocal.apply(null, arguments);                                                    // 1373
             return other < this ? this : other;                                                                       // 1374
         }                                                                                                             // 1375
     );                                                                                                                // 1376
                                                                                                                       // 1377
    var prototypeMax = deprecate(                                                                                      // 1378
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',            // 1379
        function () {                                                                                                  // 1380
            var other = local__createLocal.apply(null, arguments);                                                     // 1381
            return other > this ? this : other;                                                                        // 1382
        }                                                                                                              // 1383
    );                                                                                                                 // 1384
                                                                                                                       // 1385
    // Pick a moment m from moments so that m[fn](other) is true for all                                               // 1386
    // other. This relies on the function fn to be transitive.                                                         // 1387
    //                                                                                                                 // 1388
    // moments should either be an array of moment objects or an array, whose                                          // 1389
    // first element is an array of moment objects.                                                                    // 1390
    function pickBy(fn, moments) {                                                                                     // 1391
        var res, i;                                                                                                    // 1392
        if (moments.length === 1 && isArray(moments[0])) {                                                             // 1393
            moments = moments[0];                                                                                      // 1394
        }                                                                                                              // 1395
        if (!moments.length) {                                                                                         // 1396
            return local__createLocal();                                                                               // 1397
        }                                                                                                              // 1398
        res = moments[0];                                                                                              // 1399
        for (i = 1; i < moments.length; ++i) {                                                                         // 1400
            if (moments[i][fn](res)) {                                                                                 // 1401
                res = moments[i];                                                                                      // 1402
            }                                                                                                          // 1403
        }                                                                                                              // 1404
        return res;                                                                                                    // 1405
    }                                                                                                                  // 1406
                                                                                                                       // 1407
    // TODO: Use [].sort instead?                                                                                      // 1408
    function min () {                                                                                                  // 1409
        var args = [].slice.call(arguments, 0);                                                                        // 1410
                                                                                                                       // 1411
        return pickBy('isBefore', args);                                                                               // 1412
    }                                                                                                                  // 1413
                                                                                                                       // 1414
    function max () {                                                                                                  // 1415
        var args = [].slice.call(arguments, 0);                                                                        // 1416
                                                                                                                       // 1417
        return pickBy('isAfter', args);                                                                                // 1418
    }                                                                                                                  // 1419
                                                                                                                       // 1420
    function Duration (duration) {                                                                                     // 1421
        var normalizedInput = normalizeObjectUnits(duration),                                                          // 1422
            years = normalizedInput.year || 0,                                                                         // 1423
            quarters = normalizedInput.quarter || 0,                                                                   // 1424
            months = normalizedInput.month || 0,                                                                       // 1425
            weeks = normalizedInput.week || 0,                                                                         // 1426
            days = normalizedInput.day || 0,                                                                           // 1427
            hours = normalizedInput.hour || 0,                                                                         // 1428
            minutes = normalizedInput.minute || 0,                                                                     // 1429
            seconds = normalizedInput.second || 0,                                                                     // 1430
            milliseconds = normalizedInput.millisecond || 0;                                                           // 1431
                                                                                                                       // 1432
        // representation for dateAddRemove                                                                            // 1433
        this._milliseconds = +milliseconds +                                                                           // 1434
            seconds * 1e3 + // 1000                                                                                    // 1435
            minutes * 6e4 + // 1000 * 60                                                                               // 1436
            hours * 36e5; // 1000 * 60 * 60                                                                            // 1437
        // Because of dateAddRemove treats 24 hours as different from a                                                // 1438
        // day when working around DST, we need to store them separately                                               // 1439
        this._days = +days +                                                                                           // 1440
            weeks * 7;                                                                                                 // 1441
        // It is impossible translate months into days without knowing                                                 // 1442
        // which months you are are talking about, so we have to store                                                 // 1443
        // it separately.                                                                                              // 1444
        this._months = +months +                                                                                       // 1445
            quarters * 3 +                                                                                             // 1446
            years * 12;                                                                                                // 1447
                                                                                                                       // 1448
        this._data = {};                                                                                               // 1449
                                                                                                                       // 1450
        this._locale = locales__getLocale();                                                                           // 1451
                                                                                                                       // 1452
        this._bubble();                                                                                                // 1453
    }                                                                                                                  // 1454
                                                                                                                       // 1455
    function isDuration (obj) {                                                                                        // 1456
        return obj instanceof Duration;                                                                                // 1457
    }                                                                                                                  // 1458
                                                                                                                       // 1459
    function offset (token, separator) {                                                                               // 1460
        addFormatToken(token, 0, 0, function () {                                                                      // 1461
            var offset = this.utcOffset();                                                                             // 1462
            var sign = '+';                                                                                            // 1463
            if (offset < 0) {                                                                                          // 1464
                offset = -offset;                                                                                      // 1465
                sign = '-';                                                                                            // 1466
            }                                                                                                          // 1467
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);                     // 1468
        });                                                                                                            // 1469
    }                                                                                                                  // 1470
                                                                                                                       // 1471
    offset('Z', ':');                                                                                                  // 1472
    offset('ZZ', '');                                                                                                  // 1473
                                                                                                                       // 1474
    // PARSING                                                                                                         // 1475
                                                                                                                       // 1476
    addRegexToken('Z',  matchOffset);                                                                                  // 1477
    addRegexToken('ZZ', matchOffset);                                                                                  // 1478
    addParseToken(['Z', 'ZZ'], function (input, array, config) {                                                       // 1479
        config._useUTC = true;                                                                                         // 1480
        config._tzm = offsetFromString(input);                                                                         // 1481
    });                                                                                                                // 1482
                                                                                                                       // 1483
    // HELPERS                                                                                                         // 1484
                                                                                                                       // 1485
    // timezone chunker                                                                                                // 1486
    // '+10:00' > ['10',  '00']                                                                                        // 1487
    // '-1530'  > ['-15', '30']                                                                                        // 1488
    var chunkOffset = /([\+\-]|\d\d)/gi;                                                                               // 1489
                                                                                                                       // 1490
    function offsetFromString(string) {                                                                                // 1491
        var matches = ((string || '').match(matchOffset) || []);                                                       // 1492
        var chunk   = matches[matches.length - 1] || [];                                                               // 1493
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];                                                  // 1494
        var minutes = +(parts[1] * 60) + toInt(parts[2]);                                                              // 1495
                                                                                                                       // 1496
        return parts[0] === '+' ? minutes : -minutes;                                                                  // 1497
    }                                                                                                                  // 1498
                                                                                                                       // 1499
    // Return a moment from input, that is local/utc/zone equivalent to model.                                         // 1500
    function cloneWithOffset(input, model) {                                                                           // 1501
        var res, diff;                                                                                                 // 1502
        if (model._isUTC) {                                                                                            // 1503
            res = model.clone();                                                                                       // 1504
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);                  // 1505
            // Use low-level api, because this fn is low-level api.                                                    // 1506
            res._d.setTime(+res._d + diff);                                                                            // 1507
            hooks__hooks.updateOffset(res, false);                                                                     // 1508
            return res;                                                                                                // 1509
        } else {                                                                                                       // 1510
            return local__createLocal(input).local();                                                                  // 1511
        }                                                                                                              // 1512
        return model._isUTC ? local__createLocal(input).zone(model._offset || 0) : local__createLocal(input).local();  // 1513
    }                                                                                                                  // 1514
                                                                                                                       // 1515
    function getDateOffset (m) {                                                                                       // 1516
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.                                              // 1517
        // https://github.com/moment/moment/pull/1871                                                                  // 1518
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;                                                        // 1519
    }                                                                                                                  // 1520
                                                                                                                       // 1521
    // HOOKS                                                                                                           // 1522
                                                                                                                       // 1523
    // This function will be called whenever a moment is mutated.                                                      // 1524
    // It is intended to keep the offset in sync with the timezone.                                                    // 1525
    hooks__hooks.updateOffset = function () {};                                                                        // 1526
                                                                                                                       // 1527
    // MOMENTS                                                                                                         // 1528
                                                                                                                       // 1529
    // keepLocalTime = true means only change the timezone, without                                                    // 1530
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->                                            // 1531
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset                                             // 1532
    // +0200, so we adjust the time as needed, to be valid.                                                            // 1533
    //                                                                                                                 // 1534
    // Keeping the time actually adds/subtracts (one hour)                                                             // 1535
    // from the actual represented time. That is why we call updateOffset                                              // 1536
    // a second time. In case it wants us to change the offset again                                                   // 1537
    // _changeInProgress == true case, then we have to adjust, because                                                 // 1538
    // there is no such time in the given timezone.                                                                    // 1539
    function getSetOffset (input, keepLocalTime) {                                                                     // 1540
        var offset = this._offset || 0,                                                                                // 1541
            localAdjust;                                                                                               // 1542
        if (input != null) {                                                                                           // 1543
            if (typeof input === 'string') {                                                                           // 1544
                input = offsetFromString(input);                                                                       // 1545
            }                                                                                                          // 1546
            if (Math.abs(input) < 16) {                                                                                // 1547
                input = input * 60;                                                                                    // 1548
            }                                                                                                          // 1549
            if (!this._isUTC && keepLocalTime) {                                                                       // 1550
                localAdjust = getDateOffset(this);                                                                     // 1551
            }                                                                                                          // 1552
            this._offset = input;                                                                                      // 1553
            this._isUTC = true;                                                                                        // 1554
            if (localAdjust != null) {                                                                                 // 1555
                this.add(localAdjust, 'm');                                                                            // 1556
            }                                                                                                          // 1557
            if (offset !== input) {                                                                                    // 1558
                if (!keepLocalTime || this._changeInProgress) {                                                        // 1559
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);            // 1560
                } else if (!this._changeInProgress) {                                                                  // 1561
                    this._changeInProgress = true;                                                                     // 1562
                    hooks__hooks.updateOffset(this, true);                                                             // 1563
                    this._changeInProgress = null;                                                                     // 1564
                }                                                                                                      // 1565
            }                                                                                                          // 1566
            return this;                                                                                               // 1567
        } else {                                                                                                       // 1568
            return this._isUTC ? offset : getDateOffset(this);                                                         // 1569
        }                                                                                                              // 1570
    }                                                                                                                  // 1571
                                                                                                                       // 1572
    function getSetZone (input, keepLocalTime) {                                                                       // 1573
        if (input != null) {                                                                                           // 1574
            if (typeof input !== 'string') {                                                                           // 1575
                input = -input;                                                                                        // 1576
            }                                                                                                          // 1577
                                                                                                                       // 1578
            this.utcOffset(input, keepLocalTime);                                                                      // 1579
                                                                                                                       // 1580
            return this;                                                                                               // 1581
        } else {                                                                                                       // 1582
            return -this.utcOffset();                                                                                  // 1583
        }                                                                                                              // 1584
    }                                                                                                                  // 1585
                                                                                                                       // 1586
    function setOffsetToUTC (keepLocalTime) {                                                                          // 1587
        return this.utcOffset(0, keepLocalTime);                                                                       // 1588
    }                                                                                                                  // 1589
                                                                                                                       // 1590
    function setOffsetToLocal (keepLocalTime) {                                                                        // 1591
        if (this._isUTC) {                                                                                             // 1592
            this.utcOffset(0, keepLocalTime);                                                                          // 1593
            this._isUTC = false;                                                                                       // 1594
                                                                                                                       // 1595
            if (keepLocalTime) {                                                                                       // 1596
                this.subtract(getDateOffset(this), 'm');                                                               // 1597
            }                                                                                                          // 1598
        }                                                                                                              // 1599
        return this;                                                                                                   // 1600
    }                                                                                                                  // 1601
                                                                                                                       // 1602
    function setOffsetToParsedOffset () {                                                                              // 1603
        if (this._tzm) {                                                                                               // 1604
            this.utcOffset(this._tzm);                                                                                 // 1605
        } else if (typeof this._i === 'string') {                                                                      // 1606
            this.utcOffset(offsetFromString(this._i));                                                                 // 1607
        }                                                                                                              // 1608
        return this;                                                                                                   // 1609
    }                                                                                                                  // 1610
                                                                                                                       // 1611
    function hasAlignedHourOffset (input) {                                                                            // 1612
        if (!input) {                                                                                                  // 1613
            input = 0;                                                                                                 // 1614
        }                                                                                                              // 1615
        else {                                                                                                         // 1616
            input = local__createLocal(input).utcOffset();                                                             // 1617
        }                                                                                                              // 1618
                                                                                                                       // 1619
        return (this.utcOffset() - input) % 60 === 0;                                                                  // 1620
    }                                                                                                                  // 1621
                                                                                                                       // 1622
    function isDaylightSavingTime () {                                                                                 // 1623
        return (                                                                                                       // 1624
            this.utcOffset() > this.clone().month(0).utcOffset() ||                                                    // 1625
            this.utcOffset() > this.clone().month(5).utcOffset()                                                       // 1626
        );                                                                                                             // 1627
    }                                                                                                                  // 1628
                                                                                                                       // 1629
    function isDaylightSavingTimeShifted () {                                                                          // 1630
        if (this._a) {                                                                                                 // 1631
            var other = this._isUTC ? utc__createUTC(this._a) : local__createLocal(this._a);                           // 1632
            return this.isValid() && compareArrays(this._a, other.toArray()) > 0;                                      // 1633
        }                                                                                                              // 1634
                                                                                                                       // 1635
        return false;                                                                                                  // 1636
    }                                                                                                                  // 1637
                                                                                                                       // 1638
    function isLocal () {                                                                                              // 1639
        return !this._isUTC;                                                                                           // 1640
    }                                                                                                                  // 1641
                                                                                                                       // 1642
    function isUtcOffset () {                                                                                          // 1643
        return this._isUTC;                                                                                            // 1644
    }                                                                                                                  // 1645
                                                                                                                       // 1646
    function isUtc () {                                                                                                // 1647
        return this._isUTC && this._offset === 0;                                                                      // 1648
    }                                                                                                                  // 1649
                                                                                                                       // 1650
    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;                                          // 1651
                                                                                                                       // 1652
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html                       // 1653
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere                                       // 1654
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
                                                                                                                       // 1656
    function create__createDuration (input, key) {                                                                     // 1657
        var duration = input,                                                                                          // 1658
            // matching against regexp is expensive, do it on demand                                                   // 1659
            match = null,                                                                                              // 1660
            sign,                                                                                                      // 1661
            ret,                                                                                                       // 1662
            diffRes;                                                                                                   // 1663
                                                                                                                       // 1664
        if (isDuration(input)) {                                                                                       // 1665
            duration = {                                                                                               // 1666
                ms : input._milliseconds,                                                                              // 1667
                d  : input._days,                                                                                      // 1668
                M  : input._months                                                                                     // 1669
            };                                                                                                         // 1670
        } else if (typeof input === 'number') {                                                                        // 1671
            duration = {};                                                                                             // 1672
            if (key) {                                                                                                 // 1673
                duration[key] = input;                                                                                 // 1674
            } else {                                                                                                   // 1675
                duration.milliseconds = input;                                                                         // 1676
            }                                                                                                          // 1677
        } else if (!!(match = aspNetRegex.exec(input))) {                                                              // 1678
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 1679
            duration = {                                                                                               // 1680
                y  : 0,                                                                                                // 1681
                d  : toInt(match[DATE])        * sign,                                                                 // 1682
                h  : toInt(match[HOUR])        * sign,                                                                 // 1683
                m  : toInt(match[MINUTE])      * sign,                                                                 // 1684
                s  : toInt(match[SECOND])      * sign,                                                                 // 1685
                ms : toInt(match[MILLISECOND]) * sign                                                                  // 1686
            };                                                                                                         // 1687
        } else if (!!(match = create__isoRegex.exec(input))) {                                                         // 1688
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 1689
            duration = {                                                                                               // 1690
                y : parseIso(match[2], sign),                                                                          // 1691
                M : parseIso(match[3], sign),                                                                          // 1692
                d : parseIso(match[4], sign),                                                                          // 1693
                h : parseIso(match[5], sign),                                                                          // 1694
                m : parseIso(match[6], sign),                                                                          // 1695
                s : parseIso(match[7], sign),                                                                          // 1696
                w : parseIso(match[8], sign)                                                                           // 1697
            };                                                                                                         // 1698
        } else if (duration == null) {// checks for null or undefined                                                  // 1699
            duration = {};                                                                                             // 1700
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {                         // 1701
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));           // 1702
                                                                                                                       // 1703
            duration = {};                                                                                             // 1704
            duration.ms = diffRes.milliseconds;                                                                        // 1705
            duration.M = diffRes.months;                                                                               // 1706
        }                                                                                                              // 1707
                                                                                                                       // 1708
        ret = new Duration(duration);                                                                                  // 1709
                                                                                                                       // 1710
        if (isDuration(input) && hasOwnProp(input, '_locale')) {                                                       // 1711
            ret._locale = input._locale;                                                                               // 1712
        }                                                                                                              // 1713
                                                                                                                       // 1714
        return ret;                                                                                                    // 1715
    }                                                                                                                  // 1716
                                                                                                                       // 1717
    function parseIso (inp, sign) {                                                                                    // 1718
        // We'd normally use ~~inp for this, but unfortunately it also                                                 // 1719
        // converts floats to ints.                                                                                    // 1720
        // inp may be undefined, so careful calling replace on it.                                                     // 1721
        var res = inp && parseFloat(inp.replace(',', '.'));                                                            // 1722
        // apply sign while we're at it                                                                                // 1723
        return (isNaN(res) ? 0 : res) * sign;                                                                          // 1724
    }                                                                                                                  // 1725
                                                                                                                       // 1726
    function positiveMomentsDifference(base, other) {                                                                  // 1727
        var res = {milliseconds: 0, months: 0};                                                                        // 1728
                                                                                                                       // 1729
        res.months = other.month() - base.month() +                                                                    // 1730
            (other.year() - base.year()) * 12;                                                                         // 1731
        if (base.clone().add(res.months, 'M').isAfter(other)) {                                                        // 1732
            --res.months;                                                                                              // 1733
        }                                                                                                              // 1734
                                                                                                                       // 1735
        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));                                              // 1736
                                                                                                                       // 1737
        return res;                                                                                                    // 1738
    }                                                                                                                  // 1739
                                                                                                                       // 1740
    function momentsDifference(base, other) {                                                                          // 1741
        var res;                                                                                                       // 1742
        other = cloneWithOffset(other, base);                                                                          // 1743
        if (base.isBefore(other)) {                                                                                    // 1744
            res = positiveMomentsDifference(base, other);                                                              // 1745
        } else {                                                                                                       // 1746
            res = positiveMomentsDifference(other, base);                                                              // 1747
            res.milliseconds = -res.milliseconds;                                                                      // 1748
            res.months = -res.months;                                                                                  // 1749
        }                                                                                                              // 1750
                                                                                                                       // 1751
        return res;                                                                                                    // 1752
    }                                                                                                                  // 1753
                                                                                                                       // 1754
    function createAdder(direction, name) {                                                                            // 1755
        return function (val, period) {                                                                                // 1756
            var dur, tmp;                                                                                              // 1757
            //invert the arguments, but complain about it                                                              // 1758
            if (period !== null && !isNaN(+period)) {                                                                  // 1759
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;                                                                 // 1761
            }                                                                                                          // 1762
                                                                                                                       // 1763
            val = typeof val === 'string' ? +val : val;                                                                // 1764
            dur = create__createDuration(val, period);                                                                 // 1765
            add_subtract__addSubtract(this, dur, direction);                                                           // 1766
            return this;                                                                                               // 1767
        };                                                                                                             // 1768
    }                                                                                                                  // 1769
                                                                                                                       // 1770
    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {                                       // 1771
        var milliseconds = duration._milliseconds,                                                                     // 1772
            days = duration._days,                                                                                     // 1773
            months = duration._months;                                                                                 // 1774
        updateOffset = updateOffset == null ? true : updateOffset;                                                     // 1775
                                                                                                                       // 1776
        if (milliseconds) {                                                                                            // 1777
            mom._d.setTime(+mom._d + milliseconds * isAdding);                                                         // 1778
        }                                                                                                              // 1779
        if (days) {                                                                                                    // 1780
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);                                    // 1781
        }                                                                                                              // 1782
        if (months) {                                                                                                  // 1783
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);                                             // 1784
        }                                                                                                              // 1785
        if (updateOffset) {                                                                                            // 1786
            hooks__hooks.updateOffset(mom, days || months);                                                            // 1787
        }                                                                                                              // 1788
    }                                                                                                                  // 1789
                                                                                                                       // 1790
    var add_subtract__add      = createAdder(1, 'add');                                                                // 1791
    var add_subtract__subtract = createAdder(-1, 'subtract');                                                          // 1792
                                                                                                                       // 1793
    function calendar__calendar (time) {                                                                               // 1794
        // We want to compare the start of today, vs this.                                                             // 1795
        // Getting start-of-today depends on whether we're local/utc/offset or not.                                    // 1796
        var now = time || local__createLocal(),                                                                        // 1797
            sod = cloneWithOffset(now, this).startOf('day'),                                                           // 1798
            diff = this.diff(sod, 'days', true),                                                                       // 1799
            format = diff < -6 ? 'sameElse' :                                                                          // 1800
                diff < -1 ? 'lastWeek' :                                                                               // 1801
                diff < 0 ? 'lastDay' :                                                                                 // 1802
                diff < 1 ? 'sameDay' :                                                                                 // 1803
                diff < 2 ? 'nextDay' :                                                                                 // 1804
                diff < 7 ? 'nextWeek' : 'sameElse';                                                                    // 1805
        return this.format(this.localeData().calendar(format, this, local__createLocal(now)));                         // 1806
    }                                                                                                                  // 1807
                                                                                                                       // 1808
    function clone () {                                                                                                // 1809
        return new Moment(this);                                                                                       // 1810
    }                                                                                                                  // 1811
                                                                                                                       // 1812
    function isAfter (input, units) {                                                                                  // 1813
        var inputMs;                                                                                                   // 1814
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');                                  // 1815
        if (units === 'millisecond') {                                                                                 // 1816
            input = isMoment(input) ? input : local__createLocal(input);                                               // 1817
            return +this > +input;                                                                                     // 1818
        } else {                                                                                                       // 1819
            inputMs = isMoment(input) ? +input : +local__createLocal(input);                                           // 1820
            return inputMs < +this.clone().startOf(units);                                                             // 1821
        }                                                                                                              // 1822
    }                                                                                                                  // 1823
                                                                                                                       // 1824
    function isBefore (input, units) {                                                                                 // 1825
        var inputMs;                                                                                                   // 1826
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');                                  // 1827
        if (units === 'millisecond') {                                                                                 // 1828
            input = isMoment(input) ? input : local__createLocal(input);                                               // 1829
            return +this < +input;                                                                                     // 1830
        } else {                                                                                                       // 1831
            inputMs = isMoment(input) ? +input : +local__createLocal(input);                                           // 1832
            return +this.clone().endOf(units) < inputMs;                                                               // 1833
        }                                                                                                              // 1834
    }                                                                                                                  // 1835
                                                                                                                       // 1836
    function isBetween (from, to, units) {                                                                             // 1837
        return this.isAfter(from, units) && this.isBefore(to, units);                                                  // 1838
    }                                                                                                                  // 1839
                                                                                                                       // 1840
    function isSame (input, units) {                                                                                   // 1841
        var inputMs;                                                                                                   // 1842
        units = normalizeUnits(units || 'millisecond');                                                                // 1843
        if (units === 'millisecond') {                                                                                 // 1844
            input = isMoment(input) ? input : local__createLocal(input);                                               // 1845
            return +this === +input;                                                                                   // 1846
        } else {                                                                                                       // 1847
            inputMs = +local__createLocal(input);                                                                      // 1848
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));               // 1849
        }                                                                                                              // 1850
    }                                                                                                                  // 1851
                                                                                                                       // 1852
    function absFloor (number) {                                                                                       // 1853
        if (number < 0) {                                                                                              // 1854
            return Math.ceil(number);                                                                                  // 1855
        } else {                                                                                                       // 1856
            return Math.floor(number);                                                                                 // 1857
        }                                                                                                              // 1858
    }                                                                                                                  // 1859
                                                                                                                       // 1860
    function diff (input, units, asFloat) {                                                                            // 1861
        var that = cloneWithOffset(input, this),                                                                       // 1862
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,                                                   // 1863
            delta, output;                                                                                             // 1864
                                                                                                                       // 1865
        units = normalizeUnits(units);                                                                                 // 1866
                                                                                                                       // 1867
        if (units === 'year' || units === 'month' || units === 'quarter') {                                            // 1868
            output = monthDiff(this, that);                                                                            // 1869
            if (units === 'quarter') {                                                                                 // 1870
                output = output / 3;                                                                                   // 1871
            } else if (units === 'year') {                                                                             // 1872
                output = output / 12;                                                                                  // 1873
            }                                                                                                          // 1874
        } else {                                                                                                       // 1875
            delta = this - that;                                                                                       // 1876
            output = units === 'second' ? delta / 1e3 : // 1000                                                        // 1877
                units === 'minute' ? delta / 6e4 : // 1000 * 60                                                        // 1878
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60                                                    // 1879
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst                     // 1880
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst               // 1881
                delta;                                                                                                 // 1882
        }                                                                                                              // 1883
        return asFloat ? output : absFloor(output);                                                                    // 1884
    }                                                                                                                  // 1885
                                                                                                                       // 1886
    function monthDiff (a, b) {                                                                                        // 1887
        // difference in months                                                                                        // 1888
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),                                   // 1889
            // b is in (anchor - 1 month, anchor + 1 month)                                                            // 1890
            anchor = a.clone().add(wholeMonthDiff, 'months'),                                                          // 1891
            anchor2, adjust;                                                                                           // 1892
                                                                                                                       // 1893
        if (b - anchor < 0) {                                                                                          // 1894
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');                                                     // 1895
            // linear across the month                                                                                 // 1896
            adjust = (b - anchor) / (anchor - anchor2);                                                                // 1897
        } else {                                                                                                       // 1898
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');                                                     // 1899
            // linear across the month                                                                                 // 1900
            adjust = (b - anchor) / (anchor2 - anchor);                                                                // 1901
        }                                                                                                              // 1902
                                                                                                                       // 1903
        return -(wholeMonthDiff + adjust);                                                                             // 1904
    }                                                                                                                  // 1905
                                                                                                                       // 1906
    hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';                                                               // 1907
                                                                                                                       // 1908
    function toString () {                                                                                             // 1909
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');                                   // 1910
    }                                                                                                                  // 1911
                                                                                                                       // 1912
    function moment_format__toISOString () {                                                                           // 1913
        var m = this.clone().utc();                                                                                    // 1914
        if (0 < m.year() && m.year() <= 9999) {                                                                        // 1915
            if ('function' === typeof Date.prototype.toISOString) {                                                    // 1916
                // native implementation is ~50x faster, use it when we can                                            // 1917
                return this.toDate().toISOString();                                                                    // 1918
            } else {                                                                                                   // 1919
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                // 1920
            }                                                                                                          // 1921
        } else {                                                                                                       // 1922
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                  // 1923
        }                                                                                                              // 1924
    }                                                                                                                  // 1925
                                                                                                                       // 1926
    function format (inputString) {                                                                                    // 1927
        var output = formatMoment(this, inputString || hooks__hooks.defaultFormat);                                    // 1928
        return this.localeData().postformat(output);                                                                   // 1929
    }                                                                                                                  // 1930
                                                                                                                       // 1931
    function from (time, withoutSuffix) {                                                                              // 1932
        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);          // 1933
    }                                                                                                                  // 1934
                                                                                                                       // 1935
    function fromNow (withoutSuffix) {                                                                                 // 1936
        return this.from(local__createLocal(), withoutSuffix);                                                         // 1937
    }                                                                                                                  // 1938
                                                                                                                       // 1939
    function locale (key) {                                                                                            // 1940
        var newLocaleData;                                                                                             // 1941
                                                                                                                       // 1942
        if (key === undefined) {                                                                                       // 1943
            return this._locale._abbr;                                                                                 // 1944
        } else {                                                                                                       // 1945
            newLocaleData = locales__getLocale(key);                                                                   // 1946
            if (newLocaleData != null) {                                                                               // 1947
                this._locale = newLocaleData;                                                                          // 1948
            }                                                                                                          // 1949
            return this;                                                                                               // 1950
        }                                                                                                              // 1951
    }                                                                                                                  // 1952
                                                                                                                       // 1953
    var lang = deprecate(                                                                                              // 1954
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {                                                                                               // 1956
            if (key === undefined) {                                                                                   // 1957
                return this.localeData();                                                                              // 1958
            } else {                                                                                                   // 1959
                return this.locale(key);                                                                               // 1960
            }                                                                                                          // 1961
        }                                                                                                              // 1962
    );                                                                                                                 // 1963
                                                                                                                       // 1964
    function localeData () {                                                                                           // 1965
        return this._locale;                                                                                           // 1966
    }                                                                                                                  // 1967
                                                                                                                       // 1968
    function startOf (units) {                                                                                         // 1969
        units = normalizeUnits(units);                                                                                 // 1970
        // the following switch intentionally omits break keywords                                                     // 1971
        // to utilize falling through the cases.                                                                       // 1972
        switch (units) {                                                                                               // 1973
        case 'year':                                                                                                   // 1974
            this.month(0);                                                                                             // 1975
            /* falls through */                                                                                        // 1976
        case 'quarter':                                                                                                // 1977
        case 'month':                                                                                                  // 1978
            this.date(1);                                                                                              // 1979
            /* falls through */                                                                                        // 1980
        case 'week':                                                                                                   // 1981
        case 'isoWeek':                                                                                                // 1982
        case 'day':                                                                                                    // 1983
            this.hours(0);                                                                                             // 1984
            /* falls through */                                                                                        // 1985
        case 'hour':                                                                                                   // 1986
            this.minutes(0);                                                                                           // 1987
            /* falls through */                                                                                        // 1988
        case 'minute':                                                                                                 // 1989
            this.seconds(0);                                                                                           // 1990
            /* falls through */                                                                                        // 1991
        case 'second':                                                                                                 // 1992
            this.milliseconds(0);                                                                                      // 1993
            /* falls through */                                                                                        // 1994
        }                                                                                                              // 1995
                                                                                                                       // 1996
        // weeks are a special case                                                                                    // 1997
        if (units === 'week') {                                                                                        // 1998
            this.weekday(0);                                                                                           // 1999
        }                                                                                                              // 2000
        if (units === 'isoWeek') {                                                                                     // 2001
            this.isoWeekday(1);                                                                                        // 2002
        }                                                                                                              // 2003
                                                                                                                       // 2004
        // quarters are also special                                                                                   // 2005
        if (units === 'quarter') {                                                                                     // 2006
            this.month(Math.floor(this.month() / 3) * 3);                                                              // 2007
        }                                                                                                              // 2008
                                                                                                                       // 2009
        return this;                                                                                                   // 2010
    }                                                                                                                  // 2011
                                                                                                                       // 2012
    function endOf (units) {                                                                                           // 2013
        units = normalizeUnits(units);                                                                                 // 2014
        if (units === undefined || units === 'millisecond') {                                                          // 2015
            return this;                                                                                               // 2016
        }                                                                                                              // 2017
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');                   // 2018
    }                                                                                                                  // 2019
                                                                                                                       // 2020
    function to_type__valueOf () {                                                                                     // 2021
        return +this._d - ((this._offset || 0) * 60000);                                                               // 2022
    }                                                                                                                  // 2023
                                                                                                                       // 2024
    function unix () {                                                                                                 // 2025
        return Math.floor(+this / 1000);                                                                               // 2026
    }                                                                                                                  // 2027
                                                                                                                       // 2028
    function toDate () {                                                                                               // 2029
        return this._offset ? new Date(+this) : this._d;                                                               // 2030
    }                                                                                                                  // 2031
                                                                                                                       // 2032
    function toArray () {                                                                                              // 2033
        var m = this;                                                                                                  // 2034
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];                     // 2035
    }                                                                                                                  // 2036
                                                                                                                       // 2037
    function moment_valid__isValid () {                                                                                // 2038
        return valid__isValid(this);                                                                                   // 2039
    }                                                                                                                  // 2040
                                                                                                                       // 2041
    function parsingFlags () {                                                                                         // 2042
        return extend({}, this._pf);                                                                                   // 2043
    }                                                                                                                  // 2044
                                                                                                                       // 2045
    function invalidAt () {                                                                                            // 2046
        return this._pf.overflow;                                                                                      // 2047
    }                                                                                                                  // 2048
                                                                                                                       // 2049
    addFormatToken(0, ['gg', 2], 0, function () {                                                                      // 2050
        return this.weekYear() % 100;                                                                                  // 2051
    });                                                                                                                // 2052
                                                                                                                       // 2053
    addFormatToken(0, ['GG', 2], 0, function () {                                                                      // 2054
        return this.isoWeekYear() % 100;                                                                               // 2055
    });                                                                                                                // 2056
                                                                                                                       // 2057
    function addWeekYearFormatToken (token, getter) {                                                                  // 2058
        addFormatToken(0, [token, token.length], 0, getter);                                                           // 2059
    }                                                                                                                  // 2060
                                                                                                                       // 2061
    addWeekYearFormatToken('gggg',     'weekYear');                                                                    // 2062
    addWeekYearFormatToken('ggggg',    'weekYear');                                                                    // 2063
    addWeekYearFormatToken('GGGG',  'isoWeekYear');                                                                    // 2064
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');                                                                    // 2065
                                                                                                                       // 2066
    // ALIASES                                                                                                         // 2067
                                                                                                                       // 2068
    addUnitAlias('weekYear', 'gg');                                                                                    // 2069
    addUnitAlias('isoWeekYear', 'GG');                                                                                 // 2070
                                                                                                                       // 2071
    // PARSING                                                                                                         // 2072
                                                                                                                       // 2073
    addRegexToken('G',      matchSigned);                                                                              // 2074
    addRegexToken('g',      matchSigned);                                                                              // 2075
    addRegexToken('GG',     match1to2, match2);                                                                        // 2076
    addRegexToken('gg',     match1to2, match2);                                                                        // 2077
    addRegexToken('GGGG',   match1to4, match4);                                                                        // 2078
    addRegexToken('gggg',   match1to4, match4);                                                                        // 2079
    addRegexToken('GGGGG',  match1to6, match6);                                                                        // 2080
    addRegexToken('ggggg',  match1to6, match6);                                                                        // 2081
                                                                                                                       // 2082
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {                      // 2083
        week[token.substr(0, 2)] = toInt(input);                                                                       // 2084
    });                                                                                                                // 2085
                                                                                                                       // 2086
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {                                            // 2087
        week[token] = hooks__hooks.parseTwoDigitYear(input);                                                           // 2088
    });                                                                                                                // 2089
                                                                                                                       // 2090
    // HELPERS                                                                                                         // 2091
                                                                                                                       // 2092
    function weeksInYear(year, dow, doy) {                                                                             // 2093
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;                              // 2094
    }                                                                                                                  // 2095
                                                                                                                       // 2096
    // MOMENTS                                                                                                         // 2097
                                                                                                                       // 2098
    function getSetWeekYear (input) {                                                                                  // 2099
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;                    // 2100
        return input == null ? year : this.add((input - year), 'y');                                                   // 2101
    }                                                                                                                  // 2102
                                                                                                                       // 2103
    function getSetISOWeekYear (input) {                                                                               // 2104
        var year = weekOfYear(this, 1, 4).year;                                                                        // 2105
        return input == null ? year : this.add((input - year), 'y');                                                   // 2106
    }                                                                                                                  // 2107
                                                                                                                       // 2108
    function getISOWeeksInYear () {                                                                                    // 2109
        return weeksInYear(this.year(), 1, 4);                                                                         // 2110
    }                                                                                                                  // 2111
                                                                                                                       // 2112
    function getWeeksInYear () {                                                                                       // 2113
        var weekInfo = this.localeData()._week;                                                                        // 2114
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);                                                   // 2115
    }                                                                                                                  // 2116
                                                                                                                       // 2117
    addFormatToken('Q', 0, 0, 'quarter');                                                                              // 2118
                                                                                                                       // 2119
    // ALIASES                                                                                                         // 2120
                                                                                                                       // 2121
    addUnitAlias('quarter', 'Q');                                                                                      // 2122
                                                                                                                       // 2123
    // PARSING                                                                                                         // 2124
                                                                                                                       // 2125
    addRegexToken('Q', match1);                                                                                        // 2126
    addParseToken('Q', function (input, array) {                                                                       // 2127
        array[MONTH] = (toInt(input) - 1) * 3;                                                                         // 2128
    });                                                                                                                // 2129
                                                                                                                       // 2130
    // MOMENTS                                                                                                         // 2131
                                                                                                                       // 2132
    function getSetQuarter (input) {                                                                                   // 2133
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);     // 2134
    }                                                                                                                  // 2135
                                                                                                                       // 2136
    addFormatToken('D', ['DD', 2], 'Do', 'date');                                                                      // 2137
                                                                                                                       // 2138
    // ALIASES                                                                                                         // 2139
                                                                                                                       // 2140
    addUnitAlias('date', 'D');                                                                                         // 2141
                                                                                                                       // 2142
    // PARSING                                                                                                         // 2143
                                                                                                                       // 2144
    addRegexToken('D',  match1to2);                                                                                    // 2145
    addRegexToken('DD', match1to2, match2);                                                                            // 2146
    addRegexToken('Do', function (isStrict, locale) {                                                                  // 2147
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;                                          // 2148
    });                                                                                                                // 2149
                                                                                                                       // 2150
    addParseToken(['D', 'DD'], DATE);                                                                                  // 2151
    addParseToken('Do', function (input, array) {                                                                      // 2152
        array[DATE] = toInt(input.match(match1to2)[0], 10);                                                            // 2153
    });                                                                                                                // 2154
                                                                                                                       // 2155
    // MOMENTS                                                                                                         // 2156
                                                                                                                       // 2157
    var getSetDayOfMonth = makeGetSet('Date', true);                                                                   // 2158
                                                                                                                       // 2159
    addFormatToken('d', 0, 'do', 'day');                                                                               // 2160
                                                                                                                       // 2161
    addFormatToken('dd', 0, 0, function (format) {                                                                     // 2162
        return this.localeData().weekdaysMin(this, format);                                                            // 2163
    });                                                                                                                // 2164
                                                                                                                       // 2165
    addFormatToken('ddd', 0, 0, function (format) {                                                                    // 2166
        return this.localeData().weekdaysShort(this, format);                                                          // 2167
    });                                                                                                                // 2168
                                                                                                                       // 2169
    addFormatToken('dddd', 0, 0, function (format) {                                                                   // 2170
        return this.localeData().weekdays(this, format);                                                               // 2171
    });                                                                                                                // 2172
                                                                                                                       // 2173
    addFormatToken('e', 0, 0, 'weekday');                                                                              // 2174
    addFormatToken('E', 0, 0, 'isoWeekday');                                                                           // 2175
                                                                                                                       // 2176
    // ALIASES                                                                                                         // 2177
                                                                                                                       // 2178
    addUnitAlias('day', 'd');                                                                                          // 2179
    addUnitAlias('weekday', 'e');                                                                                      // 2180
    addUnitAlias('isoWeekday', 'E');                                                                                   // 2181
                                                                                                                       // 2182
    // PARSING                                                                                                         // 2183
                                                                                                                       // 2184
    addRegexToken('d',    match1to2);                                                                                  // 2185
    addRegexToken('e',    match1to2);                                                                                  // 2186
    addRegexToken('E',    match1to2);                                                                                  // 2187
    addRegexToken('dd',   matchWord);                                                                                  // 2188
    addRegexToken('ddd',  matchWord);                                                                                  // 2189
    addRegexToken('dddd', matchWord);                                                                                  // 2190
                                                                                                                       // 2191
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {                                          // 2192
        var weekday = config._locale.weekdaysParse(input);                                                             // 2193
        // if we didn't get a weekday name, mark the date as invalid                                                   // 2194
        if (weekday != null) {                                                                                         // 2195
            week.d = weekday;                                                                                          // 2196
        } else {                                                                                                       // 2197
            config._pf.invalidWeekday = input;                                                                         // 2198
        }                                                                                                              // 2199
    });                                                                                                                // 2200
                                                                                                                       // 2201
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {                                         // 2202
        week[token] = toInt(input);                                                                                    // 2203
    });                                                                                                                // 2204
                                                                                                                       // 2205
    // HELPERS                                                                                                         // 2206
                                                                                                                       // 2207
    function parseWeekday(input, locale) {                                                                             // 2208
        if (typeof input === 'string') {                                                                               // 2209
            if (!isNaN(input)) {                                                                                       // 2210
                input = parseInt(input, 10);                                                                           // 2211
            }                                                                                                          // 2212
            else {                                                                                                     // 2213
                input = locale.weekdaysParse(input);                                                                   // 2214
                if (typeof input !== 'number') {                                                                       // 2215
                    return null;                                                                                       // 2216
                }                                                                                                      // 2217
            }                                                                                                          // 2218
        }                                                                                                              // 2219
        return input;                                                                                                  // 2220
    }                                                                                                                  // 2221
                                                                                                                       // 2222
    // LOCALES                                                                                                         // 2223
                                                                                                                       // 2224
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');                 // 2225
    function localeWeekdays (m) {                                                                                      // 2226
        return this._weekdays[m.day()];                                                                                // 2227
    }                                                                                                                  // 2228
                                                                                                                       // 2229
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');                                         // 2230
    function localeWeekdaysShort (m) {                                                                                 // 2231
        return this._weekdaysShort[m.day()];                                                                           // 2232
    }                                                                                                                  // 2233
                                                                                                                       // 2234
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');                                                  // 2235
    function localeWeekdaysMin (m) {                                                                                   // 2236
        return this._weekdaysMin[m.day()];                                                                             // 2237
    }                                                                                                                  // 2238
                                                                                                                       // 2239
    function localeWeekdaysParse (weekdayName) {                                                                       // 2240
        var i, mom, regex;                                                                                             // 2241
                                                                                                                       // 2242
        if (!this._weekdaysParse) {                                                                                    // 2243
            this._weekdaysParse = [];                                                                                  // 2244
        }                                                                                                              // 2245
                                                                                                                       // 2246
        for (i = 0; i < 7; i++) {                                                                                      // 2247
            // make the regex if we don't have it already                                                              // 2248
            if (!this._weekdaysParse[i]) {                                                                             // 2249
                mom = local__createLocal([2000, 1]).day(i);                                                            // 2250
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');                                      // 2252
            }                                                                                                          // 2253
            // test the regex                                                                                          // 2254
            if (this._weekdaysParse[i].test(weekdayName)) {                                                            // 2255
                return i;                                                                                              // 2256
            }                                                                                                          // 2257
        }                                                                                                              // 2258
    }                                                                                                                  // 2259
                                                                                                                       // 2260
    // MOMENTS                                                                                                         // 2261
                                                                                                                       // 2262
    function getSetDayOfWeek (input) {                                                                                 // 2263
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();                                                // 2264
        if (input != null) {                                                                                           // 2265
            input = parseWeekday(input, this.localeData());                                                            // 2266
            return this.add(input - day, 'd');                                                                         // 2267
        } else {                                                                                                       // 2268
            return day;                                                                                                // 2269
        }                                                                                                              // 2270
    }                                                                                                                  // 2271
                                                                                                                       // 2272
    function getSetLocaleDayOfWeek (input) {                                                                           // 2273
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;                                              // 2274
        return input == null ? weekday : this.add(input - weekday, 'd');                                               // 2275
    }                                                                                                                  // 2276
                                                                                                                       // 2277
    function getSetISODayOfWeek (input) {                                                                              // 2278
        // behaves the same as moment#day except                                                                       // 2279
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)                                              // 2280
        // as a setter, sunday should belong to the previous week.                                                     // 2281
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);                         // 2282
    }                                                                                                                  // 2283
                                                                                                                       // 2284
    addFormatToken('H', ['HH', 2], 0, 'hour');                                                                         // 2285
    addFormatToken('h', ['hh', 2], 0, function () {                                                                    // 2286
        return this.hours() % 12 || 12;                                                                                // 2287
    });                                                                                                                // 2288
                                                                                                                       // 2289
    function meridiem (token, lowercase) {                                                                             // 2290
        addFormatToken(token, 0, 0, function () {                                                                      // 2291
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);                                // 2292
        });                                                                                                            // 2293
    }                                                                                                                  // 2294
                                                                                                                       // 2295
    meridiem('a', true);                                                                                               // 2296
    meridiem('A', false);                                                                                              // 2297
                                                                                                                       // 2298
    // ALIASES                                                                                                         // 2299
                                                                                                                       // 2300
    addUnitAlias('hour', 'h');                                                                                         // 2301
                                                                                                                       // 2302
    // PARSING                                                                                                         // 2303
                                                                                                                       // 2304
    function matchMeridiem (isStrict, locale) {                                                                        // 2305
        return locale._meridiemParse;                                                                                  // 2306
    }                                                                                                                  // 2307
                                                                                                                       // 2308
    addRegexToken('a',  matchMeridiem);                                                                                // 2309
    addRegexToken('A',  matchMeridiem);                                                                                // 2310
    addRegexToken('H',  match1to2);                                                                                    // 2311
    addRegexToken('h',  match1to2);                                                                                    // 2312
    addRegexToken('HH', match1to2, match2);                                                                            // 2313
    addRegexToken('hh', match1to2, match2);                                                                            // 2314
                                                                                                                       // 2315
    addParseToken(['H', 'HH'], HOUR);                                                                                  // 2316
    addParseToken(['a', 'A'], function (input, array, config) {                                                        // 2317
        config._isPm = config._locale.isPM(input);                                                                     // 2318
        config._meridiem = input;                                                                                      // 2319
    });                                                                                                                // 2320
    addParseToken(['h', 'hh'], function (input, array, config) {                                                       // 2321
        array[HOUR] = toInt(input);                                                                                    // 2322
        config._pf.bigHour = true;                                                                                     // 2323
    });                                                                                                                // 2324
                                                                                                                       // 2325
    // LOCALES                                                                                                         // 2326
                                                                                                                       // 2327
    function localeIsPM (input) {                                                                                      // 2328
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays                             // 2329
        // Using charAt should be more compatible.                                                                     // 2330
        return ((input + '').toLowerCase().charAt(0) === 'p');                                                         // 2331
    }                                                                                                                  // 2332
                                                                                                                       // 2333
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;                                                                  // 2334
    function localeMeridiem (hours, minutes, isLower) {                                                                // 2335
        if (hours > 11) {                                                                                              // 2336
            return isLower ? 'pm' : 'PM';                                                                              // 2337
        } else {                                                                                                       // 2338
            return isLower ? 'am' : 'AM';                                                                              // 2339
        }                                                                                                              // 2340
    }                                                                                                                  // 2341
                                                                                                                       // 2342
                                                                                                                       // 2343
    // MOMENTS                                                                                                         // 2344
                                                                                                                       // 2345
    // Setting the hour should keep the time, because the user explicitly                                              // 2346
    // specified which hour he wants. So trying to maintain the same hour (in                                          // 2347
    // a new timezone) makes sense. Adding/subtracting hours does not follow                                           // 2348
    // this rule.                                                                                                      // 2349
    var getSetHour = makeGetSet('Hours', true);                                                                        // 2350
                                                                                                                       // 2351
    addFormatToken('m', ['mm', 2], 0, 'minute');                                                                       // 2352
                                                                                                                       // 2353
    // ALIASES                                                                                                         // 2354
                                                                                                                       // 2355
    addUnitAlias('minute', 'm');                                                                                       // 2356
                                                                                                                       // 2357
    // PARSING                                                                                                         // 2358
                                                                                                                       // 2359
    addRegexToken('m',  match1to2);                                                                                    // 2360
    addRegexToken('mm', match1to2, match2);                                                                            // 2361
    addParseToken(['m', 'mm'], MINUTE);                                                                                // 2362
                                                                                                                       // 2363
    // MOMENTS                                                                                                         // 2364
                                                                                                                       // 2365
    var getSetMinute = makeGetSet('Minutes', false);                                                                   // 2366
                                                                                                                       // 2367
    addFormatToken('s', ['ss', 2], 0, 'second');                                                                       // 2368
                                                                                                                       // 2369
    // ALIASES                                                                                                         // 2370
                                                                                                                       // 2371
    addUnitAlias('second', 's');                                                                                       // 2372
                                                                                                                       // 2373
    // PARSING                                                                                                         // 2374
                                                                                                                       // 2375
    addRegexToken('s',  match1to2);                                                                                    // 2376
    addRegexToken('ss', match1to2, match2);                                                                            // 2377
    addParseToken(['s', 'ss'], SECOND);                                                                                // 2378
                                                                                                                       // 2379
    // MOMENTS                                                                                                         // 2380
                                                                                                                       // 2381
    var getSetSecond = makeGetSet('Seconds', false);                                                                   // 2382
                                                                                                                       // 2383
    addFormatToken('S', 0, 0, function () {                                                                            // 2384
        return ~~(this.millisecond() / 100);                                                                           // 2385
    });                                                                                                                // 2386
                                                                                                                       // 2387
    addFormatToken(0, ['SS', 2], 0, function () {                                                                      // 2388
        return ~~(this.millisecond() / 10);                                                                            // 2389
    });                                                                                                                // 2390
                                                                                                                       // 2391
    function millisecond__milliseconds (token) {                                                                       // 2392
        addFormatToken(0, [token, 3], 0, 'millisecond');                                                               // 2393
    }                                                                                                                  // 2394
                                                                                                                       // 2395
    millisecond__milliseconds('SSS');                                                                                  // 2396
    millisecond__milliseconds('SSSS');                                                                                 // 2397
                                                                                                                       // 2398
    // ALIASES                                                                                                         // 2399
                                                                                                                       // 2400
    addUnitAlias('millisecond', 'ms');                                                                                 // 2401
                                                                                                                       // 2402
    // PARSING                                                                                                         // 2403
                                                                                                                       // 2404
    addRegexToken('S',    match1to3, match1);                                                                          // 2405
    addRegexToken('SS',   match1to3, match2);                                                                          // 2406
    addRegexToken('SSS',  match1to3, match3);                                                                          // 2407
    addRegexToken('SSSS', matchUnsigned);                                                                              // 2408
    addParseToken(['S', 'SS', 'SSS', 'SSSS'], function (input, array) {                                                // 2409
        array[MILLISECOND] = toInt(('0.' + input) * 1000);                                                             // 2410
    });                                                                                                                // 2411
                                                                                                                       // 2412
    // MOMENTS                                                                                                         // 2413
                                                                                                                       // 2414
    var getSetMillisecond = makeGetSet('Milliseconds', false);                                                         // 2415
                                                                                                                       // 2416
    addFormatToken('z',  0, 0, 'zoneAbbr');                                                                            // 2417
    addFormatToken('zz', 0, 0, 'zoneName');                                                                            // 2418
                                                                                                                       // 2419
    // MOMENTS                                                                                                         // 2420
                                                                                                                       // 2421
    function getZoneAbbr () {                                                                                          // 2422
        return this._isUTC ? 'UTC' : '';                                                                               // 2423
    }                                                                                                                  // 2424
                                                                                                                       // 2425
    function getZoneName () {                                                                                          // 2426
        return this._isUTC ? 'Coordinated Universal Time' : '';                                                        // 2427
    }                                                                                                                  // 2428
                                                                                                                       // 2429
    var momentPrototype__proto = Moment.prototype;                                                                     // 2430
                                                                                                                       // 2431
    momentPrototype__proto.add          = add_subtract__add;                                                           // 2432
    momentPrototype__proto.calendar     = calendar__calendar;                                                          // 2433
    momentPrototype__proto.clone        = clone;                                                                       // 2434
    momentPrototype__proto.diff         = diff;                                                                        // 2435
    momentPrototype__proto.endOf        = endOf;                                                                       // 2436
    momentPrototype__proto.format       = format;                                                                      // 2437
    momentPrototype__proto.from         = from;                                                                        // 2438
    momentPrototype__proto.fromNow      = fromNow;                                                                     // 2439
    momentPrototype__proto.get          = getSet;                                                                      // 2440
    momentPrototype__proto.invalidAt    = invalidAt;                                                                   // 2441
    momentPrototype__proto.isAfter      = isAfter;                                                                     // 2442
    momentPrototype__proto.isBefore     = isBefore;                                                                    // 2443
    momentPrototype__proto.isBetween    = isBetween;                                                                   // 2444
    momentPrototype__proto.isSame       = isSame;                                                                      // 2445
    momentPrototype__proto.isValid      = moment_valid__isValid;                                                       // 2446
    momentPrototype__proto.lang         = lang;                                                                        // 2447
    momentPrototype__proto.locale       = locale;                                                                      // 2448
    momentPrototype__proto.localeData   = localeData;                                                                  // 2449
    momentPrototype__proto.max          = prototypeMax;                                                                // 2450
    momentPrototype__proto.min          = prototypeMin;                                                                // 2451
    momentPrototype__proto.parsingFlags = parsingFlags;                                                                // 2452
    momentPrototype__proto.set          = getSet;                                                                      // 2453
    momentPrototype__proto.startOf      = startOf;                                                                     // 2454
    momentPrototype__proto.subtract     = add_subtract__subtract;                                                      // 2455
    momentPrototype__proto.toArray      = toArray;                                                                     // 2456
    momentPrototype__proto.toDate       = toDate;                                                                      // 2457
    momentPrototype__proto.toISOString  = moment_format__toISOString;                                                  // 2458
    momentPrototype__proto.toJSON       = moment_format__toISOString;                                                  // 2459
    momentPrototype__proto.toString     = toString;                                                                    // 2460
    momentPrototype__proto.unix         = unix;                                                                        // 2461
    momentPrototype__proto.valueOf      = to_type__valueOf;                                                            // 2462
                                                                                                                       // 2463
    // Year                                                                                                            // 2464
    momentPrototype__proto.year       = getSetYear;                                                                    // 2465
    momentPrototype__proto.isLeapYear = getIsLeapYear;                                                                 // 2466
                                                                                                                       // 2467
    // Week Year                                                                                                       // 2468
    momentPrototype__proto.weekYear    = getSetWeekYear;                                                               // 2469
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;                                                            // 2470
                                                                                                                       // 2471
    // Quarter                                                                                                         // 2472
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;                                  // 2473
                                                                                                                       // 2474
    // Month                                                                                                           // 2475
    momentPrototype__proto.month       = getSetMonth;                                                                  // 2476
    momentPrototype__proto.daysInMonth = getDaysInMonth;                                                               // 2477
                                                                                                                       // 2478
    // Week                                                                                                            // 2479
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;                          // 2480
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;                       // 2481
    momentPrototype__proto.weeksInYear    = getWeeksInYear;                                                            // 2482
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;                                                         // 2483
                                                                                                                       // 2484
    // Day                                                                                                             // 2485
    momentPrototype__proto.date       = getSetDayOfMonth;                                                              // 2486
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;                     // 2487
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;                                                         // 2488
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;                                                            // 2489
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;                                                               // 2490
                                                                                                                       // 2491
    // Hour                                                                                                            // 2492
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;                                           // 2493
                                                                                                                       // 2494
    // Minute                                                                                                          // 2495
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;                                     // 2496
                                                                                                                       // 2497
    // Second                                                                                                          // 2498
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;                                     // 2499
                                                                                                                       // 2500
    // Millisecond                                                                                                     // 2501
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;                      // 2502
                                                                                                                       // 2503
    // Offset                                                                                                          // 2504
    momentPrototype__proto.utcOffset            = getSetOffset;                                                        // 2505
    momentPrototype__proto.utc                  = setOffsetToUTC;                                                      // 2506
    momentPrototype__proto.local                = setOffsetToLocal;                                                    // 2507
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;                                             // 2508
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;                                                // 2509
    momentPrototype__proto.isDST                = isDaylightSavingTime;                                                // 2510
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;                                         // 2511
    momentPrototype__proto.isLocal              = isLocal;                                                             // 2512
    momentPrototype__proto.isUtcOffset          = isUtcOffset;                                                         // 2513
    momentPrototype__proto.isUtc                = isUtc;                                                               // 2514
    momentPrototype__proto.isUTC                = isUtc;                                                               // 2515
                                                                                                                       // 2516
    // Timezone                                                                                                        // 2517
    momentPrototype__proto.zoneAbbr = getZoneAbbr;                                                                     // 2518
    momentPrototype__proto.zoneName = getZoneName;                                                                     // 2519
                                                                                                                       // 2520
    // Deprecations                                                                                                    // 2521
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);    // 2522
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);        // 2523
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);           // 2524
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
                                                                                                                       // 2526
    var momentPrototype = momentPrototype__proto;                                                                      // 2527
                                                                                                                       // 2528
    function moment__createUnix (input) {                                                                              // 2529
        return local__createLocal(input * 1000);                                                                       // 2530
    }                                                                                                                  // 2531
                                                                                                                       // 2532
    function moment__createInZone () {                                                                                 // 2533
        return local__createLocal.apply(null, arguments).parseZone();                                                  // 2534
    }                                                                                                                  // 2535
                                                                                                                       // 2536
    var defaultCalendar = {                                                                                            // 2537
        sameDay : '[Today at] LT',                                                                                     // 2538
        nextDay : '[Tomorrow at] LT',                                                                                  // 2539
        nextWeek : 'dddd [at] LT',                                                                                     // 2540
        lastDay : '[Yesterday at] LT',                                                                                 // 2541
        lastWeek : '[Last] dddd [at] LT',                                                                              // 2542
        sameElse : 'L'                                                                                                 // 2543
    };                                                                                                                 // 2544
                                                                                                                       // 2545
    function locale_calendar__calendar (key, mom, now) {                                                               // 2546
        var output = this._calendar[key];                                                                              // 2547
        return typeof output === 'function' ? output.call(mom, now) : output;                                          // 2548
    }                                                                                                                  // 2549
                                                                                                                       // 2550
    var defaultLongDateFormat = {                                                                                      // 2551
        LTS  : 'h:mm:ss A',                                                                                            // 2552
        LT   : 'h:mm A',                                                                                               // 2553
        L    : 'MM/DD/YYYY',                                                                                           // 2554
        LL   : 'MMMM D, YYYY',                                                                                         // 2555
        LLL  : 'MMMM D, YYYY LT',                                                                                      // 2556
        LLLL : 'dddd, MMMM D, YYYY LT'                                                                                 // 2557
    };                                                                                                                 // 2558
                                                                                                                       // 2559
    function longDateFormat (key) {                                                                                    // 2560
        var output = this._longDateFormat[key];                                                                        // 2561
        if (!output && this._longDateFormat[key.toUpperCase()]) {                                                      // 2562
            output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {              // 2563
                return val.slice(1);                                                                                   // 2564
            });                                                                                                        // 2565
            this._longDateFormat[key] = output;                                                                        // 2566
        }                                                                                                              // 2567
        return output;                                                                                                 // 2568
    }                                                                                                                  // 2569
                                                                                                                       // 2570
    var defaultInvalidDate = 'Invalid date';                                                                           // 2571
                                                                                                                       // 2572
    function invalidDate () {                                                                                          // 2573
        return this._invalidDate;                                                                                      // 2574
    }                                                                                                                  // 2575
                                                                                                                       // 2576
    var defaultOrdinal = '%d';                                                                                         // 2577
    var defaultOrdinalParse = /\d{1,2}/;                                                                               // 2578
                                                                                                                       // 2579
    function ordinal (number) {                                                                                        // 2580
        return this._ordinal.replace('%d', number);                                                                    // 2581
    }                                                                                                                  // 2582
                                                                                                                       // 2583
    function preParsePostFormat (string) {                                                                             // 2584
        return string;                                                                                                 // 2585
    }                                                                                                                  // 2586
                                                                                                                       // 2587
    var defaultRelativeTime = {                                                                                        // 2588
        future : 'in %s',                                                                                              // 2589
        past   : '%s ago',                                                                                             // 2590
        s  : 'a few seconds',                                                                                          // 2591
        m  : 'a minute',                                                                                               // 2592
        mm : '%d minutes',                                                                                             // 2593
        h  : 'an hour',                                                                                                // 2594
        hh : '%d hours',                                                                                               // 2595
        d  : 'a day',                                                                                                  // 2596
        dd : '%d days',                                                                                                // 2597
        M  : 'a month',                                                                                                // 2598
        MM : '%d months',                                                                                              // 2599
        y  : 'a year',                                                                                                 // 2600
        yy : '%d years'                                                                                                // 2601
    };                                                                                                                 // 2602
                                                                                                                       // 2603
    function relative__relativeTime (number, withoutSuffix, string, isFuture) {                                        // 2604
        var output = this._relativeTime[string];                                                                       // 2605
        return (typeof output === 'function') ?                                                                        // 2606
            output(number, withoutSuffix, string, isFuture) :                                                          // 2607
            output.replace(/%d/i, number);                                                                             // 2608
    }                                                                                                                  // 2609
                                                                                                                       // 2610
    function pastFuture (diff, output) {                                                                               // 2611
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];                                                 // 2612
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);                          // 2613
    }                                                                                                                  // 2614
                                                                                                                       // 2615
    function set__set (config) {                                                                                       // 2616
        var prop, i;                                                                                                   // 2617
        for (i in config) {                                                                                            // 2618
            prop = config[i];                                                                                          // 2619
            if (typeof prop === 'function') {                                                                          // 2620
                this[i] = prop;                                                                                        // 2621
            } else {                                                                                                   // 2622
                this['_' + i] = prop;                                                                                  // 2623
            }                                                                                                          // 2624
        }                                                                                                              // 2625
        // Lenient ordinal parsing accepts just a number in addition to                                                // 2626
        // number + (possibly) stuff coming from _ordinalParseLenient.                                                 // 2627
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);                    // 2628
    }                                                                                                                  // 2629
                                                                                                                       // 2630
    var prototype__proto = Locale.prototype;                                                                           // 2631
                                                                                                                       // 2632
    prototype__proto._calendar       = defaultCalendar;                                                                // 2633
    prototype__proto.calendar        = locale_calendar__calendar;                                                      // 2634
    prototype__proto._longDateFormat = defaultLongDateFormat;                                                          // 2635
    prototype__proto.longDateFormat  = longDateFormat;                                                                 // 2636
    prototype__proto._invalidDate    = defaultInvalidDate;                                                             // 2637
    prototype__proto.invalidDate     = invalidDate;                                                                    // 2638
    prototype__proto._ordinal        = defaultOrdinal;                                                                 // 2639
    prototype__proto.ordinal         = ordinal;                                                                        // 2640
    prototype__proto._ordinalParse   = defaultOrdinalParse;                                                            // 2641
    prototype__proto.preparse        = preParsePostFormat;                                                             // 2642
    prototype__proto.postformat      = preParsePostFormat;                                                             // 2643
    prototype__proto._relativeTime   = defaultRelativeTime;                                                            // 2644
    prototype__proto.relativeTime    = relative__relativeTime;                                                         // 2645
    prototype__proto.pastFuture      = pastFuture;                                                                     // 2646
    prototype__proto.set             = set__set;                                                                       // 2647
                                                                                                                       // 2648
    // Month                                                                                                           // 2649
    prototype__proto.months       =        localeMonths;                                                               // 2650
    prototype__proto._months      = defaultLocaleMonths;                                                               // 2651
    prototype__proto.monthsShort  =        localeMonthsShort;                                                          // 2652
    prototype__proto._monthsShort = defaultLocaleMonthsShort;                                                          // 2653
    prototype__proto.monthsParse  =        localeMonthsParse;                                                          // 2654
                                                                                                                       // 2655
    // Week                                                                                                            // 2656
    prototype__proto.week = localeWeek;                                                                                // 2657
    prototype__proto._week = defaultLocaleWeek;                                                                        // 2658
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;                                                            // 2659
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;                                                            // 2660
                                                                                                                       // 2661
    // Day of Week                                                                                                     // 2662
    prototype__proto.weekdays       =        localeWeekdays;                                                           // 2663
    prototype__proto._weekdays      = defaultLocaleWeekdays;                                                           // 2664
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;                                                        // 2665
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;                                                        // 2666
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;                                                      // 2667
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;                                                      // 2668
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;                                                      // 2669
                                                                                                                       // 2670
    // Hours                                                                                                           // 2671
    prototype__proto.isPM = localeIsPM;                                                                                // 2672
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;                                                      // 2673
    prototype__proto.meridiem = localeMeridiem;                                                                        // 2674
                                                                                                                       // 2675
    function lists__get (format, index, field, setter) {                                                               // 2676
        var locale = locales__getLocale();                                                                             // 2677
        var utc = utc__createUTC().set(setter, index);                                                                 // 2678
        return locale[field](utc, format);                                                                             // 2679
    }                                                                                                                  // 2680
                                                                                                                       // 2681
    function list (format, index, field, count, setter) {                                                              // 2682
        if (typeof format === 'number') {                                                                              // 2683
            index = format;                                                                                            // 2684
            format = undefined;                                                                                        // 2685
        }                                                                                                              // 2686
                                                                                                                       // 2687
        format = format || '';                                                                                         // 2688
                                                                                                                       // 2689
        if (index != null) {                                                                                           // 2690
            return lists__get(format, index, field, setter);                                                           // 2691
        }                                                                                                              // 2692
                                                                                                                       // 2693
        var i;                                                                                                         // 2694
        var out = [];                                                                                                  // 2695
        for (i = 0; i < count; i++) {                                                                                  // 2696
            out[i] = lists__get(format, i, field, setter);                                                             // 2697
        }                                                                                                              // 2698
        return out;                                                                                                    // 2699
    }                                                                                                                  // 2700
                                                                                                                       // 2701
    function lists__listMonths (format, index) {                                                                       // 2702
        return list(format, index, 'months', 12, 'month');                                                             // 2703
    }                                                                                                                  // 2704
                                                                                                                       // 2705
    function lists__listMonthsShort (format, index) {                                                                  // 2706
        return list(format, index, 'monthsShort', 12, 'month');                                                        // 2707
    }                                                                                                                  // 2708
                                                                                                                       // 2709
    function lists__listWeekdays (format, index) {                                                                     // 2710
        return list(format, index, 'weekdays', 7, 'day');                                                              // 2711
    }                                                                                                                  // 2712
                                                                                                                       // 2713
    function lists__listWeekdaysShort (format, index) {                                                                // 2714
        return list(format, index, 'weekdaysShort', 7, 'day');                                                         // 2715
    }                                                                                                                  // 2716
                                                                                                                       // 2717
    function lists__listWeekdaysMin (format, index) {                                                                  // 2718
        return list(format, index, 'weekdaysMin', 7, 'day');                                                           // 2719
    }                                                                                                                  // 2720
                                                                                                                       // 2721
    locales__getSetGlobalLocale('en', {                                                                                // 2722
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,                                                                          // 2723
        ordinal : function (number) {                                                                                  // 2724
            var b = number % 10,                                                                                       // 2725
                output = (toInt(number % 100 / 10) === 1) ? 'th' :                                                     // 2726
                (b === 1) ? 'st' :                                                                                     // 2727
                (b === 2) ? 'nd' :                                                                                     // 2728
                (b === 3) ? 'rd' : 'th';                                                                               // 2729
            return number + output;                                                                                    // 2730
        }                                                                                                              // 2731
    });                                                                                                                // 2732
                                                                                                                       // 2733
    // Side effect imports                                                                                             // 2734
    hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locales__getSetGlobalLocale);
    hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locales__getLocale);
                                                                                                                       // 2737
    var mathAbs = Math.abs;                                                                                            // 2738
                                                                                                                       // 2739
    function abs__abs () {                                                                                             // 2740
        var data           = this._data;                                                                               // 2741
                                                                                                                       // 2742
        this._milliseconds = mathAbs(this._milliseconds);                                                              // 2743
        this._days         = mathAbs(this._days);                                                                      // 2744
        this._months       = mathAbs(this._months);                                                                    // 2745
                                                                                                                       // 2746
        data.milliseconds  = mathAbs(data.milliseconds);                                                               // 2747
        data.seconds       = mathAbs(data.seconds);                                                                    // 2748
        data.minutes       = mathAbs(data.minutes);                                                                    // 2749
        data.hours         = mathAbs(data.hours);                                                                      // 2750
        data.months        = mathAbs(data.months);                                                                     // 2751
        data.years         = mathAbs(data.years);                                                                      // 2752
                                                                                                                       // 2753
        return this;                                                                                                   // 2754
    }                                                                                                                  // 2755
                                                                                                                       // 2756
    function duration_add_subtract__addSubtract (duration, input, value, direction) {                                  // 2757
        var other = create__createDuration(input, value);                                                              // 2758
                                                                                                                       // 2759
        duration._milliseconds += direction * other._milliseconds;                                                     // 2760
        duration._days         += direction * other._days;                                                             // 2761
        duration._months       += direction * other._months;                                                           // 2762
                                                                                                                       // 2763
        return duration._bubble();                                                                                     // 2764
    }                                                                                                                  // 2765
                                                                                                                       // 2766
    // supports only 2.0-style add(1, 's') or add(duration)                                                            // 2767
    function duration_add_subtract__add (input, value) {                                                               // 2768
        return duration_add_subtract__addSubtract(this, input, value, 1);                                              // 2769
    }                                                                                                                  // 2770
                                                                                                                       // 2771
    // supports only 2.0-style subtract(1, 's') or subtract(duration)                                                  // 2772
    function duration_add_subtract__subtract (input, value) {                                                          // 2773
        return duration_add_subtract__addSubtract(this, input, value, -1);                                             // 2774
    }                                                                                                                  // 2775
                                                                                                                       // 2776
    function bubble () {                                                                                               // 2777
        var milliseconds = this._milliseconds;                                                                         // 2778
        var days         = this._days;                                                                                 // 2779
        var months       = this._months;                                                                               // 2780
        var data         = this._data;                                                                                 // 2781
        var seconds, minutes, hours, years = 0;                                                                        // 2782
                                                                                                                       // 2783
        // The following code bubbles up values, see the tests for                                                     // 2784
        // examples of what that means.                                                                                // 2785
        data.milliseconds = milliseconds % 1000;                                                                       // 2786
                                                                                                                       // 2787
        seconds           = absFloor(milliseconds / 1000);                                                             // 2788
        data.seconds      = seconds % 60;                                                                              // 2789
                                                                                                                       // 2790
        minutes           = absFloor(seconds / 60);                                                                    // 2791
        data.minutes      = minutes % 60;                                                                              // 2792
                                                                                                                       // 2793
        hours             = absFloor(minutes / 60);                                                                    // 2794
        data.hours        = hours % 24;                                                                                // 2795
                                                                                                                       // 2796
        days += absFloor(hours / 24);                                                                                  // 2797
                                                                                                                       // 2798
        // Accurately convert days to years, assume start from year 0.                                                 // 2799
        years = absFloor(daysToYears(days));                                                                           // 2800
        days -= absFloor(yearsToDays(years));                                                                          // 2801
                                                                                                                       // 2802
        // 30 days to a month                                                                                          // 2803
        // TODO (iskren): Use anchor date (like 1st Jan) to compute this.                                              // 2804
        months += absFloor(days / 30);                                                                                 // 2805
        days   %= 30;                                                                                                  // 2806
                                                                                                                       // 2807
        // 12 months -> 1 year                                                                                         // 2808
        years  += absFloor(months / 12);                                                                               // 2809
        months %= 12;                                                                                                  // 2810
                                                                                                                       // 2811
        data.days   = days;                                                                                            // 2812
        data.months = months;                                                                                          // 2813
        data.years  = years;                                                                                           // 2814
                                                                                                                       // 2815
        return this;                                                                                                   // 2816
    }                                                                                                                  // 2817
                                                                                                                       // 2818
    function daysToYears (days) {                                                                                      // 2819
        // 400 years have 146097 days (taking into account leap year rules)                                            // 2820
        return days * 400 / 146097;                                                                                    // 2821
    }                                                                                                                  // 2822
                                                                                                                       // 2823
    function yearsToDays (years) {                                                                                     // 2824
        // years * 365 + absFloor(years / 4) -                                                                         // 2825
        //     absFloor(years / 100) + absFloor(years / 400);                                                          // 2826
        return years * 146097 / 400;                                                                                   // 2827
    }                                                                                                                  // 2828
                                                                                                                       // 2829
    function as (units) {                                                                                              // 2830
        var days;                                                                                                      // 2831
        var months;                                                                                                    // 2832
        var milliseconds = this._milliseconds;                                                                         // 2833
                                                                                                                       // 2834
        units = normalizeUnits(units);                                                                                 // 2835
                                                                                                                       // 2836
        if (units === 'month' || units === 'year') {                                                                   // 2837
            days   = this._days   + milliseconds / 864e5;                                                              // 2838
            months = this._months + daysToYears(days) * 12;                                                            // 2839
            return units === 'month' ? months : months / 12;                                                           // 2840
        } else {                                                                                                       // 2841
            // handle milliseconds separately because of floating point math errors (issue #1867)                      // 2842
            days = this._days + Math.round(yearsToDays(this._months / 12));                                            // 2843
            switch (units) {                                                                                           // 2844
                case 'week'   : return days / 7            + milliseconds / 6048e5;                                    // 2845
                case 'day'    : return days                + milliseconds / 864e5;                                     // 2846
                case 'hour'   : return days * 24           + milliseconds / 36e5;                                      // 2847
                case 'minute' : return days * 24 * 60      + milliseconds / 6e4;                                       // 2848
                case 'second' : return days * 24 * 60 * 60 + milliseconds / 1000;                                      // 2849
                // Math.floor prevents floating point math errors here                                                 // 2850
                case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + milliseconds;                      // 2851
                default: throw new Error('Unknown unit ' + units);                                                     // 2852
            }                                                                                                          // 2853
        }                                                                                                              // 2854
    }                                                                                                                  // 2855
                                                                                                                       // 2856
    // TODO: Use this.as('ms')?                                                                                        // 2857
    function as__valueOf () {                                                                                          // 2858
        return (                                                                                                       // 2859
            this._milliseconds +                                                                                       // 2860
            this._days * 864e5 +                                                                                       // 2861
            (this._months % 12) * 2592e6 +                                                                             // 2862
            toInt(this._months / 12) * 31536e6                                                                         // 2863
        );                                                                                                             // 2864
    }                                                                                                                  // 2865
                                                                                                                       // 2866
    function makeAs (alias) {                                                                                          // 2867
        return function () {                                                                                           // 2868
            return this.as(alias);                                                                                     // 2869
        };                                                                                                             // 2870
    }                                                                                                                  // 2871
                                                                                                                       // 2872
    var asMilliseconds = makeAs('ms');                                                                                 // 2873
    var asSeconds      = makeAs('s');                                                                                  // 2874
    var asMinutes      = makeAs('m');                                                                                  // 2875
    var asHours        = makeAs('h');                                                                                  // 2876
    var asDays         = makeAs('d');                                                                                  // 2877
    var asWeeks        = makeAs('w');                                                                                  // 2878
    var asMonths       = makeAs('M');                                                                                  // 2879
    var asYears        = makeAs('y');                                                                                  // 2880
                                                                                                                       // 2881
    function get__get (units) {                                                                                        // 2882
        units = normalizeUnits(units);                                                                                 // 2883
        return this[units + 's']();                                                                                    // 2884
    }                                                                                                                  // 2885
                                                                                                                       // 2886
    function makeGetter(name) {                                                                                        // 2887
        return function () {                                                                                           // 2888
            return this._data[name];                                                                                   // 2889
        };                                                                                                             // 2890
    }                                                                                                                  // 2891
                                                                                                                       // 2892
    var get__milliseconds = makeGetter('milliseconds');                                                                // 2893
    var seconds      = makeGetter('seconds');                                                                          // 2894
    var minutes      = makeGetter('minutes');                                                                          // 2895
    var hours        = makeGetter('hours');                                                                            // 2896
    var days         = makeGetter('days');                                                                             // 2897
    var months       = makeGetter('months');                                                                           // 2898
    var years        = makeGetter('years');                                                                            // 2899
                                                                                                                       // 2900
    function weeks () {                                                                                                // 2901
        return absFloor(this.days() / 7);                                                                              // 2902
    }                                                                                                                  // 2903
                                                                                                                       // 2904
    var round = Math.round;                                                                                            // 2905
    var thresholds = {                                                                                                 // 2906
        s: 45,  // seconds to minute                                                                                   // 2907
        m: 45,  // minutes to hour                                                                                     // 2908
        h: 22,  // hours to day                                                                                        // 2909
        d: 26,  // days to month                                                                                       // 2910
        M: 11   // months to year                                                                                      // 2911
    };                                                                                                                 // 2912
                                                                                                                       // 2913
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize                          // 2914
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {                                      // 2915
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);                                    // 2916
    }                                                                                                                  // 2917
                                                                                                                       // 2918
    function humanize__relativeTime (posNegDuration, withoutSuffix, locale) {                                          // 2919
        var duration = create__createDuration(posNegDuration).abs();                                                   // 2920
        var seconds  = round(duration.as('s'));                                                                        // 2921
        var minutes  = round(duration.as('m'));                                                                        // 2922
        var hours    = round(duration.as('h'));                                                                        // 2923
        var days     = round(duration.as('d'));                                                                        // 2924
        var months   = round(duration.as('M'));                                                                        // 2925
        var years    = round(duration.as('y'));                                                                        // 2926
                                                                                                                       // 2927
        var a = seconds < thresholds.s && ['s', seconds]  ||                                                           // 2928
                minutes === 1          && ['m']           ||                                                           // 2929
                minutes < thresholds.m && ['mm', minutes] ||                                                           // 2930
                hours   === 1          && ['h']           ||                                                           // 2931
                hours   < thresholds.h && ['hh', hours]   ||                                                           // 2932
                days    === 1          && ['d']           ||                                                           // 2933
                days    < thresholds.d && ['dd', days]    ||                                                           // 2934
                months  === 1          && ['M']           ||                                                           // 2935
                months  < thresholds.M && ['MM', months]  ||                                                           // 2936
                years   === 1          && ['y']           || ['yy', years];                                            // 2937
                                                                                                                       // 2938
        a[2] = withoutSuffix;                                                                                          // 2939
        a[3] = +posNegDuration > 0;                                                                                    // 2940
        a[4] = locale;                                                                                                 // 2941
        return substituteTimeAgo.apply(null, a);                                                                       // 2942
    }                                                                                                                  // 2943
                                                                                                                       // 2944
    // This function allows you to set a threshold for relative time strings                                           // 2945
    function humanize__getSetRelativeTimeThreshold (threshold, limit) {                                                // 2946
        if (thresholds[threshold] === undefined) {                                                                     // 2947
            return false;                                                                                              // 2948
        }                                                                                                              // 2949
        if (limit === undefined) {                                                                                     // 2950
            return thresholds[threshold];                                                                              // 2951
        }                                                                                                              // 2952
        thresholds[threshold] = limit;                                                                                 // 2953
        return true;                                                                                                   // 2954
    }                                                                                                                  // 2955
                                                                                                                       // 2956
    function humanize (withSuffix) {                                                                                   // 2957
        var locale = this.localeData();                                                                                // 2958
        var output = humanize__relativeTime(this, !withSuffix, locale);                                                // 2959
                                                                                                                       // 2960
        if (withSuffix) {                                                                                              // 2961
            output = locale.pastFuture(+this, output);                                                                 // 2962
        }                                                                                                              // 2963
                                                                                                                       // 2964
        return locale.postformat(output);                                                                              // 2965
    }                                                                                                                  // 2966
                                                                                                                       // 2967
    var iso_string__abs = Math.abs;                                                                                    // 2968
                                                                                                                       // 2969
    function iso_string__toISOString() {                                                                               // 2970
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js                // 2971
        var Y = iso_string__abs(this.years());                                                                         // 2972
        var M = iso_string__abs(this.months());                                                                        // 2973
        var D = iso_string__abs(this.days());                                                                          // 2974
        var h = iso_string__abs(this.hours());                                                                         // 2975
        var m = iso_string__abs(this.minutes());                                                                       // 2976
        var s = iso_string__abs(this.seconds() + this.milliseconds() / 1000);                                          // 2977
        var total = this.asSeconds();                                                                                  // 2978
                                                                                                                       // 2979
        if (!total) {                                                                                                  // 2980
            // this is the same as C#'s (Noda) and python (isodate)...                                                 // 2981
            // but not other JS (goog.date)                                                                            // 2982
            return 'P0D';                                                                                              // 2983
        }                                                                                                              // 2984
                                                                                                                       // 2985
        return (total < 0 ? '-' : '') +                                                                                // 2986
            'P' +                                                                                                      // 2987
            (Y ? Y + 'Y' : '') +                                                                                       // 2988
            (M ? M + 'M' : '') +                                                                                       // 2989
            (D ? D + 'D' : '') +                                                                                       // 2990
            ((h || m || s) ? 'T' : '') +                                                                               // 2991
            (h ? h + 'H' : '') +                                                                                       // 2992
            (m ? m + 'M' : '') +                                                                                       // 2993
            (s ? s + 'S' : '');                                                                                        // 2994
    }                                                                                                                  // 2995
                                                                                                                       // 2996
    var duration_prototype__proto = Duration.prototype;                                                                // 2997
                                                                                                                       // 2998
    duration_prototype__proto.abs            = abs__abs;                                                               // 2999
    duration_prototype__proto.add            = duration_add_subtract__add;                                             // 3000
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;                                        // 3001
    duration_prototype__proto.as             = as;                                                                     // 3002
    duration_prototype__proto.asMilliseconds = asMilliseconds;                                                         // 3003
    duration_prototype__proto.asSeconds      = asSeconds;                                                              // 3004
    duration_prototype__proto.asMinutes      = asMinutes;                                                              // 3005
    duration_prototype__proto.asHours        = asHours;                                                                // 3006
    duration_prototype__proto.asDays         = asDays;                                                                 // 3007
    duration_prototype__proto.asWeeks        = asWeeks;                                                                // 3008
    duration_prototype__proto.asMonths       = asMonths;                                                               // 3009
    duration_prototype__proto.asYears        = asYears;                                                                // 3010
    duration_prototype__proto.valueOf        = as__valueOf;                                                            // 3011
    duration_prototype__proto._bubble        = bubble;                                                                 // 3012
    duration_prototype__proto.get            = get__get;                                                               // 3013
    duration_prototype__proto.milliseconds   = get__milliseconds;                                                      // 3014
    duration_prototype__proto.seconds        = seconds;                                                                // 3015
    duration_prototype__proto.minutes        = minutes;                                                                // 3016
    duration_prototype__proto.hours          = hours;                                                                  // 3017
    duration_prototype__proto.days           = days;                                                                   // 3018
    duration_prototype__proto.weeks          = weeks;                                                                  // 3019
    duration_prototype__proto.months         = months;                                                                 // 3020
    duration_prototype__proto.years          = years;                                                                  // 3021
    duration_prototype__proto.humanize       = humanize;                                                               // 3022
    duration_prototype__proto.toISOString    = iso_string__toISOString;                                                // 3023
    duration_prototype__proto.toString       = iso_string__toISOString;                                                // 3024
    duration_prototype__proto.toJSON         = iso_string__toISOString;                                                // 3025
    duration_prototype__proto.locale         = locale;                                                                 // 3026
    duration_prototype__proto.localeData     = localeData;                                                             // 3027
                                                                                                                       // 3028
    // Deprecations                                                                                                    // 3029
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;                                                                             // 3031
                                                                                                                       // 3032
    // Side effect imports                                                                                             // 3033
                                                                                                                       // 3034
    addFormatToken('X', 0, 0, 'unix');                                                                                 // 3035
    addFormatToken('x', 0, 0, 'valueOf');                                                                              // 3036
                                                                                                                       // 3037
    // PARSING                                                                                                         // 3038
                                                                                                                       // 3039
    addRegexToken('x', matchSigned);                                                                                   // 3040
    addRegexToken('X', matchTimestamp);                                                                                // 3041
    addParseToken('X', function (input, array, config) {                                                               // 3042
        config._d = new Date(parseFloat(input, 10) * 1000);                                                            // 3043
    });                                                                                                                // 3044
    addParseToken('x', function (input, array, config) {                                                               // 3045
        config._d = new Date(toInt(input));                                                                            // 3046
    });                                                                                                                // 3047
                                                                                                                       // 3048
    // Side effect imports                                                                                             // 3049
                                                                                                                       // 3050
                                                                                                                       // 3051
    hooks__hooks.version = '2.10.0';                                                                                   // 3052
                                                                                                                       // 3053
    setHookCallback(local__createLocal);                                                                               // 3054
                                                                                                                       // 3055
    hooks__hooks.fn                    = momentPrototype;                                                              // 3056
    hooks__hooks.min                   = min;                                                                          // 3057
    hooks__hooks.max                   = max;                                                                          // 3058
    hooks__hooks.utc                   = utc__createUTC;                                                               // 3059
    hooks__hooks.unix                  = moment__createUnix;                                                           // 3060
    hooks__hooks.months                = lists__listMonths;                                                            // 3061
    hooks__hooks.isDate                = isDate;                                                                       // 3062
    hooks__hooks.locale                = locales__getSetGlobalLocale;                                                  // 3063
    hooks__hooks.invalid               = valid__createInvalid;                                                         // 3064
    hooks__hooks.duration              = create__createDuration;                                                       // 3065
    hooks__hooks.isMoment              = isMoment;                                                                     // 3066
    hooks__hooks.weekdays              = lists__listWeekdays;                                                          // 3067
    hooks__hooks.parseZone             = moment__createInZone;                                                         // 3068
    hooks__hooks.localeData            = locales__getLocale;                                                           // 3069
    hooks__hooks.isDuration            = isDuration;                                                                   // 3070
    hooks__hooks.monthsShort           = lists__listMonthsShort;                                                       // 3071
    hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;                                                       // 3072
    hooks__hooks.defineLocale          = defineLocale;                                                                 // 3073
    hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;                                                     // 3074
    hooks__hooks.normalizeUnits        = normalizeUnits;                                                               // 3075
    hooks__hooks.relativeTimeThreshold = humanize__getSetRelativeTimeThreshold;                                        // 3076
                                                                                                                       // 3077
    var _moment = hooks__hooks;                                                                                        // 3078
                                                                                                                       // 3079
    return _moment;                                                                                                    // 3080
                                                                                                                       // 3081
}));                                                                                                                   // 3082
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs:moment/meteor/export.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
moment = this.moment;                                                                                                  // 2
delete this.moment;                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['momentjs:moment'] = {
  moment: moment
};

})();
