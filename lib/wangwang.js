var	core = require('./core');

module.exports = core.generateApi([
	'wangwang.eservice.avgwaittime.get',
	'wangwang.eservice.chatpeers.get',
	'wangwang.eservice.evals.get',
	'wangwang.eservice.evaluation.get',
	'wangwang.eservice.groupmember.get',
	'wangwang.eservice.loginlogs.get',
	'wangwang.eservice.noreplynum.get',
	'wangwang.eservice.onlinetime.get',
	'wangwang.eservice.receivenum.get',
	'wangwang.eservice.streamweigths.get'
]);
