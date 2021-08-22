const { Controller } = require('../core');

module.exports = class Gallery extends Controller {
    get(id, req, res) {
        console.log(id);
    }
}