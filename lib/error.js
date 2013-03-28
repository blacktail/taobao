// define api error code, code start from 10000
module.exports = {
	NETERROR: {
		code: 10000,
		msg: 'network error'
	},
	PARSEERROR: {
		code: 10001,
		msg: 'parse error'
	},
	METHODNOTIMPL: {
		code: 10002,
		msg: 'method is not implemented'
	},
	ARGINVALID: {
		code: 10003,
		msg: 'arguments call api method is invalid'
	}
};
