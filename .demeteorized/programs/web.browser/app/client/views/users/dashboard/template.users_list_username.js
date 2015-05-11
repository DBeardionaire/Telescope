(function(){
Template.__checkName("users_list_username");
Template["users_list_username"] = new Template("Template.users_list_username", (function() {
  var view = this;
  return HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("profileUrl"), view.lookup("."));
    }
  }, Blaze.View("lookup:username", function() {
    return Spacebars.mustache(view.lookup("username"));
  }));
}));

})();
