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
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var i18n = Package['anti:i18n'].i18n;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var ReactiveTable, getFilterQuery, dependOnFilters, getFilterStrings, getFilterFields;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/template.reactive_table.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("reactiveTable");                                                                          // 2
Template["reactiveTable"] = new Template("Template.reactiveTable", (function() {                                // 3
  var view = this;                                                                                              // 4
  return Spacebars.With(function() {                                                                            // 5
    return Spacebars.call(view.lookup("context"));                                                              // 6
  }, function() {                                                                                               // 7
    return [ "\n  ", Blaze.If(function() {                                                                      // 8
      return Spacebars.call(view.lookup("ready"));                                                              // 9
    }, function() {                                                                                             // 10
      return [ "\n    ", HTML.DIV({                                                                             // 11
        "class": "clearfix"                                                                                     // 12
      }, "\n      ", HTML.DIV({                                                                                 // 13
        "class": "reactive-table-options col-sm-8 pull-right"                                                   // 14
      }, "\n        ", Blaze.If(function() {                                                                    // 15
        return Spacebars.call(view.lookup("showFilter"));                                                       // 16
      }, function() {                                                                                           // 17
        return [ "\n          ", HTML.DIV({                                                                     // 18
          "class": "reactive-table-filter form-group col-sm-8 pull-right"                                       // 19
        }, "\n            ", Blaze._TemplateWith(function() {                                                   // 20
          return {                                                                                              // 21
            id: Spacebars.call(view.lookup("getFilterId")),                                                     // 22
            useFontAwesome: Spacebars.call(view.lookup("useFontAwesome"))                                       // 23
          };                                                                                                    // 24
        }, function() {                                                                                         // 25
          return Spacebars.include(view.lookupTemplate("reactiveTableFilter"));                                 // 26
        }), "\n          "), "\n        " ];                                                                    // 27
      }), "\n        ", Blaze.If(function() {                                                                   // 28
        return Spacebars.call(view.lookup("showColumnToggles"));                                                // 29
      }, function() {                                                                                           // 30
        return [ "\n          ", HTML.DIV({                                                                     // 31
          "class": "reactive-table-columns-dropdown col-sm-4 pull-right"                                        // 32
        }, "\n            ", HTML.BUTTON({                                                                      // 33
          "class": "btn btn-default dropdown-toggle",                                                           // 34
          id: function() {                                                                                      // 35
            return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("id")) ];                     // 36
          },                                                                                                    // 37
          "data-toggle": "dropdown"                                                                             // 38
        }, "\n              ", Blaze.View("lookup:i18n", function() {                                           // 39
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.columns");                              // 40
        }), "\n            "), "\n            ", HTML.UL({                                                      // 41
          "class": "dropdown-menu dropdown-menu-right",                                                         // 42
          role: "menu",                                                                                         // 43
          "aria-labelledby": function() {                                                                       // 44
            return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("id")) ];                     // 45
          }                                                                                                     // 46
        }, "\n              ", Blaze.Each(function() {                                                          // 47
          return Spacebars.call(view.lookup("fields"));                                                         // 48
        }, function() {                                                                                         // 49
          return [ "\n                ", Blaze.Unless(function() {                                              // 50
            return Spacebars.call(view.lookup("hideToggle"));                                                   // 51
          }, function() {                                                                                       // 52
            return [ "\n                  ", HTML.LI({                                                          // 53
              role: "presentation"                                                                              // 54
            }, HTML.A({                                                                                         // 55
              role: "menuitem",                                                                                 // 56
              tabindex: "-1",                                                                                   // 57
              "data-target": "#"                                                                                // 58
            }, "\n                    ", HTML.LABEL("\n                      ", Blaze.If(function() {           // 59
              return Spacebars.call(view.lookup("isVisible"));                                                  // 60
            }, function() {                                                                                     // 61
              return [ "\n                        ", HTML.INPUT({                                               // 62
                type: "checkbox",                                                                               // 63
                checked: "",                                                                                    // 64
                "data-fieldid": function() {                                                                    // 65
                  return Spacebars.mustache(view.lookup("fieldId"));                                            // 66
                }                                                                                               // 67
              }), "\n                      " ];                                                                 // 68
            }, function() {                                                                                     // 69
              return [ "\n                        ", HTML.INPUT({                                               // 70
                type: "checkbox",                                                                               // 71
                "data-fieldid": function() {                                                                    // 72
                  return Spacebars.mustache(view.lookup("fieldId"));                                            // 73
                }                                                                                               // 74
              }), "\n                      " ];                                                                 // 75
            }), "\n                      ", Blaze.If(function() {                                               // 76
              return Spacebars.call(view.lookup("labelIsTemplate"));                                            // 77
            }, function() {                                                                                     // 78
              return Spacebars.With(function() {                                                                // 79
                return Spacebars.call(view.lookup("labelData"));                                                // 80
              }, function() {                                                                                   // 81
                return Spacebars.include(function() {                                                           // 82
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                             // 83
                });                                                                                             // 84
              });                                                                                               // 85
            }, function() {                                                                                     // 86
              return Blaze.View("lookup:getLabel", function() {                                                 // 87
                return Spacebars.mustache(view.lookup("getLabel"));                                             // 88
              });                                                                                               // 89
            }), "\n                    "), "\n                  ")), "\n                " ];                    // 90
          }), "\n              " ];                                                                             // 91
        }), "\n            "), "\n          "), "\n        " ];                                                 // 92
      }), "\n      "), "\n    "), "\n    ", HTML.TABLE({                                                        // 93
        id: function() {                                                                                        // 94
          return Spacebars.mustache(view.lookup("id"));                                                         // 95
        },                                                                                                      // 96
        "class": function() {                                                                                   // 97
          return [ Spacebars.mustache(view.lookup("class")), " reactive-table" ];                               // 98
        }                                                                                                       // 99
      }, "\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", Blaze.Each(function() {                   // 100
        return Spacebars.call(view.lookup("fields"));                                                           // 101
      }, function() {                                                                                           // 102
        return [ "\n            ", Blaze.If(function() {                                                        // 103
          return Spacebars.call(view.lookup("isVisible"));                                                      // 104
        }, function() {                                                                                         // 105
          return [ "\n              ", Blaze.If(function() {                                                    // 106
            return Spacebars.call(view.lookup("isSortKey"));                                                    // 107
          }, function() {                                                                                       // 108
            return [ "\n                ", HTML.TH({                                                            // 109
              "class": function() {                                                                             // 110
                return [ "sortable ", Spacebars.mustache(view.lookup("getHeaderClass")) ];                      // 111
              },                                                                                                // 112
              fieldid: function() {                                                                             // 113
                return Spacebars.mustache(view.lookup("getFieldFieldId"));                                      // 114
              }                                                                                                 // 115
            }, "\n                  ", Blaze.If(function() {                                                    // 116
              return Spacebars.call(view.lookup("labelIsTemplate"));                                            // 117
            }, function() {                                                                                     // 118
              return Spacebars.With(function() {                                                                // 119
                return Spacebars.call(view.lookup("labelData"));                                                // 120
              }, function() {                                                                                   // 121
                return Spacebars.include(function() {                                                           // 122
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                             // 123
                });                                                                                             // 124
              });                                                                                               // 125
            }, function() {                                                                                     // 126
              return Blaze.View("lookup:getLabel", function() {                                                 // 127
                return Spacebars.mustache(view.lookup("getLabel"));                                             // 128
              });                                                                                               // 129
            }), HTML.CharRef({                                                                                  // 130
              html: "&nbsp;",                                                                                   // 131
              str: " "                                                                                          // 132
            }), HTML.CharRef({                                                                                  // 133
              html: "&nbsp;",                                                                                   // 134
              str: " "                                                                                          // 135
            }), "\n                  ", Blaze.If(function() {                                                   // 136
              return Spacebars.call(view.lookup("isAscending"));                                                // 137
            }, function() {                                                                                     // 138
              return [ "\n                    ", Blaze.If(function() {                                          // 139
                return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                      // 140
              }, function() {                                                                                   // 141
                return [ "\n                      ", HTML.I({                                                   // 142
                  "class": "fa fa-sort-asc"                                                                     // 143
                }), "\n                    " ];                                                                 // 144
              }, function() {                                                                                   // 145
                return [ "\n                      ", HTML.CharRef({                                             // 146
                  html: "&#x25B2;",                                                                             // 147
                  str: "▲"                                                                                      // 148
                }), "\n                    " ];                                                                 // 149
              }), "\n                  " ];                                                                     // 150
            }, function() {                                                                                     // 151
              return [ "\n                    ", Blaze.If(function() {                                          // 152
                return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                      // 153
              }, function() {                                                                                   // 154
                return [ "\n                      ", HTML.I({                                                   // 155
                  "class": "fa fa-sort-desc"                                                                    // 156
                }), "\n                    " ];                                                                 // 157
              }, function() {                                                                                   // 158
                return [ "\n                      ", HTML.CharRef({                                             // 159
                  html: "&#x25BC;",                                                                             // 160
                  str: "▼"                                                                                      // 161
                }), "\n                    " ];                                                                 // 162
              }), "\n                  " ];                                                                     // 163
            }), "\n                "), "\n              " ];                                                    // 164
          }, function() {                                                                                       // 165
            return [ "\n                ", Blaze.If(function() {                                                // 166
              return Spacebars.call(view.lookup("isSortable"));                                                 // 167
            }, function() {                                                                                     // 168
              return [ "\n                  ", HTML.TH({                                                        // 169
                "class": function() {                                                                           // 170
                  return [ Spacebars.mustache(view.lookup("getHeaderClass")), " sortable" ];                    // 171
                },                                                                                              // 172
                fieldid: function() {                                                                           // 173
                  return Spacebars.mustache(view.lookup("getFieldFieldId"));                                    // 174
                }                                                                                               // 175
              }, Blaze.If(function() {                                                                          // 176
                return Spacebars.call(view.lookup("labelIsTemplate"));                                          // 177
              }, function() {                                                                                   // 178
                return Spacebars.With(function() {                                                              // 179
                  return Spacebars.call(view.lookup("labelData"));                                              // 180
                }, function() {                                                                                 // 181
                  return Spacebars.include(function() {                                                         // 182
                    return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                           // 183
                  });                                                                                           // 184
                });                                                                                             // 185
              }, function() {                                                                                   // 186
                return Blaze.View("lookup:getLabel", function() {                                               // 187
                  return Spacebars.mustache(view.lookup("getLabel"));                                           // 188
                });                                                                                             // 189
              })), "\n                " ];                                                                      // 190
            }, function() {                                                                                     // 191
              return [ "\n                  ", HTML.TH({                                                        // 192
                "class": function() {                                                                           // 193
                  return Spacebars.mustache(view.lookup("getHeaderClass"));                                     // 194
                },                                                                                              // 195
                fieldid: function() {                                                                           // 196
                  return Spacebars.mustache(view.lookup("getFieldFieldId"));                                    // 197
                }                                                                                               // 198
              }, Blaze.If(function() {                                                                          // 199
                return Spacebars.call(view.lookup("labelIsTemplate"));                                          // 200
              }, function() {                                                                                   // 201
                return Spacebars.With(function() {                                                              // 202
                  return Spacebars.call(view.lookup("labelData"));                                              // 203
                }, function() {                                                                                 // 204
                  return Spacebars.include(function() {                                                         // 205
                    return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                           // 206
                  });                                                                                           // 207
                });                                                                                             // 208
              }, function() {                                                                                   // 209
                return Blaze.View("lookup:getLabel", function() {                                               // 210
                  return Spacebars.mustache(view.lookup("getLabel"));                                           // 211
                });                                                                                             // 212
              })), "\n                " ];                                                                      // 213
            }), "\n              " ];                                                                           // 214
          }), "\n            " ];                                                                               // 215
        }), "\n          " ];                                                                                   // 216
      }), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n        ", Blaze.Each(function() {              // 217
        return Spacebars.call(view.lookup("sortedRows"));                                                       // 218
      }, function() {                                                                                           // 219
        return [ "\n          ", HTML.TR({                                                                      // 220
          "class": function() {                                                                                 // 221
            return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "rowClass"), view.lookup("."));          // 222
          }                                                                                                     // 223
        }, "\n            ", Blaze.Each(function() {                                                            // 224
          return Spacebars.call(Spacebars.dot(view.lookup(".."), "fields"));                                    // 225
        }, function() {                                                                                         // 226
          return [ "\n              ", Blaze.If(function() {                                                    // 227
            return Spacebars.call(view.lookup("isVisible"));                                                    // 228
          }, function() {                                                                                       // 229
            return [ "\n                ", HTML.TD({                                                            // 230
              "class": function() {                                                                             // 231
                return Spacebars.mustache(view.lookup("getCellClass"), view.lookup(".."));                      // 232
              }                                                                                                 // 233
            }, Blaze.If(function() {                                                                            // 234
              return Spacebars.call(view.lookup("tmpl"));                                                       // 235
            }, function() {                                                                                     // 236
              return Spacebars.With(function() {                                                                // 237
                return Spacebars.call(view.lookup(".."));                                                       // 238
              }, function() {                                                                                   // 239
                return Spacebars.include(function() {                                                           // 240
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "tmpl"));                              // 241
                });                                                                                             // 242
              });                                                                                               // 243
            }, function() {                                                                                     // 244
              return Blaze.View("lookup:getField", function() {                                                 // 245
                return Spacebars.mustache(view.lookup("getField"), view.lookup(".."));                          // 246
              });                                                                                               // 247
            })), "\n              " ];                                                                          // 248
          }), "\n            " ];                                                                               // 249
        }), "\n          "), "\n        " ];                                                                    // 250
      }), "\n      "), "\n    "), "\n    ", Blaze.If(function() {                                               // 251
        return Spacebars.call(view.lookup("showNavigation"));                                                   // 252
      }, function() {                                                                                           // 253
        return [ "\n      ", HTML.DIV({                                                                         // 254
          "class": "reactive-table-navigation"                                                                  // 255
        }, "\n        ", Blaze.If(function() {                                                                  // 256
          return Spacebars.call(view.lookup("showNavigationRowsPerPage"));                                      // 257
        }, function() {                                                                                         // 258
          return [ "\n          ", HTML.DIV({                                                                   // 259
            "class": "form-inline form-group rows-per-page"                                                     // 260
          }, "\n            ", HTML.LABEL(Blaze.View("lookup:i18n", function() {                                // 261
            return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.show");                               // 262
          }), HTML.CharRef({                                                                                    // 263
            html: "&nbsp;",                                                                                     // 264
            str: " "                                                                                            // 265
          }), HTML.INPUT({                                                                                      // 266
            "class": "form-control",                                                                            // 267
            type: "text",                                                                                       // 268
            value: function() {                                                                                 // 269
              return Spacebars.mustache(view.lookup("getRowsPerPage"));                                         // 270
            }                                                                                                   // 271
          }), HTML.CharRef({                                                                                    // 272
            html: "&nbsp;",                                                                                     // 273
            str: " "                                                                                            // 274
          }), Blaze.View("lookup:i18n", function() {                                                            // 275
            return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.rowsPerPage");                        // 276
          })), "\n          "), "\n        " ];                                                                 // 277
        }), "\n        ", HTML.DIV({                                                                            // 278
          "class": "form-inline form-group page-number"                                                         // 279
        }, "\n          ", Blaze.If(function() {                                                                // 280
          return Spacebars.call(view.lookup("isntFirstPage"));                                                  // 281
        }, function() {                                                                                         // 282
          return [ "\n            ", HTML.LABEL({                                                               // 283
            "class": "previous-page"                                                                            // 284
          }, HTML.CharRef({                                                                                     // 285
            html: "&lt;",                                                                                       // 286
            str: "<"                                                                                            // 287
          })), HTML.CharRef({                                                                                   // 288
            html: "&nbsp;",                                                                                     // 289
            str: " "                                                                                            // 290
          }), HTML.CharRef({                                                                                    // 291
            html: "&nbsp;",                                                                                     // 292
            str: " "                                                                                            // 293
          }), "\n          " ];                                                                                 // 294
        }), "\n          ", HTML.LABEL(Blaze.View("lookup:i18n", function() {                                   // 295
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.page");                                 // 296
        }), HTML.CharRef({                                                                                      // 297
          html: "&nbsp;",                                                                                       // 298
          str: " "                                                                                              // 299
        }), HTML.INPUT({                                                                                        // 300
          "class": "form-control",                                                                              // 301
          type: "text",                                                                                         // 302
          value: function() {                                                                                   // 303
            return Spacebars.mustache(view.lookup("getCurrentPage"));                                           // 304
          }                                                                                                     // 305
        }), HTML.CharRef({                                                                                      // 306
          html: "&nbsp;",                                                                                       // 307
          str: " "                                                                                              // 308
        }), Blaze.View("lookup:i18n", function() {                                                              // 309
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.of");                                   // 310
        }), " ", Blaze.View("lookup:getPageCount", function() {                                                 // 311
          return Spacebars.mustache(view.lookup("getPageCount"));                                               // 312
        })), "\n          ", Blaze.If(function() {                                                              // 313
          return Spacebars.call(view.lookup("isntLastPage"));                                                   // 314
        }, function() {                                                                                         // 315
          return [ "\n            ", HTML.LABEL({                                                               // 316
            "class": "next-page"                                                                                // 317
          }, HTML.CharRef({                                                                                     // 318
            html: "&nbsp;",                                                                                     // 319
            str: " "                                                                                            // 320
          }), HTML.CharRef({                                                                                    // 321
            html: "&nbsp;",                                                                                     // 322
            str: " "                                                                                            // 323
          }), HTML.CharRef({                                                                                    // 324
            html: "&gt;",                                                                                       // 325
            str: ">"                                                                                            // 326
          })), "\n          " ];                                                                                // 327
        }), "\n        "), "\n      "), "\n    " ];                                                             // 328
      }), "\n  " ];                                                                                             // 329
    }), "\n  " ];                                                                                               // 330
  });                                                                                                           // 331
}));                                                                                                            // 332
                                                                                                                // 333
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/template.filter.js                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("reactiveTableFilter");                                                                    // 2
Template["reactiveTableFilter"] = new Template("Template.reactiveTableFilter", (function() {                    // 3
  var view = this;                                                                                              // 4
  return HTML.DIV({                                                                                             // 5
    id: function() {                                                                                            // 6
      return Spacebars.mustache(view.lookup("id"));                                                             // 7
    },                                                                                                          // 8
    "class": function() {                                                                                       // 9
      return Spacebars.mustache(view.lookup("class"));                                                          // 10
    }                                                                                                           // 11
  }, "\n    ", HTML.SPAN({                                                                                      // 12
    "class": "input-group-addon"                                                                                // 13
  }, "\n      ", Blaze.If(function() {                                                                          // 14
    return Spacebars.call(view.lookup("useFontAwesome"));                                                       // 15
  }, function() {                                                                                               // 16
    return [ "\n        ", HTML.I({                                                                             // 17
      "class": "fa fa-filter"                                                                                   // 18
    }), "\n      " ];                                                                                           // 19
  }, function() {                                                                                               // 20
    return [ "\n        ", Blaze.If(function() {                                                                // 21
      return Spacebars.call(view.lookup("label"));                                                              // 22
    }, function() {                                                                                             // 23
      return [ "\n          ", HTML.SPAN(Blaze.View("lookup:label", function() {                                // 24
        return Spacebars.mustache(view.lookup("label"));                                                        // 25
      })), "\n        " ];                                                                                      // 26
    }, function() {                                                                                             // 27
      return [ "\n          ", Blaze.View("lookup:i18n", function() {                                           // 28
        return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                                 // 29
      }), "\n        " ];                                                                                       // 30
    }), "\n      " ];                                                                                           // 31
  }), "\n    "), "\n    ", Blaze.If(function() {                                                                // 32
    return Spacebars.call(view.lookup("useFontAwesome"));                                                       // 33
  }, function() {                                                                                               // 34
    return [ "\n      ", Blaze.If(function() {                                                                  // 35
      return Spacebars.call(view.lookup("label"));                                                              // 36
    }, function() {                                                                                             // 37
      return [ "\n        ", HTML.INPUT({                                                                       // 38
        "class": "reactive-table-input form-control",                                                           // 39
        type: "text",                                                                                           // 40
        value: function() {                                                                                     // 41
          return Spacebars.mustache(view.lookup("filter"));                                                     // 42
        },                                                                                                      // 43
        placeholder: function() {                                                                               // 44
          return Spacebars.mustache(view.lookup("label"));                                                      // 45
        }                                                                                                       // 46
      }), "\n      " ];                                                                                         // 47
    }, function() {                                                                                             // 48
      return [ "\n        ", HTML.INPUT({                                                                       // 49
        "class": "reactive-table-input form-control",                                                           // 50
        type: "text",                                                                                           // 51
        value: function() {                                                                                     // 52
          return Spacebars.mustache(view.lookup("filter"));                                                     // 53
        },                                                                                                      // 54
        placeholder: function() {                                                                               // 55
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                               // 56
        }                                                                                                       // 57
      }), "\n      " ];                                                                                         // 58
    }), "\n    " ];                                                                                             // 59
  }, function() {                                                                                               // 60
    return [ "\n      ", HTML.INPUT({                                                                           // 61
      "class": "reactive-table-input form-control",                                                             // 62
      type: "text",                                                                                             // 63
      value: function() {                                                                                       // 64
        return Spacebars.mustache(view.lookup("filter"));                                                       // 65
      }                                                                                                         // 66
    }), "\n    " ];                                                                                             // 67
  }), "\n  ");                                                                                                  // 68
}));                                                                                                            // 69
                                                                                                                // 70
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/reactive_table_i18n.js                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
i18n.map('en', {                                                                                                // 1
    reactiveTable: {                                                                                            // 2
        filter: 'Filter',                                                                                       // 3
        columns: 'Columns',                                                                                     // 4
        show: 'Show',                                                                                           // 5
        rowsPerPage: 'rows per page',                                                                           // 6
        page: 'Page',                                                                                           // 7
        of: 'of'                                                                                                // 8
    }                                                                                                           // 9
});                                                                                                             // 10
                                                                                                                // 11
