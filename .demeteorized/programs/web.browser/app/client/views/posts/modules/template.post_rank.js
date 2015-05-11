(function(){
Template.__checkName("postRank");
Template["postRank"] = new Template("Template.postRank", (function() {
  var view = this;
  return HTML.DIV({
    "class": "post-rank-inner",
    "aria-live": "off"
  }, HTML.SPAN(Blaze.View("lookup:oneBasedRank", function() {
    return Spacebars.mustache(view.lookup("oneBasedRank"));
  })));
}));

})();
