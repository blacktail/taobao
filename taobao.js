var _ = require('underscore'),
	core = require('./lib/core'),
	user = require('./lib/user');


module.exports = {
	config: function (config) {
		core.config(config);
	},

	updateSession: function(session) {
		core.config({
			session: session
		});
	},

	core: core
};

_.extend(module.exports, user);
