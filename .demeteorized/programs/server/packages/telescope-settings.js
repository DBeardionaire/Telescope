(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var _ = Package['telescope-lib']._;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
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
var deepExtend = Package['telescope-lib'].deepExtend;
var camelToDash = Package['telescope-lib'].camelToDash;
var dashToCamel = Package['telescope-lib'].dashToCamel;
var camelCaseify = Package['telescope-lib'].camelCaseify;
var removeSetting = Package['telescope-lib'].removeSetting;
var getThemeSetting = Package['telescope-lib'].getThemeSetting;
var getSiteUrl = Package['telescope-lib'].getSiteUrl;
var trimWords = Package['telescope-lib'].trimWords;
var can = Package['telescope-lib'].can;
var capitalise = Package['telescope-lib'].capitalise;

/* Package-scope variables */
var Settings, debug;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-settings/lib/settings.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Settings = {                                                                                                           // 1
  collection: new Meteor.Collection("settings")                                                                        // 2
};                                                                                                                     // 3
                                                                                                                       // 4
Settings.schema = new SimpleSchema({                                                                                   // 5
  title: {                                                                                                             // 6
    type: String,                                                                                                      // 7
    optional: true,                                                                                                    // 8
    autoform: {                                                                                                        // 9
      group: 'general'                                                                                                 // 10
    }                                                                                                                  // 11
  },                                                                                                                   // 12
  siteUrl: {                                                                                                           // 13
    type: String,                                                                                                      // 14
    optional: true,                                                                                                    // 15
    autoform: {                                                                                                        // 16
      group: 'general',                                                                                                // 17
      instructions: 'Your site\'s URL (with trailing "/"). Will default to Meteor.absoluteUrl()'                       // 18
    }                                                                                                                  // 19
  },                                                                                                                   // 20
  tagline: {                                                                                                           // 21
    type: String,                                                                                                      // 22
    optional: true,                                                                                                    // 23
    autoform: {                                                                                                        // 24
      group: 'general'                                                                                                 // 25
    }                                                                                                                  // 26
  },                                                                                                                   // 27
  description: {                                                                                                       // 28
    type: String,                                                                                                      // 29
    optional: true,                                                                                                    // 30
    autoform: {                                                                                                        // 31
      group: 'general',                                                                                                // 32
      rows: 5,                                                                                                         // 33
      instructions: 'A short description used for SEO purposes.'                                                       // 34
    }                                                                                                                  // 35
  },                                                                                                                   // 36
  siteImage: {                                                                                                         // 37
    type: String,                                                                                                      // 38
    optional: true,                                                                                                    // 39
    regEx: SimpleSchema.RegEx.Url,                                                                                     // 40
    autoform: {                                                                                                        // 41
      group: "general",                                                                                                // 42
      instructions: "URL to an image for the open graph image tag for all pages"                                       // 43
    }                                                                                                                  // 44
  },                                                                                                                   // 45
  navLayout: {                                                                                                         // 46
    type: String,                                                                                                      // 47
    optional: true,                                                                                                    // 48
    autoform: {                                                                                                        // 49
      group: 'general',                                                                                                // 50
      instructions: 'The layout used for the main menu',                                                               // 51
      options: [                                                                                                       // 52
        {value: 'top-nav', label: 'Top'},                                                                              // 53
        {value: 'side-nav', label: 'Side'}                                                                             // 54
      ]                                                                                                                // 55
    }                                                                                                                  // 56
  },                                                                                                                   // 57
  requireViewInvite: {                                                                                                 // 58
    type: Boolean,                                                                                                     // 59
    optional: true,                                                                                                    // 60
    autoform: {                                                                                                        // 61
      group: 'invites',                                                                                                // 62
      leftLabel: 'Require View Invite'                                                                                 // 63
    }                                                                                                                  // 64
  },                                                                                                                   // 65
  requirePostInvite: {                                                                                                 // 66
    type: Boolean,                                                                                                     // 67
    optional: true,                                                                                                    // 68
    autoform: {                                                                                                        // 69
      group: 'invites',                                                                                                // 70
      leftLabel: 'Require Post Invite'                                                                                 // 71
    }                                                                                                                  // 72
  },                                                                                                                   // 73
  requirePostsApproval: {                                                                                              // 74
    type: Boolean,                                                                                                     // 75
    optional: true,                                                                                                    // 76
    autoform: {                                                                                                        // 77
      group: 'general',                                                                                                // 78
      instructions: "Posts must be approved by admin",                                                                 // 79
      leftLabel: "Require Posts Approval"                                                                              // 80
    }                                                                                                                  // 81
  },                                                                                                                   // 82
  defaultEmail: {                                                                                                      // 83
    type: String,                                                                                                      // 84
    optional: true,                                                                                                    // 85
    autoform: {                                                                                                        // 86
      group: 'email',                                                                                                  // 87
      instructions: 'The address all outgoing emails will be sent from.',                                              // 88
      private: true                                                                                                    // 89
    }                                                                                                                  // 90
  },                                                                                                                   // 91
  mailUrl: {                                                                                                           // 92
    type: String,                                                                                                      // 93
    optional: true,                                                                                                    // 94
    autoform: {                                                                                                        // 95
      group: 'email',                                                                                                  // 96
      instructions: 'MAIL_URL environment variable (requires restart).',                                               // 97
      private: true                                                                                                    // 98
    }                                                                                                                  // 99
  },                                                                                                                   // 100
  scoreUpdateInterval: {                                                                                               // 101
    type: Number,                                                                                                      // 102
    optional: true,                                                                                                    // 103
    defaultValue: 30,                                                                                                  // 104
    autoform: {                                                                                                        // 105
      group: 'scoring',                                                                                                // 106
      instructions: 'How often to recalculate scores, in seconds (default to 30)',                                     // 107
      private: true                                                                                                    // 108
    }                                                                                                                  // 109
  },                                                                                                                   // 110
  defaultView: {                                                                                                       // 111
    type: String,                                                                                                      // 112
    optional: true,                                                                                                    // 113
    autoform: {                                                                                                        // 114
      group: 'posts',                                                                                                  // 115
      instructions: 'The view used for the front page',                                                                // 116
      options: function () {                                                                                           // 117
        return _.map(viewsMenu, function (view) {                                                                      // 118
          return {                                                                                                     // 119
            value: camelCaseify(view.label),                                                                           // 120
            label: view.label                                                                                          // 121
          };                                                                                                           // 122
        });                                                                                                            // 123
      }                                                                                                                // 124
    }                                                                                                                  // 125
  },                                                                                                                   // 126
  postsLayout: {                                                                                                       // 127
    type: String,                                                                                                      // 128
    optional: true,                                                                                                    // 129
    autoform: {                                                                                                        // 130
      group: 'posts',                                                                                                  // 131
      instructions: 'The layout used for post lists',                                                                  // 132
      options: [                                                                                                       // 133
        {value: 'posts-list', label: 'List'},                                                                          // 134
        {value: 'posts-grid', label: 'Grid'}                                                                           // 135
      ]                                                                                                                // 136
    }                                                                                                                  // 137
  },                                                                                                                   // 138
  postViews: {                                                                                                         // 139
    type: [String],                                                                                                    // 140
    optional: true,                                                                                                    // 141
    autoform: {                                                                                                        // 142
      group: 'posts',                                                                                                  // 143
      instructions: 'Posts views showed in the views menu',                                                            // 144
      editable: true,                                                                                                  // 145
      noselect: true,                                                                                                  // 146
      options: function () {                                                                                           // 147
        return _.map(viewsMenu, function (item){                                                                       // 148
          return {                                                                                                     // 149
            value: item.route,                                                                                         // 150
            label: item.label                                                                                          // 151
          }                                                                                                            // 152
        });                                                                                                            // 153
      }                                                                                                                // 154
    }                                                                                                                  // 155
  },                                                                                                                   // 156
  postInterval: {                                                                                                      // 157
    type: Number,                                                                                                      // 158
    optional: true,                                                                                                    // 159
    defaultValue: 30,                                                                                                  // 160
    autoform: {                                                                                                        // 161
      group: 'posts',                                                                                                  // 162
      instructions: 'Minimum time between posts, in seconds (defaults to 30)'                                          // 163
    }                                                                                                                  // 164
  },                                                                                                                   // 165
  commentInterval: {                                                                                                   // 166
    type: Number,                                                                                                      // 167
    optional: true,                                                                                                    // 168
    defaultValue: 15,                                                                                                  // 169
    autoform: {                                                                                                        // 170
      group: 'comments',                                                                                               // 171
      instructions: 'Minimum time between comments, in seconds (defaults to 15)'                                       // 172
    }                                                                                                                  // 173
  },                                                                                                                   // 174
  maxPostsPerDay: {                                                                                                    // 175
    type: Number,                                                                                                      // 176
    optional: true,                                                                                                    // 177
    defaultValue: 30,                                                                                                  // 178
    autoform: {                                                                                                        // 179
      group: 'posts',                                                                                                  // 180
      instructions: 'Maximum number of posts a user can post in a day (default to 30).'                                // 181
    }                                                                                                                  // 182
  },                                                                                                                   // 183
  startInvitesCount: {                                                                                                 // 184
    type: Number,                                                                                                      // 185
    defaultValue: 3,                                                                                                   // 186
    optional: true,                                                                                                    // 187
    autoform: {                                                                                                        // 188
      group: 'invites'                                                                                                 // 189
    }                                                                                                                  // 190
  },                                                                                                                   // 191
  postsPerPage: {                                                                                                      // 192
    type: Number,                                                                                                      // 193
    defaultValue: 10,                                                                                                  // 194
    optional: true,                                                                                                    // 195
    autoform: {                                                                                                        // 196
      group: 'posts'                                                                                                   // 197
    }                                                                                                                  // 198
  },                                                                                                                   // 199
  logoUrl: {                                                                                                           // 200
    type: String,                                                                                                      // 201
    optional: true,                                                                                                    // 202
    autoform: {                                                                                                        // 203
      group: 'logo'                                                                                                    // 204
    }                                                                                                                  // 205
  },                                                                                                                   // 206
  logoHeight: {                                                                                                        // 207
    type: Number,                                                                                                      // 208
    optional: true,                                                                                                    // 209
    autoform: {                                                                                                        // 210
      group: 'logo'                                                                                                    // 211
    }                                                                                                                  // 212
  },                                                                                                                   // 213
  logoWidth: {                                                                                                         // 214
    type: Number,                                                                                                      // 215
    optional: true,                                                                                                    // 216
    autoform: {                                                                                                        // 217
      group: 'logo'                                                                                                    // 218
    }                                                                                                                  // 219
  },                                                                                                                   // 220
  faviconUrl: {                                                                                                        // 221
    type: String,                                                                                                      // 222
    optional: true,                                                                                                    // 223
    autoform: {                                                                                                        // 224
      group: 'logo'                                                                                                    // 225
    }                                                                                                                  // 226
  },                                                                                                                   // 227
  language: {                                                                                                          // 228
    type: String,                                                                                                      // 229
    defaultValue: 'en',                                                                                                // 230
    optional: true,                                                                                                    // 231
    autoform: {                                                                                                        // 232
      group: 'general',                                                                                                // 233
      instructions: 'The app\'s language. Defaults to English.',                                                       // 234
      options: function () {                                                                                           // 235
        var languages = _.map(TAPi18n.getLanguages(), function (item, key) {                                           // 236
          return {                                                                                                     // 237
            value: key,                                                                                                // 238
            label: item.name                                                                                           // 239
          }                                                                                                            // 240
        });                                                                                                            // 241
        return languages                                                                                               // 242
      }                                                                                                                // 243
    }                                                                                                                  // 244
  },                                                                                                                   // 245
  backgroundCSS: {                                                                                                     // 246
    type: String,                                                                                                      // 247
    optional: true,                                                                                                    // 248
    autoform: {                                                                                                        // 249
      group: 'extras',                                                                                                 // 250
      instructions: 'CSS code for the <body>\'s "background" property',                                                // 251
      rows: 5                                                                                                          // 252
    }                                                                                                                  // 253
  },                                                                                                                   // 254
  accentColor: {                                                                                                       // 255
    type: String,                                                                                                      // 256
    optional: true,                                                                                                    // 257
    autoform: {                                                                                                        // 258
      group: 'colors',                                                                                                 // 259
      instructions: 'Used for button backgrounds.'                                                                     // 260
    }                                                                                                                  // 261
  },                                                                                                                   // 262
  accentContrastColor: {                                                                                               // 263
    type: String,                                                                                                      // 264
    optional: true,                                                                                                    // 265
    autoform: {                                                                                                        // 266
      group: 'colors',                                                                                                 // 267
      instructions: 'Used for button text.'                                                                            // 268
    }                                                                                                                  // 269
  },                                                                                                                   // 270
  secondaryColor: {                                                                                                    // 271
    type: String,                                                                                                      // 272
    optional: true,                                                                                                    // 273
    autoform: {                                                                                                        // 274
      group: 'colors',                                                                                                 // 275
      instructions: 'Used for the navigation background.'                                                              // 276
    }                                                                                                                  // 277
  },                                                                                                                   // 278
  secondaryContrastColor: {                                                                                            // 279
    type: String,                                                                                                      // 280
    optional: true,                                                                                                    // 281
    autoform: {                                                                                                        // 282
      group: 'colors',                                                                                                 // 283
      instructions: 'Used for header text.'                                                                            // 284
    }                                                                                                                  // 285
  },                                                                                                                   // 286
  fontUrl: {                                                                                                           // 287
    type: String,                                                                                                      // 288
    optional: true,                                                                                                    // 289
    autoform: {                                                                                                        // 290
      group: 'fonts',                                                                                                  // 291
      instructions: '@import URL (e.g. https://fonts.googleapis.com/css?family=Source+Sans+Pro)'                       // 292
    }                                                                                                                  // 293
  },                                                                                                                   // 294
  fontFamily: {                                                                                                        // 295
    type: String,                                                                                                      // 296
    optional: true,                                                                                                    // 297
    autoform: {                                                                                                        // 298
      group: 'fonts',                                                                                                  // 299
      instructions: 'font-family (e.g. "Source Sans Pro", sans-serif)'                                                 // 300
    }                                                                                                                  // 301
  },                                                                                                                   // 302
  twitterAccount: {                                                                                                    // 303
    type: String,                                                                                                      // 304
    optional: true,                                                                                                    // 305
    autoform: {                                                                                                        // 306
      group: 'integrations'                                                                                            // 307
    }                                                                                                                  // 308
  },                                                                                                                   // 309
  googleAnalyticsId: {                                                                                                 // 310
    type: String,                                                                                                      // 311
    optional: true,                                                                                                    // 312
    autoform: {                                                                                                        // 313
      group: 'integrations'                                                                                            // 314
    }                                                                                                                  // 315
  },                                                                                                                   // 316
  mixpanelId: {                                                                                                        // 317
    type: String,                                                                                                      // 318
    optional: true,                                                                                                    // 319
    autoform: {                                                                                                        // 320
      group: 'integrations'                                                                                            // 321
    }                                                                                                                  // 322
  },                                                                                                                   // 323
  clickyId: {                                                                                                          // 324
    type: String,                                                                                                      // 325
    optional: true,                                                                                                    // 326
    autoform: {                                                                                                        // 327
      group: 'integrations'                                                                                            // 328
    }                                                                                                                  // 329
  },                                                                                                                   // 330
  footerCode: {                                                                                                        // 331
    type: String,                                                                                                      // 332
    optional: true,                                                                                                    // 333
    autoform: {                                                                                                        // 334
      group: 'extras',                                                                                                 // 335
      instructions: 'Footer content (accepts Markdown).',                                                              // 336
      rows: 5                                                                                                          // 337
    }                                                                                                                  // 338
  },                                                                                                                   // 339
  extraCode: {                                                                                                         // 340
    type: String,                                                                                                      // 341
    optional: true,                                                                                                    // 342
    autoform: {                                                                                                        // 343
      group: 'extras',                                                                                                 // 344
      instructions: 'Any extra HTML code you want to include on every page.',                                          // 345
      rows: 5                                                                                                          // 346
    }                                                                                                                  // 347
  },                                                                                                                   // 348
  emailFooter: {                                                                                                       // 349
    type: String,                                                                                                      // 350
    optional: true,                                                                                                    // 351
    autoform: {                                                                                                        // 352
      group: 'email',                                                                                                  // 353
      instructions: 'Content that will appear at the bottom of outgoing emails (accepts HTML).',                       // 354
      rows: 5,                                                                                                         // 355
      private: true                                                                                                    // 356
    }                                                                                                                  // 357
  },                                                                                                                   // 358
  notes: {                                                                                                             // 359
    type: String,                                                                                                      // 360
    optional: true,                                                                                                    // 361
    autoform: {                                                                                                        // 362
      group: 'extras',                                                                                                 // 363
      instructions: 'You can store any notes or extra information here.',                                              // 364
      rows: 5,                                                                                                         // 365
      private: true                                                                                                    // 366
    }                                                                                                                  // 367
  },                                                                                                                   // 368
  debug: {                                                                                                             // 369
    type: Boolean,                                                                                                     // 370
    optional: true,                                                                                                    // 371
    autoform: {                                                                                                        // 372
      group: 'debug',                                                                                                  // 373
      instructions: 'Enable debug mode for more details console logs'                                                  // 374
    }                                                                                                                  // 375
  },                                                                                                                   // 376
  authMethods: {                                                                                                       // 377
    type: [String],                                                                                                    // 378
    optional: true,                                                                                                    // 379
    autoform: {                                                                                                        // 380
      group: 'auth',                                                                                                   // 381
      editable: true,                                                                                                  // 382
      noselect: true,                                                                                                  // 383
      options: [                                                                                                       // 384
        {                                                                                                              // 385
          value: 'email',                                                                                              // 386
          label: 'Email/Password'                                                                                      // 387
        },                                                                                                             // 388
        {                                                                                                              // 389
          value: 'twitter',                                                                                            // 390
          label: 'Twitter'                                                                                             // 391
        },                                                                                                             // 392
        {                                                                                                              // 393
          value: 'facebook',                                                                                           // 394
          label: 'Facebook'                                                                                            // 395
        }                                                                                                              // 396
      ],                                                                                                               // 397
      instructions: 'Authentication methods (default to email only)'                                                   // 398
    }                                                                                                                  // 399
  }                                                                                                                    // 400
});                                                                                                                    // 401
                                                                                                                       // 402
Settings.collection.attachSchema(Settings.schema);                                                                     // 403
                                                                                                                       // 404
Settings.addToSchema = function(item) {                                                                                // 405
  var itemSchema = {};                                                                                                 // 406
  itemSchema[item.propertyName] = item.propertySchema;                                                                 // 407
                                                                                                                       // 408
  Settings.collection.attachSchema(itemSchema);                                                                        // 409
  Settings.schema = new SimpleSchema(Settings.schema, itemSchema);                                                     // 410
};                                                                                                                     // 411
                                                                                                                       // 412
Settings.get = function(setting, defaultValue) {                                                                       // 413
  var settings = Settings.collection.find().fetch()[0];                                                                // 414
                                                                                                                       // 415
  if (Meteor.isServer && Meteor.settings && !!Meteor.settings[setting]) { // if on the server, look in Meteor.settings // 416
    return Meteor.settings[setting];                                                                                   // 417
                                                                                                                       // 418
  } else if (Meteor.settings && Meteor.settings.public && !!Meteor.settings.public[setting]) { // look in Meteor.settings.public
    return Meteor.settings.public[setting];                                                                            // 420
                                                                                                                       // 421
  } else if(settings && (typeof settings[setting] !== 'undefined')) { // look in Settings collection                   // 422
    return settings[setting];                                                                                          // 423
                                                                                                                       // 424
  } else if (typeof defaultValue !== 'undefined') { // fallback to default                                             // 425
    return  defaultValue;                                                                                              // 426
                                                                                                                       // 427
  } else { // or return undefined                                                                                      // 428
    return undefined;                                                                                                  // 429
  }                                                                                                                    // 430
};                                                                                                                     // 431
                                                                                                                       // 432
// use custom template for checkboxes - not working yet                                                                // 433
// if(Meteor.isClient){                                                                                                // 434
//   AutoForm.setDefaultTemplateForType('afCheckbox', 'settings');                                                     // 435
// }                                                                                                                   // 436
                                                                                                                       // 437
Meteor.startup(function () {                                                                                           // 438
  Settings.collection.allow({                                                                                          // 439
    insert: isAdminById,                                                                                               // 440
    update: isAdminById,                                                                                               // 441
    remove: isAdminById                                                                                                // 442
  });                                                                                                                  // 443
});                                                                                                                    // 444
                                                                                                                       // 445
Meteor.startup(function () {                                                                                           // 446
  // override Meteor.absoluteUrl() with URL provided in settings                                                       // 447
  Meteor.absoluteUrl.defaultOptions.rootUrl = Settings.get('siteUrl', Meteor.absoluteUrl());                           // 448
  debug = Settings.get('debug', false);                                                                                // 449
});                                                                                                                    // 450
                                                                                                                       // 451
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-settings/lib/router.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
  // Settings                                                                                                          // 2
                                                                                                                       // 3
  Router.route('/settings', {                                                                                          // 4
    controller: AdminController,                                                                                       // 5
    name: 'settings',                                                                                                  // 6
    // layoutTemplate: getTemplate('adminLayout'),                                                                     // 7
    data: function () {                                                                                                // 8
      // we only have one set of settings for now                                                                      // 9
                                                                                                                       // 10
      var settings = Settings.collection.findOne();                                                                    // 11
      return {                                                                                                         // 12
        hasSettings: !!settings,                                                                                       // 13
        settings: settings                                                                                             // 14
      };                                                                                                               // 15
    }                                                                                                                  // 16
  });                                                                                                                  // 17
});                                                                                                                    // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-settings/lib/server/publications.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.publish('settings', function() {                                                                                // 1
  var options = {};                                                                                                    // 2
  var privateFields = {};                                                                                              // 3
                                                                                                                       // 4
  // look at Settings.schema to see which fields should be kept private                                                // 5
  _.each(Settings.schema._schema, function( val, key ) {                                                               // 6
    if (val.autoform && !!val.autoform.private)                                                                        // 7
      privateFields[key] = false;                                                                                      // 8
  });                                                                                                                  // 9
                                                                                                                       // 10
  if(!isAdminById(this.userId)){                                                                                       // 11
    options = _.extend(options, {                                                                                      // 12
      fields: privateFields                                                                                            // 13
    });                                                                                                                // 14
  }                                                                                                                    // 15
                                                                                                                       // 16
  return Settings.collection.find({}, options);                                                                        // 17
});                                                                                                                    // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-settings'] = {
  Settings: Settings
};

})();

//# sourceMappingURL=telescope-settings.js.map
