(function(){
Template.__checkName("comment_reply");
Template["comment_reply"] = new Template("Template.comment_reply", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid comment-page single-post"
  }, "\n    \n    ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("post"));
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "posts posts-list"
    }, "\n        ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("post_item"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      "), "\n    " ];
  }), "\n\n    ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("comment"));
  }, function() {
    return [ "\n      ", HTML.UL({
      "class": "selected-comment",
      "aria-live": "polite"
    }, "\n       ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("comment_item"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      "), "\n    " ];
  }), "\n\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("canComment"));
  }, function() {
    return [ "\n      ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("comment_form"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n    " ];
  }), "\n\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isLoggedIn"));
  }, function() {
    return "\n    ";
  }, function() {
    return [ "\n      ", HTML.P(HTML.A({
      href: "/sign-in"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "please_sign_in_to_reply");
    }))), "\n    " ];
  }), "\n  ");
}));

})();
