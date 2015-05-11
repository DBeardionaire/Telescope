(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var i18n = Package['telescope-i18n'].i18n;
var setLanguage = Package['telescope-i18n'].setLanguage;
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
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var postStatuses, STATUS_PENDING, STATUS_APPROVED, STATUS_REJECTED, adminMenu, viewsMenu, userMenu, addToPostSchema, addToCommentsSchema, addToSettingsSchema, addToUserSchema, registerPostProperty, registerCommentProperty, registerSetting, registerUserProperty, preloadSubscriptions, primaryNav, secondaryNav, mobileNav, viewParameters, footerModules, heroModules, threadModules, postListTopModules, postModules, postThumbnail, postHeading, postMeta, postClassCallbacks, postSubmitRenderedCallbacks, postSubmitClientCallbacks, postSubmitMethodCallbacks, postAfterSubmitMethodCallbacks, postApproveCallbacks, postEditRenderedCallbacks, postEditClientCallbacks, postEditMethodCallbacks, postAfterEditMethodCallbacks, commentClassCallbacks, commentSubmitRenderedCallbacks, commentSubmitClientCallbacks, commentSubmitMethodCallbacks, commentAfterSubmitMethodCallbacks, commentEditRenderedCallbacks, commentEditClientCallbacks, commentEditMethodCallbacks, commentAfterEditMethodCallbacks, upvoteCallbacks, downvoteCallbacks, cancelUpvoteCallbacks, cancelDownvoteCallbacks, upvoteMethodCallbacks, downvoteMethodCallbacks, cancelUpvoteMethodCallbacks, cancelDownvoteMethodCallbacks, userEditRenderedCallbacks, userEditClientCallbacks, userProfileCompleteChecks, userProfileDisplay, userProfileEdit, userCreatedCallbacks, getTemplate, templates, getIcon, icons, colorTable, registerElementColor, themeSettings, getVotePower, accent, accentContrast, secondary, secondaryContrast;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-base/lib/base.js                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// ------------------------------------- Schemas -------------------------------- //                              // 1
                                                                                                                  // 2
// array containing properties to be added to the post/settings/comments schema on startup.                       // 3
addToPostSchema = [];                                                                                             // 4
addToCommentsSchema = [];                                                                                         // 5
addToUserSchema = [];                                                                                             // 6
                                                                                                                  // 7
registerPostProperty = function (property) {                                                                      // 8
  addToPostSchema.push(property);                                                                                 // 9
}                                                                                                                 // 10
                                                                                                                  // 11
registerCommentProperty = function (property) {                                                                   // 12
  addToCommentsSchema.push(property);                                                                             // 13
}                                                                                                                 // 14
                                                                                                                  // 15
registerSetting = function (property) {                                                                           // 16
  addToSettingsSchema.push(property);                                                                             // 17
}                                                                                                                 // 18
                                                                                                                  // 19
registerUserProperty = function (property) {                                                                      // 20
  addToUserSchema.push(property);                                                                                 // 21
}                                                                                                                 // 22
                                                                                                                  // 23
SimpleSchema.extendOptions({                                                                                      // 24
  editable: Match.Optional(Boolean),  // editable: true means the field can be edited by the document's owner     // 25
  hidden: Match.Optional(Boolean)     // hidden: true means the field is never shown in a form no matter what     // 26
});                                                                                                               // 27
// ----------------------------------- Posts Statuses ------------------------------ //                           // 28
                                                                                                                  // 29
postStatuses = [                                                                                                  // 30
  {                                                                                                               // 31
    value: 1,                                                                                                     // 32
    label: 'Pending'                                                                                              // 33
  },                                                                                                              // 34
  {                                                                                                               // 35
    value: 2,                                                                                                     // 36
    label: 'Approved'                                                                                             // 37
  },                                                                                                              // 38
  {                                                                                                               // 39
    value: 3,                                                                                                     // 40
    label: 'Rejected'                                                                                             // 41
  }                                                                                                               // 42
];                                                                                                                // 43
                                                                                                                  // 44
STATUS_PENDING=1;                                                                                                 // 45
STATUS_APPROVED=2;                                                                                                // 46
STATUS_REJECTED=3;                                                                                                // 47
                                                                                                                  // 48
// ------------------------------------- Navigation -------------------------------- //                           // 49
                                                                                                                  // 50
                                                                                                                  // 51
// array containing nav items;                                                                                    // 52
primaryNav = [                                                                                                    // 53
];                                                                                                                // 54
                                                                                                                  // 55
secondaryNav = [                                                                                                  // 56
  {                                                                                                               // 57
    template: 'userMenu',                                                                                         // 58
    order: 10                                                                                                     // 59
  },                                                                                                              // 60
  {                                                                                                               // 61
    template:'notificationsMenu',                                                                                 // 62
    order: 20                                                                                                     // 63
  },                                                                                                              // 64
  {                                                                                                               // 65
    template: 'submitButton',                                                                                     // 66
    order: 30                                                                                                     // 67
  }                                                                                                               // 68
];                                                                                                                // 69
                                                                                                                  // 70
mobileNav = [                                                                                                     // 71
  {                                                                                                               // 72
    template: 'userMenu',                                                                                         // 73
    order: 10                                                                                                     // 74
  },                                                                                                              // 75
  {                                                                                                               // 76
    template:'notificationsMenu',                                                                                 // 77
    order: 20                                                                                                     // 78
  },                                                                                                              // 79
  {                                                                                                               // 80
    template: 'submitButton',                                                                                     // 81
    order: 30                                                                                                     // 82
  }                                                                                                               // 83
];                                                                                                                // 84
                                                                                                                  // 85
// array containing items in the views menu                                                                       // 86
viewsMenu = [                                                                                                     // 87
  {                                                                                                               // 88
    route: 'posts_top',                                                                                           // 89
    label: 'top',                                                                                                 // 90
    description: 'most_popular_posts'                                                                             // 91
  },                                                                                                              // 92
  {                                                                                                               // 93
    route: 'posts_new',                                                                                           // 94
    label: 'new',                                                                                                 // 95
    description: 'newest_posts'                                                                                   // 96
  },                                                                                                              // 97
  {                                                                                                               // 98
    route: 'posts_best',                                                                                          // 99
    label: 'best',                                                                                                // 100
    description: 'highest_ranked_posts_ever'                                                                      // 101
  },                                                                                                              // 102
  {                                                                                                               // 103
    route: 'posts_pending',                                                                                       // 104
    label: 'pending',                                                                                             // 105
    description: 'posts_awaiting_moderation',                                                                     // 106
    adminOnly: true                                                                                               // 107
  },                                                                                                              // 108
  {                                                                                                               // 109
    route: 'posts_scheduled',                                                                                     // 110
    label: 'scheduled',                                                                                           // 111
    description: 'future_scheduled_posts',                                                                        // 112
    adminOnly: true                                                                                               // 113
  },                                                                                                              // 114
];                                                                                                                // 115
                                                                                                                  // 116
// array containing items in the admin menu                                                                       // 117
adminMenu = [                                                                                                     // 118
  {                                                                                                               // 119
    route: 'settings',                                                                                            // 120
    label: 'Settings',                                                                                            // 121
    description: 'telescope_settings_panel'                                                                       // 122
  },                                                                                                              // 123
  {                                                                                                               // 124
    route: 'usersDashboard',                                                                                      // 125
    label: 'Users',                                                                                               // 126
    description: 'users_dashboard'                                                                                // 127
  }                                                                                                               // 128
];                                                                                                                // 129
                                                                                                                  // 130
userMenu = [                                                                                                      // 131
  {                                                                                                               // 132
    route: function () {                                                                                          // 133
      return Router.path('user_profile', {_idOrSlug: Meteor.user().slug});                                        // 134
    },                                                                                                            // 135
    label: 'profile',                                                                                             // 136
    description: 'view_your_profile'                                                                              // 137
  },                                                                                                              // 138
  {                                                                                                               // 139
    route: function () {                                                                                          // 140
      return Router.path('user_edit', {slug: Meteor.user().slug});                                                // 141
    },                                                                                                            // 142
    label: 'edit_account',                                                                                        // 143
    description: 'edit_your_profile'                                                                              // 144
  },                                                                                                              // 145
  {                                                                                                               // 146
    route: 'settings',                                                                                            // 147
    label: 'settings',                                                                                            // 148
    description: 'settings',                                                                                      // 149
    adminOnly: true                                                                                               // 150
  },                                                                                                              // 151
  {                                                                                                               // 152
    route: 'signOut',                                                                                             // 153
    label: 'sign_out',                                                                                            // 154
    description: 'sign_out'                                                                                       // 155
  }                                                                                                               // 156
];                                                                                                                // 157
// ------------------------------------- Views -------------------------------- //                                // 158
                                                                                                                  // 159
                                                                                                                  // 160
// object containing post list view parameters                                                                    // 161
viewParameters = {};                                                                                              // 162
                                                                                                                  // 163
// will be common to all other view unless specific properties are overwritten                                    // 164
viewParameters.baseParameters = {                                                                                 // 165
  find: {                                                                                                         // 166
    status: STATUS_APPROVED                                                                                       // 167
  },                                                                                                              // 168
  options: {                                                                                                      // 169
    limit: 10                                                                                                     // 170
  }                                                                                                               // 171
};                                                                                                                // 172
                                                                                                                  // 173
viewParameters.top = function (terms) {                                                                           // 174
  return {                                                                                                        // 175
    options: {sort: {sticky: -1, score: -1}}                                                                      // 176
  };                                                                                                              // 177
};                                                                                                                // 178
                                                                                                                  // 179
viewParameters.new = function (terms) {                                                                           // 180
  return {                                                                                                        // 181
    options: {sort: {sticky: -1, postedAt: -1}}                                                                   // 182
  };                                                                                                              // 183
};                                                                                                                // 184
                                                                                                                  // 185
viewParameters.best = function (terms) {                                                                          // 186
  return {                                                                                                        // 187
    options: {sort: {sticky: -1, baseScore: -1}}                                                                  // 188
  };                                                                                                              // 189
};                                                                                                                // 190
                                                                                                                  // 191
viewParameters.pending = function (terms) {                                                                       // 192
  return {                                                                                                        // 193
    find: {                                                                                                       // 194
      status: 1                                                                                                   // 195
    },                                                                                                            // 196
    options: {sort: {createdAt: -1}},                                                                             // 197
    showFuture: true                                                                                              // 198
  };                                                                                                              // 199
};                                                                                                                // 200
                                                                                                                  // 201
viewParameters.scheduled = function (terms) {                                                                     // 202
  return {                                                                                                        // 203
    find: {postedAt: {$gte: new Date()}},                                                                         // 204
    options: {sort: {postedAt: -1}}                                                                               // 205
  };                                                                                                              // 206
};                                                                                                                // 207
                                                                                                                  // 208
viewParameters.userPosts = function (terms) {                                                                     // 209
  return {                                                                                                        // 210
    find: {userId: terms.userId},                                                                                 // 211
    options: {limit: 5, sort: {postedAt: -1}}                                                                     // 212
  };                                                                                                              // 213
};                                                                                                                // 214
                                                                                                                  // 215
viewParameters.userUpvotedPosts = function (terms) {                                                              // 216
  var user = Meteor.users.findOne(terms.userId);                                                                  // 217
  var postsIds = _.pluck(user.votes.upvotedPosts, "itemId");                                                      // 218
  return {                                                                                                        // 219
    find: {_id: {$in: postsIds}, userId: {$ne: terms.userId}}, // exclude own posts                               // 220
    options: {limit: 5, sort: {postedAt: -1}}                                                                     // 221
  };                                                                                                              // 222
};                                                                                                                // 223
                                                                                                                  // 224
viewParameters.userDownvotedPosts = function (terms) {                                                            // 225
  var user = Meteor.users.findOne(terms.userId);                                                                  // 226
  var postsIds = _.pluck(user.votes.downvotedPosts, "itemId");                                                    // 227
  // TODO: sort based on votedAt timestamp and not postedAt, if possible                                          // 228
  return {                                                                                                        // 229
    find: {_id: {$in: postsIds}},                                                                                 // 230
    options: {limit: 5, sort: {postedAt: -1}}                                                                     // 231
  };                                                                                                              // 232
};                                                                                                                // 233
                                                                                                                  // 234
heroModules = [];                                                                                                 // 235
                                                                                                                  // 236
footerModules = [];                                                                                               // 237
                                                                                                                  // 238
threadModules = [];                                                                                               // 239
                                                                                                                  // 240
postListTopModules = [                                                                                            // 241
  {                                                                                                               // 242
    template: 'postViewsNav',                                                                                     // 243
    order: 99                                                                                                     // 244
  }                                                                                                               // 245
];                                                                                                                // 246
                                                                                                                  // 247
postModules = [                                                                                                   // 248
  {                                                                                                               // 249
    template: 'postRank',                                                                                         // 250
    order: 1                                                                                                      // 251
  },                                                                                                              // 252
  {                                                                                                               // 253
    template: 'postUpvote',                                                                                       // 254
    order: 10                                                                                                     // 255
  },                                                                                                              // 256
  {                                                                                                               // 257
    template: 'postContent',                                                                                      // 258
    order: 20                                                                                                     // 259
  },                                                                                                              // 260
  {                                                                                                               // 261
    template: 'postAvatars',                                                                                      // 262
    order: 30                                                                                                     // 263
  },                                                                                                              // 264
  {                                                                                                               // 265
    template: 'postDiscuss',                                                                                      // 266
    order: 40                                                                                                     // 267
  },                                                                                                              // 268
  {                                                                                                               // 269
    template: 'postActions',                                                                                      // 270
    order: 50                                                                                                     // 271
  }                                                                                                               // 272
];                                                                                                                // 273
                                                                                                                  // 274
postThumbnail = [];                                                                                               // 275
                                                                                                                  // 276
postHeading = [                                                                                                   // 277
  {                                                                                                               // 278
    template: 'postTitle',                                                                                        // 279
    order: 10                                                                                                     // 280
  },                                                                                                              // 281
  {                                                                                                               // 282
    template: 'postDomain',                                                                                       // 283
    order: 20                                                                                                     // 284
  }                                                                                                               // 285
];                                                                                                                // 286
                                                                                                                  // 287
postMeta = [                                                                                                      // 288
  {                                                                                                               // 289
    template: 'postAuthor',                                                                                       // 290
    order: 10                                                                                                     // 291
  },                                                                                                              // 292
  {                                                                                                               // 293
    template: 'postInfo',                                                                                         // 294
    order: 20                                                                                                     // 295
  },                                                                                                              // 296
  {                                                                                                               // 297
    template: 'postCommentsLink',                                                                                 // 298
    order: 30                                                                                                     // 299
  },                                                                                                              // 300
  {                                                                                                               // 301
    template: 'postAdmin',                                                                                        // 302
    order: 50                                                                                                     // 303
  }                                                                                                               // 304
];                                                                                                                // 305
// ------------------------------ Callbacks ------------------------------ //                                     // 306
                                                                                                                  // 307
postClassCallbacks = [];                                                                                          // 308
                                                                                                                  // 309
postSubmitClientCallbacks = [];                                                                                   // 310
postSubmitMethodCallbacks = [];                                                                                   // 311
postAfterSubmitMethodCallbacks = []; // runs on server only in a timeout                                          // 312
                                                                                                                  // 313
postEditClientCallbacks = []; // loops over modifier object                                                       // 314
postEditMethodCallbacks = []; // loops over modifier (i.e. "{$set: {foo: bar}}") object                           // 315
postAfterEditMethodCallbacks = []; // loops over modifier object                                                  // 316
                                                                                                                  // 317
postApproveCallbacks = [];                                                                                        // 318
                                                                                                                  // 319
commentClassCallbacks = [];                                                                                       // 320
                                                                                                                  // 321
commentSubmitRenderedCallbacks = [];                                                                              // 322
commentSubmitClientCallbacks = [];                                                                                // 323
commentSubmitMethodCallbacks = [];                                                                                // 324
commentAfterSubmitMethodCallbacks = [];                                                                           // 325
                                                                                                                  // 326
commentEditRenderedCallbacks = [];                                                                                // 327
commentEditClientCallbacks = [];                                                                                  // 328
commentEditMethodCallbacks = []; // not used yet                                                                  // 329
commentAfterEditMethodCallbacks = []; // not used yet                                                             // 330
                                                                                                                  // 331
userEditRenderedCallbacks = [];                                                                                   // 332
userEditClientCallbacks = [];                                                                                     // 333
userCreatedCallbacks = [];                                                                                        // 334
userProfileCompleteChecks = [];                                                                                   // 335
                                                                                                                  // 336
upvoteCallbacks = [];                                                                                             // 337
downvoteCallbacks = [];                                                                                           // 338
cancelUpvoteCallbacks = [];                                                                                       // 339
cancelDownvoteCallbacks = [];                                                                                     // 340
upvoteMethodCallbacks = [];                                                                                       // 341
downvoteMethodCallbacks = [];                                                                                     // 342
cancelUpvoteMethodCallbacks = [];                                                                                 // 343
cancelDownvoteMethodCallbacks = [];                                                                               // 344
                                                                                                                  // 345
// ------------------------------------- User Profiles -------------------------------- //                        // 346
                                                                                                                  // 347
userProfileDisplay = [                                                                                            // 348
  {                                                                                                               // 349
    template: 'userInfo',                                                                                         // 350
    order: 1                                                                                                      // 351
  },                                                                                                              // 352
  {                                                                                                               // 353
    template: 'userPosts',                                                                                        // 354
    order: 2                                                                                                      // 355
  },                                                                                                              // 356
  {                                                                                                               // 357
    template: 'userUpvotedPosts',                                                                                 // 358
    order: 3                                                                                                      // 359
  },                                                                                                              // 360
  {                                                                                                               // 361
    template: 'userDownvotedPosts',                                                                               // 362
    order: 5                                                                                                      // 363
  },                                                                                                              // 364
  {                                                                                                               // 365
    template: 'userComments',                                                                                     // 366
    order: 5                                                                                                      // 367
  }                                                                                                               // 368
];                                                                                                                // 369
                                                                                                                  // 370
userProfileEdit = [                                                                                               // 371
  {                                                                                                               // 372
    template: 'userAccount',                                                                                      // 373
    order: 1                                                                                                      // 374
  }                                                                                                               // 375
];                                                                                                                // 376
                                                                                                                  // 377
userProfileCompleteChecks.push(                                                                                   // 378
  function(user) {                                                                                                // 379
    return !!getEmail(user) && !!getUserName(user);                                                               // 380
  }                                                                                                               // 381
);                                                                                                                // 382
                                                                                                                  // 383
// ------------------------------ Dynamic Templates ------------------------------ //                             // 384
                                                                                                                  // 385
templates = {}                                                                                                    // 386
                                                                                                                  // 387
getTemplate = function (name) {                                                                                   // 388
  // if template has been overwritten, return this; else return template name                                     // 389
  return !!templates[name] ? templates[name] : name;                                                              // 390
};                                                                                                                // 391
                                                                                                                  // 392
// ------------------------------ Theme Settings ------------------------------ //                                // 393
                                                                                                                  // 394
themeSettings = {                                                                                                 // 395
  'useDropdowns': true // whether or not to use dropdown menus in a theme                                         // 396
};                                                                                                                // 397
                                                                                                                  // 398
// ------------------------------ Subscriptions ------------------------------ //                                 // 399
                                                                                                                  // 400
// array containing subscriptions to be preloaded                                                                 // 401
preloadSubscriptions = [];                                                                                        // 402
                                                                                                                  // 403
// ------------------------------- Vote Power -------------------------------- //                                 // 404
                                                                                                                  // 405
// The equation to determine voting power                                                                         // 406
// Default to returning 1 for everybody                                                                           // 407
                                                                                                                  // 408
getVotePower = function (user) {                                                                                  // 409
  return 1;                                                                                                       // 410
};                                                                                                                // 411
                                                                                                                  // 412
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-base/lib/colors.js                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
colorTable = {                                                                                                    // 1
  accentColor: [],                                                                                                // 2
  accentContrastColor: [],                                                                                        // 3
  secondaryColor: [],                                                                                             // 4
  secondaryContrastColor: []                                                                                      // 5
}                                                                                                                 // 6
                                                                                                                  // 7
registerElementColor = function (selector, color, property) {                                                     // 8
  var element = {selector: selector};                                                                             // 9
                                                                                                                  // 10
  if (typeof property !== "undefined")                                                                            // 11
    element.property = property                                                                                   // 12
                                                                                                                  // 13
  colorTable[color].push(element);                                                                                // 14
}                                                                                                                 // 15
                                                                                                                  // 16
// shortcuts                                                                                                      // 17
                                                                                                                  // 18
accent = function (selector, property) {registerElementColor(selector, "accentColor", property);}                 // 19
accentContrast = function (selector, property) {registerElementColor(selector, "accentContrastColor", property);} // 20
secondary = function (selector, property) {registerElementColor(selector, "secondaryColor", property);}           // 21
secondaryContrast = function (selector, property) {registerElementColor(selector, "secondaryContrastColor", property);}
                                                                                                                  // 23
// accentColor                                                                                                    // 24
                                                                                                                  // 25
accent("a:hover");                                                                                                // 26
accent(".post-content .post-heading .post-title:hover");                                                          // 27
accent(".post-content .post-upvote .icon");                                                                       // 28
accent(".comment-actions a i");                                                                                   // 29
accent(".comment-actions.upvoted .upvote i");                                                                     // 30
accent(".comment-actions.downvoted .downvote i");                                                                 // 31
accent(".toggle-actions-link");                                                                                   // 32
accent(".post-meta a:hover");                                                                                     // 33
accent(".action:hover");                                                                                          // 34
accent(".post-upvote .upvote-link i");                                                                            // 35
accent(".post-actions .icon");                                                                                    // 36
accent(".post-share .icon-share");                                                                                // 37
                                                                                                                  // 38
accent('input[type="submit"]', 'background-color');                                                               // 39
accent("button", 'background-color');                                                                             // 40
accent(".button", 'background-color');                                                                            // 41
accent("button.submit", 'background-color');                                                                      // 42
accent(".auth-buttons #login-buttons #login-buttons-password", 'background-color');                               // 43
accent(".btn-primary", 'background-color');                                                                       // 44
accent(".header .btn-primary", 'background-color');                                                               // 45
accent(".header .btn-primary:link", 'background-color');                                                          // 46
accent(".header .btn-primary:visited", 'background-color');                                                       // 47
accent(".error", 'background-color');                                                                             // 48
accent(".mobile-menu-button", 'background-color');                                                                // 49
accent(".login-link-text", 'background-color');                                                                   // 50
accent(".post-category:hover", 'background-color');                                                               // 51
                                                                                                                  // 52
accent(".icon-upvote", "border-color");                                                                           // 53
accent(".icon-more", "border-color");                                                                             // 54
                                                                                                                  // 55
// accentContrastColor                                                                                            // 56
                                                                                                                  // 57
accentContrast('input[type="submit"]');                                                                           // 58
accentContrast("button");                                                                                         // 59
accentContrast(".button");                                                                                        // 60
accentContrast("button.submit");                                                                                  // 61
accentContrast(".auth-buttons #login-buttons #login-buttons-password");                                           // 62
accentContrast(".btn-primary");                                                                                   // 63
accentContrast(".header .btn-primary");                                                                           // 64
accentContrast(".header .btn-primary:link");                                                                      // 65
accentContrast(".header .btn-primary:visited");                                                                   // 66
accentContrast(".error");                                                                                         // 67
accentContrast(".header a.mobile-menu-button");                                                                   // 68
accentContrast("login-link-text");                                                                                // 69
accentContrast(".post-category:hover");                                                                           // 70
                                                                                                                  // 71
// secondaryColor                                                                                                 // 72
                                                                                                                  // 73
secondary(".header", "background-color");                                                                         // 74
                                                                                                                  // 75
// secondaryContrastColor                                                                                         // 76
                                                                                                                  // 77
secondaryContrast(".header");                                                                                     // 78
secondaryContrast(".header .logo a");                                                                             // 79
secondaryContrast(".header .logo a:visited");                                                                     // 80
                                                                                                                  // 81
secondaryContrast(".header .dropdown-top-level", "border-color");                                                 // 82
secondaryContrast(".header .dropdown-accordion .show-more", "border-color");                                      // 83
                                                                                                                  // 84
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-base/lib/icons.js                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// ------------------------------ Dynamic Icons ------------------------------ //                                 // 1
                                                                                                                  // 2
// take an icon name (such as "open") and return the HTML code to display the icon                                // 3
getIcon = function (iconName, iconClass) {                                                                        // 4
  var iconCode = !!icons[iconName] ? icons[iconName] : iconName;                                                  // 5
  var iconClass = (typeof iconClass === 'string') ? ' '+iconClass : '';                                           // 6
  return '<i class="icon fa fa-' + iconCode + ' icon-' + iconName + iconClass+ '" aria-hidden="true"></i>';       // 7
}                                                                                                                 // 8
                                                                                                                  // 9
icons = {                                                                                                         // 10
  open: "plus",                                                                                                   // 11
  close: "minus",                                                                                                 // 12
  upvote: "chevron-up",                                                                                           // 13
  voted: "check",                                                                                                 // 14
  downvote: "chevron-down",                                                                                       // 15
  facebook: "facebook-square",                                                                                    // 16
  twitter: "twitter",                                                                                             // 17
  googleplus: "google-plus",                                                                                      // 18
  linkedin: "linkedin-square",                                                                                    // 19
  comment: "comment-o",                                                                                           // 20
  share: "share-square-o",                                                                                        // 21
  more: "ellipsis-h",                                                                                             // 22
  menu: "bars",                                                                                                   // 23
  subscribe: "envelope-o",                                                                                        // 24
  delete: "trash-o",                                                                                              // 25
  edit: "pencil",                                                                                                 // 26
  popularity: "fire",                                                                                             // 27
  time: "clock-o",                                                                                                // 28
  best: "star",                                                                                                   // 29
  search: "search"                                                                                                // 30
}                                                                                                                 // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-base'] = {
  postStatuses: postStatuses,
  STATUS_PENDING: STATUS_PENDING,
  STATUS_APPROVED: STATUS_APPROVED,
  STATUS_REJECTED: STATUS_REJECTED,
  adminMenu: adminMenu,
  viewsMenu: viewsMenu,
  userMenu: userMenu,
  addToPostSchema: addToPostSchema,
  addToCommentsSchema: addToCommentsSchema,
  addToSettingsSchema: addToSettingsSchema,
  addToUserSchema: addToUserSchema,
  registerPostProperty: registerPostProperty,
  registerCommentProperty: registerCommentProperty,
  registerSetting: registerSetting,
  registerUserProperty: registerUserProperty,
  preloadSubscriptions: preloadSubscriptions,
  primaryNav: primaryNav,
  secondaryNav: secondaryNav,
  mobileNav: mobileNav,
  viewParameters: viewParameters,
  footerModules: footerModules,
  heroModules: heroModules,
  threadModules: threadModules,
  postListTopModules: postListTopModules,
  postModules: postModules,
  postThumbnail: postThumbnail,
  postHeading: postHeading,
  postMeta: postMeta,
  postClassCallbacks: postClassCallbacks,
  postSubmitRenderedCallbacks: postSubmitRenderedCallbacks,
  postSubmitClientCallbacks: postSubmitClientCallbacks,
  postSubmitMethodCallbacks: postSubmitMethodCallbacks,
  postAfterSubmitMethodCallbacks: postAfterSubmitMethodCallbacks,
  postApproveCallbacks: postApproveCallbacks,
  postEditRenderedCallbacks: postEditRenderedCallbacks,
  postEditClientCallbacks: postEditClientCallbacks,
  postEditMethodCallbacks: postEditMethodCallbacks,
  postAfterEditMethodCallbacks: postAfterEditMethodCallbacks,
  commentClassCallbacks: commentClassCallbacks,
  commentSubmitRenderedCallbacks: commentSubmitRenderedCallbacks,
  commentSubmitClientCallbacks: commentSubmitClientCallbacks,
  commentSubmitMethodCallbacks: commentSubmitMethodCallbacks,
  commentAfterSubmitMethodCallbacks: commentAfterSubmitMethodCallbacks,
  commentEditRenderedCallbacks: commentEditRenderedCallbacks,
  commentEditClientCallbacks: commentEditClientCallbacks,
  commentEditMethodCallbacks: commentEditMethodCallbacks,
  commentAfterEditMethodCallbacks: commentAfterEditMethodCallbacks,
  upvoteCallbacks: upvoteCallbacks,
  downvoteCallbacks: downvoteCallbacks,
  cancelUpvoteCallbacks: cancelUpvoteCallbacks,
  cancelDownvoteCallbacks: cancelDownvoteCallbacks,
  upvoteMethodCallbacks: upvoteMethodCallbacks,
  downvoteMethodCallbacks: downvoteMethodCallbacks,
  cancelUpvoteMethodCallbacks: cancelUpvoteMethodCallbacks,
  cancelDownvoteMethodCallbacks: cancelDownvoteMethodCallbacks,
  userEditRenderedCallbacks: userEditRenderedCallbacks,
  userEditClientCallbacks: userEditClientCallbacks,
  userProfileCompleteChecks: userProfileCompleteChecks,
  userProfileDisplay: userProfileDisplay,
  userProfileEdit: userProfileEdit,
  userCreatedCallbacks: userCreatedCallbacks,
  getTemplate: getTemplate,
  templates: templates,
  getIcon: getIcon,
  icons: icons,
  colorTable: colorTable,
  registerElementColor: registerElementColor,
  themeSettings: themeSettings,
  getVotePower: getVotePower
};

})();

//# sourceMappingURL=telescope-base.js.map
