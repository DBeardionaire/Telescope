(function(){
Template.__checkName("users_list_avatar");
Template["users_list_avatar"] = new Template("Template.users_list_avatar", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      user: Spacebars.call(view.lookup(".")),
      shape: Spacebars.call("circle")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("avatar"));
  });
}));

})();
