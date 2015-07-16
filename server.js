// Load dependencies
var express   = require('express'),
    routers   = require('./lib/routers/routers'),
    config    = require('./config');

var apiRouterFunc  = routers.apiRouter,
    demoRouterFunc = routers.demoRouter,
    rootRouterFunc = routers.rootRouter;

var app        = express(),
    apiRouter  = express.Router(),
    demoRouter = express.Router(),
    rootRouter = express.Router();

// app.use("/demo", express.static(`${__dirname}/public/demo`));

// Routing
// Api Routers
// Params - url:String
apiRouter.get('/convert', apiRouterFunc.get.convert);

// Demo Routers
demoRouter.get('/index', demoRouterFunc.get.root);

// Root Routers
rootRouter.get('/', rootRouterFunc.get.root);

app.use('/api',   apiRouter);
app.use('/demo',  demoRouter);
app.use('/',      rootRouter)
app.listen(process.env.PORT || config.port);
