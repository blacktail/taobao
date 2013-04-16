var	core = require('./core');

module.exports = core.generateApi([
	'jipiao.policy.get',
	'jipiao.policy.process',
	'jipiao.policystatus.update',
	'trip.jipiao.agent.itinerary.send',
	'trip.jipiao.agent.order.confirm',
	'trip.jipiao.agent.order.fail',
	'trip.jipiao.agent.order.find',
	'trip.jipiao.agent.order.get ',
	'trip.jipiao.agent.order.hk',
	'trip.jipiao.agent.order.search',
	'trip.jipiao.agent.order.special.confirm',
	'trip.jipiao.agent.order.success'
]);
