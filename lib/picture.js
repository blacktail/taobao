var	core = require('./core');

module.exports = core.generateApi([
	'picture.category.add',
	'picture.category.get',
	'picture.category.update',
	'picture.delete',
	'picture.get',
	'picture.isreferenced.get',
	'picture.referenced.get',
	'picture.replace',
	'picture.update',
	'picture.upload',
	'picture.userinfo.get'
]);
