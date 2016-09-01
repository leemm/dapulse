'use strict';

const Helpers = require('./helpers'),
    http_request = require('request');

class Request {

    constructor() { }

    /**
     * Standard HTTP GET
     * @param  {Object} parent
     * @param  {Object} opts
     * @return {Promise}
     */
    get(parent, opts) {

        const helpers = new Helpers('get', parent);
        helpers.debug(opts);

        return new Promise((resolve, reject) => {

            http_request(
                {
                    url: helpers.apiUrl(parent.defaults, opts)
                },
                ( err, res, body ) => {
                    body = helpers.parseBody(body);

                    let error = helpers.error(err, res, body);
                    if (error){ reject(error); }else{ resolve(body); }
                }
            );

        });

    }

    /**
     * Standard HTTP POST
     * @param  {Object} parent
     * @param  {Object} opts
     * @return {Promise}
     */
    post(parent, opts) {

        const helpers = new Helpers('post', parent);
        helpers.debug(opts);

        return new Promise((resolve, reject) => {

            http_request(
                {
                    method: 'post',
                    url: helpers.apiUrl(parent.defaults, opts),
                    form: helpers.formBody(opts.filter)
                },
                ( err, res, body ) => {
                    body = helpers.parseBody(body);

                    let error = helpers.error(err, res, body);
                    if (error){ reject(error); }else{ resolve(body); }
                }
            );

        });

    }

    /**
     * Standard HTTP PUT
     * @param  {Object} parent
     * @param  {Object} opts
     * @return {Promise}
     */
    put(parent, opts) {

        const helpers = new Helpers('put', parent);
        helpers.debug(opts);

        return new Promise((resolve, reject) => {

            http_request(
                {
                    method: 'put',
                    url: helpers.apiUrl(parent.defaults, opts),
                    form: helpers.formBody(opts.filter)
                },
                ( err, res, body ) => {
                    body = helpers.parseBody(body);

                    let error = helpers.error(err, res, body);
                    if (error){ reject(error); }else{ resolve(body); }
                }
            );

        });

    }

    /**
     * Standard HTTP DELETE
     * @param  {Object} parent
     * @param  {Object} opts
     * @return {Promise}
     */
    del(parent, opts) {

        const helpers = new Helpers('delete', parent);
        helpers.debug(opts);

        return new Promise((resolve, reject) => {

            http_request(
                {
                    method: 'delete',
                    url: helpers.apiUrl(parent.defaults, opts)
                },
                ( err, res, body ) => {
                    body = helpers.parseBody(body);

                    let error = helpers.error(err, res, body);
                    if (error){ reject(error); }else{ resolve(body); }
                }
            );

        });

    }

}

module.exports = Request;
