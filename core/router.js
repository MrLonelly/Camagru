const routesData = require('../config/routes');
const fs = require('fs');
const path = require('path');

const NumberRegex = '\\d+';
const StringRegex = '\\w+';

module.exports = class Router {
  constructor(reqData) {
    this.data = reqData;
    this.routes = Object.keys(routesData);
  }

  route(req, res) {
    const parsedRoute = this._matchRoute();
    const controller = this._extractController(parsedRoute);

    const DynamicController = new (require(path.join(__dirname, '..', 'controllers', controller)))();

    if (parsedRoute.data.method.includes(this.data.method)) {
      DynamicController[this.data.method](3, req, res);
    } else {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        status: false,
        message: 'Method not allowed',
        data: [],
      }));
    }
  }

  _extractController(matchedRoute) {
    if (fs.existsSync(path.join(__dirname, '..', 'controllers', `${matchedRoute.data.controller}.controller.js`))) {
      return `${matchedRoute.data.controller}.controller.js`;
    }

    return `NotFound.controller.js`;
  }

  _matchRoute() {
    let tmpRoute;
    for (const route of this.routes) {
      tmpRoute = `^${route}$`
      if (routesData[route].args.length) {
        routesData[route].args.forEach((argData) => {
          switch (argData.type) {
            case 'number':
              tmpRoute = tmpRoute.replace(`:${argData.name}`, NumberRegex);
              break;
            case 'string':
              tmpRoute = tmpRoute.replace(`:${argData.name}`, StringRegex);
          }
        });
      }

      if (this.data.path.match(tmpRoute) || this.data.path === route) {
        return {
          parsedRoute: this.data.path.split('/'),
          data: routesData[route],
        };
      }
    };

    return {
      parsedRoute: [
          'NotFound',
      ],
      data: {
        controller: 'NotFound',
      },
    }
  }
}