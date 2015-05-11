(function(){
Template.__checkName("postInfo");
Template["postInfo"] = new Template("Template.postInfo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "post-meta-item",
    "aria-live": "off"
  }, "\n    ", HTML.SPAN({
    "class": "points"
  }, Blaze.View("lookup:baseScore", function() {
    return Spacebars.mustache(view.lookup("baseScore"));
  })), "\n    ", HTML.SPAN({
    "class": "unit"
  }, Blaze.View("lookup:pointsUnitDisplayText", function() {
    return Spacebars.mustache(view.lookup("pointsUnitDisplayText"));
  })), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("postedAt"));
  }, function() {
    return HTML.SPAN({
      "class": "post-time"
    }, Blaze.View("lookup:timeAgo", function() {
      return Spacebars.mustache(view.lookup("timeAgo"), view.lookup("postedAt"));
    }));
  }), "\n    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("canEdit"), view.lookup("."));
  }, function() {
    return [ "\n      | ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "post_edit",
          _id: view.lookup("_id")
        }));
      },
      "class": "edit-link goto-edit"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "edit");
    })), "\n    " ];
  }), "\n  ");
}));

})();
