// Load dependencies
var express   = require('express'),
    routers   = require('./lib/routers/routers'),
    config    = require('./config');

var PORT = process.env.PORT || config.port;

var apiRouterFunc  = routers.apiRouter,
    demoRouterFunc = routers.demoRouter;

var app        = express(),
    apiRouter  = express.Router(),
    demoRouter = express.Router();

app.use(express.static(`${__dirname}/public/assets`));

// Routing
// Api Routers
// Params - url:String
apiRouter.get('/convert', apiRouterFunc.get.convert);

// Demo Routers
demoRouter.get('/', demoRouterFunc.get.root);
demoRouter.get('/html/render/', demoRouterFunc.get.htmlRender)

app.use('/api',   apiRouter);
app.use('/demo',  demoRouter);
app.listen(PORT);


console.log("Server is running on: " + PORT);
