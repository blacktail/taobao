var	core = require('./core');

module.exports = core.generateApi([
	'categoryrecommend.items.get',
	'itemrecommend.items.get',
	'shoprecommend.items.get',
	'shoprecommend.shops.get',
	'userrecommend.items.get'
]);
