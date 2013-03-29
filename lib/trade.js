var	core = require('./core');

module.exports = core.generateApi([
	'topats.trades.fullinfo.get',
	'topats.trades.sold.',
	'trade.amount.get',
	'trade.close',
	'trade.confirmfee.get',
	'trade.fullinfo.get',
	'trade.get',
	'trade.memo.add',
	'trade.memo.update',
	'trade.ordersku.update',
	'trade.postage.update',
	'trade.receivetime.delay',
	'trade.shippingaddress.update',
	'trade.snapshot.get',
	'trades.sold.get',
	'trades.sold.increment.get',
	'trades.sold.incrementv.get'
]);
