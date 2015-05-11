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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/telescope-datetimepicker/template.autoform-bs-datetimepicker.js                              //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("afBootstrapDateTimePicker");                                                       // 2
Template["afBootstrapDateTimePicker"] = new Template("Template.afBootstrapDateTimePicker", (function() { // 3
  var view = this;                                                                                       // 4
  return HTML.INPUT(HTML.Attrs({                                                                         // 5
    type: "text",                                                                                        // 6
    value: ""                                                                                            // 7
  }, function() {                                                                                        // 8
    return Spacebars.attrMustache(view.lookup("atts"));                                                  // 9
  }));                                                                                                   // 10
}));                                                                                                     // 11
                                                                                                         // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/telescope-datetimepicker/autoform-bs-datetimepicker.js                                       //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
AutoForm.addInputType("bootstrap-datetimepicker", {                                                      // 1
  template: "afBootstrapDateTimePicker",                                                                 // 2
  valueOut: function () {                                                                                // 3
    // var val = this.datepicker('getUTCDate');                                                          // 4
    if (!!this.data("DateTimePicker").getDate()) {                                                       // 5
      var val = this.data("DateTimePicker").getDate().toDate();                                          // 6
      // console.log(val)                                                                                // 7
      return (val instanceof Date) ? val : this.val();                                                   // 8
    }                                                                                                    // 9
  },                                                                                                     // 10
  valueConverters: {                                                                                     // 11
    "string": function (val) {                                                                           // 12
      return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;                    // 13
    },                                                                                                   // 14
    "stringArray": function (val) {                                                                      // 15
      if (val instanceof Date) {                                                                         // 16
        return [AutoForm.Utility.dateToDateStringUTC(val)];                                              // 17
      }                                                                                                  // 18
      return val;                                                                                        // 19
    },                                                                                                   // 20
    "number": function (val) {                                                                           // 21
      return (val instanceof Date) ? val.getTime() : val;                                                // 22
    },                                                                                                   // 23
    "numberArray": function (val) {                                                                      // 24
      if (val instanceof Date) {                                                                         // 25
        return [val.getTime()];                                                                          // 26
      }                                                                                                  // 27
      return val;                                                                                        // 28
    },                                                                                                   // 29
    "dateArray": function (val) {                                                                        // 30
      if (val instanceof Date) {                                                                         // 31
        return [val];                                                                                    // 32
      }                                                                                                  // 33
      return val;                                                                                        // 34
    }                                                                                                    // 35
  }                                                                                                      // 36
});                                                                                                      // 37
                                                                                                         // 38
Template.afBootstrapDateTimePicker.helpers({                                                             // 39
    atts: function addFormControlAtts() {                                                                // 40
      var atts = _.clone(this.atts);                                                                     // 41
      // Add bootstrap class                                                                             // 42
      atts = AutoForm.Utility.addClass(atts, "form-control");                                            // 43
      return atts;                                                                                       // 44
    }                                                                                                    // 45
  });                                                                                                    // 46
                                                                                                         // 47
Template.afBootstrapDateTimePicker.rendered = function () {                                              // 48
  var $input = this.$('input');                                                                          // 49
  var data = this.data;                                                                                  // 50
                                                                                                         // 51
  // instanciate datepicker                                                                              // 52
  $input.datetimepicker(data.atts.datePickerOptions);                                                    // 53
                                                                                                         // 54
  // set and reactively update values                                                                    // 55
  this.autorun(function () {                                                                             // 56
    var data = Template.currentData();                                                                   // 57
                                                                                                         // 58
    // set field value                                                                                   // 59
    if (data.value instanceof Date) {                                                                    // 60
      // $input.datepicker('setUTCDate', data.value);                                                    // 61
      $input.data("DateTimePicker").setDate(data.value);                                                 // 62
    } else if (typeof data.value === "string") {                                                         // 63
      // $input.datepicker('update', data.value);                                                        // 64
      $input.data("DateTimePicker").setDate(moment(data.value).toDate());                                // 65
    }                                                                                                    // 66
                                                                                                         // 67
    // set start date if there's a min in the schema                                                     // 68
    if (data.min instanceof Date) {                                                                      // 69
      // datepicker plugin expects local Date object, so convert UTC Date object to local                // 70
      var startDate = utcToLocal(data.min);                                                              // 71
      // $input.datepicker('setStartDate', startDate);                                                   // 72
      $input.data("DateTimePicker").setMinDate(startDate);                                               // 73
    }                                                                                                    // 74
                                                                                                         // 75
    // set end date if there's a max in the schema                                                       // 76
    if (data.max instanceof Date) {                                                                      // 77
      // datepicker plugin expects local Date object, so convert UTC Date object to local                // 78
      var endDate = utcToLocal(data.max);                                                                // 79
      // $input.datepicker('setEndDate', endDate);                                                       // 80
      $input.data("DateTimePicker").setMinDate(endDate);                                                 // 81
    }                                                                                                    // 82
  });                                                                                                    // 83
                                                                                                         // 84
};                                                                                                       // 85
                                                                                                         // 86
