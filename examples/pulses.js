'use strict';

const key = require('./apikey.json'),
	API = require('../api'),
	api = new API(Object.assign(key, { debug: true }));

api.pulses({
	// page: 1, // optional
	// per_page: 10, // optional
	// offset: 10, //optional
	// order_by_latest: true,
	since: '2015-01-01', // optional, (YYYY-mm-dd or unix timestamp)
	//until: '2015-01-01', // optional, (YYYY-mm-dd or unix timestamp)
})
	.then(json => { console.log(json); })
	.catch(err => { console.error(err); });

// api.pulses.id({
// 	id: 2034386
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id({
// 	action: 'put',
// 	id: 2034386,
// 	name: 'Project1 2'
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id({
// 	action: 'delete',
// 	id: 2034386,
// 	archive: true // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id.subscribers({
// 	id: 2034386//,
// 	// page: 1, // optional
// 	// per_page: 10, // optional
// 	// offset: 10 // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id.subscribers({
// 	action: 'put',
// 	id: 2034386,
// 	user_id: 584585//,
// 	// as_admin: true, // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id.subscribers.user_id({
// 	id: 2034386,
// 	user_id: 584585
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id.notes({
// 	id: 2034386
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id.notes({
// 	action: 'post',
// 	id: 2034386,
// 	title: 'Test Note 2',
// 	content: 'Test Content 2',
// 	//owners_only: true, // optional
// 	user_id: 584585, // optional
// 	//create_update: true, // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id.notes.note_id({
// 	action: 'put',
// 	id: 2034386,
// 	note_id: 795723,
// 	title: 'Test Note 4f4f',
// 	content: 'Test Content sdfefew',
// 	user_id: 584585, // optional
// 	//create_update: true, // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id.notes.note_id({
// 	action: 'delete',
// 	id: 2034386,
// 	note_id: 795723
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.pulses.id.updates({
// 	id: 2034386,
// 	//page: 1, // optional
// 	//limit: 10, // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });