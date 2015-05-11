(function(){
Template.__checkName("postUpvote");
Template["postUpvote"] = new Template("Template.postUpvote", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("upvoted"));
  }, function() {
    return [ "\n    ", HTML.SPAN({
      "class": "upvote-link voted action",
      title: function() {
        return Spacebars.mustache(view.lookup("_"), "upvoted");
      }
    }, "\n      ", Blaze.View("lookup:icon", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "voted", "icon-circle"));
    }), "\n      ", HTML.SPAN({
      "class": "sr-only"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "upvoted");
    })), "\n    "), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.A({
      "class": "upvote-link not-voted action",
      href: "#",
      title: function() {
        return Spacebars.mustache(view.lookup("_"), "upvote_");
      }
    }, "\n      ", Blaze.View("lookup:icon", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "upvote", "icon-circle"));
    }), "\n      ", HTML.SPAN({
      "class": "sr-only"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "upvote_");
    })), "\n    "), "\n  " ];
  });
}));

})();
