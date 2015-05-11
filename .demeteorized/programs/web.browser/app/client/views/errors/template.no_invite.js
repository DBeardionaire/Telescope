(function(){
Template.__checkName("no_invite");
Template["no_invite"] = new Template("Template.no_invite", (function() {
  var view = this;
  return HTML.DIV({
    "class": "grid-small grid-block dialog"
  }, "\n		", HTML.H2(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "thanks_for_signing_up");
  })), "\n		", Blaze.View("lookup:afterSignupText", function() {
    return Spacebars.mustache(view.lookup("afterSignupText"));
  }), "\n		", HTML.P(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up");
  })), "\n	");
}));

})();