i18n.map('fr', {                                                                                                // 12
    reactiveTable: {                                                                                            // 13
        filter: 'Filtre',                                                                                       // 14
        show: 'Voir',                                                                                           // 15
        rowsPerPage: 'lignes par page',                                                                         // 16
        page: 'page',                                                                                           // 17
        of: 'sur'                                                                                               // 18
    }                                                                                                           // 19
});                                                                                                             // 20
                                                                                                                // 21
i18n.map('ru', {                                                                                                // 22
    reactiveTable: {                                                                                            // 23
        filter: 'Фильтр',                                                                                       // 24
        show: 'Показать',                                                                                       // 25
        rowsPerPage: 'линий на странице',                                                                       // 26
        page: 'Страница',                                                                                       // 27
        of: 'из'                                                                                                // 28
    }                                                                                                           // 29
});                                                                                                             // 30
                                                                                                                // 31
i18n.map('es', {                                                                                                // 32
    reactiveTable: {                                                                                            // 33
        filter: 'Filtro',                                                                                       // 34
        show:   'Mostrar',                                                                                      // 35
        rowsPerPage: 'filas por página',                                                                        // 36
        page: 'Página',                                                                                         // 37
        of: 'de'                                                                                                // 38
    }                                                                                                           // 39
});                                                                                                             // 40
                                                                                                                // 41
