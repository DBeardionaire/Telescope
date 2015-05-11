(function(){
Template.__checkName("already_logged_in");
Template["already_logged_in"] = new Template("Template.already_logged_in", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid-small grid-block dialog"
  }, "\n		", HTML.P(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "you_are_already_logged_in");
  })), "\n	");
}));

})();
