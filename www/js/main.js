"use strict";!function(){var n=$("#dashboard"),e=$("#menu-lining"),t=$("#menu-toggler"),a=t.data("target").map(function(n){return document.getElementById(n)}).filter(function(n){return n}),c=function(n){$(n).hasClass("active")?$(n).removeClass("active"):$(n).addClass("active")};t.click(function(){a.forEach(function(n){c(n)}),n.addClass("overflow-hidden")}),e.click(function(){a.forEach(function(n){c(n)}),n.removeClass("overflow-hidden")})}();
//# sourceMappingURL=main.js.map
