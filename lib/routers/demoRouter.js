var path = require('path');

var rootRoute = function(req, resp) {
  resp.sendFile(path.resolve("public/demo/index.html"));
}

exports.get = {
  "/":  rootRoute,
  root: rootRoute
}