Template.afBootstrapDateTimePicker.destroyed = function () {                                             // 87
  // this.$('input').datepicker('remove');                                                               // 88
  this.$('input').data('DateTimePicker').destroy();                                                      // 89
};                                                                                                       // 90
                                                                                                         // 91
function utcToLocal(utcDate) {                                                                           // 92
  var localDateObj = new Date();                                                                         // 93
  localDateObj.setDate(utcDate.getUTCDate());                                                            // 94
  localDateObj.setMonth(utcDate.getUTCMonth());                                                          // 95
  localDateObj.setFullYear(utcDate.getUTCFullYear());                                                    // 96
  localDateObj.setHours(0);                                                                              // 97
  localDateObj.setMinutes(0);                                                                            // 98
  localDateObj.setSeconds(0);                                                                            // 99
  localDateObj.setMilliseconds(0);                                                                       // 100
  return localDateObj;                                                                                   // 101
}                                                                                                        // 102
                                                                                                         // 103
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/telescope-datetimepicker/bootstrap-collapse-transitions.js                                   //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
/*!                                                                                                      // 1
 * Bootstrap v3.3.1 (http://getbootstrap.com)                                                            // 2
 * Copyright 2011-2014 Twitter, Inc.                                                                     // 3
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                            // 4
 */                                                                                                      // 5
                                                                                                         // 6
/*!                                                                                                      // 7
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=81631ba40c2459b10edf) // 8
 * Config saved to config.json and https://gist.github.com/81631ba40c2459b10edf                          // 9
 */                                                                                                      // 10
if (typeof jQuery === 'undefined') {                                                                     // 11
  throw new Error('Bootstrap\'s JavaScript requires jQuery')                                             // 12
}                                                                                                        // 13
+function ($) {                                                                                          // 14
  var version = $.fn.jquery.split(' ')[0].split('.')                                                     // 15
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {    // 16
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')                   // 17
  }                                                                                                      // 18
}(jQuery);                                                                                               // 19
                                                                                                         // 20
/* ========================================================================                              // 21
 * Bootstrap: collapse.js v3.3.1                                                                         // 22
 * http://getbootstrap.com/javascript/#collapse                                                          // 23
 * ========================================================================                              // 24
 * Copyright 2011-2014 Twitter, Inc.                                                                     // 25
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                            // 26
 * ======================================================================== */                           // 27
                                                                                                         // 28
                                                                                                         // 29
