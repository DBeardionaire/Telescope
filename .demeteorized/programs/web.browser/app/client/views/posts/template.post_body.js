(function(){
Template.__checkName("post_body");
Template["post_body"] = new Template("Template.post_body", (function() {
  var view = this;
  return HTML.DIV({
    "class": "post-body markdown",
    "aria-live": "polite"
  }, Blaze.View("lookup:htmlBody", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("htmlBody")));
  }));
}));

})();
