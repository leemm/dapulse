'use strict';

const Helpers = require('../lib/helpers.js');

let config, get, post, put, del;

class Pulses {

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

        let methods = this.pulses;
        methods.id = this.pulses_id;
        methods.id.subscribers = this.pulses_id_subscribers;
        methods.id.subscribers.user_id = this.pulses_id_subscribers_user_id;
        methods.id.notes = this.pulses_id_notes;
        methods.id.notes.note_id = this.pulses_id_notes_note_id;
        methods.id.updates = this.pulses_id_updates;

        return methods;

    }

    /**
     * https://developers.dapulse.com/#!/pulses/GET_version_pulses_format
     * @return {Promise}
     */
    pulses(opts) {
        return get(config, {
            filter: Object.assign(opts, {}),
            url: 'pulses'
        });
    }

    /**
     * https://developers.dapulse.com/#!/pulses/GET_version_pulses_id_format
     * https://developers.dapulse.com/#!/pulses/PUT_version_pulses_id_format
     * https://developers.dapulse.com/#!/pulses/DELETE_version_pulses_id_format
     * @return {Promise}
     */
    pulses_id(opts) {
        if (opts.action === 'put'){ // Update pulse
            return put(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}'
            });
        }else if (opts.action === 'delete'){ // Delete pulse
            return del(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/pulses/GET_version_pulses_id_subscribers_format
     * https://developers.dapulse.com/#!/pulses/PUT_version_pulses_id_subscribers_format
     * @return {Promise}
     */
    pulses_id_subscribers(opts) {
        if (opts.action === 'put'){ // Update
            return put(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}/subscribers'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}/subscribers'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/pulses/DELETE_version_pulses_id_subscribers_user_id_format
     * @return {Promise}
     */
    pulses_id_subscribers_user_id(opts) {
        return del(config, {
            filter: Object.assign(opts, {}),
            url: 'pulses/{id}/subscribers/{user_id}'
        });
    }

    /**
     * https://developers.dapulse.com/#!/pulses/GET_version_pulses_id_notes_format
     * https://developers.dapulse.com/#!/pulses/POST_version_pulses_id_notes_format
     * @return {Promise}
     */
    pulses_id_notes(opts) {
        if (opts.action === 'post'){ // Add
            return post(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}/notes'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}/notes'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/pulses/PUT_version_pulses_id_notes_note_id_format
     * https://developers.dapulse.com/#!/pulses/DELETE_version_pulses_id_notes_note_id_format
     * @return {Promise}
     */
    pulses_id_notes_note_id(opts) {
        if (opts.action === 'delete'){ // Add
            return del(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}/notes/{note_id}'
            });
        }else{
            return put(config, {
                filter: Object.assign(opts, {}),
                url: 'pulses/{id}/notes/{note_id}'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/pulses/GET_version_pulses_id_updates_format
     * @return {Promise}
     */
    pulses_id_updates(opts) {
        return get(config, {
            filter: Object.assign(opts, {}),
            url: 'pulses/{id}/updates'
        });
    }

}

module.exports = Pulses;
