
dapulse
=======

[![Build Status](https://travis-ci.org/leemm/dapulse.svg?branch=master)](https://travis-ci.org/leemm/dapulse)

Wrapper for Dapulse API v1 with ES6 style classes and promises.

# Prerequisites

You need your API key:
* https://developers.dapulse.com/
* If using the examples in this module add it to examples/apikey.json

# Install
```
npm install dapulse --save
```

# Usage

All API URL paths listed in the developer documentation https://developers.dapulse.com/ are mapped to the API class. e.g. **api.users()** for the API path */users*. If the URL path contains a parameter e.g. *{pulse_id}* this is mapped to the word without the brackets.
For example, */v1/pulses/{id}.json* becomes *api.pulses.id()*;

***See the developer documentation for all usable parameters for each method***

**If the URL has the ability to take multiple HTTP Verbs .e.g get, post, then the request config must also include an action *property* containing the name of the verb (see examples below).**

```javascript
'use strict';

const API = require('dapulse'),
    api = new API({ 
        apiKey: '<YOUR API KEY>'
    });
```

# API

new API(options);
* **apiKey** *String* - Your API key
* **debug** *Boolean* - If true the URL, Verb and Querystring/Form Body are written to the console. (default ```false```)

# Examples

There are a lot of examples in the /examples folder which I've tried to comment thoroughly.  But here's a few basic examples.

```javascript
'use strict';

const API = require('dapulse'),
    api = new API({ 
        apiKey: '<YOUR API KEY>', 
    });


// Get 4 users from the first page
// https://developers.dapulse.com/#!/users/GET_version_users_format
api.users({
	page: 1,
	per_page: 4,
	order_by_latest: true
})
	.then(json => { console.log(json); })
	.catch(err => { console.error(err); });
```

```javascript
'use strict';

const API = require('dapulse'),
    api = new API({ 
        apiKey: '<YOUR API KEY>', 
    });


// Create new board called 'Test API Board'
// https://developers.dapulse.com/#!/boards/POST_version_boards_format
api.boards({
	action: 'post',
	user_id: 152586,
	name: 'Test API Board',
	description: 'Test API description...'
})
	.then(json => { console.log(json); })
	.catch(err => { console.error(err); });
```

```javascript
'use strict';

const API = require('dapulse'),
    api = new API({ 
        apiKey: '<YOUR API KEY>', 
    });


// Delete a note from the pulse 158556
// https://developers.dapulse.com/#!/pulses/DELETE_version_pulses_id_notes_note_id_format
api.pulses.id.notes.note_id({
	action: 'delete',
	id: 158556,
	note_id: 123589
})
	.then(json => { console.log(json); })
	.catch(err => { console.error(err); });
```

