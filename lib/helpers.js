'use strict';

const colors = require('colors'),
    _ = require('lodash'),
    url = require('url'),
    qs = require('querystring');

class Helpers {

    /**
     * Default config
     * @param  {Object} config
     */
    constructor(verb, config) {
        this.verb = verb ? verb : 'get',
        this.config = config ? config : {};
    }

    /**
     * Object dump
     * @param  {Object} obj
     */
    static dump(obj) {
        console.log( require('util').inspect(obj, false, null) );
    }

    /**
     * Take response body and cast to JSON
     * @param  {Object} body
     * @return {Object}
     */
    parseBody(body) {

        if (body && body.indexOf('{') > -1){
            body = JSON.parse(body);
        }

        return body || {};

    }

    /**
     * check for API error
     * @param  {Object} err
     * @param  {Object} res
     * @param  {Object} body
     * @return {Object}
     */
    error(err, res, body) {

        let newError = (code, message) => {
            let err = new Error(message);
            err.error = code;
            err.text = message;
            return err;
        };

        try {

            if (err) throw err;

            if (res.statusCode < 200 || res.statusCode >= 300){
                if (body.error){
                    throw newError(body.error, (body.message ? body.message : body.error));
                }else{
                    throw newError(-1, res.statusMessage);
                }
            }

        } catch(reterror) {
            return reterror;
        }
    }

    /**
     * Constuct the request URL
     * @param  {Object} API defaults
     * @param  {Object} opts current options for request
     * @return {String}
     */
    apiUrl(defaults, opts){

        let parts = this.config.url.split('/').concat(opts.url.split('/')),
            qs = [],
            toRemove = [];

        // Replace "placeholders"
        for (let idx = 0;idx < parts.length;idx ++){
            let val = parts[idx];

            if ( val.indexOf('{') > -1 && val.indexOf('}') > -1 ){
                let item = val.substring(1, val.length - 1);

                parts[idx] = opts.filter && opts.filter[item] ? opts.filter[item] : '';
                toRemove.push(item);
            }
        }

        // construct qs
        if (opts && opts.filter && (this.verb === 'get' || this.verb === 'delete')){

            for (let key in opts.filter){
                if ( toRemove.indexOf(key) === -1 && key !== 'action' ){
                    let obj = { key: key, val: opts.filter[key] };
                    qs.push( obj );
                }
            }

        }

        // Add API key
        qs.push({ key: 'api_key', val: defaults.api_key });

        // Querystring
        let api_query = (qs.length > 0 ? '?' + qs.map(item => { return `${item.key}=${item.val}`; }).join('&') : '');

        return `${parts.join('/')}.${defaults.format}${api_query}`;

    }

    /**
     * Process opts.filter and return a formatted body
     * @param  {Object} body
     * @return {Object}
     */
    formBody(body){
        if (body.action){ delete body.action; }
        return body;
    }

    /**
     * Debugging to console if { debug: true } supplied in api init
     * @param  {Object} opts current options for request
     */
    debug(opts){

        if (this.config.options.debug && this.config.options.debug === true){

            const api_url = this.apiUrl(this.config.defaults, opts),
                parts = url.parse(api_url),
                query = qs.parse(parts.query);

            console.log('----------');

            console.log(api_url.split('?')[0].cyan);
            console.log(this.verb.magenta);
            console.log(Object.keys(query).map(key => { return key + ' = ' + query[key]; }).join('\n').blue);

            if (this.verb === 'post' || this.verb === 'put'){
                console.log(Object.keys(opts.filter).map(key => { return (key !== 'action' ? key + ' = ' + opts.filter[key] : null); }).join('\n').grey);
            }

            console.log('----------');

        }

    }

}

module.exports = Helpers;
