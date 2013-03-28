var _ = require('underscore'),
	core = require('./core'),
	error = require('./error');

module.exports = {
	// taobao.user.buyer.get
	userBuyerGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.user.buyer.get',
			fields: 'user_id,nick,sex,buyer_credit,avatar,has_shop,vip_info'
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	},

	// taobao.user.get
	userGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.user.get'
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	},

	// taobao.user.seller.get
	userSellerGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.user.seller.get',
			fields: 'user_id,nick,sex,seller_credit,type,has_more_pic,item_img_num,item_img_size,prop_img_num,' +
				'prop_img_size,auto_repost,promoted_type,status,alipay_bind,consumer_protection,avatar,liangpin,' +
				'sign_food_seller_promise,has_shop,is_lightning_consignment,has_sub_stock,is_golden_seller,vip_info,' +
				'magazine_subscribe,vertical_market,online_gaming'
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	},

	// taobao.users.get
	usersGet: function(httpArgs, args, callback) {
		var defaultArg = {
			method: 'taobao.users.get'
		};

		core.callDefaultArg(defaultArg, httpArgs, args, callback);
	}
};
