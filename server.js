// Load dependencies
var express   = require('express'),
    routers   = require('./lib/routers/routers');

var apiRouterFunc = routers.apiRouter;

var app        = express(),
    apiRouter  = express.Router();

// Routing
// Params - url:String
apiRouter.get('/convert', apiRouterFunc.get.convert);


app.use('/api', apiRouter);
app.listen(3000);
