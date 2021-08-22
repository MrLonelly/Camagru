const http = require('http');
const { Router } = require('./core');
const { reqUtil } = require('./utils');

const server = http.createServer((req, res) => {
    reqUtil.extractData(req).then((data) => {
       const router = new Router(data);
       return router.route(req, res);
    }).catch((err) => {
        res.end(err.toString());
    });
});

module.exports = server;