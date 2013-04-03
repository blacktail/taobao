var	core = require('./core');

module.exports = core.generateApi([
	'taobaoke.caturl.get',
	'taobaoke.items.coupon.get',
	'taobaoke.items.detail.get',
	'taobaoke.items.get',
	'taobaoke.items.relate.get',
	'taobaoke.listurl.get',
	'taobaoke.report.get',
	'taobaoke.shops.get',
	'taobaoke.shops.relate.get',
	'taobaoke.widget.items.convert',
	'taobaoke.widget.shops.convert',
	'taobaoke.widget.url.convert'
]);