i18n.map('nl', {                                                                                                // 42
    reactiveTable: {                                                                                            // 43
        filter: 'Filter',                                                                                       // 44
        show:   'Toon',                                                                                         // 45
        rowsPerPage: 'regels per pagina',                                                                       // 46
        page: 'Pagina',                                                                                         // 47
        of: 'van'                                                                                               // 48
    }                                                                                                           // 49
});                                                                                                             // 50
                                                                                                                // 51
i18n.map('pt-br', {                                                                                             // 52
    reactiveTable: {                                                                                            // 53
        filter: 'Filtro',                                                                                       // 54
        show: 'Mostrar',                                                                                        // 55
        rowsPerPage: 'linhas por página',                                                                       // 56
        page: 'Página',                                                                                         // 57
        of: 'de'                                                                                                // 58
    }                                                                                                           // 59
});                                                                                                             // 60
                                                                                                                // 61
i18n.map('it', {                                                                                                // 62
    reactiveTable: {                                                                                            // 63
        filter: 'Filtra',                                                                                       // 64
        show: 'Mostra',                                                                                         // 65
        rowsPerPage: 'righe per pagina',                                                                        // 66
        page: 'Pagina',                                                                                         // 67
        of: 'di'                                                                                                // 68
    }                                                                                                           // 69
});                                                                                                             // 70
                                                                                                                // 71
i18n.map('sv', {                                                                                                // 72
    reactiveTable: {                                                                                            // 73
        filter: 'Filter',                                                                                       // 74
        show: 'Visa',                                                                                           // 75
        rowsPerPage: 'rader per sida',                                                                          // 76
        page: 'Sida',                                                                                           // 77
        of: 'av'                                                                                                // 78
    }                                                                                                           // 79
});                                                                                                             // 80
                                                                                                                // 81
i18n.map('ua', {                                                                                                // 82
    reactiveTable: {                                                                                            // 83
        filter: 'Фільтр',                                                                                       // 84
        show: 'Показати',                                                                                       // 85
        rowsPerPage: 'рядків на сторінці',                                                                      // 86
        page: 'Сторінка',                                                                                       // 87
        of: 'з'                                                                                                 // 88
    }                                                                                                           // 89
});                                                                                                             // 90
                                                                                                                // 91
