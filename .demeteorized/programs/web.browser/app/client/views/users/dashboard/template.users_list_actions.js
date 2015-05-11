(function(){
Template.__checkName("users_list_actions");
Template["users_list_actions"] = new Template("Template.users_list_actions", (function() {
  var view = this;
  return HTML.UL("\n    ", HTML.LI("\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isInvited"));
  }, function() {
    return [ "\n      ", HTML.A({
      "class": "uninvite-link",
      href: "#"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "uninvite");
    })), "\n      " ];
  }, function() {
    return [ "\n      ", HTML.A({
      href: "#",
      "class": "invite-link"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "invite");
    })), "\n      " ];
  }), "\n    "), "\n    ", HTML.LI("\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("userIsAdmin"));
  }, function() {
    return [ "\n        ", HTML.A({
      "class": "unadmin-link",
      href: "#"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "unadmin");
    })), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.A({
      href: "#",
      "class": "admin-link"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "make_admin");
    })), "\n      " ];
  }), "\n    "), "\n    ", HTML.LI("\n      ", HTML.A({
    "class": "delete-link",
    href: "#"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "delete_user");
  })), "\n    "), "\n  ");
}));

})();
