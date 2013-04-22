var	core = require('./core');

module.exports = core.generateApi([
	'bill.accounts.get',
	'bill.bill.get',
	'bill.bills.get',
	'bill.book.bill.get',
	'bill.book.bills.get'
]);
