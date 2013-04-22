var	core = require('./core');

module.exports = core.generateApi([
	'sellercenter.role.add',
	'sellercenter.role.info.get',
	'sellercenter.rolemembers.get',
	'sellercenter.roles.get',
	'sellercenter.subuser.permissions.roles.get',
	'sellercenter.subusers.get',
	'sellercenter.user.permissions.get',
	'subuser.department.add',
	'subuser.department.delete',
	'subuser.department.update',
	'subuser.departments.get',
	'subuser.duty.add',
	'subuser.duty.delete',
	'subuser.duty.update',
	'subuser.dutys.get',
	'subuser.employee.add',
	'subuser.employee.update',
	'subuser.fullinfo.get',
	'subuser.info.update',
	'subusers.get'
]);
