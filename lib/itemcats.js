var _ = require('lodash'),
	core = require('./core'),
	error = require('./error');

module.exports = {
	// taobao.itemcats.authorize.get
	itemcatsAuthorizeGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.itemcats.authorize.get',
			fields: ' brand.vid, brand.name, item_cat.cid, item_cat.name, item_cat.status,' +
				'item_cat.sort_order,item_cat.parent_cid,item_cat.is_parent, xinpin_item_cat.cid,' +
				' xinpin_item_cat.name, xinpin_item_cat.status, xinpin_item_cat.sort_order,' +
				' xinpin_item_cat.parent_cid, xinpin_item_cat.is_parent'
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	},

	// taobao.itemcats.get
	itemcatsGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.itemcats.get',
			parent_cid: 0
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	},

	// taobao.itemcats.increment.get
	itemcatsIncrementGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.itemcats.increment.get',
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	},

	// taobao.itemprops.get 
	itempropsGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.itemprops.get'
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	},

	// taobao.itempropvalues.get
	itempropvaluesGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.itempropvalues.get',
			fields: 'cid,pid,prop_name,vid,name,name_alias,status,sort_order'
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	},

	// taobao.topats.itemcats.get
	topatsItemcatsGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.topats.itemcats.get'
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	}
};
