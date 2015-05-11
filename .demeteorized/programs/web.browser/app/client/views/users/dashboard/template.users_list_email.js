(function(){
Template.__checkName("users_list_email");
Template["users_list_email"] = new Template("Template.users_list_email", (function() {
  var view = this;
  return HTML.A({
    href: function() {
      return [ "mailto:", Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "email")) ];
    }
  }, Blaze.View("lookup:profile.email", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "email"));
  }));
}));

})();
