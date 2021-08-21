const routesData = require('../config/routes');

module.exports = class Router {
  constructor(reqData) {
    this.data = reqData;
    this.routes = Object.keys(routesData);  
  }

  route(req, res) {
    const matchedRoute = this._matchRoute();
    const controller = this._extractController();
    console.log(this.routes);
    res.end();
  }

  _extractController() {
    return console.log(`'${this.data.path}'`);
  }

  _matchRoute() {
    this.routes.forEach((route) => {
      if ()
    });
  }
}