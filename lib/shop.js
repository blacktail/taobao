var	core = require('./core');

module.exports = core.generateApi([
	'sellercats.list.add',
	'sellercats.list.get',
	'sellercats.list.update',
	'shop.get',
	'shop.remainshowcase.get',
	'shop.update',
	'shopcats.list.get'
]);