i18n.map('tr', {                                                                                                // 92
    reactiveTable: {                                                                                            // 93
        filter: 'Süz',                                                                                          // 94
        columns: 'Sütunlar',                                                                                    // 95
        show: 'Sayfa başına',                                                                                   // 96
        rowsPerPage: 'satır göster',                                                                            // 97
        page: 'Sayfa',                                                                                          // 98
        of: ' / '                                                                                               // 99
    }                                                                                                           // 100
});                                                                                                             // 101
                                                                                                                // 102
i18n.map('sk', {                                                                                                // 103
    reactiveTable: {                                                                                            // 104
        filter: 'Filter',                                                                                       // 105
        show: 'Zobraz',                                                                                         // 106
        rowsPerPage: 'riadkov na stranu',                                                                       // 107
        page: 'Strana',                                                                                         // 108
        of: 'z'                                                                                                 // 109
    }                                                                                                           // 110
});                                                                                                             // 111
                                                                                                                // 112
i18n.map('cs', {                                                                                                // 113
    reactiveTable: {                                                                                            // 114
        filter: 'Filter',                                                                                       // 115
        show: 'Zobraz',                                                                                         // 116
        rowsPerPage: 'řádků na stranu',                                                                         // 117
        page: 'Strana',                                                                                         // 118
        of: 'z'                                                                                                 // 119
    }                                                                                                           // 120
});                                                                                                             // 121
                                                                                                                // 122
i18n.map('he', {                                                                                                // 123
    reactiveTable: {                                                                                            // 124
        filter: 'פילטר',                                                                                        // 125
        show: 'הצג',                                                                                            // 126
        rowsPerPage: 'שורות לעמוד',                                                                             // 127
        page: 'עמוד',                                                                                           // 128
        of: 'מתוך'                                                                                              // 129
    }                                                                                                           // 130
});                                                                                                             // 131
                                                                                                                // 132
i18n.map('de', {                                                                                                // 133
    reactiveTable: {                                                                                            // 134
        filter: 'Filter',                                                                                       // 135
        columns: 'Spalten',                                                                                     // 136
        show: 'Zeige',                                                                                          // 137
        rowsPerPage: 'Zeilen pro Seite',                                                                        // 138
        page: 'Seite',                                                                                          // 139
        of: 'von'                                                                                               // 140
    }                                                                                                           // 141
});                                                                                                             // 142
                                                                                                                // 143
i18n.map('fi', {                                                                                                // 144
    reactiveTable: {                                                                                            // 145
        filter: 'Suodata',                                                                                      // 146
        show: 'Näytä',                                                                                          // 147
        rowsPerPage: 'riviä sivulla',                                                                           // 148
        page: 'Sivu',                                                                                           // 149
        of: ' / '                                                                                               // 150
    }                                                                                                           // 151
});                                                                                                             // 152
                                                                                                                // 153
i18n.map('no', {                                                                                                // 154
    reactiveTable: {                                                                                            // 155
        filter: 'Filter',                                                                                       // 156
        show: 'Vis',                                                                                            // 157
        rowsPerPage: 'rader per side',                                                                          // 158
        page: 'Side',                                                                                           // 159
        of: 'av'                                                                                                // 160
    }                                                                                                           // 161
});                                                                                                             // 162
                                                                                                                // 163
i18n.map('pl', {                                                                                                // 164
    reactiveTable: {                                                                                            // 165
        filter: 'Szukaj',                                                                                       // 166
        columns: 'Kolumny',                                                                                     // 167
        show: 'Pokaż',                                                                                          // 168
        rowsPerPage: 'pozycji na stronie',                                                                      // 169
        page: 'Strona',                                                                                         // 170
        of: 'z'                                                                                                 // 171
    }                                                                                                           // 172
});                                                                                                             // 173
                                                                                                                // 174
i18n.map('hr', {                                                                                                // 175
    reactiveTable: {                                                                                            // 176
        filter: 'Filter',                                                                                       // 177
        columns: 'Stupci',                                                                                      // 178
        show: 'Prikaži',                                                                                        // 179
        rowsPerPage: 'redova po stranici',                                                                      // 180
        page: 'Stranica',                                                                                       // 181
        of: 'od'                                                                                                // 182
    }                                                                                                           // 183
});                                                                                                             // 184
                                                                                                                // 185
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/reactive_table.js                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var ReactiveTableCounts = new Mongo.Collection("reactive-table-counts");                                        // 1
                                                                                                                // 2
var get = function(obj, field) {                                                                                // 3
  var keys = field.split('.');                                                                                  // 4
  var value = obj;                                                                                              // 5
                                                                                                                // 6
  _.each(keys, function (key) {                                                                                 // 7
      if (_.isObject(value) && _.isFunction(value[key])) {                                                      // 8
          value = value[key]();                                                                                 // 9
      } else if (_.isObject(value) && !_.isUndefined(value[key])) {                                             // 10
          value = value[key];                                                                                   // 11
      } else {                                                                                                  // 12
          value = null;                                                                                         // 13
      }                                                                                                         // 14
  });                                                                                                           // 15
                                                                                                                // 16
  return value;                                                                                                 // 17
};                                                                                                              // 18
                                                                                                                // 19
var updateHandle = function (set_context) {                                                                     // 20
    var context = set_context;                                                                                  // 21
    if (context.server) {                                                                                       // 22
        var newHandle;                                                                                          // 23
                                                                                                                // 24
        // Could use the table id, but this way we can wait to change the                                       // 25
        // page until the new data is ready, so it doesn't move around                                          // 26
        // while rows are added and removed                                                                     // 27
        var publicationId = _.uniqueId();                                                                       // 28
        var newPublishedRows = new Mongo.Collection('reactive-table-rows-' + publicationId);                    // 29
        context.nextPublicationId.set(publicationId);                                                           // 30
                                                                                                                // 31
        var rowsPerPage = context.rowsPerPage.get();                                                            // 32
        var currentPage = context.currentPage.get();                                                            // 33
        var currentIndex = currentPage * rowsPerPage;                                                           // 34
                                                                                                                // 35
        var options = {                                                                                         // 36
            skip: currentIndex,                                                                                 // 37
            limit: rowsPerPage                                                                                  // 38
        };                                                                                                      // 39
        var sortQuery = {};                                                                                     // 40
                                                                                                                // 41
        var currentSortField = _.findWhere(context.fields, {fieldId: context.sortKey.get()});                   // 42
        if (currentSortField) {                                                                                 // 43
            sortQuery[currentSortField.key] = context.sortDirection.get();                                      // 44
        }                                                                                                       // 45
        options.sort = sortQuery;                                                                               // 46
        var filters = context.filters.get();                                                                    // 47
                                                                                                                // 48
        var onReady = function () {                                                                             // 49
            if (publicationId === context.nextPublicationId.get()) {                                            // 50
                context.ready.set(true);                                                                        // 51
                context.publicationId.set(publicationId);                                                       // 52
                context.publishedRows = newPublishedRows;                                                       // 53
                var oldHandle = context.handle;                                                                 // 54
                context.handle = newHandle;                                                                     // 55
                                                                                                                // 56
                if (oldHandle) {                                                                                // 57
                    oldHandle.stop();                                                                           // 58
                }                                                                                               // 59
            } else {                                                                                            // 60
                // another handle was created after this one                                                    // 61
                newHandle.stop();                                                                               // 62
            }                                                                                                   // 63
        };                                                                                                      // 64
        var onError = function (error) {                                                                        // 65
            console.log("ReactiveTable subscription error: " + error);                                          // 66
        };                                                                                                      // 67
        newHandle = Meteor.subscribe(                                                                           // 68
            "reactive-table-" + context.collection,                                                             // 69
            publicationId,                                                                                      // 70
            getFilterStrings(filters),                                                                          // 71
            getFilterFields(filters, context.fields),                                                           // 72
            options,                                                                                            // 73
            context.rowsPerPage.get(),                                                                          // 74
            {onReady: onReady, onError: onError}                                                                // 75
        );                                                                                                      // 76
    }                                                                                                           // 77
};                                                                                                              // 78
                                                                                                                // 79
                                                                                                                // 80
var getDefaultFalseSetting = function (key, templateData) {                                                     // 81
    if (!_.isUndefined(templateData[key]) &&                                                                    // 82
        templateData[key]) {                                                                                    // 83
        return true;                                                                                            // 84
    }                                                                                                           // 85
    if (!_.isUndefined(templateData.settings) &&                                                                // 86
        !_.isUndefined(templateData.settings[key]) &&                                                           // 87
        templateData.settings[key]) {                                                                           // 88
        return true;                                                                                            // 89
    }                                                                                                           // 90
    return false;                                                                                               // 91
};                                                                                                              // 92
                                                                                                                // 93
