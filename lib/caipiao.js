var	core = require('./core');

module.exports = core.generateApi([
	'caipiao.goods.info.get',
	'caipiao.goods.info.input',
	'caipiao.lottery.send',
	'caipiao.lottery.sendbynick',
	'caipiao.lotterytypes.get',
	'caipiao.present.items.get',
	'caipiao.present.stat.get',
	'caipiao.present.win.items.get',
	'caipiao.shop.info.input',
	'caipiao.signstatus.check'
]);
