(function(){
Template.__checkName("posts_list");
Template["posts_list"] = new Template("Template.posts_list", (function() {
  var view = this;
  return HTML.DIV({
    "class": "posts-wrapper grid grid-module"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("postsListIncoming")),
      data: Spacebars.call(view.lookup("incoming"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n    ", HTML.DIV({
    "class": function() {
      return [ "posts list ", Spacebars.mustache(view.lookup("postsLayout")) ];
    },
    "aria-live": "polite"
  }, "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("postsCursor"));
  }, function() {
    return [ "\n        ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("before_post_item"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n        ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("post_item"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n        ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("after_post_item"))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n      " ];
  }), "\n    "), "\n    ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("postsLoadMore"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n  ");
}));

Template.__checkName("postsListIncoming");
Template["postsListIncoming"] = new Template("Template.postsListIncoming", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("count"));
  }, function() {
    return [ "\n    ", HTML.A({
      "class": "more-button show-new grid-module",
      href: ""
    }, "\n      ", HTML.SPAN("\n        ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "view");
    }), " ", Blaze.View("lookup:count", function() {
      return Spacebars.mustache(view.lookup("count"));
    }), " ", Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "new");
    }), " ", Blaze.View("lookup:pluralize", function() {
      return Spacebars.mustache(view.lookup("pluralize"), view.lookup("count"), "post");
    }), "\n      "), "\n    "), "\n  " ];
  });
}));

Template.__checkName("postsLoadMore");
Template["postsLoadMore"] = new Template("Template.postsLoadMore", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("postsReady"));
  }, function() {
    return [ "\n    ", Blaze.If(function() {
      return Spacebars.call(view.lookup("hasPosts"));
    }, function() {
      return [ "\n      ", Blaze.If(function() {
        return Spacebars.call(view.lookup("hasMorePosts"));
      }, function() {
        return [ "\n        ", HTML.A({
          "class": "more-button",
          href: "#"
        }, HTML.SPAN(Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "load_more");
        }))), "\n      " ];
      }), "\n    " ];
    }, function() {
      return [ "\n      ", HTML.DIV({
        "class": "no-posts"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "sorry_we_couldnt_find_any_posts");
      })), "\n    " ];
    }), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "loading-module"
    }, Spacebars.include(view.lookupTemplate("spinner"))), "\n  " ];
  });
}));

})();
