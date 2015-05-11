(function(){
Template.__checkName("comment_item");
Template["comment_item"] = new Template("Template.comment_item", (function() {
  var view = this;
  return HTML.LI({
    "class": function() {
      return [ "comment module comment-displayed ", Spacebars.mustache(view.lookup("commentClass")) ];
    },
    id: function() {
      return Spacebars.mustache(view.lookup("_id"));
    }
  }, "\n   ", HTML.DIV({
    "class": "comment-body"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isDeleted"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "comment-deleted"
    }, "This comment has been deleted."), "\n      " ];
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "comment-content"
    }, "\n        ", HTML.DIV({
      "class": function() {
        return [ "comment-actions ", Blaze.If(function() {
          return Spacebars.call(view.lookup("upvoted"));
        }, function() {
          return "upvoted";
        }, function() {
          return "not-upvoted";
        }), " ", Blaze.If(function() {
          return Spacebars.call(view.lookup("downvoted"));
        }, function() {
          return "downvoted";
        }, function() {
          return "not-downvoted";
        }) ];
      }
    }, "\n          ", HTML.A({
      "class": "upvote",
      href: "#"
    }, "\n            ", Blaze.View("lookup:icon", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "upvote"));
    }), "\n            ", HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "upvote");
    })), "\n          "), "\n          ", HTML.A({
      "class": "downvote",
      href: "#"
    }, "\n            ", Blaze.View("lookup:icon", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "downvote"));
    }), "\n            ", HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "downvote");
    })), "\n          "), "\n        "), "\n        ", HTML.DIV({
      "class": "comment-meta"
    }, "\n          ", HTML.DIV({
      "class": "user-avatar avatar-medium",
      "aria-hidden": "true",
      "aria-live": "off"
    }, Blaze._TemplateWith(function() {
      return {
        userId: Spacebars.call(view.lookup("userId")),
        shape: Spacebars.call("circle")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("avatar"));
    })), "\n          ", HTML.A({
      "class": "comment-username",
      href: function() {
        return Spacebars.mustache(view.lookup("profileUrl"));
      }
    }, Blaze.View("lookup:authorName", function() {
      return Spacebars.mustache(view.lookup("authorName"));
    })), "\n          ", HTML.SPAN({
      "class": "comment-time"
    }, Blaze.View("lookup:timeAgo", function() {
      return Spacebars.mustache(view.lookup("timeAgo"), view.lookup("ago"));
    }), ","), "\n          ", HTML.SPAN({
      "class": "points"
    }, Blaze.View("lookup:upvotes", function() {
      return Spacebars.mustache(view.lookup("upvotes"));
    })), " ", HTML.SPAN({
      "class": "unit"
    }, "points "), "\n          ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "comment_reply",
          _id: view.lookup("_id")
        }));
      },
      "class": "comment-permalink icon-link goto-comment"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "link");
    })), "\n          ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("canEdit"), view.lookup("."));
    }, function() {
      return [ "\n            | ", HTML.A({
        "class": "edit-link",
        href: function() {
          return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
            route: "comment_edit",
            _id: view.lookup("_id")
          }));
        }
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "edit");
      })), "\n          " ];
    }), "\n          ", Blaze.If(function() {
      return Spacebars.call(view.lookup("isAdmin"));
    }, function() {
      return [ "\n            | ", HTML.SPAN(Blaze.View("lookup:full_date", function() {
        return Spacebars.mustache(view.lookup("full_date"));
      })), "\n          " ];
    }), "\n        "), "\n        ", HTML.DIV({
      "class": "comment-main"
    }, " \n          ", HTML.DIV({
      "class": "comment-text markdown"
    }, Blaze.View("lookup:htmlBody", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("htmlBody")));
    })), "\n          ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "comment_reply",
          _id: view.lookup("_id")
        }));
      },
      "class": "comment-reply goto-comment"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "reply");
    })), "\n        "), "\n      "), "\n      " ];
  }), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("showChildComments"));
  }, function() {
    return [ "\n        ", HTML.UL({
      "class": "comment-children comment-list"
    }, "\n        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("childComments"));
    }, function() {
      return [ "\n          ", Spacebars.With(function() {
        return Spacebars.call(view.lookup("."));
      }, function() {
        return [ "\n            ", Blaze._TemplateWith(function() {
          return {
            template: Spacebars.call(view.lookup("comment_item"))
          };
        }, function() {
          return Spacebars.include(function() {
            return Spacebars.call(Template.__dynamic);
          });
        }), "\n          " ];
      }), "\n        " ];
    }), "\n        "), "\n      " ];
  }), "\n    "), "\n  ");
}));

})();
