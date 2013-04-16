var _ = require('underscore'),
	core = require('./lib/core'),
	user = require('./lib/user'),
	itemcats = require('./lib/itemcats'),
	item = require('./lib/item'),
	trade = require('./lib/trade'),
	traderate = require('./lib/traderate'),
	logistics = require('./lib/logistics'),
	shop = require('./lib/shop'),
	fenxiao = require('./lib/fenxiao'),
	wangwang = require('./lib/wangwang'),
	taoke = require('./lib/taoke'),
	notify = require('./lib/notify'),
	tools = require('./lib/tools'),
	wlb = require('./lib/wlb'),
	simba = require('./lib/simba'),
	favorite = require('./lib/favorite');

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

_.extend(module.exports, user, itemcats, item, trade, traderate, logistics, shop, fenxiao, wangwang, taoke,
	notify, tools, wlb, simba, favorite);
