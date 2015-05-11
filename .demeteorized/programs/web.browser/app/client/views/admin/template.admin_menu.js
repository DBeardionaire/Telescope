(function(){
Template.__checkName("adminMenu");
Template["adminMenu"] = new Template("Template.adminMenu", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n    ", Blaze._TemplateWith(function() {
      return {
        menuName: Spacebars.call("admin"),
        menuMode: Spacebars.call("list"),
        menuItems: Spacebars.call(view.lookup("adminMenuItems"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("menuComponent"));
    }), "\n  " ];
  });
}));

})();
