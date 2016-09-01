'use strict';

const key = require('./apikey.json'),
	API = require('../api'),
	api = new API(Object.assign(key, { debug: true }));

api.users({
	//page: 1, // optional
	//per_page: 4, // optional
	// offset: 10 // optional
	order_by_latest: true // optional
})
	.then(json => { console.log(json); })
	.catch(err => { console.error(err); });

// api.users.id.posts({
// 	id: 584585,
// 	page: 1, // optional
// 	per_page: 4, // optional
// 	// offset: 10 // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });