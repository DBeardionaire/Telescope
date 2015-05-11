(function(){
Template.__checkName("viewsMenu");
Template["viewsMenu"] = new Template("Template.viewsMenu", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("canView"));
  }, function() {
    return [ "\n    ", Blaze._TemplateWith(function() {
      return Spacebars.call(view.lookup("viewsMenuData"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("menuComponent"));
    }), "\n  " ];
  });
}));

})();
