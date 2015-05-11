(function(){
Template.__checkName("user_edit");
Template["user_edit"] = new Template("Template.user_edit", (function() {
  var view = this;
  return Spacebars.With(function() {
    return Spacebars.call(view.lookup("user"));
  }, function() {
    return [ "\n    ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("userProfileEdit"));
    }, function() {
      return [ "\n      ", Blaze._TemplateWith(function() {
        return {
          template: Spacebars.call(view.lookup("getTemplate")),
          data: Spacebars.call(view.lookup(".."))
        };
      }, function() {
        return Spacebars.include(function() {
          return Spacebars.call(Template.__dynamic);
        });
      }), "\n    " ];
    }), "\n  " ];
  });
}));

})();
