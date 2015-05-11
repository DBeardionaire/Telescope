(function(){
Template.__checkName("postAdmin");
Template["postAdmin"] = new Template("Template.postAdmin", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "post-meta-item",
      "aria-live": "off"
    }, "\n      ", Blaze.If(function() {
      return Spacebars.call(view.lookup("showApprove"));
    }, function() {
      return [ "\n        | ", HTML.A({
        href: "#",
        "class": "approve-link goto-edit"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "approve");
      })), "\n      " ];
    }), "\n      ", Blaze.If(function() {
      return Spacebars.call(view.lookup("showUnapprove"));
    }, function() {
      return [ "\n        | ", HTML.A({
        href: "#",
        "class": "unapprove-link goto-edit"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "unapprove");
      })), "\n      " ];
    }), "\n      | ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "score");
    }), ": ", Blaze.View("lookup:shortScore", function() {
      return Spacebars.mustache(view.lookup("shortScore"));
    }), ", ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "clicks");
    }), ": ", Blaze.View("lookup:clickCount", function() {
      return Spacebars.mustache(view.lookup("clickCount"));
    }), ", ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "views");
    }), ": ", Blaze.View("lookup:viewCount", function() {
      return Spacebars.mustache(view.lookup("viewCount"));
    }), "\n    "), "\n  " ];
  });
}));

})();
