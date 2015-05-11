(function(){
Template.__checkName("adminWrapper");
Template["adminWrapper"] = new Template("Template.adminWrapper", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid admin-wrapper"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("adminMenu"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n    ", HTML.DIV({
    "class": function() {
      return [ "admin-contents ", Spacebars.mustache(view.lookup("contentsClass")) ];
    }
  }, "\n      ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("contents")),
      data: Spacebars.call(view.lookup("."))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n    "), "\n  ");
}));

})();
