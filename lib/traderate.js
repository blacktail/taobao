var	core = require('./core');

module.exports = core.generateApi([
	'traderate.add',
	'traderate.explain.add',
	'traderate.list.add',
	'traderates.get'
]);
