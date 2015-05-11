(function(){
Template.__checkName("post_submit");
Template["post_submit"] = new Template("Template.post_submit", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid grid-module"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Posts"),
      id: Spacebars.call("submitPostForm"),
      template: Spacebars.call("telescope"),
      "label-class": Spacebars.call("control-label"),
      "input-col-class": Spacebars.call("controls"),
      type: Spacebars.call("method"),
      meteormethod: Spacebars.call("submitPost")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }), "\n  ");
}));

})();
