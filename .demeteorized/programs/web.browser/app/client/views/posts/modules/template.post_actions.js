(function(){
Template.__checkName("postActions");
Template["postActions"] = new Template("Template.postActions", (function() {
  var view = this;
  return HTML.A({
    "class": "toggle-actions-link mobile-only",
    href: "#"
  }, "\n    ", Blaze.View("lookup:icon", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "more", "icon-circle"));
  }), "\n  ");
}));

})();
