(function(){
Template.__checkName("logo");
Template["logo"] = new Template("Template.logo", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("logo_url"));
  }, function() {
    return [ "\n    ", HTML.H1({
      "class": "logo logo-image header-module"
    }, "\n      ", HTML.A({
      href: "/"
    }, "\n        ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("logo_url"));
      },
      alt: function() {
        return Spacebars.mustache(view.lookup("site_title"));
      }
    }), "\n      "), "\n    "), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.H1({
      "class": "logo header-module"
    }, HTML.A({
      href: "/"
    }, Blaze.View("lookup:site_title", function() {
      return Spacebars.mustache(view.lookup("site_title"));
    }))), "\n  " ];
  });
}));

})();
