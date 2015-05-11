(function(){
Template.__checkName("user_email");
Template["user_email"] = new Template("Template.user_email", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid-small grid-block dialog user-edit"
  }, "\n  	", Spacebars.With(function() {
    return Spacebars.call(view.lookup("user"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "finish-signup-message"
    }, "\n      ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "please_fill_in_your_email_below_to_finish_signing_up");
    }), "\n    "), "\n    ", HTML.FORM("\n      ", HTML.DIV({
      "class": "control-group"
    }, "\n          ", HTML.LABEL(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "username");
    })), "\n          ", HTML.DIV({
      "class": "controls"
    }, "\n              ", HTML.INPUT({
      name: "username",
      type: "text",
      value: function() {
        return Spacebars.mustache(view.lookup("username"));
      }
    }), "\n          "), "\n        ", HTML.BR(), "\n        ", HTML.LABEL(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "email");
    })), "\n        ", HTML.DIV({
      "class": "controls"
    }, "\n          ", HTML.INPUT({
      name: "email",
      type: "text",
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "email"));
      }
    }), "\n        "), "\n      "), "\n      ", HTML.DIV({
      "class": "form-actions"
    }, "\n        ", HTML.INPUT({
      type: "submit",
      "class": "button btn btn-primary",
      value: function() {
        return Spacebars.mustache(view.lookup("_"), "submit");
      }
    }), "\n      "), "\n    "), "\n    " ];
  }), "\n  ");
}));

})();
