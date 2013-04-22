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
	favorite = require('./lib/favorite'),
	jipiao = require('./lib/jipiao'),
	ump = require('./lib/ump'),
	udp = require('./lib/udp'),
	hotel = require('./lib/hotel'),
	picture = require('./lib/picture'),
	subuser = require('./lib/subuser'),
	vas = require('./lib/vas'),
	refund = require('./lib/refund'),
	recommend = require('./lib/recommend'),
	widget = require('./lib/widget'),
	alipay = require('./lib/alipay'),
	tmall = require('./lib/tmall'),
	rds = require('./lib/rds'),
	travel = require('./lib/travel'),
	caipiao = require('./lib/caipiao'),
	bill = require('./lib/bill');

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
	notify, tools, wlb, simba, favorite, jipiao, ump, udp, hotel, picture, subuser, vas, refund, recommend,
	widget, alipay, tmall, rds, travel, caipiao, bill);
