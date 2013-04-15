var	core = require('./core');

module.exports = core.generateApi([
	'comet.discardinfo.get',
	'increment.authorize.message.get',
	'increment.customer.permit',
	'increment.customer.stop',
	'increment.customers.get',
	'increment.items.get',
	'increment.refunds.get',
	'increment.trades.get',
	'topats.increment.messages.get'
]);
