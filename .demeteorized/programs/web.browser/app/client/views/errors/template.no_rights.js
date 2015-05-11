(function(){
Template.__checkName("no_rights");
Template["no_rights"] = new Template("Template.no_rights", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid-small grid-block dialog"
  }, "\n    ", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "sorry_you_dont_have_the_rights_to_view_this_page");
  }), "\n  ");
}));

})();