+function ($) {                                                                                          // 30
  'use strict';                                                                                          // 31
                                                                                                         // 32
  // COLLAPSE PUBLIC CLASS DEFINITION                                                                    // 33
  // ================================                                                                    // 34
                                                                                                         // 35
  var Collapse = function (element, options) {                                                           // 36
    this.$element      = $(element)                                                                      // 37
    this.options       = $.extend({}, Collapse.DEFAULTS, options)                                        // 38
    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
    this.transitioning = null                                                                            // 40
                                                                                                         // 41
    if (this.options.parent) {                                                                           // 42
      this.$parent = this.getParent()                                                                    // 43
    } else {                                                                                             // 44
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)                                        // 45
    }                                                                                                    // 46
                                                                                                         // 47
    if (this.options.toggle) this.toggle()                                                               // 48
  }                                                                                                      // 49
                                                                                                         // 50
  Collapse.VERSION  = '3.3.1'                                                                            // 51
                                                                                                         // 52
  Collapse.TRANSITION_DURATION = 350                                                                     // 53
                                                                                                         // 54
  Collapse.DEFAULTS = {                                                                                  // 55
    toggle: true,                                                                                        // 56
    trigger: '[data-toggle="collapse"]'                                                                  // 57
  }                                                                                                      // 58
                                                                                                         // 59
  Collapse.prototype.dimension = function () {                                                           // 60
    var hasWidth = this.$element.hasClass('width')                                                       // 61
    return hasWidth ? 'width' : 'height'                                                                 // 62
  }                                                                                                      // 63
                                                                                                         // 64
  Collapse.prototype.show = function () {                                                                // 65
    if (this.transitioning || this.$element.hasClass('in')) return                                       // 66
                                                                                                         // 67
    var activesData                                                                                      // 68
    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing')             // 69
                                                                                                         // 70
    if (actives && actives.length) {                                                                     // 71
      activesData = actives.data('bs.collapse')                                                          // 72
      if (activesData && activesData.transitioning) return                                               // 73
    }                                                                                                    // 74
                                                                                                         // 75
    var startEvent = $.Event('show.bs.collapse')                                                         // 76
    this.$element.trigger(startEvent)                                                                    // 77
    if (startEvent.isDefaultPrevented()) return                                                          // 78
                                                                                                         // 79
    if (actives && actives.length) {                                                                     // 80
      Plugin.call(actives, 'hide')                                                                       // 81
      activesData || actives.data('bs.collapse', null)                                                   // 82
    }                                                                                                    // 83
                                                                                                         // 84
    var dimension = this.dimension()                                                                     // 85
                                                                                                         // 86
    this.$element                                                                                        // 87
      .removeClass('collapse')                                                                           // 88
      .addClass('collapsing')[dimension](0)                                                              // 89
      .attr('aria-expanded', true)                                                                       // 90
                                                                                                         // 91
    this.$trigger                                                                                        // 92
      .removeClass('collapsed')                                                                          // 93
      .attr('aria-expanded', true)                                                                       // 94
                                                                                                         // 95
    this.transitioning = 1                                                                               // 96
                                                                                                         // 97
    var complete = function () {                                                                         // 98
      this.$element                                                                                      // 99
        .removeClass('collapsing')                                                                       // 100
        .addClass('collapse in')[dimension]('')                                                          // 101
      this.transitioning = 0                                                                             // 102
      this.$element                                                                                      // 103
        .trigger('shown.bs.collapse')                                                                    // 104
    }                                                                                                    // 105
                                                                                                         // 106
    if (!$.support.transition) return complete.call(this)                                                // 107
                                                                                                         // 108
    var scrollSize = $.camelCase(['scroll', dimension].join('-'))                                        // 109
                                                                                                         // 110
    this.$element                                                                                        // 111
      .one('bsTransitionEnd', $.proxy(complete, this))                                                   // 112
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])       // 113
  }                                                                                                      // 114
                                                                                                         // 115
  Collapse.prototype.hide = function () {                                                                // 116
    if (this.transitioning || !this.$element.hasClass('in')) return                                      // 117
                                                                                                         // 118
    var startEvent = $.Event('hide.bs.collapse')                                                         // 119
    this.$element.trigger(startEvent)                                                                    // 120
    if (startEvent.isDefaultPrevented()) return                                                          // 121
                                                                                                         // 122
    var dimension = this.dimension()                                                                     // 123
                                                                                                         // 124
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight                                 // 125
                                                                                                         // 126
    this.$element                                                                                        // 127
      .addClass('collapsing')                                                                            // 128
      .removeClass('collapse in')                                                                        // 129
      .attr('aria-expanded', false)                                                                      // 130
                                                                                                         // 131
    this.$trigger                                                                                        // 132
      .addClass('collapsed')                                                                             // 133
      .attr('aria-expanded', false)                                                                      // 134
                                                                                                         // 135
    this.transitioning = 1                                                                               // 136
                                                                                                         // 137
    var complete = function () {                                                                         // 138
      this.transitioning = 0                                                                             // 139
      this.$element                                                                                      // 140
        .removeClass('collapsing')                                                                       // 141
        .addClass('collapse')                                                                            // 142
        .trigger('hidden.bs.collapse')                                                                   // 143
    }                                                                                                    // 144
                                                                                                         // 145
    if (!$.support.transition) return complete.call(this)                                                // 146
                                                                                                         // 147
    this.$element                                                                                        // 148
      [dimension](0)                                                                                     // 149
      .one('bsTransitionEnd', $.proxy(complete, this))                                                   // 150
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)                                                // 151
  }                                                                                                      // 152
                                                                                                         // 153
  Collapse.prototype.toggle = function () {                                                              // 154
    this[this.$element.hasClass('in') ? 'hide' : 'show']()                                               // 155
  }                                                                                                      // 156
                                                                                                         // 157
  Collapse.prototype.getParent = function () {                                                           // 158
    return $(this.options.parent)                                                                        // 159
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')                       // 160
      .each($.proxy(function (i, element) {                                                              // 161
        var $element = $(element)                                                                        // 162
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)                          // 163
      }, this))                                                                                          // 164
      .end()                                                                                             // 165
  }                                                                                                      // 166
                                                                                                         // 167
  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {                          // 168
    var isOpen = $element.hasClass('in')                                                                 // 169
                                                                                                         // 170
    $element.attr('aria-expanded', isOpen)                                                               // 171
    $trigger                                                                                             // 172
      .toggleClass('collapsed', !isOpen)                                                                 // 173
      .attr('aria-expanded', isOpen)                                                                     // 174
  }                                                                                                      // 175
                                                                                                         // 176
  function getTargetFromTrigger($trigger) {                                                              // 177
    var href                                                                                             // 178
    var target = $trigger.attr('data-target')                                                            // 179
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7           // 180
                                                                                                         // 181
    return $(target)                                                                                     // 182
  }                                                                                                      // 183
                                                                                                         // 184
                                                                                                         // 185
  // COLLAPSE PLUGIN DEFINITION                                                                          // 186
  // ==========================                                                                          // 187
                                                                                                         // 188
  function Plugin(option) {                                                                              // 189
    return this.each(function () {                                                                       // 190
      var $this   = $(this)                                                                              // 191
      var data    = $this.data('bs.collapse')                                                            // 192
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)   // 193
                                                                                                         // 194
      if (!data && options.toggle && option == 'show') options.toggle = false                            // 195
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))                         // 196
      if (typeof option == 'string') data[option]()                                                      // 197
    })                                                                                                   // 198
  }                                                                                                      // 199
                                                                                                         // 200
  var old = $.fn.collapse                                                                                // 201
                                                                                                         // 202
  $.fn.collapse             = Plugin                                                                     // 203
  $.fn.collapse.Constructor = Collapse                                                                   // 204
                                                                                                         // 205
                                                                                                         // 206
  // COLLAPSE NO CONFLICT                                                                                // 207
  // ====================                                                                                // 208
                                                                                                         // 209
  $.fn.collapse.noConflict = function () {                                                               // 210
    $.fn.collapse = old                                                                                  // 211
    return this                                                                                          // 212
  }                                                                                                      // 213
                                                                                                         // 214
                                                                                                         // 215
  // COLLAPSE DATA-API                                                                                   // 216
  // =================                                                                                   // 217
                                                                                                         // 218
  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {                // 219
    var $this   = $(this)                                                                                // 220
                                                                                                         // 221
    if (!$this.attr('data-target')) e.preventDefault()                                                   // 222
                                                                                                         // 223
    var $target = getTargetFromTrigger($this)                                                            // 224
    var data    = $target.data('bs.collapse')                                                            // 225
    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })                        // 226
                                                                                                         // 227
    Plugin.call($target, option)                                                                         // 228
  })                                                                                                     // 229
                                                                                                         // 230
}(jQuery);                                                                                               // 231
                                                                                                         // 232
