(function(){
Template.__checkName("userAccount");
Template["userAccount"] = new Template("Template.userAccount", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid-small grid-module dialog user-edit"
  }, "\n\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("profileIncomplete"));
  }, function() {
    return [ "\n    ", HTML.DIV("\n      ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "please_complete_your_profile_below_before_continuing");
    }), "\n    "), "\n    " ];
  }), "\n    ", HTML.FORM({
    id: "account-form"
  }, "\n      ", HTML.H2(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "account");
  })), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n        ", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "username");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n          ", HTML.INPUT({
    id: "username",
    name: "username",
    disabled: "disabled",
    type: "text",
    value: function() {
      return Spacebars.mustache(view.lookup("userName"));
    }
  }), "\n        "), "\n        ", HTML.P({
    "class": "note"
  }, "Profile URL: ", Blaze.View("lookup:profileUrl", function() {
    return Spacebars.mustache(view.lookup("profileUrl"));
  })), "\n      "), "\n  ", HTML.Raw('<!--       <div class="control-group">\n        <label>Email</label>\n        <div class="controls">\n          <input id="email" name="email" disabled="disabled" type="text" value="{{email}}" />\n        </div>\n      </div> -->'), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n        ", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "display_name");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n          ", HTML.INPUT({
    name: "name",
    type: "text",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "username"));
    }
  }), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n        ", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "email");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n          ", HTML.INPUT({
    name: "email",
    type: "text",
    value: function() {
      return Spacebars.mustache(view.lookup("userEmail"));
    }
  }), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n        ", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "bio");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, HTML.TEXTAREA({
    name: "bio",
    type: "text",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "bio"));
    }
  })), "\n      "), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n        ", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "city");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n          ", HTML.INPUT({
    name: "city",
    type: "text",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "city"));
    }
  }), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n      ", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "twitter_username");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n          ", HTML.INPUT({
    name: "twitter",
    type: "text",
    value: function() {
      return Spacebars.mustache(view.lookup("getTwitter"));
    }
  }), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n        ", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "github_username");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n          ", HTML.INPUT({
    name: "github",
    type: "text",
    value: function() {
      return Spacebars.mustache(view.lookup("getGitHub"));
    }
  }), "\n        "), "\n      "), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n        ", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "site_url");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n          ", HTML.INPUT({
    name: "site",
    type: "text",
    value: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "site"));
    }
  }), "\n        "), "\n      "), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("hasPassword"));
  }, function() {
    return [ "\n        ", HTML.H3(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "change_password");
    })), "\n        ", HTML.DIV({
      "class": "control-group"
    }, "\n          ", HTML.LABEL(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "old_password");
    })), "\n          ", HTML.DIV({
      "class": "controls"
    }, HTML.INPUT({
      name: "old_password",
      type: "password",
      value: ""
    })), "\n        "), "\n        ", HTML.DIV({
      "class": "control-group"
    }, "\n          ", HTML.LABEL(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "new_password");
    })), "\n          ", HTML.DIV({
      "class": "controls"
    }, HTML.INPUT({
      name: "new_password",
      type: "password",
      value: ""
    })), "\n        "), "\n      " ];
  }), "\n      ", HTML.DIV({
    "class": "control-group"
  }, "\n        ", HTML.LABEL({
    "class": "control-label"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "email_notifications");
  })), "\n        ", HTML.DIV({
    "class": "controls"
  }, "\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n            ", HTML.LABEL({
      "class": "checkbox"
    }, "\n              ", HTML.INPUT(HTML.Attrs({
      id: "notifications_users",
      type: "checkbox",
      name: "notifications_users"
    }, function() {
      return Spacebars.attrMustache(view.lookup("hasNotificationsUsers"));
    })), " ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "new_users");
    }), "\n            "), "\n          " ];
  }), "\n          ", HTML.LABEL({
    "class": "checkbox"
  }, "\n            ", HTML.INPUT(HTML.Attrs({
    id: "notifications_posts",
    type: "checkbox",
    name: "notifications_posts"
  }, function() {
    return Spacebars.attrMustache(view.lookup("hasNotificationsPosts"));
  })), " ", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "new_posts");
  }), "\n          "), "\n          ", HTML.LABEL({
    "class": "checkbox"
  }, "\n            ", HTML.INPUT(HTML.Attrs({
    id: "notifications_comments",
    type: "checkbox",
    name: "notifications_comments"
  }, function() {
    return Spacebars.attrMustache(view.lookup("hasNotificationsComments"));
  })), " ", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "comments_on_my_posts");
  }), "\n          "), "\n          ", HTML.LABEL({
    "class": "checkbox"
  }, "\n            ", HTML.INPUT(HTML.Attrs({
    id: "notifications_replies",
    type: "checkbox",
    name: "notifications_replies"
  }, function() {
    return Spacebars.attrMustache(view.lookup("hasNotificationsReplies"));
  })), " ", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "replies_to_my_comments");
  }), "\n          "), "\n        "), "\n      "), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "control-group"
    }, "\n        ", HTML.H3("Invites"), "\n        ", HTML.LABEL("Invites"), "\n        ", HTML.DIV({
      "class": "controls"
    }, "\n          ", HTML.INPUT({
      name: "inviteCount",
      type: "text",
      value: function() {
        return Spacebars.mustache(view.lookup("inviteCount"));
      }
    }), "\n        "), "\n      "), "\n      " ];
  }), "\n      ", HTML.DIV({
    "class": "form-actions"
  }, "\n        ", HTML.A({
    href: "/forgot-password"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "forgot_password");
  })), "\n        ", HTML.INPUT({
    type: "submit",
    "class": "button",
    value: function() {
      return Spacebars.mustache(view.lookup("_"), "submit");
    }
  }), "\n      "), "\n    "), "\n    ");
}));

})();
