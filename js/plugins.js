// Infusion

$(document).ready(function () {
    fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
        terms: {
            "templatePrefix": "../../src/framework/preferences/html",
            "messagePrefix": "../../src/framework/preferences/messages"
        },
        "tocTemplate": "../../src/components/tableOfContents/html/TableOfContents.html",
        "ignoreForToC": {
            "overviewPanel": ".flc-overviewPanel"
        }
    });
});

// TOC

var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>On this page:</h2>" +
    "<ul>";

var newLine, el, title, link;

$(".content h2").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</nav>";

$("#toc").append(ToC);
