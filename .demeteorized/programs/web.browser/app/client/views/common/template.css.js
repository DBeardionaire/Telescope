(function(){
Template.__checkName("css");
Template["css"] = new Template("Template.css", (function() {
  var view = this;
  return [ HTML.STYLE("\n      \n      ", Blaze.View("lookup:elementColors", function() {
    return Spacebars.mustache(view.lookup("elementColors"));
  }), '\n      \n      body, textarea, input, button, input[type="submit"], input[type="button"]{\n        font-family: ', Blaze.View("lookup:getSetting", function() {
    return Spacebars.mustache(view.lookup("getSetting"), "fontFamily");
  }), ";\n      }\n\n      body{\n        background: ", Blaze.View("lookup:getSetting", function() {
    return Spacebars.mustache(view.lookup("getSetting"), "backgroundCSS");
  }), ";\n      }\n\n      .logo-image a{\n        max-height:", Blaze.View("lookup:getSetting", function() {
    return Spacebars.mustache(view.lookup("getSetting"), "logoHeight");
  }), "px;\n        max-width:", Blaze.View("lookup:getSetting", function() {
    return Spacebars.mustache(view.lookup("getSetting"), "logoWidth");
  }), "px;\n      }\n\n      ", Blaze.View("lookup:hideAuthClass", function() {
    return Spacebars.mustache(view.lookup("hideAuthClass"));
  }), "\n\n      @media screen and (max-width: 600px) {\n        /* find a way to get rid of this */\n        .post-discuss .icon, .post-discuss .action-count{\n          color: ", Blaze.View("lookup:getSetting", function() {
    return Spacebars.mustache(view.lookup("getSetting"), "buttonColor");
  }), ";\n        }\n      }\n\n  "), "\n  ", HTML.LINK({
    href: function() {
      return Spacebars.mustache(view.lookup("getSetting"), "fontUrl");
    },
    rel: "stylesheet",
    type: "text/css"
  }) ];
}));

})();
