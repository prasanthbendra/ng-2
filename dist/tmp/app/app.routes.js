"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./+about/index');
var index_2 = require('./+home/index');
var routes = index_2.HomeRoutes.concat(index_1.AboutRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes),
];
