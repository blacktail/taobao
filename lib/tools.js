var core = require('./core');

module.exports = core.generateApi([
	'appip.get',
	'feedback.add',
	'kfc.keyword.search',
	'time.get',
	'topats.result.get',
	'topats.task.delete',
	'topats.tasks.get'
]);

