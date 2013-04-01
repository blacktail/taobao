var	core = require('./core');

module.exports = core.generateApi([
	{
		method:'logistics.order.cancel',
		namespace: 'alibaba'
	}, {
		method:'logistics.order.charge',
		namespace: 'alibaba'
	}, {
		method:'logistics.order.consign',
		namespace: 'alibaba'
	}, {
		method:'logistics.route.query',
		namespace: 'alibaba'
	},
	'areas.get',
	'delivery.template.add', 
	'delivery.template.delete',
	'delivery.template.get',
	'delivery.template.update',
	'delivery.templates.get',
	'logistics.address.add',
	'logistics.address.modify',
	'logistics.address.remove',
	'logistics.address.search',
	'logistics.companies.get',
	'logistics.consign.resend',
	'logistics.dummy.send',
	'logistics.offline.send',
	'logistics.online.cancel',
	'logistics.online.confirm',
	'logistics.online.send',
	'logistics.orders.detail.get',
	'logistics.orders.get',
	'logistics.orderstore.push',
	'logistics.ordertrace.push',
	'logistics.partners.get',
	'logistics.trace.search',
	'topats.delivery.send'
]);