var getDefaultTrueSetting = function (key, templateData) {                                                      // 94
    if (!_.isUndefined(templateData[key]) &&                                                                    // 95
        !templateData[key]) {                                                                                   // 96
        return false;                                                                                           // 97
    }                                                                                                           // 98
    if (!_.isUndefined(templateData.settings) &&                                                                // 99
        !_.isUndefined(templateData.settings[key]) &&                                                           // 100
        !templateData.settings[key]) {                                                                          // 101
        return false;                                                                                           // 102
    }                                                                                                           // 103
    return true;                                                                                                // 104
};                                                                                                              // 105
                                                                                                                // 106
                                                                                                                // 107
                                                                                                                // 108
var setup = function () {                                                                                       // 109
    var context = {};                                                                                           // 110
    var oldContext = this.context || {};                                                                        // 111
    context.templateData = this.data;                                                                           // 112
    this.data.settings = this.data.settings || {};                                                              // 113
    var collection = this.data.collection || this.data.settings.collection || this.data;                        // 114
                                                                                                                // 115
    if (!(collection instanceof Mongo.Collection)) {                                                            // 116
        if (_.isArray(collection)) {                                                                            // 117
            // collection is an array                                                                           // 118
            // create a new collection from the data                                                            // 119
            var data = collection;                                                                              // 120
            collection = new Mongo.Collection(null);                                                            // 121
            _.each(data, function (doc) {                                                                       // 122
                collection.insert(doc);                                                                         // 123
            });                                                                                                 // 124
        } else if (_.isFunction(collection.fetch)) {                                                            // 125
            // collection is a cursor                                                                           // 126
            // create a new collection that will reactively update                                              // 127
            var cursor = collection;                                                                            // 128
            collection = new Mongo.Collection(null);                                                            // 129
                                                                                                                // 130
            // copy over transforms from collection-helper package                                              // 131
            collection._transform = cursor._transform;                                                          // 132
            collection._name = cursor.collection._name;                                                         // 133
                                                                                                                // 134
            var addedCallback = function (doc) {                                                                // 135
                collection.insert(doc);                                                                         // 136
            };                                                                                                  // 137
            var changedCallback = function (doc, oldDoc) {                                                      // 138
                collection.update(oldDoc._id, doc);                                                             // 139
            };                                                                                                  // 140
            var removedCallback = function (oldDoc) {                                                           // 141
                collection.remove(oldDoc._id);                                                                  // 142
            };                                                                                                  // 143
            cursor.observe({added: addedCallback, changed: changedCallback, removed: removedCallback});         // 144
        } else if (_.isString(collection)) {                                                                    // 145
            // server side publication                                                                          // 146
            context.server = true;                                                                              // 147
            context.publicationId = new ReactiveVar();                                                          // 148
            context.nextPublicationId = new ReactiveVar();                                                      // 149
            context.publishedRows = new Mongo.Collection(null);                                                 // 150
        } else {                                                                                                // 151
            console.error("reactiveTable error: argument is not an instance of Mongo.Collection, a cursor, or an array");
            collection = new Mongo.Collection(null);                                                            // 153
        }                                                                                                       // 154
    }                                                                                                           // 155
    context.collection = collection;                                                                            // 156
                                                                                                                // 157
    var fields = this.data.fields || this.data.settings.fields || {};                                           // 158
    if (_.keys(fields).length < 1 ||                                                                            // 159
        (_.keys(fields).length === 1 &&                                                                         // 160
         _.keys(fields)[0] === 'hash')) {                                                                       // 161
        fields = _.without(_.keys(collection.findOne() || {}), '_id');                                          // 162
    }                                                                                                           // 163
                                                                                                                // 164
    var fieldIdsArePresentAndUnique = function (fields) {                                                       // 165
        var uniqueFieldIds = _.chain(fields)                                                                    // 166
            .filter(function (field) {                                                                          // 167
                return !_.isUndefined(field.fieldId)                                                            // 168
            })                                                                                                  // 169
            .map(function (field) {                                                                             // 170
                return field.fieldId;                                                                           // 171
            })                                                                                                  // 172
            .uniq()                                                                                             // 173
            .value();                                                                                           // 174
        return uniqueFieldIds.length === fields.length;                                                         // 175
    };                                                                                                          // 176
                                                                                                                // 177
    // If at least one field specifies a fieldId, all fields must specify a                                     // 178
    // fieldId with a unique value                                                                              // 179
    if (_.find(fields, function (field) {                                                                       // 180
        return !_.isUndefined(field.fieldId)                                                                    // 181
        }) && !fieldIdsArePresentAndUnique(fields)) {                                                           // 182
        console.error("reactiveTable error: all fields must have a unique-valued fieldId if at least one has a fieldId attribute");
        fields = [];                                                                                            // 184
    }                                                                                                           // 185
                                                                                                                // 186
    var sortKey = null;                                                                                         // 187
    var sortDirection = 1;                                                                                      // 188
                                                                                                                // 189
    var normalizeField = function (field) {                                                                     // 190
        if (typeof field === 'string') {                                                                        // 191
            return {key: field, label: field};                                                                  // 192
        } else {                                                                                                // 193
            return field;                                                                                       // 194
        }                                                                                                       // 195
    };                                                                                                          // 196
                                                                                                                // 197
    var parseField = function (field, i) {                                                                      // 198
        var normalizedField = normalizeField(field);                                                            // 199
        if (!_.has(normalizedField, 'fieldId')) {                                                               // 200
            // Default fieldId to index in fields array if not present                                          // 201
            normalizedField.fieldId = i.toString();                                                             // 202
        }                                                                                                       // 203
        if (normalizedField.sort) {                                                                             // 204
            sortKey = normalizedField.fieldId;                                                                  // 205
            if (normalizedField.sort === 'desc' || normalizedField.sort === 'descending'  || normalizedField.sort === -1) {
                sortDirection = -1;                                                                             // 207
            }                                                                                                   // 208
        }                                                                                                       // 209
        return normalizedField;                                                                                 // 210
    };                                                                                                          // 211
                                                                                                                // 212
    fields = _.map(fields, parseField);                                                                         // 213
    if (!sortKey) {                                                                                             // 214
        // Default to sort of first column                                                                      // 215
        sortKey = (fields[0]) ? fields[0].fieldId : null;                                                       // 216
    }                                                                                                           // 217
    context.fields = fields;                                                                                    // 218
    context.sortKey = !_.isUndefined(oldContext.sortKey) ? oldContext.sortKey : new ReactiveVar(sortKey);       // 219
    context.sortDirection = !_.isUndefined(oldContext.sortDirection) ? oldContext.sortDirection : new ReactiveVar(sortDirection);
                                                                                                                // 221
    var visibleFields = [];                                                                                     // 222
    _.each(fields, function (field, i) {                                                                        // 223
        visibleFields.push({fieldId:field.fieldId, isVisible:getDefaultFieldVisibility(field)});                // 224
    });                                                                                                         // 225
    context.visibleFields = (!_.isUndefined(oldContext.visibleFields) && !_.isEmpty(oldContext.visibleFields)) ? oldContext.visibleFields : new ReactiveVar(visibleFields);
                                                                                                                // 227
                                                                                                                // 228
    var rowClass = this.data.rowClass || this.data.settings.rowClass || function() {return '';};                // 229
    if (typeof rowClass === 'string') {                                                                         // 230
        var tmp = rowClass;                                                                                     // 231
        rowClass = function(obj) { return tmp; };                                                               // 232
    }                                                                                                           // 233
    context.rowClass = rowClass;                                                                                // 234
                                                                                                                // 235
    context.class = this.data.class || this.data.settings.class || 'table table-striped table-hover col-sm-12'; // 236
    context.id = this.data.id || this.data.settings.id || _.uniqueId('reactive-table-');                        // 237
                                                                                                                // 238
    context.showNavigation = this.data.showNavigation || this.data.settings.showNavigation || 'always';         // 239
    context.showNavigationRowsPerPage = getDefaultTrueSetting('showNavigationRowsPerPage', this.data);          // 240
    context.rowsPerPage =  !_.isUndefined(oldContext.rowsPerPage) ? oldContext.rowsPerPage : new ReactiveVar(this.data.rowsPerPage || this.data.settings.rowsPerPage || 10);
    context.currentPage = !_.isUndefined(oldContext.currentPage) ? oldContext.currentPage : new ReactiveVar(0); // 242
                                                                                                                // 243
    var filters = this.data.filters || this.data.settings.filters || [];                                        // 244
    if (_.isEmpty(filters)) {                                                                                   // 245
      context.showFilter = getDefaultTrueSetting('showFilter', this.data);                                      // 246
    } else {                                                                                                    // 247
      context.showFilter = getDefaultFalseSetting('showFilter', this.data);                                     // 248
    }                                                                                                           // 249
    if (context.showFilter) {                                                                                   // 250
      filters.push(context.id + '-filter');                                                                     // 251
    }                                                                                                           // 252
    context.filters = new ReactiveVar(filters);                                                                 // 253
                                                                                                                // 254
    dependOnFilters(context.filters.get(), function () {                                                        // 255
      if (context.reactiveTableSetup) {                                                                         // 256
        context.currentPage.set(0);                                                                             // 257
        updateHandle(context);                                                                                  // 258
      }                                                                                                         // 259
    });                                                                                                         // 260
                                                                                                                // 261
    context.showColumnToggles = getDefaultFalseSetting('showColumnToggles', this.data);                         // 262
                                                                                                                // 263
    if (_.isUndefined(this.data.useFontAwesome)) {                                                              // 264
        if (!_.isUndefined(this.data.settings.useFontAwesome)) {                                                // 265
            context.useFontAwesome = this.data.settings.useFontAwesome;                                         // 266
        } else if (!_.isUndefined(Package['fortawesome:fontawesome'])) {                                        // 267
            context.useFontAwesome = true;                                                                      // 268
        } else {                                                                                                // 269
            context.useFontAwesome = false;                                                                     // 270
        }                                                                                                       // 271
    } else {                                                                                                    // 272
        context.useFontAwesome = this.data.useFontAwesome;                                                      // 273
    }                                                                                                           // 274
    context.enableRegex = getDefaultFalseSetting('enableRegex', this.data);                                     // 275
                                                                                                                // 276
    context.ready = new ReactiveVar(true);                                                                      // 277
                                                                                                                // 278
    if (context.server) {                                                                                       // 279
        context.ready.set(false);                                                                               // 280
        updateHandle(context);                                                                                  // 281
    }                                                                                                           // 282
                                                                                                                // 283
    context.reactiveTableSetup = true;                                                                          // 284
                                                                                                                // 285
    this.context = context;                                                                                     // 286
};                                                                                                              // 287
                                                                                                                // 288
