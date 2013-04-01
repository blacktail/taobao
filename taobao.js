var _ = require('underscore'),
	core = require('./lib/core'),
	user = require('./lib/user'),
	itemcats = require('./lib/itemcats'),
	item = require('./lib/item'),
	trade = require('./lib/trade'),
	traderate = require('./lib/traderate'),
	logistics = require('./lib/logistics');

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

_.extend(module.exports, user, itemcats, item, trade, traderate, logistics);
