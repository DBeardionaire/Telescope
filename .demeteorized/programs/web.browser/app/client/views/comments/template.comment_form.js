(function(){
Template.__checkName("comment_form");
Template["comment_form"] = new Template("Template.comment_form", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("canComment"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "comment-new module"
    }, "\n      ", HTML.FORM("\n        ", HTML.DIV({
      "class": "comment-field",
      id: "editor"
    }, "\n          ", HTML.TEXTAREA({
      id: "comment",
      rows: "3",
      autofocus: "autofocus"
    }), "\n        "), "\n        ", HTML.DIV({
      "class": "comment-submit"
    }, "\n          ", HTML.BUTTON({
      type: "submit",
      "class": "comment-submit-button btn btn-primary btn-submit",
      value: function() {
        return Spacebars.mustache(view.lookup("_"), "add_comment");
      },
      title: "(⌘+enter)"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "add_comment");
    })), "\n        "), "\n      "), "\n    "), "\n  " ];
  }, function() {
    return [ "\n    ", HTML.P(Blaze.View("lookup:reason", function() {
      return Spacebars.mustache(view.lookup("reason"));
    })), "\n  " ];
  });
}));

})();