var getDefaultFieldVisibility = function (field) {                                                              // 289
    return !field.hidden || (_.isFunction(field.hidden) && !field.hidden());                                    // 290
}                                                                                                               // 291
                                                                                                                // 292
var getPageCount = function () {                                                                                // 293
    var count;                                                                                                  // 294
    var rowsPerPage = this.rowsPerPage.get();                                                                   // 295
    if (this.server) {                                                                                          // 296
        count = ReactiveTableCounts.findOne(this.publicationId.get());                                          // 297
        return Math.ceil((count ? count.count : 0) / rowsPerPage);                                              // 298
    } else {                                                                                                    // 299
        var filterQuery = getFilterQuery(getFilterStrings(this.filters.get()), getFilterFields(this.filters.get(), this.fields), {enableRegex: this.enableRegex});
        count = this.collection.find(filterQuery).count();                                                      // 301
        return Math.ceil(count / rowsPerPage);                                                                  // 302
    }                                                                                                           // 303
};                                                                                                              // 304
                                                                                                                // 305
var getUpdateHandleForTemplate = function (template_instance) {                                                 // 306
    if (!template_instance.updateHandle) {                                                                      // 307
        template_instance.updateHandle = _.debounce(updateHandle, 200);                                         // 308
    }                                                                                                           // 309
    return template_instance.updateHandle;                                                                      // 310
};                                                                                                              // 311
                                                                                                                // 312
Template.reactiveTable.helpers({                                                                                // 313
                                                                                                                // 314
    'context': function () {                                                                                    // 315
        if (!Template.instance().context ||                                                                     // 316
            !_.isEqual(this, Template.instance().context.templateData)) {                                       // 317
            setup.call(Template.instance());                                                                    // 318
        }                                                                                                       // 319
        return Template.instance().context;                                                                     // 320
    },                                                                                                          // 321
                                                                                                                // 322
    'ready' : function () {                                                                                     // 323
        return this.ready.get();                                                                                // 324
    },                                                                                                          // 325
                                                                                                                // 326
    'getFilterId': function () {                                                                                // 327
        return this.id + '-filter';                                                                             // 328
    },                                                                                                          // 329
                                                                                                                // 330
    'getField': function (object) {                                                                             // 331
        var fn = this.fn || function (value) { return value; };                                                 // 332
        var key = this.key || this;                                                                             // 333
        var value = get(object, key);                                                                           // 334
        return fn(value, object);                                                                               // 335
    },                                                                                                          // 336
                                                                                                                // 337
    'getFieldIndex': function () {                                                                              // 338
        return _.indexOf(Template.parentData(1).fields, this);                                                  // 339
    },                                                                                                          // 340
                                                                                                                // 341
    'getFieldFieldId': function () {                                                                            // 342
        return this.fieldId;                                                                                    // 343
    },                                                                                                          // 344
                                                                                                                // 345
    'getKey': function () {                                                                                     // 346
        return this.key || this;                                                                                // 347
    },                                                                                                          // 348
                                                                                                                // 349
    'getHeaderClass': function () {                                                                             // 350
        if (_.isUndefined(this.headerClass)) {                                                                  // 351
            return this.key;                                                                                    // 352
        }                                                                                                       // 353
        var css;                                                                                                // 354
        if (_.isFunction(this.headerClass)) {                                                                   // 355
            css = this.headerClass();                                                                           // 356
        } else {                                                                                                // 357
            css = this.headerClass;                                                                             // 358
        }                                                                                                       // 359
        return css;                                                                                             // 360
    },                                                                                                          // 361
                                                                                                                // 362
    'getCellClass': function (object) {                                                                         // 363
        if (_.isUndefined(this.cellClass)) {                                                                    // 364
            return this.key;                                                                                    // 365
        }                                                                                                       // 366
        var css;                                                                                                // 367
        if (_.isFunction(this.cellClass)) {                                                                     // 368
            var value = get(object, this.key);                                                                  // 369
            css = this.cellClass(value, object);                                                                // 370
        } else {                                                                                                // 371
            css = this.cellClass;                                                                               // 372
        }                                                                                                       // 373
        return css;                                                                                             // 374
    },                                                                                                          // 375
                                                                                                                // 376
    'labelIsTemplate': function () {                                                                            // 377
        return this.label && _.isObject(this.label) && this.label instanceof Blaze.Template;                    // 378
    },                                                                                                          // 379
                                                                                                                // 380
    'getLabel': function () {                                                                                   // 381
        return _.isString(this.label) ? this.label : this.label();                                              // 382
    },                                                                                                          // 383
                                                                                                                // 384
    'isSortKey': function () {                                                                                  // 385
        var parentData = Template.parentData(1);                                                                // 386
        return parentData.sortKey.get() === this.fieldId;                                                       // 387
    },                                                                                                          // 388
                                                                                                                // 389
    'isSortable': function () {                                                                                 // 390
        return (this.sortable === undefined) ? true : this.sortable;                                            // 391
    },                                                                                                          // 392
                                                                                                                // 393
    'isVisible': function () {                                                                                  // 394
        var self = this; // is a field object                                                                   // 395
        var topLevelData;                                                                                       // 396
        if (Template.parentData(2) && Template.parentData(2).reactiveTableSetup) {                              // 397
          topLevelData = Template.parentData(2);                                                                // 398
        } else {                                                                                                // 399
          topLevelData = Template.parentData(1);                                                                // 400
        }                                                                                                       // 401
        var visibleFields = topLevelData.visibleFields.get();                                                   // 402
        var fields = topLevelData.fields;                                                                       // 403
                                                                                                                // 404
        var visibleField = _.findWhere(visibleFields, {fieldId: self.fieldId});                                 // 405
        if (visibleField) {                                                                                     // 406
            return visibleField.isVisible;                                                                      // 407
        } else {                                                                                                // 408
            // Add field to visibleFields list                                                                  // 409
            var _isVisible = getDefaultFieldVisibility(self);                                                   // 410
            visibleFields.push({fieldId:self.fieldId, isVisible:_isVisible});                                   // 411
            topLevelData.visibleFields.set(visibleFields);                                                      // 412
            return _isVisible;                                                                                  // 413
        }                                                                                                       // 414
    },                                                                                                          // 415
                                                                                                                // 416
    'isAscending' : function () {                                                                               // 417
        var sortDirection = Template.parentData(1).sortDirection.get();                                         // 418
        return (sortDirection === 1);                                                                           // 419
    },                                                                                                          // 420
                                                                                                                // 421
    'sortedRows': function () {                                                                                 // 422
        if (this.server) {                                                                                      // 423
            return this.publishedRows.find({                                                                    // 424
              "reactive-table-id": this.publicationId.get()                                                     // 425
            }, {                                                                                                // 426
              sort: {                                                                                           // 427
                "reactive-table-sort": 1                                                                        // 428
              }                                                                                                 // 429
            });                                                                                                 // 430
        } else  {                                                                                               // 431
            var sortDirection = this.sortDirection.get();                                                       // 432
            var sortKeyFieldId = this.sortKey.get();                                                            // 433
            var sortKeyField = _.findWhere(this.fields, {fieldId: sortKeyFieldId});                             // 434
                                                                                                                // 435
            var limit = this.rowsPerPage.get();                                                                 // 436
            var currentPage = this.currentPage.get();                                                           // 437
            var skip = currentPage * limit;                                                                     // 438
            var filterQuery = getFilterQuery(getFilterStrings(this.filters.get()), getFilterFields(this.filters.get(), this.fields), {enableRegex: this.enableRegex});
                                                                                                                // 440
            if (!sortKeyField) {                                                                                // 441
                // No sort field set, return unsorted collection                                                // 442
                return this.collection.find(filterQuery, {                                                      // 443
                    skip: skip,                                                                                 // 444
                    limit: limit                                                                                // 445
                });                                                                                             // 446
            } else if (sortKeyField.fn && !sortKeyField.sortByValue) {                                          // 447
                var data = this.collection.find(filterQuery).fetch();                                           // 448
                var sorted =_.sortBy(data, function (object) {                                                  // 449
                    return sortKeyField.fn(object[sortKeyField.key], object);                                   // 450
                });                                                                                             // 451
                if (sortDirection === -1) {                                                                     // 452
                    sorted = sorted.reverse();                                                                  // 453
                }                                                                                               // 454
                return sorted.slice(skip, skip + limit);                                                        // 455
            } else {                                                                                            // 456
                var sortKey = sortKeyField.key || sortKeyField;                                                 // 457
                var sortQuery = {};                                                                             // 458
                sortQuery[sortKey] = sortDirection;                                                             // 459
                                                                                                                // 460
                return this.collection.find(filterQuery, {                                                      // 461
                    sort: sortQuery,                                                                            // 462
                    skip: skip,                                                                                 // 463
                    limit: limit                                                                                // 464
                });                                                                                             // 465
            }                                                                                                   // 466
        }                                                                                                       // 467
    },                                                                                                          // 468
                                                                                                                // 469
    'getPageCount' : getPageCount,                                                                              // 470
                                                                                                                // 471
    'getRowsPerPage' : function () {                                                                            // 472
        return this.rowsPerPage.get();                                                                          // 473
    },                                                                                                          // 474
                                                                                                                // 475
    'getCurrentPage' : function () {                                                                            // 476
        return 1 + this.currentPage.get();                                                                      // 477
    },                                                                                                          // 478
                                                                                                                // 479
    'isntFirstPage' : function () {                                                                             // 480
        return this.currentPage.get() > 0;                                                                      // 481
    },                                                                                                          // 482
                                                                                                                // 483
    'isntLastPage' : function () {                                                                              // 484
        var currentPage = 1 + this.currentPage.get();                                                           // 485
        var pageCount = getPageCount.call(this);                                                                // 486
        return currentPage < pageCount;                                                                         // 487
    },                                                                                                          // 488
                                                                                                                // 489
    'showNavigation' : function () {                                                                            // 490
        if (this.showNavigation === 'always') return true;                                                      // 491
        if (this.showNavigation === 'never') return false;                                                      // 492
        return getPageCount.call(this) > 1;                                                                     // 493
    }                                                                                                           // 494
});                                                                                                             // 495
                                                                                                                // 496
