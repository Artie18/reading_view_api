var path = require('path');

var rootRoute = function(req, resp) {
  resp.sendFile(path.resolve("public/demo/index.html"));
}

var htmlRender = function(req, resp) {
  resp.sendFile(path.resolve("public/demo/html-render.html"));
}

exports.get = {
  "/":  rootRoute,
  root: rootRoute,
  htmlRender: htmlRender
}
