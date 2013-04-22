var	core = require('./core');

module.exports = core.generateApi([
	'rds.db.create',
	'rds.db.delete',
	'rds.db.get'
]);
