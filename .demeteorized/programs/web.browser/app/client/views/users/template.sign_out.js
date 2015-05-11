(function(){
Template.__checkName("sign_out");
Template["sign_out"] = new Template("Template.sign_out", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid-small grid-block dialog"
  }, "\n    ", HTML.P(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "you_ve_been_signed_out");
  })), "\n  ");
}));

})();
