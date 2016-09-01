'use strict';

const key = require('./apikey.json'),
	API = require('../api'),
	api = new API(Object.assign(key, { debug: true }));

api.updates({
	since: '2015-01-01', // optional, (YYYY-mm-dd or unix timestamp)
	//until: '2015-01-01', // optional, (YYYY-mm-dd or unix timestamp)
	//updated_since:  // optional
	//updated_until:  // optional
})
	.then(json => { console.log(json); })
	.catch(err => { console.error(err); });

// api.updates({
// 	action: 'post',
// 	user: 584585,
// 	pulse: 16000833,
// 	update_text: '<h3>fdsfdsfewwrew dfrereew</h3>',
// 	announcement: false
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.updates.id({
// 	action: 'delete',
// 	id: 14635648
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.updates.id.like({
// 	id: 14637321,
// 	user: 584585
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.updates.id.unlike({
// 	id: 14637321,
// 	user: 584585
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });