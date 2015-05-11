(function(){
Template.__checkName("nav");
Template["nav"] = new Template("Template.nav", (function() {
  var view = this;
  return HTML.HEADER({
    "class": function() {
      return [ "header ", Spacebars.mustache(view.lookup("headerClass")) ];
    }
  }, "\n\n    ", HTML.A({
    href: "#menu",
    "class": "mobile-only mobile-menu-button button"
  }, "\n      ", Blaze.View("lookup:icon", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "menu"));
  }), "\n    "), "\n\n    ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("logoTemplate"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n\n    ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("primaryNav"));
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "nav primary-nav desktop-nav header-module desktop-only"
    }, "\n        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("."));
    }, function() {
      return [ "\n          ", Blaze._TemplateWith(function() {
        return {
          template: Spacebars.call(view.lookup("getTemplate"))
        };
      }, function() {
        return Spacebars.include(function() {
          return Spacebars.call(Template.__dynamic);
        });
      }), "\n        " ];
    }), "\n      "), "\n    " ];
  }), "\n\n    ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("secondaryNav"));
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "nav secondary-nav desktop-nav header-module desktop-only"
    }, "\n        ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("."));
    }, function() {
      return [ "\n          ", Blaze._TemplateWith(function() {
        return {
          template: Spacebars.call(view.lookup("getTemplate"))
        };
      }, function() {
        return Spacebars.include(function() {
          return Spacebars.call(Template.__dynamic);
        });
      }), "\n        " ];
    }), "\n      "), "\n    " ];
  }), "\n      \n  ");
}));

})();