Template.reactiveTable.events({                                                                                 // 497
    'click .reactive-table .sortable': function (event) {                                                       // 498
        var template = Template.instance();                                                                     // 499
        var target = $(event.target).is('i') ? $(event.target).parent() : $(event.target);                      // 500
        var sortFieldId = target.attr('fieldid');                                                               // 501
        var currentSortFieldId = template.context.sortKey.get();                                                // 502
        if (currentSortFieldId === sortFieldId) {                                                               // 503
            var sortDirection = -1 * template.context.sortDirection.get();                                      // 504
            template.context.sortDirection.set(sortDirection);                                                  // 505
        } else {                                                                                                // 506
            template.context.sortKey.set(sortFieldId);                                                          // 507
        }                                                                                                       // 508
        getUpdateHandleForTemplate(template)(template.context);                                                 // 509
    },                                                                                                          // 510
                                                                                                                // 511
    'change .reactive-table-columns-dropdown input': function (event) {                                         // 512
        var template = Template.instance();                                                                     // 513
        var target = $(event.target);                                                                           // 514
        var fieldId = target.attr('data-fieldid');                                                              // 515
        var visibleFields = template.context.visibleFields.get();                                               // 516
        var visibleField = _.findWhere(visibleFields, {fieldId: fieldId});                                      // 517
        if (visibleField) {                                                                                     // 518
            // Toggle visibility                                                                                // 519
            visibleField.isVisible = !visibleField.isVisible;                                                   // 520
            template.context.visibleFields.set(visibleFields);                                                  // 521
        }                                                                                                       // 522
    },                                                                                                          // 523
                                                                                                                // 524
    'change .reactive-table-navigation .rows-per-page input': function (event) {                                // 525
        var rowsPerPage = Math.max(~~$(event.target).val(), 1);                                                 // 526
        Template.instance().context.rowsPerPage.set(rowsPerPage);                                               // 527
        $(event.target).val(rowsPerPage);                                                                       // 528
        var template = Template.instance();                                                                     // 529
        getUpdateHandleForTemplate(template)(template.context);                                                 // 530
    },                                                                                                          // 531
                                                                                                                // 532
    'change .reactive-table-navigation .page-number input': function (event) {                                  // 533
        var currentPage = Math.max(~~$(event.target).val(), 1);                                                 // 534
        var pageCount = getPageCount.call(this);                                                                // 535
        if (currentPage > pageCount) {                                                                          // 536
          currentPage = pageCount;                                                                              // 537
        }                                                                                                       // 538
        if (currentPage < 0) {                                                                                  // 539
          currentPage = 1;                                                                                      // 540
        }                                                                                                       // 541
        var template = Template.instance();                                                                     // 542
        template.context.currentPage.set(currentPage - 1);                                                      // 543
        $(event.target).val(currentPage);                                                                       // 544
        getUpdateHandleForTemplate(template)(template.context);                                                 // 545
    },                                                                                                          // 546
                                                                                                                // 547
    'click .reactive-table-navigation .previous-page': function (event) {                                       // 548
        var template = Template.instance();                                                                     // 549
        var currentPage = template.context.currentPage.get();                                                   // 550
        template.context.currentPage.set(currentPage - 1);                                                      // 551
        getUpdateHandleForTemplate(template)(template.context);                                                 // 552
    },                                                                                                          // 553
                                                                                                                // 554
    'click .reactive-table-navigation .next-page': function (event) {                                           // 555
        var template = Template.instance();                                                                     // 556
        var currentPage = template.context.currentPage.get();                                                   // 557
        template.context.currentPage.set(currentPage + 1);                                                      // 558
        getUpdateHandleForTemplate(template)(template.context);                                                 // 559
    }                                                                                                           // 560
});                                                                                                             // 561
                                                                                                                // 562
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/filter.js                                                                //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var parseFilterString = function (filterString) {                                                               // 1
  var startQuoteRegExp = /^[\'\"]/;                                                                             // 2
  var endQuoteRegExp = /[\'\"]$/;                                                                               // 3
  var filters = [];                                                                                             // 4
  var words = filterString.split(' ');                                                                          // 5
                                                                                                                // 6
  var inQuote = false;                                                                                          // 7
  var quotedWord = '';                                                                                          // 8
  _.each(words, function (word) {                                                                               // 9
    if (inQuote) {                                                                                              // 10
      if (endQuoteRegExp.test(word)) {                                                                          // 11
        filters.push(quotedWord + ' ' + word.slice(0, word.length - 1));                                        // 12
        inQuote = false;                                                                                        // 13
        quotedWord = '';                                                                                        // 14
      } else {                                                                                                  // 15
        quotedWord = quotedWord + ' ' + word;                                                                   // 16
      }                                                                                                         // 17
    } else if (startQuoteRegExp.test(word)) {                                                                   // 18
      if (endQuoteRegExp.test(word)) {                                                                          // 19
        filters.push(word.slice(1, word.length - 1));                                                           // 20
      } else {                                                                                                  // 21
        inQuote = true;                                                                                         // 22
        quotedWord = word.slice(1, word.length);                                                                // 23
      }                                                                                                         // 24
    } else {                                                                                                    // 25
      filters.push(word);                                                                                       // 26
    }                                                                                                           // 27
  });                                                                                                           // 28
  return filters;                                                                                               // 29
};                                                                                                              // 30
                                                                                                                // 31
var escapeRegex = function(text) {                                                                              // 32
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");                                                      // 33
};                                                                                                              // 34
                                                                                                                // 35
getFilterQuery = function (filterInputs, filterFields, settings) {                                              // 36
  settings = settings || {};                                                                                    // 37
  if (settings.enableRegex === undefined) {                                                                     // 38
    settings.enableRegex = false;                                                                               // 39
  }                                                                                                             // 40
  if (settings.fields) {                                                                                        // 41
    _.each(filterInputs, function (filter, index) {                                                             // 42
      if (_.any(settings.fields, function (include) { return include; })) {                                     // 43
        filterFields[index] = _.filter(filterFields[index], function (field) {                                  // 44
          return settings.fields[field.key];                                                                    // 45
        });                                                                                                     // 46
      } else {                                                                                                  // 47
        filterFields[index] = _.filter(filterFields[index], function (field) {                                  // 48
          return _.isUndefined(settings.fields[field.key]) || settings.fields[field.key];                       // 49
        });                                                                                                     // 50
      }                                                                                                         // 51
    });                                                                                                         // 52
  }                                                                                                             // 53
  var numberRegExp = /^\d+$/;                                                                                   // 54
  var queryList = [];                                                                                           // 55
  _.each(filterInputs, function (filter, index) {                                                               // 56
    if (filter) {                                                                                               // 57
      if (_.isObject(filter)) {                                                                                 // 58
        var fieldQueries = _.map(filterFields[index], function (field) {                                        // 59
          var query = {};                                                                                       // 60
          query[field] = filter;                                                                                // 61
          return query;                                                                                         // 62
        });                                                                                                     // 63
        if (fieldQueries.length) {                                                                              // 64
            queryList.push({'$or': fieldQueries});                                                              // 65
          }                                                                                                     // 66
      } else {                                                                                                  // 67
        var filters = parseFilterString(filter);                                                                // 68
        _.each(filters, function (filterWord) {                                                                 // 69
          if (settings.enableRegex === false) {                                                                 // 70
            filterWord = escapeRegex(filterWord);                                                               // 71
          }                                                                                                     // 72
          var filterQueryList = [];                                                                             // 73
          _.each(filterFields[index], function (field) {                                                        // 74
            var filterRegExp = new RegExp(filterWord, 'i');                                                     // 75
            var query = {};                                                                                     // 76
            query[field.key || field] = filterRegExp;                                                           // 77
            filterQueryList.push(query);                                                                        // 78
                                                                                                                // 79
            if (numberRegExp.test(filterWord)) {                                                                // 80
              var numberQuery = {};                                                                             // 81
              numberQuery[field.key || field] = parseInt(filterWord, 10);                                       // 82
              filterQueryList.push(numberQuery);                                                                // 83
            }                                                                                                   // 84
                                                                                                                // 85
            if (filterWord === "true") {                                                                        // 86
              var boolQuery = {};                                                                               // 87
              boolQuery[field.key || field] = true;                                                             // 88
              filterQueryList.push(boolQuery);                                                                  // 89
            } else if (filterWord === "false") {                                                                // 90
              var boolQuery = {};                                                                               // 91
              boolQuery[field.key || field] = false;                                                            // 92
              filterQueryList.push(boolQuery);                                                                  // 93
            }                                                                                                   // 94
          });                                                                                                   // 95
                                                                                                                // 96
          if (filterQueryList.length) {                                                                         // 97
            var filterQuery = {'$or': filterQueryList};                                                         // 98
            queryList.push(filterQuery);                                                                        // 99
          }                                                                                                     // 100
        });                                                                                                     // 101
      }                                                                                                         // 102
    }                                                                                                           // 103
  });                                                                                                           // 104
  return queryList.length ? {'$and': queryList} : {};                                                           // 105
};                                                                                                              // 106
                                                                                                                // 107
if (Meteor.isClient) {                                                                                          // 108
  ReactiveTable = ReactiveTable || {};                                                                          // 109
                                                                                                                // 110
  var reactiveTableFilters = {};                                                                                // 111
  var callbacks = {};                                                                                           // 112
                                                                                                                // 113
  ReactiveTable.Filter = function (id, fields) {                                                                // 114
    if (reactiveTableFilters[id]) {                                                                             // 115
        return reactiveTableFilters[id];                                                                        // 116
    }                                                                                                           // 117
                                                                                                                // 118
    var filter = new ReactiveVar();                                                                             // 119
                                                                                                                // 120
    this.fields = fields;                                                                                       // 121
                                                                                                                // 122
    this.get = function () {                                                                                    // 123
      return filter.get() || '';                                                                                // 124
    };                                                                                                          // 125
                                                                                                                // 126
    this.set = function (filterString) {                                                                        // 127
      filter.set(filterString);                                                                                 // 128
      _.each(callbacks[id], function (callback) {                                                               // 129
        callback();                                                                                             // 130
      });                                                                                                       // 131
    };                                                                                                          // 132
                                                                                                                // 133
    reactiveTableFilters[id] = this;                                                                            // 134
  };                                                                                                            // 135
                                                                                                                // 136
  ReactiveTable.clearFilters = function (filterIds) {                                                           // 137
    _.each(filterIds, function (filterId) {                                                                     // 138
      if (reactiveTableFilters[filterId]) {                                                                     // 139
        reactiveTableFilters[filterId].set('');                                                                 // 140
      }                                                                                                         // 141
    });                                                                                                         // 142
  };                                                                                                            // 143
                                                                                                                // 144
  dependOnFilters = function (filterIds, callback) {                                                            // 145
    _.each(filterIds, function (filterId) {                                                                     // 146
      if (_.isUndefined(callbacks[filterId])) {                                                                 // 147
        callbacks[filterId] = [];                                                                               // 148
      }                                                                                                         // 149
      callbacks[filterId].push(callback);                                                                       // 150
    });                                                                                                         // 151
  };                                                                                                            // 152
                                                                                                                // 153
  getFilterStrings = function (filterIds) {                                                                     // 154
    return _.map(filterIds, function (filterId) {                                                               // 155
      if (_.isUndefined(reactiveTableFilters[filterId])) {                                                      // 156
        return '';                                                                                              // 157
      }                                                                                                         // 158
      return reactiveTableFilters[filterId].get();                                                              // 159
    });                                                                                                         // 160
  };                                                                                                            // 161
                                                                                                                // 162
  getFilterFields = function (filterIds, allFields) {                                                           // 163
    return _.map(filterIds, function (filterId) {                                                               // 164
      if (_.isUndefined(reactiveTableFilters[filterId])) {                                                      // 165
        return allFields;                                                                                       // 166
      } else if (_.isEmpty(reactiveTableFilters[filterId].fields)) {                                            // 167
        return allFields;                                                                                       // 168
      } else {                                                                                                  // 169
        return reactiveTableFilters[filterId].fields;                                                           // 170
      }                                                                                                         // 171
    });                                                                                                         // 172
  };                                                                                                            // 173
                                                                                                                // 174
  Template.reactiveTableFilter.helpers({                                                                        // 175
    'class': function () {                                                                                      // 176
      return this.class || 'input-group';                                                                       // 177
    },                                                                                                          // 178
                                                                                                                // 179
    'filter': function () {                                                                                     // 180
      if (_.isUndefined(reactiveTableFilters[this.id])) {                                                       // 181
        new ReactiveTable.Filter(this.id, this.fields);                                                         // 182
      }                                                                                                         // 183
      return reactiveTableFilters[this.id].get();                                                               // 184
    }                                                                                                           // 185
  });                                                                                                           // 186
                                                                                                                // 187
  var updateFilter = _.debounce(function (template, filterText) {                                               // 188
    reactiveTableFilters[template.data.id].set(filterText);                                                     // 189
  }, 200);                                                                                                      // 190
                                                                                                                // 191
  Template.reactiveTableFilter.events({                                                                         // 192
    'keyup .reactive-table-input, input .reactive-table-input': function (event) {                              // 193
      var template = Template.instance();                                                                       // 194
      var filterText = $(event.target).val();                                                                   // 195
      updateFilter(template, filterText);                                                                       // 196
    },                                                                                                          // 197
  });                                                                                                           // 198
}                                                                                                               // 199
                                                                                                                // 200
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aslagle:reactive-table'] = {
  ReactiveTable: ReactiveTable
};

})();
