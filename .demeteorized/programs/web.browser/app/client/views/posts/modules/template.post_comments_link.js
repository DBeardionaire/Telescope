(function(){
Template.__checkName("postCommentsLink");
Template["postCommentsLink"] = new Template("Template.postCommentsLink", (function() {
  var view = this;
  return HTML.DIV({
    "class": "post-meta-item"
  }, "\n    ", HTML.A({
    "class": "comments-link",
    href: function() {
      return [ "/posts/", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, "\n      ", HTML.SPAN({
    "class": "comments-count"
  }, Blaze.View("lookup:commentCount", function() {
    return Spacebars.mustache(view.lookup("commentCount"));
  })), "\n      ", HTML.SPAN({
    "class": "comments-action"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "comments_");
  })), "\n    "), "\n  ");
}));

})();
