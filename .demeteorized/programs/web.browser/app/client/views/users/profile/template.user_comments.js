(function(){
Template.__checkName("userComments");
Template["userComments"] = new Template("Template.userComments", (function() {
  var view = this;
  return HTML.DIV({
    "class": "user-profile-comments grid grid-module"
  }, "\n    ", HTML.H3(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "comments_");
  })), "\n    ", HTML.TABLE("\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", HTML.TD("Post"), "\n        ", HTML.TD("Comment"), "\n        ", HTML.TD("Commented At"), "\n      "), "\n    "), "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comments"));
  }, function() {
    return [ "\n      ", HTML.TR("\n        ", HTML.TD(HTML.A({
      href: function() {
        return [ Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "post_page",
          _id: view.lookup("postId")
        })), "/" ];
      }
    }, Blaze.View("lookup:postTitle", function() {
      return Spacebars.mustache(view.lookup("postTitle"));
    }))), "\n        ", HTML.TD(Blaze.View("lookup:htmlBody", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("htmlBody")));
    })), "\n        ", HTML.TD(Blaze.View("lookup:formatDate", function() {
      return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdAt"), "MM/DD/YYYY, HH:mm");
    })), "\n      "), "\n    " ];
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("hasMoreComments"));
  }, function() {
    return [ "\n      ", HTML.TR("\n        ", HTML.TD({
      colspan: "10"
    }, "\n          ", HTML.A({
      "class": "comments-more more-button grid-module",
      href: "#"
    }, HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "load_more");
    }))), "\n        "), "\n      "), "\n    " ];
  }), "\n    "), "\n  ");
}));

})();
