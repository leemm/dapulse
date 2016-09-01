'use strict';

const key = require('./apikey.json'),
	API = require('../api'),
	api = new API(Object.assign(key, { debug: true }));

api.boards({
	// page: 1, // optional
	// per_page: 10, // optional
	// offset: 10, //optional
	// only_globals: true, // optional
	// order_by_latest: true // optional
})
	.then(json => { console.log(json); })
	.catch(err => { console.error(err); });

// api.boards({
// 	action: 'post',
// 	user_id: 584585,
// 	name: 'Test API Board',
// 	description: 'Test API description...' // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id({
// 	board_id: 16069842
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id({
// 	action: 'delete',
// 	board_id: 16069842
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.groups({
// 	board_id: 16000832,
// 	show_archived: true // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.groups({
// 	action: 'post',
// 	board_id: 16000832,
// 	title: 'API Board 2'
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.groups({
// 	action: 'put',
// 	board_id: 16000832,
// 	group_id: 'api_board_2',
// 	title: 'API Board erferer'
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.groups({
// 	action: 'put',
// 	board_id: 16000832,
// 	group_id: 'api_board_2',
// 	title: 'API Board erferer'
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.groups.group_id({
// 	action: 'delete',
// 	board_id: 16000832,
// 	group_id: 'api_board_2'
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.columns({
// 	board_id: 16000832,
// 	//all_columns: true // optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.columns({
// 	action: 'post',
// 	board_id: 16000832,
// 	title: 'New Col',
// 	type: 'status', // The column’s type. It can be status, person, text, date or numeric.
// 	labels: [
// 		'Status 1',
// 		'Status 2',
// 		'Status 3'
// 	] // optional, only for status
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.columns.column_id({
// 	action: 'put',
// 	board_id: 16000832,
// 	column_id: 'new_col',
// 	title: 'New Col ffff',
// 	type: 'status', // The column’s type. It can be status, person, text, date or numeric.
// 	labels: [
// 		'Status 1',
// 		'Status 2',
// 		'Status 3',
// 		'Status 4'
// 	] // optional, only for status
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.columns.column_id({
// 	action: 'delete',
// 	board_id: 16000832,
// 	column_id: 'new_col'
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.columns.column_id.value({
// 	board_id: 16000832,
// 	column_id: 'status',
// 	pulse_id: 16000833
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.columns.column_id.text({
// 	board_id: 16000832,
// 	column_id: 'text',
// 	pulse_id: 16000833,
// 	text: 'New text text...'
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.pulses({
// 	board_id: 16000832
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.pulses({
// 	action: 'post',
// 	board_id: 16000832,
// 	user_id: 584585,
// 	'pulse[name]': 'From API'
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.pulses.pulse_id.duplicate({
// 	board_id: 16000832,
// 	pulse_id: 16000833,
// 	group_id: 'topics',
// 	owner_id: 584585
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.subscribers({
// 	board_id: 16000832,
// 	// page: 1, //optional,
// 	// per_page: 10, //optional,
// 	// offset: 10, //optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.subscribers({
// 	action: 'put',
// 	board_id: 16000832,
// 	user_id: 221674,
// 	//as_admin: true //optional
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });

// api.boards.board_id.subscribers.user_id({
// 	board_id: 16000832,
// 	user_id: 221674
// })
// 	.then(json => { console.log(json); })
// 	.catch(err => { console.error(err); });
