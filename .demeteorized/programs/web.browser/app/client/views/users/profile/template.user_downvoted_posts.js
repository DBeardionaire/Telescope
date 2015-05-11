(function(){
Template.__checkName("userDownvotedPosts");
Template["userDownvotedPosts"] = new Template("Template.userDownvotedPosts", (function() {
  var view = this;
  return HTML.DIV({
    "class": "user-profile-votes grid grid-module"
  }, "\n    ", HTML.H3(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "downvoted_posts");
  })), "\n    ", HTML.TABLE("\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", HTML.TD("Post"), "\n        ", HTML.TD("Downvoted At"), "\n      "), "\n    "), "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("posts"));
  }, function() {
    return [ "\n      ", HTML.TR("\n        ", HTML.TD(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "post_page",
          _id: view.lookup("_id")
        }));
      }
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    }))), "\n        ", HTML.TD(Blaze.View("lookup:formatDate", function() {
      return Spacebars.mustache(view.lookup("formatDate"), view.lookup("votedAt"), "MM/DD/YYYY, HH:mm");
    })), "\n      "), "\n    " ];
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("hasMorePosts"));
  }, function() {
    return [ "\n      ", HTML.TR("\n        ", HTML.TD({
      colspan: "2"
    }, "\n          ", HTML.A({
      "class": "downvoted-more more-button grid-module",
      href: "#"
    }, HTML.SPAN(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "load_more");
    }))), "\n        "), "\n      "), "\n    " ];
  }), "\n    "), "\n  ");
}));

})();
