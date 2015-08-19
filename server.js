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

app.use(express.static(`${__dirname}/public/assets`));

// Routing
// Api Routers
// Params - url:String
apiRouter.get('/convert', apiRouterFunc.get.convert);

// Demo Routers
demoRouter.get('/', demoRouterFunc.get.root);
demoRouter.get('/html/render/', demoRouterFunc.get.htmlRender)

// Root Routers
rootRouter.get('/', rootRouterFunc.get.root);

app.use('/api',   apiRouter);
app.use('/demo',  demoRouter);
app.use('/',      rootRouter)
app.listen(process.env.PORT || config.port);
