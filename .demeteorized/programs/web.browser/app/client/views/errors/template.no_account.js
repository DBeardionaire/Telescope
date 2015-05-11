(function(){
Template.__checkName("no_account");
Template["no_account"] = new Template("Template.no_account", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid-small grid-block dialog"
  }, "\n		", HTML.P(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "sorry_this_is_a_private_site_please_sign_up_first");
  })), "\n		", Blaze.View("lookup:landingPageText", function() {
    return Spacebars.mustache(view.lookup("landingPageText"));
  }), "\n		", HTML.DIV({
    "class": "twitter-signup twitter-auth"
  }, "\n      		", HTML.A({
    "class": "twitter-button button",
    href: "#"
  }, Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "sign_in_sign_up_with_twitter");
  })), "\n    	"), "\n	");
}));

})();
