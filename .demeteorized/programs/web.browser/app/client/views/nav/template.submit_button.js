(function(){
Template.__checkName("submitButton");
Template["submitButton"] = new Template("Template.submitButton", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("canPost"));
  }, function() {
    return [ "\n    ", HTML.A({
      id: "submit",
      "class": "submit btn header-submodule btn-primary",
      href: "/submit"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "post");
    })), "\n  " ];
  });
}));

})();
