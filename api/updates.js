'use strict';

const Helpers = require('../lib/helpers.js');

let config, get, post, put, del;

class Updates {

    constructor(conf, GETter, POSTer, PUTter, DELETEer) {
        config = conf;
        get = GETter;
        post = POSTer;
        put = PUTter;
        del = DELETEer;

        return this._tree();
    }

    /**
     * construct API "tree" in similar structure to the live API
     * @return {Object}
     */
    _tree() {

        let methods = this.updates;
        methods.id = this.updates_id;
        methods.id.like = this.updates_id_like;
        methods.id.unlike = this.updates_id_unlike;

        return methods;

    }

    /**
     * https://developers.dapulse.com/#!/updates/GET_version_updates_format
     * https://developers.dapulse.com/#!/updates/POST_version_updates_format
     * @return {Promise}
     */
    updates(opts) {
        if (opts.action === 'post'){ // Add
            return post(config, {
                filter: Object.assign(opts, {}),
                url: 'updates'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'updates'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/updates/GET_version_updates_id_format
     * @return {Promise}
     */
    updates_id(opts) {
        if (opts.action === 'delete'){ // Delete post
            return del(config, {
                filter: Object.assign(opts, {}),
                url: 'updates/{id}'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'updates/{id}'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/updates/POST_version_updates_id_like_format
     * @return {Promise}
     */
    updates_id_like(opts) {
        return post(config, {
            filter: Object.assign(opts, {}),
            url: 'updates/{id}/like'
        });
    }

    /**
     * https://developers.dapulse.com/#!/updates/POST_version_updates_id_unlike_format
     * @return {Promise}
     */
    updates_id_unlike(opts) {
        return post(config, {
            filter: Object.assign(opts, {}),
            url: 'updates/{id}/unlike'
        });
    }

}

module.exports = Updates;
