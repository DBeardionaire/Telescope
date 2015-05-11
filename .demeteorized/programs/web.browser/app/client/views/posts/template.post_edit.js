(function(){
Template.__checkName("post_edit");
Template["post_edit"] = new Template("Template.post_edit", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "grid grid-module"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Posts"),
      doc: Spacebars.call(view.lookup("post")),
      id: Spacebars.call("editPostForm"),
      template: Spacebars.call("telescope"),
      "label-class": Spacebars.call("control-label"),
      "input-col-class": Spacebars.call("controls"),
      type: Spacebars.call("method-update"),
      meteormethod: Spacebars.call("editPost")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }), "\n  "), "\n  \n  ", HTML.DIV({
    "class": "grid grid-module"
  }, "\n    ", HTML.A({
    "class": "delete-link",
    href: "/"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "delete_post");
  })), "\n  ") ];
}));

})();
