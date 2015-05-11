(function(){
Template.__checkName("userPosts");
Template["userPosts"] = new Template("Template.userPosts", (function() {
  var view = this;
  return HTML.DIV({
    "class": "user-profile-posts grid grid-module"
  }, "\n    ", HTML.H3(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "posts");
  })), "\n    ", HTML.TABLE("\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", HTML.TD("Post"), "\n        ", HTML.TD("Created At"), "\n      "), "\n    "), "\n    ", Blaze.Each(function() {
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
      return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdAt"), "MM/DD/YYYY, HH:mm");
    })), "\n      "), "\n    " ];
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isReady"));
  }, function() {
    return [ "\n      ", Blaze.If(function() {
      return Spacebars.call(view.lookup("hasMorePosts"));
    }, function() {
      return [ "\n        ", HTML.TR("\n          ", HTML.TD({
        colspan: "100"
      }, "\n            ", HTML.A({
        "class": "posts-more more-button grid-module",
        href: "#"
      }, HTML.SPAN(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "load_more");
      }))), "\n          "), "\n        "), "\n      " ];
    }), "\n    " ];
  }, function() {
    return [ "\n      ", HTML.TR("\n        ", HTML.TD({
      colspan: "100"
    }, "\n          ", HTML.DIV({
      style: "position:relative;height:100px;"
    }, "\n            ", Spacebars.include(view.lookupTemplate("spinner")), "\n          "), "\n        "), "\n      "), "\n    " ];
  }), "\n    "), "\n  ");
}));

})();
