(function(){
Template.__checkName("notFound");
Template["notFound"] = new Template("Template.notFound", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid-small grid-block dialog"
  }, "\n		", HTML.H2(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "not_found");
  })), "\n    ", HTML.P(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "were_sorry_whatever_you_were_looking_for_isnt_here");
  })), "\n	");
}));

})();
