(function(){
Template.__checkName("afBootstrapUrl_bootstrap3");
Template["afBootstrapUrl_bootstrap3"] = new Template("Template.afBootstrapUrl_bootstrap3", (function() {
  var view = this;
  return HTML.INPUT(HTML.Attrs({
    type: "text",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));
    }
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));
  }));
}));

})();
