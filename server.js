// Load dependencies
var express   = require('express'),
    routers   = require('./lib/routers/routers');

var apiRouterFunc  = routers.apiRouter,
    demoRouterFunc = routers.demoRouter;

var app        = express(),
    apiRouter  = express.Router(),
    demoRouter = express.Router();


// app.use("/demo", express.static(`${__dirname}/public/demo`));

// Routing
// Api Routers
// Params - url:String
apiRouter.get('/convert', apiRouterFunc.get.convert);

// Demo Routers
demoRouter.get('/index', demoRouterFunc.get.root);

app.use('/api', apiRouter);
app.use('/demo', demoRouter);
app.listen(3000);
