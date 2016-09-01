'use strict';

const Request = require('../lib/request'),
    Helpers = require('../lib/helpers'),
    fs = require('fs'),
    _ = require('lodash'),
    path = require('path');

class API extends Request {

	/**
     * API wrapper
     * @param  {Object} opts
     */
    constructor(opts) {
        super();

        this.options = opts || {};
        this.options.version = this.options.version ? this.options.version : 1;

        this.url = `https://api.dapulse.com:443/v${this.options.version}`;
        this.defaults = {
            api_key: this.options.apiKey,
            format: 'json'
        };

        let files = _.filter(fs.readdirSync(__dirname), file => { return path.parse(file).ext === '.js' && file !== 'index.js'; });
        files.map(file => {

            let info = path.parse(file),
                init = new (require('./' + file))(this, super.get, super.post, super.put, super.del);

            this[info.name] = init;

        });

    }

}

module.exports = API;
