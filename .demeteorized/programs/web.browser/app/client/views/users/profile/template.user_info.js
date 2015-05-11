(function(){
Template.__checkName("userInfo");
Template["userInfo"] = new Template("Template.userInfo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "user-profile grid grid-module"
  }, "\n    ", HTML.TABLE("\n      ", HTML.TR("\n        ", HTML.TD({
    colspan: "2",
    "aria-hidden": "true"
  }, Blaze._TemplateWith(function() {
    return {
      user: Spacebars.call(view.lookup(".")),
      size: Spacebars.call("large"),
      shape: Spacebars.call("circle")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("avatar"));
  })), "\n      "), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n        ", HTML.TR("\n          ", HTML.TD(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "id");
    }), ": "), "\n          ", HTML.TD(Blaze.View("lookup:_id", function() {
      return Spacebars.mustache(view.lookup("_id"));
    })), "\n        "), "\n      " ];
  }), "\n      ", HTML.TR("\n        ", HTML.TD(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "name");
  })), "\n        ", HTML.TD(Blaze.View("lookup:profile.username", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "username"));
  })), "\n      "), "\n      ", HTML.TR("\n        ", HTML.TD(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "member_since");
  }), ":"), "\n        ", HTML.TD(Blaze.View("lookup:createdAtFormatted", function() {
    return Spacebars.mustache(view.lookup("createdAtFormatted"));
  })), "\n      "), "\n      ", HTML.TR("\n        ", HTML.TD(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "bio");
  })), "\n        ", HTML.TD(Blaze.View("lookup:profile.bio", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "bio"));
  })), "\n      "), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getTwitterName"));
  }, function() {
    return [ "\n        ", HTML.TR("\n          ", HTML.TD("Twitter: "), "\n          ", HTML.TD(HTML.A({
      href: function() {
        return [ "http://twitter.com/", Spacebars.mustache(view.lookup("getTwitterName")) ];
      }
    }, Blaze.View("lookup:getTwitterName", function() {
      return Spacebars.mustache(view.lookup("getTwitterName"));
    }))), "\n        "), "\n      " ];
  }), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getGitHubName"));
  }, function() {
    return [ "\n        ", HTML.TR("\n          ", HTML.TD(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "github");
    }), ":"), "\n          ", HTML.TD(HTML.A({
      href: function() {
        return [ "http://github.com/", Spacebars.mustache(view.lookup("getGitHubName")) ];
      }
    }, Blaze.View("lookup:getGitHubName", function() {
      return Spacebars.mustache(view.lookup("getGitHubName"));
    }))), "\n        "), "\n      " ];
  }), "\n      ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("profile"), "site"));
  }, function() {
    return [ "\n        ", HTML.TR("\n          ", HTML.TD(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "site");
    }), ":"), "\n          ", HTML.TD(HTML.A({
      href: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "site"));
      }
    }, Blaze.View("lookup:profile.site", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "site"));
    }))), "\n        "), "\n      " ];
  }), "\n    "), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("canEditProfile"));
  }, function() {
    return [ "\n      ", HTML.A({
      "class": "button btn btn-primary inline",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "user_edit",
          slug: view.lookup("slug")
        }));
      }
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "edit_profile");
    })), "\n    " ];
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("canInvite"));
  }, function() {
    return [ "\n      ", Blaze.If(function() {
      return Spacebars.call(view.lookup("inviteCount"));
    }, function() {
      return [ "\n        ", HTML.A({
        "class": "button btn btn-primary inline invite-link",
        href: "#"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "invite");
      }), " (", Blaze.View("lookup:inviteCount", function() {
        return Spacebars.mustache(view.lookup("inviteCount"));
      }), " ", Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "left");
      }), ")"), "\n      " ];
    }, function() {
      return [ "\n        ", HTML.A({
        "class": "button btn inline disabled",
        href: "#"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "invite_none_left");
      })), "\n      " ];
    }), "\n    " ];
  }), "\n  ");
}));

})();
