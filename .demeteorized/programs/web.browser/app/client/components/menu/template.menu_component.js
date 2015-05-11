(function(){
Template.__checkName("menuComponent");
Template["menuComponent"] = new Template("Template.menuComponent", (function() {
  var view = this;
  return HTML.DIV({
    "class": function() {
      return [ "menu ", Spacebars.mustache(view.lookup("menuClass")) ];
    }
  }, "\n    ", HTML.DIV({
    "class": "menu-top-level",
    href: "/"
  }, Blaze.View("lookup:menuLabel", function() {
    return Spacebars.mustache(view.lookup("menuLabel"));
  })), "\n    ", HTML.DIV({
    "class": "menu-menu"
  }, "\n      ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("getMenuItems"));
  }, function() {
    return [ "\n        ", HTML.UL({
      "class": "menu-contents",
      role: "menu",
      "aria-labelledby": "dLabel"
    }, "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("."));
    }, function() {
      return [ "\n            ", Blaze.If(function() {
        return Spacebars.call(view.lookup("hasTemplate"));
      }, function() {
        return [ "\n              ", Blaze._TemplateWith(function() {
          return {
            template: Spacebars.call(view.lookup("template")),
            data: Spacebars.call(view.lookup("data"))
          };
        }, function() {
          return Spacebars.include(function() {
            return Spacebars.call(Template.__dynamic);
          });
        }), "\n            " ];
      }, function() {
        return [ "\n              ", HTML.LI({
          "class": function() {
            return [ "menu-item ", Spacebars.mustache(view.lookup("itemClass")) ];
          }
        }, "\n                ", HTML.A({
          "class": "menu-sub-level",
          href: function() {
            return Spacebars.mustache(view.lookup("itemRoute"));
          }
        }, "\n                  ", HTML.SPAN({
          "class": "menu-label"
        }, Blaze.View("lookup:itemLabel", function() {
          return Spacebars.mustache(view.lookup("itemLabel"));
        })), "\n                  ", Blaze.If(function() {
          return Spacebars.call(view.lookup("description"));
        }, function() {
          return HTML.SPAN({
            "class": "menu-description"
          }, Blaze.View("lookup:_", function() {
            return Spacebars.mustache(view.lookup("_"), view.lookup("description"));
          }));
        }), "\n                "), "\n              "), "\n            " ];
      }), "\n          " ];
    }), "\n        "), "\n      " ];
  }), "\n      ", HTML.A({
    "class": "show-more",
    href: "#"
  }, "\n        ", Blaze.View("lookup:icon", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "open"));
  }), "\n        ", Blaze.View("lookup:icon", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "close"));
  }), "\n      "), "\n    "), "\n  ");
}));

})();
