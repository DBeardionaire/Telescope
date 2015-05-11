(function(){
Template.__checkName("postAuthor");
Template["postAuthor"] = new Template("Template.postAuthor", (function() {
  var view = this;
  return HTML.A({
    "class": "post-author",
    href: function() {
      return Spacebars.mustache(view.lookup("profileUrl"), view.lookup("userId"));
    }
  }, Blaze.View("lookup:displayName", function() {
    return Spacebars.mustache(view.lookup("displayName"), view.lookup("userId"));
  }));
}));

})();
