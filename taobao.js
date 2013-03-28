var core = require('./lib/core');

module.exports = {
	config: function (appKey, appSecret) {
		core.config(appkey, appSecret);
	},

	core: core
}