/* ========================================================================                              // 233
 * Bootstrap: transition.js v3.3.1                                                                       // 234
 * http://getbootstrap.com/javascript/#transitions                                                       // 235
 * ========================================================================                              // 236
 * Copyright 2011-2014 Twitter, Inc.                                                                     // 237
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                            // 238
 * ======================================================================== */                           // 239
                                                                                                         // 240
                                                                                                         // 241
+function ($) {                                                                                          // 242
  'use strict';                                                                                          // 243
                                                                                                         // 244
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)                                        // 245
  // ============================================================                                        // 246
                                                                                                         // 247
  function transitionEnd() {                                                                             // 248
    var el = document.createElement('bootstrap')                                                         // 249
                                                                                                         // 250
    var transEndEventNames = {                                                                           // 251
      WebkitTransition : 'webkitTransitionEnd',                                                          // 252
      MozTransition    : 'transitionend',                                                                // 253
      OTransition      : 'oTransitionEnd otransitionend',                                                // 254
      transition       : 'transitionend'                                                                 // 255
    }                                                                                                    // 256
                                                                                                         // 257
    for (var name in transEndEventNames) {                                                               // 258
      if (el.style[name] !== undefined) {                                                                // 259
        return { end: transEndEventNames[name] }                                                         // 260
      }                                                                                                  // 261
    }                                                                                                    // 262
                                                                                                         // 263
    return false // explicit for ie8 (  ._.)                                                             // 264
  }                                                                                                      // 265
                                                                                                         // 266
  // http://blog.alexmaccaw.com/css-transitions                                                          // 267
  $.fn.emulateTransitionEnd = function (duration) {                                                      // 268
    var called = false                                                                                   // 269
    var $el = this                                                                                       // 270
    $(this).one('bsTransitionEnd', function () { called = true })                                        // 271
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }                 // 272
    setTimeout(callback, duration)                                                                       // 273
    return this                                                                                          // 274
  }                                                                                                      // 275
                                                                                                         // 276
  $(function () {                                                                                        // 277
    $.support.transition = transitionEnd()                                                               // 278
                                                                                                         // 279
    if (!$.support.transition) return                                                                    // 280
                                                                                                         // 281
    $.event.special.bsTransitionEnd = {                                                                  // 282
      bindType: $.support.transition.end,                                                                // 283
      delegateType: $.support.transition.end,                                                            // 284
      handle: function (e) {                                                                             // 285
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)                      // 286
      }                                                                                                  // 287
    }                                                                                                    // 288
  })                                                                                                     // 289
                                                                                                         // 290
}(jQuery);                                                                                               // 291
                                                                                                         // 292
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-datetimepicker'] = {};

})();
