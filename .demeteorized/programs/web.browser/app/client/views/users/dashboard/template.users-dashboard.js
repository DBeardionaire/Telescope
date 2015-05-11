(function(){
Template.__checkName("usersDashboard");
Template["usersDashboard"] = new Template("Template.usersDashboard", (function() {
  var view = this;
  return [ HTML.Raw('<h2 class="users-dashboard-heading">All Users</h2>\n  '), HTML.DIV({
    "class": "users-dashboard"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      settings: Spacebars.call(view.lookup("settings"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("reactiveTable"));
  }), "\n  ") ];
}));

})();
