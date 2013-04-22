var	core = require('./core');

module.exports = core.generateApi([
	{
		method: 'spmeffect.get',
		namespace: 'taobao'
	},
	'items.discount.search',
	'selected.items.search',
	'temai.items.search',
	'temai.subcats.search'
], 'tmall');
