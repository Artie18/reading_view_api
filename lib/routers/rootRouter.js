var path = require('path');

var rootRoute = function(req, resp) {
  resp.sendFile(path.resolve("public/root/index.html"));
}

exports.get = {
  "/":  rootRoute,
  root: rootRoute
}
