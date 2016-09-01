'use strict';

const Helpers = require('../lib/helpers.js');

let config, get, post, put, del;

class Boards {

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

        let methods = this.boards;
        methods.board_id = this.boards_board_id;
        methods.board_id.groups = this.boards_board_id_groups;
        methods.board_id.groups.group_id = this.boards_board_id_groups_group_id;
        methods.board_id.columns = this.boards_board_id_columns;
        methods.board_id.columns.column_id = this.boards_board_id_columns_column_id;
        methods.board_id.columns.column_id.value = this.boards_board_id_columns_column_id_value;
        methods.board_id.columns.column_id.text = this.boards_board_id_columns_column_id_text;
        methods.board_id.columns.column_id.person = this.boards_board_id_columns_column_id_person;
        methods.board_id.columns.column_id.status = this.boards_board_id_columns_column_id_status;
        methods.board_id.columns.column_id.date = this.boards_board_id_columns_column_id_date;
        methods.board_id.columns.column_id.numeric = this.boards_board_id_columns_column_id_numeric;
        methods.board_id.pulses = this.boards_board_id_pulses;
        methods.board_id.pulses.pulse_id = function(){};
        methods.board_id.pulses.pulse_id.duplicate = this.boards_board_id_pulses_pulse_id_duplicate;
        methods.board_id.subscribers = this.boards_board_id_subscribers;
        methods.board_id.subscribers.user_id = this.boards_board_id_subscribers_user_id;

        return methods;

    }

    /**
     * https://developers.dapulse.com/#!/boards/GET_version_boards_format
     * https://developers.dapulse.com/#!/boards/POST_version_boards_format
     * @return {Promise}
     */
    boards(opts) {
        if (opts.action === 'post'){ // Add
            return post(config, {
                filter: Object.assign(opts, {}),
                url: 'boards'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'boards'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/boards/GET_version_boards_board_id_format
     * https://developers.dapulse.com/#!/boards/DELETE_version_boards_board_id_format
     * @return {Promise}
     */
    boards_board_id(opts) {
        if (opts.action === 'delete'){ // Add
            return del(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/boards/GET_version_boards_board_id_groups_format
     * https://developers.dapulse.com/#!/boards/PUT_version_boards_board_id_groups_format
     * https://developers.dapulse.com/#!/boards/POST_version_boards_board_id_groups_format
     * @return {Promise}
     */
    boards_board_id_groups(opts) {
        if (opts.action === 'put'){ // Update
            return put(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/groups'
            });
        }else if (opts.action === 'post'){ // Add
            return post(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/groups'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/groups'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/boards/DELETE_version_boards_board_id_groups_group_id_format
     * @return {Promise}
     */
    boards_board_id_groups_group_id(opts) {
        return del(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/groups/{group_id}'
        });
    }

    /**
     * https://developers.dapulse.com/#!/boards/GET_version_boards_board_id_columns_format
     * https://developers.dapulse.com/#!/boards/POST_version_boards_board_id_columns_format
     * @return {Promise}
     */
    boards_board_id_columns(opts) {
        if (opts.action === 'post'){ // Add
            return post(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/columns'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/columns'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/boards/PUT_version_boards_board_id_columns_column_id_format
     * https://developers.dapulse.com/#!/boards/DELETE_version_boards_board_id_columns_column_id_format
     * @return {Promise}
     */
    boards_board_id_columns_column_id(opts) {
        if (opts.action === 'delete'){ // Delete
            return del(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/columns/{column_id}'
            });
        }else{
            return put(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/columns/{column_id}'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/boards/GET_version_boards_board_id_columns_column_id_value_format
     * @return {Promise}
     */
    boards_board_id_columns_column_id_value(opts) {
        return get(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/columns/{column_id}/value'
        });
    }

    /**
     * https://developers.dapulse.com/#!/boards/PUT_version_boards_board_id_columns_column_id_text_format
     * @return {Promise}
     */
    boards_board_id_columns_column_id_text(opts) {
        return put(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/columns/{column_id}/text'
        });
    }

    /**
     * https://developers.dapulse.com/#!/boards/PUT_version_boards_board_id_columns_column_id_person_format
     * @return {Promise}
     */
    boards_board_id_columns_column_id_person(opts) {
        return put(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/columns/{column_id}/person'
        });
    }

    /**
     * https://developers.dapulse.com/#!/boards/PUT_version_boards_board_id_columns_column_id_status_format
     * @return {Promise}
     */
    boards_board_id_columns_column_id_status(opts) {
        return put(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/columns/{column_id}/status'
        });
    }

    /**
     * https://developers.dapulse.com/#!/boards/PUT_version_boards_board_id_columns_column_id_date_format
     * @return {Promise}
     */
    boards_board_id_columns_column_id_date(opts) {
        return put(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/columns/{column_id}/date'
        });
    }

    /**
     * https://developers.dapulse.com/#!/boards/PUT_version_boards_board_id_columns_column_id_numeric_format
     * @return {Promise}
     */
    boards_board_id_columns_column_id_numeric(opts) {
        return put(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/columns/{column_id}/numeric'
        });
    }

    /**
     * https://developers.dapulse.com/#!/boards/GET_version_boards_board_id_pulses_format
     * https://developers.dapulse.com/#!/boards/POST_version_boards_board_id_pulses_format
     * @return {Promise}
     */
    boards_board_id_pulses(opts) {
        if (opts.action === 'post'){ // Add
            return post(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/pulses'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/pulses'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/boards/POST_version_boards_board_id_pulses_pulse_id_duplicate_format
     * @return {Promise}
     */
    boards_board_id_pulses_pulse_id_duplicate(opts) {
        return post(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/pulses/{pulse_id}/duplicate'
        });
    }

    /**
     * https://developers.dapulse.com/#!/boards/GET_version_boards_board_id_subscribers_format
     * https://developers.dapulse.com/#!/boards/PUT_version_boards_board_id_subscribers_format
     * @return {Promise}
     */
    boards_board_id_subscribers(opts) {
        if (opts.action === 'put'){ // Update
            return put(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/subscribers'
            });
        }else{
            return get(config, {
                filter: Object.assign(opts, {}),
                url: 'boards/{board_id}/subscribers'
            });
        }
    }

    /**
     * https://developers.dapulse.com/#!/boards/DELETE_version_boards_board_id_subscribers_user_id_format
     * @return {Promise}
     */
    boards_board_id_subscribers_user_id(opts) {
        return del(config, {
            filter: Object.assign(opts, {}),
            url: 'boards/{board_id}/subscribers/{user_id}'
        });
    }

}

module.exports = Boards;
