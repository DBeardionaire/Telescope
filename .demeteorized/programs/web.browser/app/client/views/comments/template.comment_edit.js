(function(){
Template.__checkName("comment_edit");
Template["comment_edit"] = new Template("Template.comment_edit", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid"
  }, "\n    ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("comment"));
  }, function() {
    return [ "\n    ", HTML.FORM({
      "class": "grid-block form-horizontal"
    }, "\n      ", HTML.DIV({
      "class": "control-group"
    }, "\n        ", HTML.LABEL({
      "class": "control-label"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "comment_");
    })), "\n        ", HTML.DIV({
      "class": "controls comment-field",
      id: "editor"
    }, HTML.TEXTAREA({
      id: "body",
      value: function() {
        return Spacebars.mustache(view.lookup("body"));
      },
      "class": "input-xlarge"
    })), "\n      "), "\n      ", HTML.DIV({
      "class": "form-actions"
    }, "\n        ", HTML.A({
      "class": "delete-link",
      href: "/comments/deleted"
    }, Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "delete_comment");
    })), "\n        ", HTML.INPUT({
      type: "submit",
      "class": "button btn-primary",
      value: function() {
        return Spacebars.mustache(view.lookup("_"), "submit");
      },
      title: "(⌘+enter)"
    }), "\n      "), "\n    "), "\n    " ];
  }), "\n  ");
}));

})();
