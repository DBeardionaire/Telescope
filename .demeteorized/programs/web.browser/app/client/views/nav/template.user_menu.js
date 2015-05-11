(function(){
Template.__checkName("userMenu");
Template["userMenu"] = new Template("Template.userMenu", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isLoggedIn"));
  }, function() {
    return [ "\n    ", Blaze._TemplateWith(function() {
      return {
        menuName: Spacebars.call("user"),
        menuLabel: Spacebars.call(view.lookup("menuLabel")),
        menuItems: Spacebars.call(view.lookup("menuItems")),
        menuClass: Spacebars.call("header-submodule"),
        menuMode: Spacebars.call(view.lookup("menuMode")),
        menuCollapsed: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("menuComponent"));
    }), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.A({
      "class": "account-link sign-in",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "atSignUp"
        }));
      }
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "sign_up");
    })), "\n    ", HTML.A({
      "class": "account-link sign-up",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "atSignIn"
        }));
      }
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "sign_in");
    })), "\n  " ];
  });
}));

})();
