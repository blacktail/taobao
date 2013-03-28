var core = require('./lib/core');

module.exports = {
	config: function (config) {
		core.config(config);
	},

	core: core
}
