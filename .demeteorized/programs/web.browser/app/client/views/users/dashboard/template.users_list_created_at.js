(function(){
Template.__checkName("users_list_created_at");
Template["users_list_created_at"] = new Template("Template.users_list_created_at", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "date"
  }, Blaze.View("lookup:formatDate", function() {
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdAt"), "LL");
  })), "\n  ", HTML.DIV({
    "class": "time-ago"
  }, Blaze.View("lookup:timeAgo", function() {
    return Spacebars.mustache(view.lookup("timeAgo"), view.lookup("createdAt"));
  })) ];
}));

})();
