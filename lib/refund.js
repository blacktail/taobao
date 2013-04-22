var	core = require('./core');

module.exports = core.generateApi([
	'refund.get',
	'refund.message.add',
	'refund.messages.get',
	'refund.refuse',
	'refunds.apply.get',
	'refunds.receive.get',
	'topats.refunds.receive.get'
]);
