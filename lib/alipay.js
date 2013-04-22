var	core = require('./core');

module.exports = core.generateApi([
	'ebpp.bill.add',
	'ebpp.bill.get',
	'ebpp.bill.pay',
	'ebpp.bill.payurl.get',
	'micropay.order.confirmpayurl.get',
	'micropay.order.direct.pay',
	'micropay.order.freeze',
	'micropay.order.freezepayurl.get',
	'micropay.order.get',
	'micropay.order.unfreeze',
	'point.budget.get',
	'point.order.add',
	'point.order.get',
	'system.oauth.token',
	'topats.user.accountreport.get',
	'user.account.freeze.get',
	'user.account.get',
	'user.contract.get',
	'user.get',
	'user.trade.search'
], 'alipay');
