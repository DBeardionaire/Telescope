(function(){
Template.__checkName("postDiscuss");
Template["postDiscuss"] = new Template("Template.postDiscuss", (function() {
  var view = this;
  return HTML.A({
    "class": "discuss-link go-to-comments action",
    href: function() {
      return [ "/posts/", Spacebars.mustache(view.lookup("_id")) ];
    },
    title: function() {
      return Spacebars.mustache(view.lookup("_"), "discuss");
    }
  }, "\n    ", Blaze.View("lookup:icon", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "comment"));
  }), "\n    ", HTML.SPAN({
    "class": "action-count"
  }, Blaze.View("lookup:commentCount", function() {
    return Spacebars.mustache(view.lookup("commentCount"));
  })), "\n    ", HTML.SPAN({
    "class": "sr-only"
  }, " ", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "comments");
  })), "\n  ");
}));

})();
