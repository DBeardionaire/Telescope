(function(){
Template.__checkName("mobile_nav");
Template["mobile_nav"] = new Template("Template.mobile_nav", (function() {
  var view = this;
  return HTML.DIV({
    "class": "mobile-nav"
  }, "\n    ", HTML.DIV({
    "class": "mobile-nav-inner"
  }, "\n      ", HTML.UL({
    "class": "mobile-menu"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("mobileNav"));
  }, function() {
    return [ "\n          ", HTML.LI("\n            ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("getTemplate")),
        data: Spacebars.call(view.lookup("mobileContext"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n          "), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

})();
