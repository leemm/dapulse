'use strict';

const Helpers = require('../lib/helpers.js');

let config, get, post, put, del;

class Users {

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

        let methods = this.users;
        methods.id = this.users_id;
        methods.id.posts = this.users_id_posts;
        methods.id.newsfeed = this.users_id_newsfeed;
        methods.id.unread_feed = this.users_id_unread_feed;

        return methods;

    }

    /**
     * https://developers.dapulse.com/#!/users/GET_version_users_format
     * @return {Promise}
     */
    users(opts) {
        return get(config, {
            filter: Object.assign(opts, {}),
            url: 'users'
        });
    }

    /**
     * https://developers.dapulse.com/#!/users/GET_version_users_id_format
     * @return {Promise}
     */
    users_id(opts) {
        return get(config, {
            filter: Object.assign(opts, {}),
            url: 'users/{id}'
        });
    }

    /**
     * https://developers.dapulse.com/#!/users/GET_version_users_id_posts_format
     * @return {Promise}
     */
    users_id_posts(opts) {
        return get(config, {
            filter: Object.assign(opts, {}),
            url: 'users/{id}/posts'
        });
    }

    /**
     * https://developers.dapulse.com/#!/users/GET_version_users_id_newsfeed_format
     * @return {Promise}
     */
    users_id_newsfeed(opts) {
        return get(config, {
            filter: Object.assign(opts, {}),
            url: 'users/{id}/newsfeed'
        });
    }

    /**
     * https://developers.dapulse.com/#!/users/GET_version_users_id_unread_feed_format
     * @return {Promise}
     */
    users_id_unread_feed(opts) {
        return get(config, {
            filter: Object.assign(opts, {}),
            url: 'users/{id}/unread_feed'
        });
    }

}

module.exports = Users;
