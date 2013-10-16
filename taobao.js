var _ = require('underscore'),
	fs = require('fs'),
	path = require('path'),
	core = require('./lib/core');

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


fs.readdirSync(__dirname + '/lib').forEach(function(filename){
	if (!/\.js$/.test(filename)) return;

	var name = path.basename(filename, '.js'),
		exludeFiles = ['core', 'error', 'helper'];

	if (~excludeFiles.indexOf(name)) {
		_.extend(module.exports, require('./lib/' + name));
	}
});
