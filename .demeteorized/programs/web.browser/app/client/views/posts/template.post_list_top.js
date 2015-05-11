(function(){
Template.__checkName("postListTop");
Template["postListTop"] = new Template("Template.postListTop", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("postListTopModules"));
  }, function() {
    return [ "\n    ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("getTemplate"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n  " ];
  });
}));

})();
